let express = require('express');
let app = express();
let path = require('path');
let fs = require('fs');
const compression = require('compression');

let indexLocation = path.join(__dirname + '/NameAllPokémonQuiz.html');
let icon = path.join(__dirname + '/favicon.ico');
let jsLocation = path.join(__dirname + '/front.js');
let encodedImgs = path.join(__dirname + '/encoded.js');
let spritesFolder = path.join(__dirname + '/sprites');
let silhouettesFolder = path.join(__dirname + '/silhouettes');
let cssLocation = path.join(__dirname + '/style.css');
let soundFolder = path.join(__dirname + '/sound-effects');
let imageFolder = path.join(__dirname + '/images');
app.get('/', function(req , res){
    res.sendFile(indexLocation);
});

app.get('/favicon.ico', function(req , res){
    res.sendFile(icon);
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
app.get('/encoded.js', function(req , res){
    res.sendFile(encodedImgs);
});
app.get('/style.css', function(req , res){
    res.sendFile(cssLocation);
});
app.use(compression());
app.use('/sound-effects', express.static(soundFolder));
app.use('/images', express.static(imageFolder));

app.use('/sprites', express.static(spritesFolder));
app.use('/silhouettes', express.static(silhouettesFolder));
const PORT = process.env.PORT || 3000;
app.listen(PORT);



console.log('Server started!!.');



