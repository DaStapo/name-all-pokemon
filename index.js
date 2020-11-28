let express = require('express');
let app = express();
let path = require('path');
let fs = require('fs');

let indexLocation = path.join(__dirname + '/NEAQ.html');
let jsLocation = path.join(__dirname + '/front.js');
let spritesFolder = path.join(__dirname + '/sprites');
let silhouettesFolder = path.join(__dirname + '/silhouettes');

app.get('/', function(req , res){
	console.log(indexLocation);
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

app.use('/sprites', express.static(spritesFolder));
app.use('/silhouettes', express.static(silhouettesFolder));

app.listen(80);

console.log('Server started!.');

