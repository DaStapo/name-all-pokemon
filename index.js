let express = require('express');
let app = express();
let path = require('path');
let fs = require('fs');
const compression = require('compression');
let bodyParser = require('body-parser')
let jsonParser = bodyParser.json();

let indexLocation = path.join(__dirname + '/NameAllPokémonQuiz.html');
let icon = path.join(__dirname + '/favicon.ico');
let jsLocation = path.join(__dirname + '/front.js');
let encodedImgs = path.join(__dirname + '/encoded.js');
let spritesFolder = path.join(__dirname + '/sprites');
let shinyFolder = path.join(__dirname + '/shiny');
let silhouettesFolder = path.join(__dirname + '/silhouettes');
let cssLocation = path.join(__dirname + '/style.css');
let soundFolder = path.join(__dirname + '/sound-effects');
let imageFolder = path.join(__dirname + '/images');

let serverStart = new Date();
let loadCount = 0;
let namedCount = 0;
let pokemonDict = JSON.parse(fs.readFileSync('namelogs.json'));
let genDict = JSON.parse(fs.readFileSync('genlogs.json'));

let lastTimeSaved = 0;
function saveLogs(){
	if(Date.now() - lastTimeSaved > 2000){
		fs.writeFile('namelogs.json', JSON.stringify(pokemonDict), (err) => {
			if (err){
				console.log('Saving log failed.');
			}else{
				lastTimeSaved = Date.now();
			}			
		});
		
		fs.writeFile('genlogs.json', JSON.stringify(genDict), (err) => {
			if (err){
				console.log('Saving log failed.');
			}else{
				lastTimeSaved = Date.now();
			}			
		});
	}
}

app.get('/', function(req , res){
	loadCount++;
    res.redirect('http://pkmnquiz.com');
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

app.get('/namelogs', function(req , res){
	res.send(JSON.stringify(pokemonDict));
});
app.get('/genlogs', function(req , res){
	res.send(JSON.stringify(genDict));
});

app.get('/savelogs', function(req , res){
	saveLogs();
	res.send();
});

app.post('/named',jsonParser, function(req, res){
	let pokemon = req.body.name
	console.log(pokemon);
	if(!(pokemon in pokemonDict)){
		pokemonDict[pokemon] = 0;
	}
	pokemonDict[pokemon]++;
	namedCount++;
	saveLogs();
	res.status(200).end();
});

app.post('/gen',jsonParser, function(req, res){
	let gen = req.body.gen
	console.log(gen + ' started');
	if(!(gen in genDict)){
		genDict[gen] = 0;
	}
	genDict[gen]++;
	res.status(200).end();
});

setInterval(function(){
	let hourDiff = (Date.now()-serverStart)/(1000*60*60);
	console.log('Stats since ' + serverStart.toLocaleString() + ':');
	console.log('Site load count:' + loadCount);
	console.log('Pokemon named count:' + namedCount);
	console.log(Math.round(loadCount/hourDiff) + ' site loads per hour');
	console.log(Math.round(namedCount/hourDiff) + ' pokemon named per hour');
	
},30000)

app.use(compression());
app.use('/sound-effects', express.static(soundFolder));
app.use('/images', express.static(imageFolder));

app.use('/sprites', express.static(spritesFolder));
app.use('/shiny', express.static(shinyFolder));
app.use('/silhouettes', express.static(silhouettesFolder));
const PORT = process.env.PORT || 3000;
app.listen(PORT);

console.log('Server started!!.');





