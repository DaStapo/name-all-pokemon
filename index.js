const express = require('express');
const compression = require('compression');
const path = require('path');
const fs = require('fs');
const util = require('util');
const { fileURLToPath } = require('url');
const http = require('http'); // You will need to require http module

const readFile = util.promisify(fs.readFile);

const app = express();
const server = http.createServer(app); // Create an HTTP server using your Express app
const io = require('socket.io')(server); // Integrate Socket.io with the server

const port = process.env.PORT || 3000;

app.use(compression());
app.use(express.json());
app.use(express.static('public'));

app.use('/js', express.static('js'));
let indexLocation = path.join(__dirname + '/NameAllPokémonQuiz.html');
let icon = path.join(__dirname + '/favicon.ico');
let twitchLocation = path.join(__dirname + '/tmi.min.js');
let levenshteinLocation = path.join(__dirname + '/levenshtein.js');
let spritesFolder = path.join(__dirname + '/sprites');
let shinyFolder = path.join(__dirname + '/shiny');
let silhouettesFolder = path.join(__dirname + '/silhouettes');
let cssLocation = path.join(__dirname + '/style.css');
let soundFolder = path.join(__dirname + '/sound-effects');
let imageFolder = path.join(__dirname + '/images');
let artistsLocation = path.join(__dirname + '/artists.json');
let maintenanceStatusLocation = path.join(__dirname + '/maintenance.json');
let maintenancePage = path.join(__dirname + '/maintenance.html');
let errorPage = path.join(__dirname + '/error.html');

app.use('/js', express.static('bundles'));
app.use('/images', express.static('public/images'));
app.use('/Data-Icons', express.static('public/Data-Icons'));
app.use('/images_medium', express.static('public/images_medium'));
app.use('/cacheable', express.static('public/cacheable'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    try {
        const data = await readFile(maintenanceStatusLocation, 'utf8');
        const jsonData = JSON.parse(data);

        if (jsonData.enabled) {
            res.sendFile(maintenancePage);
        } else {
            res.sendFile(indexLocation);
        }
    } catch (error) {
        console.error(error);
        res.status(500).sendFile(errorPage);
    }
});

app.get('/join/:roomId', async (req, res) => {
    try {
        const data = await readFile(maintenanceStatusLocation, 'utf8');
        const jsonData = JSON.parse(data);

        if (jsonData.enabled) {
            res.sendFile(maintenancePage);
        } else {
            res.sendFile(indexLocation);
        }
    } catch (error) {
        console.error(error);
        res.status(500).sendFile(errorPage);
    }
});



app.get('/admin', async (req, res) => {
    res.sendFile(indexLocation);
});

app.get('/favicon.ico', async (req, res) => {
    res.sendFile(icon);
});

app.get('/tmi.min.js', async (req, res) => {
    res.sendFile(twitchLocation);
});
app.get('/levenshtein.js', async (req, res) => {
    res.sendFile(levenshteinLocation);
});
app.get('/style.css', async (req, res) => {
    res.sendFile(cssLocation);
});

app.get('/artists', async (req, res) => {
    res.sendFile(artistsLocation);
});

let jsonDataFiles = ["pokemon", "suffix_namings", "translations", "encoded_images", "namings", "sprite_cycles"]

let pkmnDataCache = null;

app.get('/pkmnData.json', async (req, res) => {
    try {
        const jsonData = {};

        // Use Promise.all to read all files asynchronously
        await Promise.all(jsonDataFiles.map(async (fileName) => {
            const filePath = path.join(__dirname, 'pkmn_data', `${fileName}.json`);
            const fileData = await readFile(filePath, 'utf8');
            jsonData[fileName] = JSON.parse(fileData);
        }));

        pkmnDataCache = jsonData;
        res.json(jsonData);
    } catch (error) {
        console.log(error);
        try {
            res.json(pkmnDataCache);
        } catch (error2) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
});

app.post('/misspelling', async (req, res) => {
    try {
        let misspelling = req.body.misspelling;
        let suggestion = req.body.suggestion;
        res.status(200).end();

        let logMsg = misspelling + ":" + suggestion + "\n";

        fs.writeFile('misspellings.txt', logMsg, { flag: "a+" }, (err) => {
            if (err) {
                console.log('logging misspelling failed.', misspelling);
            }
        });
    } catch (err) {

    }
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.use('/sound-effects', express.static(soundFolder));
app.use('/images', express.static(imageFolder));

app.use('/sprites', express.static(spritesFolder));
app.use('/shiny', express.static(shinyFolder));
app.use('/silhouettes', express.static(silhouettesFolder));







function generateRandomString(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomString = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}
 
function generateUniqueRandomString(existingStrings, length) {
  let randomString;
  do {
    randomString = generateRandomString(length);
  } while (randomString in existingStrings);

  return randomString;
}

// Example usage
const existingRooms = {}; // Store existing strings to ensure uniqueness

function countInstances(list, targetString) {
    return list.reduce((count, element) => (element === targetString ? count + 1 : count), 0);
}


app.post('/roomExists', async (req, res) => {
    try {
        let roomId = req.roomId
        res.send({"success":roomId in existingRooms})
    } catch (err) {
        res.send({"success":false})
    }
});



//todo exception handling

// Define a function to handle socket connections
io.on('connection', (socket) => {

    // Handle room creation
    socket.on('host', (data) => {

        const {username, state} = data

        const roomId = generateUniqueRandomString(existingRooms, 5);
        existingRooms[roomId] = {}
        existingRooms[roomId]["usernames"] = []
        existingRooms[roomId]["state"] = state


        socket.username = username
        socket.isHost = true;
        socket.roomId = roomId

        existingRooms[roomId]["usernames"].push(username)
        existingRooms[roomId]["host"] = socket
        socket.join(roomId);
        socket.emit('roomCreated', roomId);

    });
    
    // Handle joining a room
    socket.on('joinRoom', (data) => {

        let { roomId, username } = data;

        if (roomId in existingRooms){

            if (existingRooms[roomId]["usernames"].includes(username)){
                username = username +  (countInstances(existingRooms[roomId]["usernames"]) + 1 ).toString() 
            }

            socket.username = username
            socket.isHost = false;
    
            existingRooms[roomId]["usernames"].push(username)
            socket.roomId = roomId;
            socket.join(roomId);
            socket.broadcast.to(roomId).emit('userJoined', socket.username);
            socket.emit('stateChange', {"state":existingRooms[roomId]["state"]}) 
        }else{
            socket.emit("noSuchRoom", {})
        }
        
    });

    socket.on('named', (data) => {

        const pokemonId = data["id"];
        existingRooms[socket.roomId]["state"]["named"].push(pokemonId)
        if (!(socket.username in existingRooms[socket.roomId]["state"]["users"])){
            existingRooms[socket.roomId]["state"]["users"][socket.username] = 0
        }
        existingRooms[socket.roomId]["state"]["users"][socket.username]+=1

        socket.broadcast.to(socket.roomId).emit('named', { "username": socket.username, "id":pokemonId });
    });
    socket.on('reset', (data) => {
        socket.broadcast.to(socket.roomId).emit('reset', {});
    });
    
    // Handle user actions
    socket.on('stateChange', (data) => {
        if (socket.isHost){
            for (let key in data){
                if( key === "silhouettes"){
                    existingRooms[socket.roomId]["state"]["silhouettes"] = true;
                }else if(key === "paused"){
                    existingRooms[socket.roomId]["state"]["paused"] = data["paused"];
                }else if (key === "state"){
                    existingRooms[socket.roomId]["state"] = data["state"];
                }else if (key === "timer"){
                    existingRooms[socket.roomId]["state"]["timer"] = data["timer"]
                }
            }
            socket.broadcast.to(socket.roomId).emit('stateChange', data);
        }
    });

    // Handle disconnections
    socket.on('disconnect', () => {
        if (socket.isHost){
            socket.broadcast.to(socket.roomId).emit('end', {});
            delete existingRooms[socket.roomId]
        }else{
            socket.broadcast.to(socket.roomId).emit('userLeft', socket.username);
        }

    });
});


// start the server
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
