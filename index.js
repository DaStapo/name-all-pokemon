let express = require('express');
let app = express();
let path = require('path');
let fs = require('fs');

let indexLocation = path.join(__dirname + '/NEAQ.html');
let jsLocation = path.join(__dirname + '/front.js');
let spritesFolder = path.join(__dirname + '/sprites');
let silhouettesFolder = path.join(__dirname + '/silhouettes');
let cssLocation = path.join(__dirname + '/style.css');
app.get('/', function(req , res){
    res.sendFile(indexLocation);
});

app.get('/names', function(req , res){
    fs.readdir(spritesFolder, function (err, files) {
        if (err) {
            console.log('Unable to load directory: ' + err);
        }
        res.send(files);
    });
});

app.get('/front.js', function(req , res){
    res.sendFile(jsLocation);
});

app.get('/style.css', function(req , res){
    res.sendFile(cssLocation);
});

app.use('/sprites', express.static(spritesFolder));
app.use('/silhouettes', express.static(silhouettesFolder));
const PORT = process.env.PORT || 3000;
app.listen(PORT);



console.log('Server started!!.');



