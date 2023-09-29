const express = require('express');
const compression = require('compression');
const path = require('path');
const fs = require('fs');
const util = require('util');
const { fileURLToPath } = require('url');

const readFile = util.promisify(fs.readFile);

const app = express();
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

// start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
