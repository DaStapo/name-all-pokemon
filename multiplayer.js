
let startMultiplayerServer = function (){

    const express = require('express');
    const http = require('http');
    const socketIo = require('socket.io');
    const cors = require('cors');
    const compression = require('compression');
    const fs = require('fs');
    const app = express();
    
    const corsOptions = {
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    };
    app.use(express.json());

    app.use(cors(corsOptions));
    app.options('*', cors(corsOptions));

    app.use(compression());
    
    const server = http.createServer(app);
    const io = socketIo(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST'],
            credentials: true,
        },
    });
    
    function log(...messages) {
        const logMessage = `${new Date()}: ${messages.join(' ')}\n`;
        console.log(logMessage);
    
        fs.appendFile('app.log', logMessage, (err) => {
            if (err) {
                console.error('Error writing to log file:', err);
            }
        });
    }
    
    
    function validateAndSanitizeString(username) {
        const allowedCharacters = /^[a-zA-Z0-9_\u4e00-\u9fa5\uac00-\ud7af\u3040-\u30ff]+$/;
        if (!allowedCharacters.test(username)) {
            username = username.replace(/[^a-zA-Z0-9_\u4e00-\u9fa5\uac00-\ud7af\u3040-\u30ff]/g, '_');
        }
    
    
        return username;
    }
    
    function shortenString(str, maxLength) {
        return str.length <= maxLength ? str : str.slice(0, maxLength);
    }
    
    function generateRandomString(length) {
        const characters = '0123456789ABCDEFGHJKLMNPQRSTUVWXY';
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
    
    
    //todo exception handling
    
    // Define a function to handle socket connections
    io.on('connection', (socket) => {
    
        // Handle room creation
        socket.on('host', (data) => {
            try {
                let { username, state } = data
                username = shortenString(username, 25);
                username = validateAndSanitizeString(username)
    
                const roomId = generateUniqueRandomString(existingRooms, 6);
                existingRooms[roomId] = {}
                existingRooms[roomId]["usernames"] = []
                existingRooms[roomId]["state"] = state
                existingRooms[roomId]["namedTime"] = Date.now();
    
                socket.username = username
                socket.isHost = true;
                socket.roomId = roomId
    
                existingRooms[roomId]["usernames"].push(username)
                existingRooms[roomId]["host"] = socket
                socket.join(roomId);
                socket.emit('roomCreated', roomId);
            } catch (error) {
                log('error hosting', error)
            }
    
        });
    
        // Handle joining a room
        socket.on('joinRoom', (data) => {
            try {
                let { roomId, username } = data;
    
                if (roomId in existingRooms) {
    
                    username = shortenString(username, 25);
                    username = validateAndSanitizeString(username)
                    if (existingRooms[roomId]["usernames"].includes(username)) {
                        username = username + (countInstances(existingRooms[roomId]["usernames"]) + 1).toString()
                    }
    
                    socket.username = username
                    socket.isHost = false;
    
                    existingRooms[roomId]["usernames"].push(username)
                    socket.roomId = roomId;
                    socket.join(roomId);
                    socket.broadcast.to(roomId).emit('userJoined', socket.username);
                    socket.emit('stateChange', { "state": existingRooms[roomId]["state"] })
                } else {
                    socket.emit("noSuchRoom", {})
                }
            } catch (error) {
                log('join room error', error)
            }
    
        });
    
        socket.on('named', (data) => {
            try {
                const pokemonId = validateAndSanitizeString(data["id"]);
                let collision = false;
                if (existingRooms[socket.roomId]["state"]["named"].includes(pokemonId)) {
                    collision = true;
                }
                existingRooms[socket.roomId]["state"]["named"].push(pokemonId)
                if (!(socket.username in existingRooms[socket.roomId]["state"]["users"])) {
                    existingRooms[socket.roomId]["state"]["users"][socket.username] = 0
                }
                existingRooms[socket.roomId]["state"]["users"][socket.username] += 1
    
                socket.broadcast.to(socket.roomId).emit('named', { "username": socket.username, "id": pokemonId });
                if (collision) {
                    socket.broadcast.to(socket.roomId).emit('scores', existingRooms[socket.roomId]["state"]["users"]);
                }
                existingRooms[socket.roomId]["namedTime"] = Date.now();
            } catch (error) {
                log('named error', error)
            }
    
        });
        socket.on('reset', (data) => {
            try {
                socket.broadcast.to(socket.roomId).emit('reset', {});
                existingRooms[socket.roomId]["state"] = data["state"];
    
            } catch (error) {
                log('reset error', error)
            }
        });
    
        // Handle user actions
        socket.on('stateChange', (data) => {
            try {
                if (socket.isHost) {
                    for (let key in data) {
                        if (key === "silhouettes") {
                            existingRooms[socket.roomId]["state"]["silhouettes"] = true;
                        } else if (key === "paused") {
                            existingRooms[socket.roomId]["state"]["paused"] = data["paused"];
                        } else if (key === "state") {
                            existingRooms[socket.roomId]["state"] = data["state"];
                        } else if (key === "timer") {
                            existingRooms[socket.roomId]["state"]["timer"] = data["timer"]
                        }
                    }
                    socket.broadcast.to(socket.roomId).emit('stateChange', data);
                }
            } catch (error) {
                log('stateChange', error)
            }
        });
    
    
        // Handle disconnections
        socket.on('disconnect', () => {
            try {
                if (socket.isHost) {
                    socket.broadcast.to(socket.roomId).emit('end', {});
                    delete existingRooms[socket.roomId]
                } else {
                    socket.broadcast.to(socket.roomId).emit('userLeft', socket.username);
                }
            } catch (error) {
                log('at disconnect', error)
            }
    
        });
    });
    
    app.get('/nrRooms', async (req, res) => {
        let count = 0
        for (let key in existingRooms) {
            count += 1
        }
    
        res.json({ "result": count });
    });

    app.get('/online', async (req, res) => {
        res.json({});
    });
    
    app.post('/roomExists', async (req, res) => {
        try {
            let roomId = req.body.roomId
            res.json({ "success": roomId in existingRooms })
        } catch (err) {
            log(err)
            res.json({ "success": false })
        }
    });
    
    setInterval(() => {
        try {
            let deleteAfter = 1000 * 60 * 60 * 36
            let roomsToRemove = []
            for (let roomId in existingRooms) {
                if (Date.now() - existingRooms[roomId]["namedTime"] > deleteAfter) {
                    roomsToRemove.push(roomId)
                }
            }
    
            for (let i = 0; i < roomsToRemove.length; i++) {
                delete existingRooms[roomId]
            }
        } catch (error) {
            log('err emptying rooms', error)
        }
    }, 1000 * 60 * 60);
    
    
    server.listen(3001, () => {
        console.log('WebSocket server is running on port 3001');
    });
    
}
module.exports = startMultiplayerServer;
