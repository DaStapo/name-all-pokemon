const express = require('express');
const compression = require('compression');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises; // Note the addition of .promises
const util = require('util');
const { fileURLToPath } = require('url');
const http = require('http'); // You will need to require http module
const readFile = util.promisify(fs.readFile);

const app = express();
const server = http.createServer(app); // Create an HTTP server using your Express app

const port = process.env.PORT || 3000;

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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
let errorPage = path.join(__dirname + '/maintenance.html');

app.use('/js', express.static('bundles'));
app.use('/images', express.static('public/images'));
app.use('/Data-Icons', express.static('public/Data-Icons'));
app.use('/images_medium', express.static('public/images_medium'));
app.use('/cacheable', express.static('public/cacheable'));
app.set('view engine', 'ejs');


function log(...messages) {
    const logMessage = `${new Date()}: ${messages.join(' ')}\n`;
    console.log(logMessage);

    fs.appendFile('app.log', logMessage, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
    });
}


let writeQueue = Promise.resolve();

app.post('/ko-fi-log', async (req, res) => {
    try{
        const data = JSON.parse(req.body.data);
        
        fs.writeFile('kofilog.txt', JSON.stringify(data), { flag: "a+" }, (err) => {
            if (err) {
            }
        });
        if (data["verification_token"] === "2817015b-a667-4f32-8028-2196b716bcc7"){
            const fromName = data["from_name"];
            const amount = parseFloat(data["amount"]);
        
            writeQueue = writeQueue
                .then(async () => {
                    try {
                        const fileData = await fsPromises.readFile('donations.json', 'utf-8');
                        let donations = JSON.parse(fileData);
                        donations.push([fromName, amount]);
                        donations.sort((a, b) => b[1] - a[1]);
                        await fsPromises.writeFile('donations.json', JSON.stringify(donations, null, 2));
                    } catch (error) {
                        console.error('Error:', error);
                    }
                });
        }
    }catch(e){

    }

    res.status(200).send('Webhook data received successfully');
});


app.get('/donors', async (req, res) => {
    try {
        const fileData = await fsPromises.readFile('donations.json', 'utf-8');
        const donations = JSON.parse(fileData);
        const donorNames = donations.map(donation => donation[0]);
        res.json(donorNames);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});


async function isMaintenance() {
    try {
        const data = await readFile(maintenanceStatusLocation, 'utf8');
        const jsonData = JSON.parse(data);

        if (jsonData.enabled) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        log(error)
        return true;
    }

}

async function isMultiplayerEnabled() {
    try {
        const data = await readFile(maintenanceStatusLocation, 'utf8');
        const jsonData = JSON.parse(data);

        if (jsonData.multiplayerOn) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        log(error)
        return false;
    }

}




app.get('/', async (req, res) => {
    try {
        if (await isMaintenance()) {
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
        if (await isMaintenance()) {
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
        log(error);
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
                log('logging misspelling failed.', misspelling);
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

isMaintenance()
app.get('/multiplayerEnabled', async (req, res) => {
    try {
        let isEnabled = await isMultiplayerEnabled()
        res.json({ "result": isEnabled });
    } catch (error) {
        res.json({ "result": false })
        log('multiplayer ', error)
    }
});

// start the server
server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    console.log(`Logging outputs or errors into app.log`)
    log(`Server is running on port ${port}`);
});


if (false) {
    let startMultiplayerServer = require('./multiplayer')
    startMultiplayerServer();
}