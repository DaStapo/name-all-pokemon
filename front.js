let pokemonList = ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise', 'Caterpie', 'Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Pidgeotto', 'Pidgeot', 'Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Arbok', 'Pikachu', 'Raichu', 'Sandshrew', 'Sandslash', 'Nidoranf', 'Nidorina', 'Nidoqueen', 'Nidoranm‚', 'Nidorino', 'Nidoking', 'Clefairy', 'Clefable', 'Vulpix', 'Ninetales', 'Jigglypuff', 'Wigglytuff', 'Zubat', 'Golbat', 'Oddish', 'Gloom', 'Vileplume', 'Paras', 'Parasect', 'Venonat', 'Venomoth', 'Diglett', 'Dugtrio', 'Meowth', 'Persian', 'Psyduck', 'Golduck', 'Mankey', 'Primeape', 'Growlithe', 'Arcanine', 'Poliwag', 'Poliwhirl', 'Poliwrath', 'Abra', 'Kadabra', 'Alakazam', 'Machop', 'Machoke', 'Machamp', 'Bellsprout', 'Weepinbell', 'Victreebel', 'Tentacool', 'Tentacruel', 'Geodude', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowpoke', 'Slowbro', 'Magnemite', 'Magneton', "Farfetch'd", 'Doduo', 'Dodrio', 'Seel', 'Dewgong', 'Grimer', 'Muk', 'Shellder', 'Cloyster', 'Gastly', 'Haunter', 'Gengar', 'Onix', 'Drowzee', 'Hypno', 'Krabby', 'Kingler', 'Voltorb', 'Electrode', 'Exeggcute', 'Exeggutor', 'Cubone', 'Marowak', 'Hitmonlee', 'Hitmonchan', 'Lickitung', 'Koffing', 'Weezing', 'Rhyhorn', 'Rhydon', 'Chansey', 'Tangela', 'Kangaskhan', 'Horsea', 'Seadra', 'Goldeen', 'Seaking', 'Staryu', 'Starmie', 'Mr. Mime', 'Scyther', 'Jynx', 'Electabuzz', 'Magmar', 'Pinsir', 'Tauros', 'Magikarp', 'Gyarados', 'Lapras', 'Ditto', 'Eevee', 'Vaporeon', 'Jolteon', 'Flareon', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Aerodactyl', 'Snorlax', 'Articuno', 'Zapdos', 'Moltres', 'Dratini', 'Dragonair', 'Dragonite', 'Mewtwo', 'Mew', 'Chikorita', 'Bayleef', 'Meganium', 'Cyndaquil', 'Quilava', 'Typhlosion', 'Totodile', 'Croconaw', 'Feraligatr', 'Sentret', 'Furret', 'Hoothoot', 'Noctowl', 'Ledyba', 'Ledian', 'Spinarak', 'Ariados', 'Crobat', 'Chinchou', 'Lanturn', 'Pichu', 'Cleffa', 'Igglybuff', 'Togepi', 'Togetic', 'Natu', 'Xatu', 'Mareep', 'Flaaffy', 'Ampharos', 'Bellossom', 'Marill', 'Azumarill', 'Sudowoodo', 'Politoed', 'Hoppip', 'Skiploom', 'Jumpluff', 'Aipom', 'Sunkern', 'Sunflora', 'Yanma', 'Wooper', 'Quagsire', 'Espeon', 'Umbreon', 'Murkrow', 'Slowking', 'Misdreavus', 'Unown', 'Wobbuffet', 'Girafarig', 'Pineco', 'Forretress', 'Dunsparce', 'Gligar', 'Steelix', 'Snubbull', 'Granbull', 'Qwilfish', 'Scizor', 'Shuckle', 'Heracross', 'Sneasel', 'Teddiursa', 'Ursaring', 'Slugma', 'Magcargo', 'Swinub', 'Piloswine', 'Corsola', 'Remoraid', 'Octillery', 'Delibird', 'Mantine', 'Skarmory', 'Houndour', 'Houndoom', 'Kingdra', 'Phanpy', 'Donphan', 'Porygon2', 'Stantler', 'Smeargle', 'Tyrogue', 'Hitmontop', 'Smoochum', 'Elekid', 'Magby', 'Miltank', 'Blissey', 'Raikou', 'Entei', 'Suicune', 'Larvitar', 'Pupitar', 'Tyranitar', 'Lugia', 'Ho-Oh', 'Celebi', 'Treecko', 'Grovyle', 'Sceptile', 'Torchic', 'Combusken', 'Blaziken', 'Mudkip', 'Marshtomp', 'Swampert', 'Poochyena', 'Mightyena', 'Zigzagoon', 'Linoone', 'Wurmple', 'Silcoon', 'Beautifly', 'Cascoon', 'Dustox', 'Lotad', 'Lombre', 'Ludicolo', 'Seedot', 'Nuzleaf', 'Shiftry', 'Taillow', 'Swellow', 'Wingull', 'Pelipper', 'Ralts', 'Kirlia', 'Gardevoir', 'Surskit', 'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking', 'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud', 'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty', 'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham', 'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise', 'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer', 'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig', 'Spinda', 'Trapinch', 'Vibrava', 'Flygon', 'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper', 'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt', 'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo', 'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette', 'Duskull', 'Dusclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut', 'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Clamperl', 'Huntail', 'Gorebyss', 'Relicanth', 'Luvdisc', 'Bagon', 'Shelgon', 'Salamence', 'Beldum', 'Metang', 'Metagross', 'Regirock', 'Regice', 'Registeel', 'Latias', 'Latios', 'Kyogre', 'Groudon', 'Rayquaza', 'Jirachi', 'Deoxys', 'Turtwig', 'Grotle', 'Torterra', 'Chimchar', 'Monferno', 'Infernape', 'Piplup', 'Prinplup', 'Empoleon', 'Starly', 'Staravia', 'Staraptor', 'Bidoof', 'Bibarel', 'Kricketot', 'Kricketune', 'Shinx', 'Luxio', 'Luxray', 'Budew', 'Roserade', 'Cranidos', 'Rampardos', 'Shieldon', 'Bastiodon', 'Burmy', 'Wormadam', 'Mothim', 'Combee', 'Vespiquen', 'Pachirisu', 'Buizel', 'Floatzel', 'Cherubi', 'Cherrim', 'Shellos', 'Gastrodon', 'Ambipom', 'Drifloon', 'Drifblim', 'Buneary', 'Lopunny', 'Mismagius', 'Honchkrow', 'Glameow', 'Purugly', 'Chingling', 'Stunky', 'Skuntank', 'Bronzor', 'Bronzong', 'Bonsly', 'Mime Jr.', 'Happiny', 'Chatot', 'Spiritomb', 'Gible', 'Gabite', 'Garchomp', 'Munchlax', 'Riolu', 'Lucario', 'Hippopotas', 'Hippowdon', 'Skorupi', 'Drapion', 'Croagunk', 'Toxicroak', 'Carnivine', 'Finneon', 'Lumineon', 'Mantyke', 'Snover', 'Abomasnow', 'Weavile', 'Magnezone', 'Lickilicky', 'Rhyperior', 'Tangrowth', 'Electivire', 'Magmortar', 'Togekiss', 'Yanmega', 'Leafeon', 'Glaceon', 'Gliscor', 'Mamoswine', 'Porygon-Z', 'Gallade', 'Probopass', 'Dusknoir', 'Froslass', 'Rotom', 'Uxie', 'Mesprit', 'Azelf', 'Dialga', 'Palkia', 'Heatran', 'Regigigas', 'Giratina', 'Cresselia', 'Phione', 'Manaphy', 'Darkrai', 'Shaymin', 'Arceus', 'Victini', 'Snivy', 'Servine', 'Serperior', 'Tepig', 'Pignite', 'Emboar', 'Oshawott', 'Dewott', 'Samurott', 'Patrat', 'Watchog', 'Lillipup', 'Herdier', 'Stoutland', 'Purrloin', 'Liepard', 'Pansage', 'Simisage', 'Pansear', 'Simisear', 'Panpour', 'Simipour', 'Munna', 'Musharna', 'Pidove', 'Tranquill', 'Unfezant', 'Blitzle', 'Zebstrika', 'Roggenrola', 'Boldore', 'Gigalith', 'Woobat', 'Swoobat', 'Drilbur', 'Excadrill', 'Audino', 'Timburr', 'Gurdurr', 'Conkeldurr', 'Tympole', 'Palpitoad', 'Seismitoad', 'Throh', 'Sawk', 'Sewaddle', 'Swadloon', 'Leavanny', 'Venipede', 'Whirlipede', 'Scolipede', 'Cottonee', 'Whimsicott', 'Petilil', 'Lilligant', 'Basculin', 'Sandile', 'Krokorok', 'Krookodile', 'Darumaka', 'Darmanitan', 'Maractus', 'Dwebble', 'Crustle', 'Scraggy', 'Scrafty', 'Sigilyph', 'Yamask', 'Cofagrigus', 'Tirtouga', 'Carracosta', 'Archen', 'Archeops', 'Trubbish', 'Garbodor', 'Zorua', 'Zoroark', 'Minccino', 'Cinccino', 'Gothita', 'Gothorita', 'Gothitelle', 'Solosis', 'Duosion', 'Reuniclus', 'Ducklett', 'Swanna', 'Vanillite', 'Vanillish', 'Vanilluxe', 'Deerling', 'Sawsbuck', 'Emolga', 'Karrablast', 'Escavalier', 'Foongus', 'Amoonguss', 'Frillish', 'Jellicent', 'Alomomola', 'Joltik', 'Galvantula', 'Ferroseed', 'Ferrothorn', 'Klink', 'Klang', 'Klinklang', 'Tynamo', 'Eelektrik', 'Eelektross', 'Elgyem', 'Beheeyem', 'Litwick', 'Lampent', 'Chandelure', 'Axew', 'Fraxure', 'Haxorus', 'Cubchoo', 'Beartic', 'Cryogonal', 'Shelmet', 'Accelgor', 'Stunfisk', 'Mienfoo', 'Mienshao', 'Druddigon', 'Golett', 'Golurk', 'Pawniard', 'Bisharp', 'Bouffalant', 'Rufflet', 'Braviary', 'Vullaby', 'Mandibuzz', 'Heatmor', 'Durant', 'Deino', 'Zweilous', 'Hydreigon', 'Larvesta', 'Volcarona', 'Cobalion', 'Terrakion', 'Virizion', 'Tornadus', 'Thundurus', 'Reshiram', 'Zekrom', 'Landorus', 'Kyurem', 'Keldeo', 'Meloetta', 'Genesect', 'Chespin', 'Quilladin', 'Chesnaught', 'Fennekin', 'Braixen', 'Delphox', 'Froakie', 'Frogadier', 'Greninja', 'Bunnelby', 'Diggersby', 'Fletchling', 'Fletchinder', 'Talonflame', 'Scatterbug', 'Spewpa', 'Vivillon', 'Litleo', 'Pyroar', 'Flabébé', 'Floette', 'Florges', 'Skiddo', 'Gogoat', 'Pancham', 'Pangoro', 'Furfrou', 'Espurr', 'Meowstic', 'Honedge', 'Doublade', 'Aegislash', 'Spritzee', 'Aromatisse', 'Swirlix', 'Slurpuff', 'Inkay', 'Malamar', 'Binacle', 'Barbaracle', 'Skrelp', 'Dragalge', 'Clauncher', 'Clawitzer', 'Helioptile', 'Heliolisk', 'Tyrunt', 'Tyrantrum', 'Amaura', 'Aurorus', 'Sylveon', 'Hawlucha', 'Dedenne', 'Carbink', 'Goomy', 'Sliggoo', 'Goodra', 'Klefki', 'Phantump', 'Trevenant', 'Pumpkaboo', 'Gourgeist', 'Bergmite', 'Avalugg', 'Noibat', 'Noivern', 'Xerneas', 'Yveltal', 'Zygarde', 'Diancie', 'Hoopa', 'Volcanion', 'Rowlet', 'Dartrix', 'Decidueye', 'Litten', 'Torracat', 'Incineroar', 'Popplio', 'Brionne', 'Primarina', 'Pikipek', 'Trumbeak', 'Toucannon', 'Yungoos', 'Gumshoos', 'Grubbin', 'Charjabug', 'Vikavolt', 'Crabrawler', 'Crabominable', 'Oricorio', 'Cutiefly', 'Ribombee', 'Rockruff', 'Lycanroc', 'Wishiwashi', 'Mareanie', 'Toxapex', 'Mudbray', 'Mudsdale', 'Dewpider', 'Araquanid', 'Fomantis', 'Lurantis', 'Morelull', 'Shiinotic', 'Salandit', 'Salazzle', 'Stufful', 'Bewear', 'Bounsweet', 'Steenee', 'Tsareena', 'Comfey', 'Oranguru', 'Passimian', 'Wimpod', 'Golisopod', 'Sandygast', 'Palossand', 'Pyukumuku', 'Type: Null', 'Silvally', 'Minior', 'Komala', 'Turtonator', 'Togedemaru', 'Mimikyu', 'Bruxish', 'Drampa', 'Dhelmise', 'Jangmo-o', 'Hakamo-o', 'Kommo-o', 'Tapu Koko', 'Tapu Lele', 'Tapu Bulu', 'Tapu Fini', 'Cosmog', 'Cosmoem', 'Solgaleo', 'Lunala', 'Nihilego', 'Buzzwole', 'Pheromosa', 'Xurkitree', 'Celesteela', 'Kartana', 'Guzzlord', 'Necrozma', 'Magearna', 'Marshadow', 'Poipole', 'Naganadel', 'Stakataka', 'Blacephalon', 'Zeraora', 'Meltan', 'Melmetal', 'Grookey', 'Thwackey', 'Rillaboom', 'Scorbunny', 'Raboot', 'Cinderace', 'Sobble', 'Drizzile', 'Inteleon', 'Skwovet', 'Greedent', 'Rookidee', 'Corvisquire', 'Corviknight', 'Blipbug', 'Dottler', 'Orbeetle', 'Nickit', 'Thievul', 'Gossifleur', 'Eldegoss', 'Wooloo', 'Dubwool', 'Chewtle', 'Drednaw', 'Yamper', 'Boltund', 'Rolycoly', 'Carkol', 'Coalossal', 'Applin', 'Flapple', 'Appletun', 'Silicobra', 'Sandaconda', 'Cramorant', 'Arrokuda', 'Barraskewda', 'Toxel', 'Toxtricity', 'Sizzlipede', 'Centiskorch', 'Clobbopus', 'Grapploct', 'Sinistea', 'Polteageist', 'Hatenna', 'Hattrem', 'Hatterene', 'Impidimp', 'Morgrem', 'Grimmsnarl', 'Obstagoon', 'Perrserker', 'Cursola', "Sirfetch'd", 'Mr. Rime', 'Runerigus', 'Milcery', 'Alcremie', 'Falinks', 'Pincurchin', 'Snom', 'Frosmoth', 'Stonjourner', 'Eiscue', 'Indeedee', 'Morpeko', 'Cufant', 'Copperajah', 'Dracozolt', 'Arctozolt', 'Dracovish', 'Arctovish', 'Duraludon', 'Dreepy', 'Drakloak', 'Dragapult', 'Zacian', 'Zamazenta', 'Eternatus', 'Kubfu', 'Urshifu', 'Zarude', 'Regieleki', 'Regidrago', 'Glastrier', 'Spectrier', 'Calyrex'];
let totalPokemonCount = pokemonList.length; 
let genLastPokemon = ['Mew','Celebi','Deoxys','Arceus','Genesect','Volcanion','Melmetal','Calyrex'];
let boxes = [];
let allGensButton = document.getElementById("all");
//if gen is enabled
let genFlags = [];
for(let i = 1; i<=genLastPokemon.length; i++){
    boxes.push(document.getElementById("pokemon-box-" + i));
    genFlags.push(false);
	document.getElementById("gen" + i).onclick = function (){
		let j = i-1;
		genFlags[j] = !genFlags[j];
		if(genFlags[j]){
			if(allGensEnabled){
				allGensButton.onclick();
			}
		}
		this.checked = genFlags[j];
		updateGenFilter();
	}
}

let spriteDictionary = {};
let silhouetteDictionary = {};
let unguessedDictionary = {};

let silhouetteArray = [];
let pokeballArray = [];

let loadedSpritesCount = 0;
let totalSpritesCount = 0;

function showSprite(name){
    spriteDictionary[name].style.display = "inline";
    unguessedDictionary[name].style.display = "none";
}

function hideSprite(name){
    spriteDictionary[name].style.display = "none";
    unguessedDictionary[name].style.display = "inline";
}


function standardizeName(input){
    //remove extension
    input = input.replace('.png', '');
    input = input.replace('.jpg', '');
    input = input.replace('.jpeg', '');

    //remove whitespaces
    input = input.replaceAll(/\s/g,'');

    //remove dashes
    input = input.replaceAll('-', '');

    //put to lowercase
    input = input.toLowerCase();

    //flabebe
    input = input.replaceAll('é', 'e');

    //delete all special characters
    input = input.replaceAll(/[^a-z0-9-_]/g, '');

    return input;
}

//standardize both lists
for (let i = 0; i<pokemonList.length; i++){
    pokemonList[i] = standardizeName(pokemonList[i]);
}
for (let i = 0; i<genLastPokemon.length; i++){
    genLastPokemon[i] = standardizeName(genLastPokemon[i]);
}

let genPokemonCounts = [];
let currentGenIndex = 0;
let currentCount = 0;
for (let i = 0; i<pokemonList.length; i++){
	currentCount++;
	let pokemon = pokemonList[i];
	if(genLastPokemon.includes(pokemon)){
        genPokemonCounts[currentGenIndex] = currentCount;
		currentGenIndex++;
		currentCount = 0;
    }
}


function onNamesLoad (fileNames) {

    //loop through filenames, not the pokemon list
    //it's easier to get the standardized name from the filename than it is to get the filename from the standardized name
    for (let i = 0; i < fileNames.length; i++){
        let pokemon = standardizeName(fileNames[i]);

        //skip unnecessary sprites
        if(!pokemonList.includes(pokemon)){
            continue;
        }

        let spritePath = '/sprites/' + fileNames[i];
        let silhouettePath = '/silhouettes/' + fileNames[i];


        let sprite = document.createElement("img");
        sprite.classList.add('sprite');
        sprite.classList.add('zoom');
        sprite.src = spritePath;
		sprite.addEventListener("load", function () {
             loadedSpritesCount++;
             onSpriteLoad();
        }, false);
		totalSpritesCount++;
        spriteDictionary[pokemon] = sprite;

        let silhouette = document.createElement("img");
        silhouette.classList.add('sprite');
        silhouette.src = silhouettePath;
        silhouette.style.display = "none";
		silhouette.addEventListener("load", function () {
             loadedSpritesCount++;
             onSpriteLoad();
        }, false);
		totalSpritesCount++;
		
        silhouetteDictionary[pokemon] = silhouette;

    }

    //ordered appending
    let boxIndex = 0;
    for (let i = 0; i<pokemonList.length; i++){
        let pokemon = standardizeName(pokemonList[i]);
        let box = boxes[boxIndex];
        let unguessed = document.createElement("div");

		//not included to loading bar, all use the same single image
        let pokeballImg = document.createElement("img");
        pokeballImg.classList.add('sprite');
        pokeballImg.src = '/sprites/unknown.png';
        unguessedDictionary[pokemon] = unguessed;

        pokeballArray.push(pokeballImg);
        silhouetteArray.push(silhouetteDictionary[pokemon]);

        unguessed.appendChild(silhouetteDictionary[pokemon])
        unguessed.appendChild(pokeballImg)
        box.appendChild(spriteDictionary[pokemon]);
        box.appendChild(unguessed);

        hideSprite(pokemon);

        if(genLastPokemon.includes(pokemon)){
            boxIndex++;
        }
    }

}

let alreadyGuessedPokemon = [];

let inputField = document.getElementById("pokemon");
let recentSprite = document.getElementById("recentsprite");

inputField.oninput = function () {
    let inputText = inputField.value;
    inputText = standardizeName(inputText);
    tryGuessPokemon(inputText);

    if(inputText === standardizeName('nidoran')){
        tryGuessPokemon('nidoranf');
        tryGuessPokemon('nidoranm');
    }
};

function tryGuessPokemon(input){
    if(pokemonList.includes(input) && !alreadyGuessedPokemon.includes(input)){

        showSprite(input);
        inputField.value = '';
        recentSprite.src = spriteDictionary[input].src;
        alreadyGuessedPokemon.push(input);
        setCounter(alreadyGuessedPokemon.length);
        if(!activeTimer){
            startTimer();
        }
        if(alreadyGuessedPokemon.length === totalPokemonCount){
            clearInterval(activeTimer);
        }
    }
}

function useSilhouettes (){
    for (let i = 0; i<silhouetteArray.length; i++){
        silhouetteArray[i].style.display = "inline";
        pokeballArray[i].style.display = "none";
    }
}

function usePokeball (){
    for (let i = 0; i<silhouetteArray.length; i++){
        silhouetteArray[i].style.display = "none";
        pokeballArray[i].style.display = "inline";
    }
}
let radioPokeball = document.getElementById("pokeball");
let radioSilhouette = document.getElementById("silhouette");

radioPokeball.onclick = usePokeball;
radioSilhouette.onclick = useSilhouettes;

let counterText = document.getElementById("counter");
let totalText = document.getElementById("total");

function setCounter(count){
    counterText.innerHTML = count;
}

function setTotal(count){
    totalText.innerHTML = count;
}

timerText = document.getElementById("timer");
let activeTimer = false;
function startTimer(){
    let startTimestamp = Date.now();

    activeTimer = setInterval(function(){
        let msDiff = Date.now()-startTimestamp;
        updateTimer(msDiff);
    }, 100)

}

function updateTimer(msDiff){
	timerText.innerHTML = msToTime(msDiff);
}

function msToTime(s) {
    let ms = s % 1000;
    s = (s - ms) / 1000;
    let secs = s % 60;
    s = (s - secs) / 60;
    let mins = s % 60;
    let hrs = (s - mins) / 60;

    if(hrs < 10){
        hrs = '0' + hrs;
    }
    if(mins < 10){
        mins = '0' + mins;
    }
    if(secs < 10){
        secs = '0' + secs;
    }
    return hrs + ':' + mins + ':' + secs;
}

giveUpBtn = document.getElementById("surrender");
let revealTimeouts = [];
giveUpBtn.onclick = function(){
    document.getElementById("pokemon").disabled = true;
    clearInterval(activeTimer);
    let delay = 0;

	let enabledGensCount = 0;
	if(allGensEnabled){
		enabledGensCount = genFlags.length;
	}else{
		for (let i = 0 ; i <genFlags.length; i++){
			if(genFlags[i]){
				enabledGensCount++;
			}
		}
	}
	//otherwise the reveal is too slow for filtered gens
	delayFactor = (enabledGensCount/genFlags.length);
	
    for(let key in spriteDictionary){
		if (!(alreadyGuessedPokemon.includes(key))){
			let thisDelay = delay;
		
			delay += 100*delayFactor;
			let timeout = setTimeout(function(){
				if (!(alreadyGuessedPokemon.includes(key))){
					showSprite(key)
					spriteDictionary[key].classList.add('revealed');
				}
			}, thisDelay);
		revealTimeouts.push(timeout);
		}
    }
};

function stopReveal(){
	for(let i = 0; i<revealTimeouts.length; i++){
		clearInterval(revealTimeouts[i])
	}
	letRevealTimeouts = [];
}

let allGensEnabled = true;
allGensButton.onclick = function (){

	allGensEnabled = !allGensEnabled;
	allGensButton.checked = allGensEnabled;
	updateGenFilter();
}

function updateGenFilter(){
	totalPokemonCount = 0;
	if(allGensEnabled){
		for(let i = 0; i<genFlags.length; i++){
			boxes[i].style.display = "block";
			totalPokemonCount = totalPokemonCount + genPokemonCounts[i];
		}
	}else{
		for(let i = 0; i<genFlags.length; i++){
			if(!genFlags[i]){
				boxes[i].style.display = "none";
			}else{
				totalPokemonCount = totalPokemonCount + genPokemonCounts[i];
				boxes[i].style.display = "block";
			}
		}
	}
	setTotal(totalPokemonCount);
	
}
updateGenFilter();




function loadNames (onSuccess){
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", '/names', true);

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status === 200) {
                onSuccess(JSON.parse(this.response));
            }else {
                console.log('error loading image list, retrying...');
                setTimeout(function (){
                    loadNames(onSuccess);
                }, 2);
            }

        }
    };
    xhttp.send();
}
loadNames(onNamesLoad);

var loadingBar = document.getElementById("loadbar");

function onLoadingComplete(){
	document.getElementById("loadbox").style.display = "none";
	document.getElementById("pokemon").disabled = false;
	document.getElementById("silhouette").disabled = false;
	document.getElementById("silhouettebutton").style.opacity = "1";
	document.getElementById("surrender").style.opacity = "1";
	document.getElementById("surrender").disabled = false;
	document.getElementById("resetButton").disabled = false;
}


function onSpriteLoad(){
	let fraction = loadedSpritesCount / totalSpritesCount;
	loadingBar.style.width = fraction*100 + '%';
	if(fraction === 1){
		onLoadingComplete();
	}
}

function resetQuiz(){
	alreadyGuessedPokemon = [];
	clearInterval(activeTimer);
	activeTimer = false;
	usePokeball();
	setCounter(0);
	updateTimer(0);
	stopReveal();
	onLoadingComplete();
	recentSprite.src = '/sprites/unknown.png'
	document.getElementById("silhouette").checked = false;
	for (let i = 0; i<pokemonList.length; i++){
		hideSprite(pokemonList[i]);
	 }
}



let resetBtn = document.getElementById("resetButton");
resetBtn.onclick = resetQuiz;

resetQuiz();