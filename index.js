
import express from 'express';
import compression from 'compression';
import {dirname} from 'path'
import path from 'path'
import fs from 'fs';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;


app.use(compression()); 
app.use(express.json()); 
app.use(express.static('public'));
//TODO use webpack instead
app.use('/js', express.static('js'));
let indexLocation = path.join(__dirname + '/NameAllPokémonQuiz.html');
let icon = path.join(__dirname + '/favicon.ico');
//let jsLocation = path.join(__dirname + '/front.js');
let twitchLocation = path.join(__dirname + '/tmi.min.js');
let levenshteinLocation = path.join(__dirname + '/levenshtein.js');
let spritesFolder = path.join(__dirname + '/sprites');
let shinyFolder = path.join(__dirname + '/shiny');
let silhouettesFolder = path.join(__dirname + '/silhouettes');
let cssLocation = path.join(__dirname + '/style.css');
let soundFolder = path.join(__dirname + '/sound-effects');
let imageFolder = path.join(__dirname + '/images');
let artistsLocation = path.join(__dirname + '/artists.json');

app.use('/js', express.static('bundles'));
app.use('/images', express.static('public/images'));
app.use('/images', express.static('public/images'));
app.use('/Data-Icons', express.static('public/Data-Icons'));
app.use('/images_medium', express.static('public/images_medium'));
app.use('/cacheable', express.static('public/cacheable'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    res.sendFile(indexLocation);
});
app.get('/favicon.ico', async (req, res) => {
    res.sendFile(icon);
});

/*
app.get('js/front.js', async(req , res) => {
    res.sendFile(jsLocation);
});*/
app.get('/tmi.min.js', async(req , res) => {
    res.sendFile(twitchLocation);
});
app.get('/levenshtein.js', async(req , res) => {
    res.sendFile(levenshteinLocation);
});
app.get('/style.css', async(req , res) => {
    res.sendFile(cssLocation);
});

app.get('/artists', async(req , res) => {
    res.sendFile(artistsLocation);
});

let jsonDataFiles = ["pokemon", "suffix_namings", "translations", "encoded_images", "namings", "sprite_cycles"]
app.get('/pkmnData.json', async (req, res) => {
    try {
        const jsonData = {};
        for (const fileName of jsonDataFiles) {
            const filePath = path.join(__dirname, 'pkmn_data', `${fileName}.json`);
            const fileData = fs.readFileSync(filePath, 'utf8');
            jsonData[fileName] = JSON.parse(fileData);
        }
        res.json(jsonData);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/misspelling', async(req, res) => {
	try{
		let misspelling = req.body.misspelling
		let suggestion = req.body.suggestion
		res.status(200).end();
		
		let logMsg = misspelling + ":" + suggestion + "\n";
		
		fs.writeFile('misspellings.txt',logMsg ,{flag:"a+"}, (err) => {
			if (err){
				console.log('logging misspelling failed.', misspelling);
			}	
		});
	}catch(err){

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

// start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
