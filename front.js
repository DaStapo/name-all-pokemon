
let pokemonList = ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise', 'Caterpie', 'Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Pidgeotto', 'Pidgeot', 'Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Arbok', 'Pikachu', 'Raichu', 'Sandshrew', 'Sandslash', 'Nidoranf', 'Nidorina', 'Nidoqueen', 'Nidoranm‚', 'Nidorino', 'Nidoking', 'Clefairy', 'Clefable', 'Vulpix', 'Ninetales', 'Jigglypuff', 'Wigglytuff', 'Zubat', 'Golbat', 'Oddish', 'Gloom', 'Vileplume', 'Paras', 'Parasect', 'Venonat', 'Venomoth', 'Diglett', 'Dugtrio', 'Meowth', 'Persian', 'Psyduck', 'Golduck', 'Mankey', 'Primeape', 'Growlithe', 'Arcanine', 'Poliwag', 'Poliwhirl', 'Poliwrath', 'Abra', 'Kadabra', 'Alakazam', 'Machop', 'Machoke', 'Machamp', 'Bellsprout', 'Weepinbell', 'Victreebel', 'Tentacool', 'Tentacruel', 'Geodude', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowpoke', 'Slowbro', 'Magnemite', 'Magneton', "Farfetch'd", 'Doduo', 'Dodrio', 'Seel', 'Dewgong', 'Grimer', 'Muk', 'Shellder', 'Cloyster', 'Gastly', 'Haunter', 'Gengar', 'Onix', 'Drowzee', 'Hypno', 'Krabby', 'Kingler', 'Voltorb', 'Electrode', 'Exeggcute', 'Exeggutor', 'Cubone', 'Marowak', 'Hitmonlee', 'Hitmonchan', 'Lickitung', 'Koffing', 'Weezing', 'Rhyhorn', 'Rhydon', 'Chansey', 'Tangela', 'Kangaskhan', 'Horsea', 'Seadra', 'Goldeen', 'Seaking', 'Staryu', 'Starmie', 'Mr. Mime', 'Scyther', 'Jynx', 'Electabuzz', 'Magmar', 'Pinsir', 'Tauros', 'Magikarp', 'Gyarados', 'Lapras', 'Ditto', 'Eevee', 'Vaporeon', 'Jolteon', 'Flareon', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Aerodactyl', 'Snorlax', 'Articuno', 'Zapdos', 'Moltres', 'Dratini', 'Dragonair', 'Dragonite', 'Mewtwo', 'Mew', 'Chikorita', 'Bayleef', 'Meganium', 'Cyndaquil', 'Quilava', 'Typhlosion', 'Totodile', 'Croconaw', 'Feraligatr', 'Sentret', 'Furret', 'Hoothoot', 'Noctowl', 'Ledyba', 'Ledian', 'Spinarak', 'Ariados', 'Crobat', 'Chinchou', 'Lanturn', 'Pichu', 'Cleffa', 'Igglybuff', 'Togepi', 'Togetic', 'Natu', 'Xatu', 'Mareep', 'Flaaffy', 'Ampharos', 'Bellossom', 'Marill', 'Azumarill', 'Sudowoodo', 'Politoed', 'Hoppip', 'Skiploom', 'Jumpluff', 'Aipom', 'Sunkern', 'Sunflora', 'Yanma', 'Wooper', 'Quagsire', 'Espeon', 'Umbreon', 'Murkrow', 'Slowking', 'Misdreavus', 'Unown', 'Wobbuffet', 'Girafarig', 'Pineco', 'Forretress', 'Dunsparce', 'Gligar', 'Steelix', 'Snubbull', 'Granbull', 'Qwilfish', 'Scizor', 'Shuckle', 'Heracross', 'Sneasel', 'Teddiursa', 'Ursaring', 'Slugma', 'Magcargo', 'Swinub', 'Piloswine', 'Corsola', 'Remoraid', 'Octillery', 'Delibird', 'Mantine', 'Skarmory', 'Houndour', 'Houndoom', 'Kingdra', 'Phanpy', 'Donphan', 'Porygon2', 'Stantler', 'Smeargle', 'Tyrogue', 'Hitmontop', 'Smoochum', 'Elekid', 'Magby', 'Miltank', 'Blissey', 'Raikou', 'Entei', 'Suicune', 'Larvitar', 'Pupitar', 'Tyranitar', 'Lugia', 'Ho-Oh', 'Celebi', 'Treecko', 'Grovyle', 'Sceptile', 'Torchic', 'Combusken', 'Blaziken', 'Mudkip', 'Marshtomp', 'Swampert', 'Poochyena', 'Mightyena', 'Zigzagoon', 'Linoone', 'Wurmple', 'Silcoon', 'Beautifly', 'Cascoon', 'Dustox', 'Lotad', 'Lombre', 'Ludicolo', 'Seedot', 'Nuzleaf', 'Shiftry', 'Taillow', 'Swellow', 'Wingull', 'Pelipper', 'Ralts', 'Kirlia', 'Gardevoir', 'Surskit', 'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking', 'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud', 'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty', 'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham', 'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise', 'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer', 'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig', 'Spinda', 'Trapinch', 'Vibrava', 'Flygon', 'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper', 'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt', 'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo', 'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette', 'Duskull', 'Dusclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut', 'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Clamperl', 'Huntail', 'Gorebyss', 'Relicanth', 'Luvdisc', 'Bagon', 'Shelgon', 'Salamence', 'Beldum', 'Metang', 'Metagross', 'Regirock', 'Regice', 'Registeel', 'Latias', 'Latios', 'Kyogre', 'Groudon', 'Rayquaza', 'Jirachi', 'Deoxys', 'Turtwig', 'Grotle', 'Torterra', 'Chimchar', 'Monferno', 'Infernape', 'Piplup', 'Prinplup', 'Empoleon', 'Starly', 'Staravia', 'Staraptor', 'Bidoof', 'Bibarel', 'Kricketot', 'Kricketune', 'Shinx', 'Luxio', 'Luxray', 'Budew', 'Roserade', 'Cranidos', 'Rampardos', 'Shieldon', 'Bastiodon', 'Burmy', 'Wormadam', 'Mothim', 'Combee', 'Vespiquen', 'Pachirisu', 'Buizel', 'Floatzel', 'Cherubi', 'Cherrim', 'Shellos', 'Gastrodon', 'Ambipom', 'Drifloon', 'Drifblim', 'Buneary', 'Lopunny', 'Mismagius', 'Honchkrow', 'Glameow', 'Purugly', 'Chingling', 'Stunky', 'Skuntank', 'Bronzor', 'Bronzong', 'Bonsly', 'Mime Jr.', 'Happiny', 'Chatot', 'Spiritomb', 'Gible', 'Gabite', 'Garchomp', 'Munchlax', 'Riolu', 'Lucario', 'Hippopotas', 'Hippowdon', 'Skorupi', 'Drapion', 'Croagunk', 'Toxicroak', 'Carnivine', 'Finneon', 'Lumineon', 'Mantyke', 'Snover', 'Abomasnow', 'Weavile', 'Magnezone', 'Lickilicky', 'Rhyperior', 'Tangrowth', 'Electivire', 'Magmortar', 'Togekiss', 'Yanmega', 'Leafeon', 'Glaceon', 'Gliscor', 'Mamoswine', 'Porygon-Z', 'Gallade', 'Probopass', 'Dusknoir', 'Froslass', 'Rotom', 'Uxie', 'Mesprit', 'Azelf', 'Dialga', 'Palkia', 'Heatran', 'Regigigas', 'Giratina', 'Cresselia', 'Phione', 'Manaphy', 'Darkrai', 'Shaymin', 'Arceus', 'Victini', 'Snivy', 'Servine', 'Serperior', 'Tepig', 'Pignite', 'Emboar', 'Oshawott', 'Dewott', 'Samurott', 'Patrat', 'Watchog', 'Lillipup', 'Herdier', 'Stoutland', 'Purrloin', 'Liepard', 'Pansage', 'Simisage', 'Pansear', 'Simisear', 'Panpour', 'Simipour', 'Munna', 'Musharna', 'Pidove', 'Tranquill', 'Unfezant', 'Blitzle', 'Zebstrika', 'Roggenrola', 'Boldore', 'Gigalith', 'Woobat', 'Swoobat', 'Drilbur', 'Excadrill', 'Audino', 'Timburr', 'Gurdurr', 'Conkeldurr', 'Tympole', 'Palpitoad', 'Seismitoad', 'Throh', 'Sawk', 'Sewaddle', 'Swadloon', 'Leavanny', 'Venipede', 'Whirlipede', 'Scolipede', 'Cottonee', 'Whimsicott', 'Petilil', 'Lilligant', 'Basculin', 'Sandile', 'Krokorok', 'Krookodile', 'Darumaka', 'Darmanitan', 'Maractus', 'Dwebble', 'Crustle', 'Scraggy', 'Scrafty', 'Sigilyph', 'Yamask', 'Cofagrigus', 'Tirtouga', 'Carracosta', 'Archen', 'Archeops', 'Trubbish', 'Garbodor', 'Zorua', 'Zoroark', 'Minccino', 'Cinccino', 'Gothita', 'Gothorita', 'Gothitelle', 'Solosis', 'Duosion', 'Reuniclus', 'Ducklett', 'Swanna', 'Vanillite', 'Vanillish', 'Vanilluxe', 'Deerling', 'Sawsbuck', 'Emolga', 'Karrablast', 'Escavalier', 'Foongus', 'Amoonguss', 'Frillish', 'Jellicent', 'Alomomola', 'Joltik', 'Galvantula', 'Ferroseed', 'Ferrothorn', 'Klink', 'Klang', 'Klinklang', 'Tynamo', 'Eelektrik', 'Eelektross', 'Elgyem', 'Beheeyem', 'Litwick', 'Lampent', 'Chandelure', 'Axew', 'Fraxure', 'Haxorus', 'Cubchoo', 'Beartic', 'Cryogonal', 'Shelmet', 'Accelgor', 'Stunfisk', 'Mienfoo', 'Mienshao', 'Druddigon', 'Golett', 'Golurk', 'Pawniard', 'Bisharp', 'Bouffalant', 'Rufflet', 'Braviary', 'Vullaby', 'Mandibuzz', 'Heatmor', 'Durant', 'Deino', 'Zweilous', 'Hydreigon', 'Larvesta', 'Volcarona', 'Cobalion', 'Terrakion', 'Virizion', 'Tornadus', 'Thundurus', 'Reshiram', 'Zekrom', 'Landorus', 'Kyurem', 'Keldeo', 'Meloetta', 'Genesect', 'Chespin', 'Quilladin', 'Chesnaught', 'Fennekin', 'Braixen', 'Delphox', 'Froakie', 'Frogadier', 'Greninja', 'Bunnelby', 'Diggersby', 'Fletchling', 'Fletchinder', 'Talonflame', 'Scatterbug', 'Spewpa', 'Vivillon', 'Litleo', 'Pyroar', 'Flabébé', 'Floette', 'Florges', 'Skiddo', 'Gogoat', 'Pancham', 'Pangoro', 'Furfrou', 'Espurr', 'Meowstic', 'Honedge', 'Doublade', 'Aegislash', 'Spritzee', 'Aromatisse', 'Swirlix', 'Slurpuff', 'Inkay', 'Malamar', 'Binacle', 'Barbaracle', 'Skrelp', 'Dragalge', 'Clauncher', 'Clawitzer', 'Helioptile', 'Heliolisk', 'Tyrunt', 'Tyrantrum', 'Amaura', 'Aurorus', 'Sylveon', 'Hawlucha', 'Dedenne', 'Carbink', 'Goomy', 'Sliggoo', 'Goodra', 'Klefki', 'Phantump', 'Trevenant', 'Pumpkaboo', 'Gourgeist', 'Bergmite', 'Avalugg', 'Noibat', 'Noivern', 'Xerneas', 'Yveltal', 'Zygarde', 'Diancie', 'Hoopa', 'Volcanion', 'Rowlet', 'Dartrix', 'Decidueye', 'Litten', 'Torracat', 'Incineroar', 'Popplio', 'Brionne', 'Primarina', 'Pikipek', 'Trumbeak', 'Toucannon', 'Yungoos', 'Gumshoos', 'Grubbin', 'Charjabug', 'Vikavolt', 'Crabrawler', 'Crabominable', 'Oricorio', 'Cutiefly', 'Ribombee', 'Rockruff', 'Lycanroc', 'Wishiwashi', 'Mareanie', 'Toxapex', 'Mudbray', 'Mudsdale', 'Dewpider', 'Araquanid', 'Fomantis', 'Lurantis', 'Morelull', 'Shiinotic', 'Salandit', 'Salazzle', 'Stufful', 'Bewear', 'Bounsweet', 'Steenee', 'Tsareena', 'Comfey', 'Oranguru', 'Passimian', 'Wimpod', 'Golisopod', 'Sandygast', 'Palossand', 'Pyukumuku', 'Type: Null', 'Silvally', 'Minior', 'Komala', 'Turtonator', 'Togedemaru', 'Mimikyu', 'Bruxish', 'Drampa', 'Dhelmise', 'Jangmo-o', 'Hakamo-o', 'Kommo-o', 'Tapu Koko', 'Tapu Lele', 'Tapu Bulu', 'Tapu Fini', 'Cosmog', 'Cosmoem', 'Solgaleo', 'Lunala', 'Nihilego', 'Buzzwole', 'Pheromosa', 'Xurkitree', 'Celesteela', 'Kartana', 'Guzzlord', 'Necrozma', 'Magearna', 'Marshadow', 'Poipole', 'Naganadel', 'Stakataka', 'Blacephalon', 'Zeraora', 'Meltan', 'Melmetal', 'Grookey', 'Thwackey', 'Rillaboom', 'Scorbunny', 'Raboot', 'Cinderace', 'Sobble', 'Drizzile', 'Inteleon', 'Skwovet', 'Greedent', 'Rookidee', 'Corvisquire', 'Corviknight', 'Blipbug', 'Dottler', 'Orbeetle', 'Nickit', 'Thievul', 'Gossifleur', 'Eldegoss', 'Wooloo', 'Dubwool', 'Chewtle', 'Drednaw', 'Yamper', 'Boltund', 'Rolycoly', 'Carkol', 'Coalossal', 'Applin', 'Flapple', 'Appletun', 'Silicobra', 'Sandaconda', 'Cramorant', 'Arrokuda', 'Barraskewda', 'Toxel', 'Toxtricity', 'Sizzlipede', 'Centiskorch', 'Clobbopus', 'Grapploct', 'Sinistea', 'Polteageist', 'Hatenna', 'Hattrem', 'Hatterene', 'Impidimp', 'Morgrem', 'Grimmsnarl', 'Obstagoon', 'Perrserker', 'Cursola', "Sirfetch'd", 'Mr. Rime', 'Runerigus', 'Milcery', 'Alcremie', 'Falinks', 'Pincurchin', 'Snom', 'Frosmoth', 'Stonjourner', 'Eiscue', 'Indeedee', 'Morpeko', 'Cufant', 'Copperajah', 'Dracozolt', 'Arctozolt', 'Dracovish', 'Arctovish', 'Duraludon', 'Dreepy', 'Drakloak', 'Dragapult', 'Zacian', 'Zamazenta', 'Eternatus', 'Kubfu', 'Urshifu', 'Zarude', 'Regieleki', 'Regidrago', 'Glastrier', 'Spectrier', 'Calyrex'];
let megaList = ['Venusaur-Mega', 'Charizard-Mega-X', 'Charizard-Mega-Y', 'Blastoise-Mega', 'Beedrill-Mega', 'Pidgeot-Mega', 'Alakazam-Mega', 'Slowbro-Mega', 'Gengar-Mega', 'Kangaskhan-Mega', 'Pinsir-Mega', 'Gyarados-Mega', 'Aerodactyl-Mega', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y', 'Ampharos-Mega', 'Steelix-Mega', 'Scizor-Mega', 'Heracross-Mega', 'Houndoom-Mega', 'Tyranitar-Mega', 'Sceptile-Mega', 'Blaziken-Mega', 'Swampert-Mega', 'Gardevoir-Mega', 'Sableye-Mega', 'Mawile-Mega', 'Aggron-Mega', 'Medicham-Mega', 'Manectric-Mega', 'Sharpedo-Mega', 'Camerupt-Mega', 'Altaria-Mega', 'Banette-Mega', 'Absol-Mega', 'Glalie-Mega', 'Salamence-Mega', 'Metagross-Mega', 'Latias-Mega', 'Latios-Mega', 'Kyogre-Primal', 'Groudon-Primal', 'Rayquaza-Mega', 'Lopunny-Mega', 'Garchomp-Mega', 'Lucario-Mega', 'Abomasnow-Mega', 'Gallade-Mega', 'Audino-Mega', 'Diancie-Mega'];
let alolaList = ['Rattata-Alola', 'Raticate-Alola', 'Raichu-Alola', 'Sandshrew-Alola', 'Sandslash-Alola', 'Vulpix-Alola', 'Ninetales-Alola', 'Diglett-Alola', 'Dugtrio-Alola', 'Meowth-Alola', 'Persian-Alola', 'Geodude-Alola', 'Graveler-Alola', 'Golem-Alola', 'Grimer-Alola', 'Muk-Alola', 'Exeggutor-Alola', 'Marowak-Alola'];
let galarList = ['Meowth-Galar', 'Ponyta-Galar', 'Rapidash-Galar', 'Slowpoke-Galar', 'Slowbro-Galar', 'Farfetchd-Galar', 'Weezing-Galar', 'Mr-Mime-Galar', 'Articuno-Galar', 'Zapdos-Galar', 'Moltres-Galar', 'Slowking-Galar', 'Corsola-Galar', 'Zigzagoon-Galar', 'Linoone-Galar', 'Darumaka-Galar', 'Darmanitan-Galar', 'Yamask-Galar', 'Stunfisk-Galar'];
let gmaxList = ['Venusaur-Gmax', 'Charizard-Gmax', 'Blastoise-Gmax', 'Butterfree-Gmax', 'Pikachu-Gmax', 'Meowth-Gmax', 'Machamp-Gmax', 'Gengar-Gmax', 'Kingler-Gmax', 'Lapras-Gmax', 'Eevee-Gmax', 'Snorlax-Gmax', 'Garbodor-Gmax', 'Melmetal-Gmax', 'Rillaboom-Gmax', 'Cinderace-Gmax', 'Inteleon-Gmax', 'Corviknight-Gmax', 'Orbeetle-Gmax', 'Drednaw-Gmax', 'Coalossal-Gmax', 'Flapple-Gmax', 'Sandaconda-Gmax', 'Toxtricity-Gmax', 'Centiskorch-Gmax', 'Hatterene-Gmax', 'Grimmsnarl-Gmax', 'Alcremie-Gmax', 'Copperajah-Gmax', 'Duraludon-Gmax', 'Urshifu-Rapid-Strike-Gmax', 'Urshifu-Single-Strike-Gmax'];
let genLastPokemon = ['Mew', 'Celebi', 'Deoxys', 'Arceus', 'Genesect', 'Volcanion', 'Melmetal', 'Calyrex'];
let boxes = [];
let currentPokemonList = [];
let currentGen = 0; //0 means all
let soundEffect = new Audio('/sound-effects/gen3-click2.wav');
soundEffect.volume = 0.5;
let soundEffect2 = new Audio('/sound-effects/Dex-Fanfare.mp3');
soundEffect2.volume = 0.3;

let useEncoded = true;

for (let i = 0; i <= genLastPokemon.length; i++) {
    if (i !== 0) {
        boxes.push(document.getElementById("pokemon-box-" + i));
    }
    document.getElementById("gen" + i).onclick = function () {

        if (currentGen !== i) {

            let swapGen = function () {
                currentGen = i;
                promptGen.style.display = "none";
                updateGenFilter();
                resetQuiz();
                for (let j = 0; j <= genLastPokemon.length; j++) {
                    if (j !== i) {
                        document.getElementById("gen" + j).checked = false;
                    }
                }
            }

            promptGenYes.onclick = function () {
                swapGen();

            }
            promptGenNo.onclick = function () {
                promptGen.style.display = "none";
                document.getElementById("gen" + i).checked = false;
            }
            if (alreadyGuessedPokemon.length !== 0) {
                promptGen.style.display = 'inline';
            } else {
                swapGen();
            }

        }
    }
}


let spriteDictionary = {};
let silhouetteDictionary = {};
let unguessedDictionary = {};

let silhouetteArray = [];
let pokeballArray = [];
let allSpirtes = [];

let loadedSpritesCount = 0;
let totalSpritesCount = 0;

function showSprite(name) {
    spriteDictionary[name].style.display = "inline";
    unguessedDictionary[name].style.display = "none";
}

function hideSprite(name) {
    spriteDictionary[name].style.display = "none";
    unguessedDictionary[name].style.display = "inline";
}


function standardizeName(input) {
    //remove extension
    input = input.replace('.png', '');
    input = input.replace('.jpg', '');
    input = input.replace('.jpeg', '');

    //remove whitespaces
    input = input.replace(/\s/g, '');

    //remove dashes
    input = input.replace(/-/g, '');

    //put to lowercase
    input = input.toLowerCase();

    //flabebe
    input = input.replace(/é/g, 'e');

    //delete all special characters
    input = input.replace(/[^a-z0-9-_]/g, '');

    return input;
}

//standardize both lists
for (let i = 0; i < pokemonList.length; i++) {
    pokemonList[i] = standardizeName(pokemonList[i]);
}
for (let i = 0; i < genLastPokemon.length; i++) {
    genLastPokemon[i] = standardizeName(genLastPokemon[i]);
}


let genPokemonCounts = [];
let currentGenIndex = 1;
let currentCount = 0;
let pokemonListsByGen = [];
pokemonListsByGen.push(pokemonList);
let currentGenList = [];
for (let i = 0; i < pokemonList.length; i++) {
    let pokemon = pokemonList[i];

    currentGenList.push(pokemon)

    currentCount++;
    if (genLastPokemon.includes(pokemon)) {
        genPokemonCounts[currentGenIndex] = currentCount;
        pokemonListsByGen[currentGenIndex] = currentGenList;
        currentGenList = [];
        currentGenIndex++;
        currentCount = 0;
    }
}

function updateCurrentPokemonList() {
    currentPokemonList = pokemonListsByGen[currentGen]
}

function getAlreadyGuessedAndRelevantPokemon() {
    let filteredList = [];
    for (let i = 0; i < alreadyGuessedPokemon.length; i++) {
        let pokemon = alreadyGuessedPokemon[i];
        if (currentPokemonList.includes(pokemon)) {
            filteredList.push(pokemon);
        }
    }
    return filteredList;
}


function onNamesLoad(fileNames) {

    //loop through filenames, not the pokemon list
    //it's easier to get the standardized name from the filename than it is to get the filename from the standardized name
    for (let i = 0; i < fileNames.length; i++) {
        let pokemon = standardizeName(fileNames[i]);

        //skip unnecessary sprites
        if (!pokemonList.includes(pokemon)) {
            continue;
        }

        let spritePath = '/sprites/' + fileNames[i];
        let silhouettePath = '/silhouettes/' + fileNames[i];


        let sprite = document.createElement("img");
        sprite.classList.add('sprite');
        sprite.classList.add('zoom');
        if (useEncoded) {
            sprite.src = encodedImages[spritePath];
        } else {
            sprite.src = spritePath
        }
        sprite.addEventListener("load", function () {
            loadedSpritesCount++;
            onSpriteLoad();
        }, false);
        totalSpritesCount++;
        spriteDictionary[pokemon] = sprite;
        allSpirtes.push(sprite);

        let silhouette = document.createElement("img");
        silhouette.classList.add('sprite');
        if (useEncoded) {
            silhouette.src = encodedImages[silhouettePath];
        } else {
            silhouette.src = silhouettePath
        }
        silhouette.style.display = "none";
        silhouette.addEventListener("load", function () {
            loadedSpritesCount++;
            onSpriteLoad();
        }, false);
        totalSpritesCount++;

        silhouetteDictionary[pokemon] = silhouette;
        allSpirtes.push(silhouette);

    }

    //ordered appending
    let boxIndex = 0;
    for (let i = 0; i < pokemonList.length; i++) {
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

        allSpirtes.push(pokeballImg);

        unguessed.appendChild(silhouetteDictionary[pokemon])
        unguessed.appendChild(pokeballImg)
        box.appendChild(spriteDictionary[pokemon]);
        box.appendChild(unguessed);

        hideSprite(pokemon);

        if (genLastPokemon.includes(pokemon)) {
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

    if (inputText === standardizeName('nidoran')) {
        tryGuessPokemon('nidoranf');
        tryGuessPokemon('nidoranm');
    }
};

function play_single_sound() {
    document.getElementById('soundeffect').play();
}

function play_single_sound2() {
    document.getElementById('soundeffect2').play();
}

function tryGuessPokemon(input) {
    if (currentPokemonList.includes(input) && !alreadyGuessedPokemon.includes(input)) {

        showSprite(input);
        inputField.value = '';
        recentSprite.src = spriteDictionary[input].src;
        alreadyGuessedPokemon.push(input);
        let relevantList = getAlreadyGuessedAndRelevantPokemon();
        setCounter(relevantList.length);
        if (!activeTimer) {
            if (currentTimer === 0) {
                startTimer();
            } else {
                startCountdown(timerMinutes[currentTimer])
            }
        }
        if (relevantList.length === currentPokemonList.length) {
            showCongrats();
        }
        soundEffect.play();
    }
}

function showCongrats() {

    clearInterval(activeTimer);
    document.getElementById("overlay").style.display = "block";
    soundEffect2.play();
    let genText = ' ';
    if (currentGen !== 0) {
        genText = ' generation ' + currentGen + ' ';
    }

    document.getElementById("gen-name").innerHTML = genText

    let timerScore = '';
    let pokemonCount = '';
    if (currentTimer === 0) {
        timerScore = timerText.innerHTML;
        pokemonCount = ' every ';
    } else {
		
		if(lastDiff === 0){
			timerScore = timerMinutes[currentTimer] + ' minutes';
		}else{
			timerScore = msToTime(timerMinutes[currentTimer]*60*1000 - lastDiff)
		}
        pokemonCount = ' '+getAlreadyGuessedAndRelevantPokemon().length+' ';
    }


    document.getElementById("timer-score").innerHTML = timerScore;
    document.getElementById("currentcount").innerHTML = pokemonCount;


    if (silhouettesFlag) {
        document.getElementById("trychallenge").style.display = "block";
    } else {
        document.getElementById("trychallenge").style.display = "none";
    }
}

let silhouettesFlag = false;

function useSilhouettes() {
    silhouettesFlag = true;
    for (let i = 0; i < silhouetteArray.length; i++) {
        silhouetteArray[i].style.display = "inline";
        pokeballArray[i].style.display = "none";
    }
}

function usePokeball() {
    silhouettesFlag = false;
    for (let i = 0; i < silhouetteArray.length; i++) {
        silhouetteArray[i].style.display = "none";
        pokeballArray[i].style.display = "inline";
    }
}

let radioPokeball = document.getElementById("pokeball");
let radioSilhouette = document.getElementById("silhouette");

radioPokeball.onclick = usePokeball;
radioSilhouette.onclick = function () {
    if (silhouettesFlag !== true) {
        promptSilh.style.display = "inline";
    }
};

let counterText = document.getElementById("counter");
let totalText = document.getElementById("total");

function setCounter(count) {
    counterText.innerHTML = count;
}

function setTotal(count) {
    totalText.innerHTML = count;
}

timerText = document.getElementById("timer");
let activeTimer = false;

function startTimer() {
    let startTimestamp = Date.now();

    activeTimer = setInterval(function () {
        let msDiff = Date.now() - startTimestamp;
        updateTimer(msDiff);
    }, 100)

}

function startCountdown(minutes) {
    let countdownInMs = minutes * 60 * 1000;
    let startTimestamp = countdownInMs + Date.now();

    activeTimer = setInterval(function () {
        let msDiff = startTimestamp - Date.now();
		updateTimer(msDiff);
        if (msDiff <= 0) {
			giveUp();
            showCongrats();
        }
        updateTimer(msDiff);
    }, 100)

}

let lastDiff;
function updateTimer(msDiff) {
	if (msDiff<0){
		msDiff = 0;
	}
	lastDiff = msDiff;
    timerText.innerHTML = msToTime(msDiff);
}

function resetTimer(){
	if (currentTimer === 0) {
		updateTimer(0);
	} else {
		updateTimer(1000 * 60 * timerMinutes[currentTimer]);
	}
}

function msToTime(s) {
    let ms = s % 1000;
    s = (s - ms) / 1000;
    let secs = s % 60;
    s = (s - secs) / 60;
    let mins = s % 60;
    let hrs = (s - mins) / 60;

    if (hrs < 10) {
        hrs = '0' + hrs;
    }
    if (mins < 10) {
        mins = '0' + mins;
    }
    if (secs < 10) {
        secs = '0' + secs;
    }
    return hrs + ':' + mins + ':' + secs;
}

function giveUp (){
	document.getElementById("pokemon").disabled = true;
    clearInterval(activeTimer);
    let delay = 0;

    for (let i = 0; i < currentPokemonList.length; i++) {
        let pokemon = currentPokemonList[i];
        if (!(alreadyGuessedPokemon.includes(pokemon))) {
            delay = delay + 35;
            let timeout = setTimeout(function () {
                spriteDictionary[pokemon].classList.add('revealed');
                spriteDictionary[pokemon].classList.remove('zoom');
                showSprite(pokemon);
            }, delay);
            revealTimeouts.push(timeout);
        }
    }
}

giveUpBtn = document.getElementById("surrender");
let revealTimeouts = [];
giveUpBtn.onclick = giveUp;

function stopReveal() {
    for (let i = 0; i < revealTimeouts.length; i++) {
        clearInterval(revealTimeouts[i])
    }
    letRevealTimeouts = [];
}

let pokecolumns = [];
for (let i = 0; i < 4; i++) {
    pokecolumns.push(document.getElementById("pokecolumn" + (i + 1)));
}

function updateGenFilter() {

    //all gens
    if (currentGen === 0) {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.display = "block";
            totalPokemonCount = pokemonList.length;
        }
        for (let i = 0; i < pokecolumns.length; i++) {
            pokecolumns[i].classList.add('quarter');
            pokecolumns[i].classList.remove('fiveeighth');
        }
        for (let i = 0; i < allSpirtes.length; i++) {
            allSpirtes[i].classList.add('sprite');
            allSpirtes[i].classList.remove('spritew');
        }
    } else {
        for (let i = 0; i < boxes.length; i++) {
            if (i + 1 === currentGen) {
                boxes[i].style.display = "block";
                totalPokemonCount = pokemonListsByGen[i + 1].length;
            } else {
                boxes[i].style.display = "none";
            }

            for (let i = 0; i < pokecolumns.length; i++) {
                pokecolumns[i].classList.remove('quarter');
                pokecolumns[i].classList.add('fiveeighth');
            }
        }
        for (let i = 0; i < allSpirtes.length; i++) {
            allSpirtes[i].classList.add('spritew');
            allSpirtes[i].classList.remove('sprite');
        }
    }
    updateCurrentPokemonList();
    setTotal(totalPokemonCount);
    setCounter(getAlreadyGuessedAndRelevantPokemon().length);
    changeFooterPosition();

}


function loadNames(onSuccess) {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", '/names', true);

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status === 200) {
                onSuccess(JSON.parse(this.response));
            } else {
                console.log('error loading image list, retrying...');
                setTimeout(function () {
                    loadNames(onSuccess);
                }, 2);
            }

        }
    };
    xhttp.send();
}

loadNames(onNamesLoad);

var loadingBar = document.getElementById("loadbar");

function onLoadingComplete() {
    //document.getElementById("loadbox").style.display = "none";
    document.getElementById("loader").style.display = "none";
    document.getElementById("play").style.display = "inline-block";
    document.getElementById("playtext").style.opacity = "1";
    document.getElementById("pokemon").disabled = false;
    document.getElementById("silhouette").disabled = false;
    document.getElementById("silhouette").style.opacity = "1";
    document.getElementById("surrender").style.opacity = "1";
    document.getElementById("resetButton").style.opacity = "1";
    document.getElementById("surrender").disabled = false;
    document.getElementById("resetButton").disabled = false;
    changeFooterPosition();
}

function onSpriteLoad() {
    let fraction = loadedSpritesCount / totalSpritesCount;
    loadingBar.style.width = fraction * 100 + '%';
    if (fraction === 1) {
        onLoadingComplete();
    }
}

function resetQuiz() {
    alreadyGuessedPokemon = [];
    clearInterval(activeTimer);
    activeTimer = false;
    usePokeball();
    setCounter(0);
    resetTimer();
    stopReveal();
    document.getElementById("pokemon").disabled = false;
    recentSprite.src = '/sprites/unknown.png'
    document.getElementById("silhouette").checked = false;
    for (let i = 0; i < pokemonList.length; i++) {
        hideSprite(pokemonList[i]);
        spriteDictionary[pokemonList[i]].classList.add("zoom");
        spriteDictionary[pokemonList[i]].classList.remove("revealed");

    }
    changeFooterPosition();
}


let resetBtn = document.getElementById("resetButton");
resetBtn.onclick = resetQuiz;

let promptSilh = document.getElementById("promptsilhouette");
let promptGen = document.getElementById("promptgen");

let promptSilhYes = document.getElementById("sil-yes");
let promptSilhNo = document.getElementById("sil-no");
let promptGenYes = document.getElementById("gen-yes");
let promptGenNo = document.getElementById("gen-no");

promptSilhYes.onclick = function () {
    useSilhouettes();
    promptSilh.style.display = "none";
    radioSilhouette.checked = true;
}
promptSilhNo.onclick = function () {
    promptSilh.style.display = "none";
    radioSilhouette.checked = false;

}
let currentTimer = 0;
timers = [];
timerMinutes = [0, 60, 30, 10];
//4 timers
for (let i = 0; i < 4; i++) {
    let timer = document.getElementById("timer" + i);
    timers.push(timer);
    let j = i;

    timer.onclick = function () {

        function applyNewTimer(){
            resetQuiz();
            currentTimer = j;
			resetTimer();
        }

        if(!activeTimer){
            applyNewTimer()
        }else{

            document.getElementById("prompttimer").style.display = 'block'
            document.getElementById("timer-yes").onclick = function () {
                document.getElementById("prompttimer").style.display = 'none';
                applyNewTimer();
            }

            function cancel() {
                timers[currentTimer].checked = true;
                document.getElementById("prompttimer").style.display = 'none';
            }

            document.getElementById("timer-no").onclick = cancel;
            //document.getElementById("prompttimer").onclick = cancel;
        }
    }
}
timers[0].checked = true;


let main = document.getElementById("main");
let footer = document.getElementById("footer");

function changeFooterPosition() {

    if (main.scrollHeight < window.innerHeight - 69 - footer.scrollHeight) {

        footer.style.position = 'fixed';
    } else {

        footer.style.position = 'relative';
    }
}

window.addEventListener('resize', function () {
    changeFooterPosition();
}, false);
window.addEventListener('orientationchange', function () {
    changeFooterPosition();
}, false);


function off() {
    document.getElementById("overlay").style.display = "none";
}

function off2() {
    document.getElementById("loadbox").style.display = "none";
	document.getElementById("inputbox").classList.add('attentionshake');
}

alreadyGuessedPokemon = [];
usePokeball();
setCounter(0);
resetTimer()
recentSprite.src = '/sprites/unknown.png'
//This accounts for all unknown.png's on the page
recentSprite.addEventListener("load", function () {
    changeFooterPosition();
}, false)
updateGenFilter();
changeFooterPosition();
