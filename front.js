
let pokemonList = ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise', 'Caterpie', 'Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Pidgeotto', 'Pidgeot', 'Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Arbok', 'Pikachu', 'Raichu', 'Sandshrew', 'Sandslash', 'Nidoranf', 'Nidorina', 'Nidoqueen', 'Nidoranm', 'Nidorino', 'Nidoking', 'Clefairy', 'Clefable', 'Vulpix', 'Ninetales', 'Jigglypuff', 'Wigglytuff', 'Zubat', 'Golbat', 'Oddish', 'Gloom', 'Vileplume', 'Paras', 'Parasect', 'Venonat', 'Venomoth', 'Diglett', 'Dugtrio', 'Meowth', 'Persian', 'Psyduck', 'Golduck', 'Mankey', 'Primeape', 'Growlithe', 'Arcanine', 'Poliwag', 'Poliwhirl', 'Poliwrath', 'Abra', 'Kadabra', 'Alakazam', 'Machop', 'Machoke', 'Machamp', 'Bellsprout', 'Weepinbell', 'Victreebel', 'Tentacool', 'Tentacruel', 'Geodude', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowpoke', 'Slowbro', 'Magnemite', 'Magneton', "Farfetch'd", 'Doduo', 'Dodrio', 'Seel', 'Dewgong', 'Grimer', 'Muk', 'Shellder', 'Cloyster', 'Gastly', 'Haunter', 'Gengar', 'Onix', 'Drowzee', 'Hypno', 'Krabby', 'Kingler', 'Voltorb', 'Electrode', 'Exeggcute', 'Exeggutor', 'Cubone', 'Marowak', 'Hitmonlee', 'Hitmonchan', 'Lickitung', 'Koffing', 'Weezing', 'Rhyhorn', 'Rhydon', 'Chansey', 'Tangela', 'Kangaskhan', 'Horsea', 'Seadra', 'Goldeen', 'Seaking', 'Staryu', 'Starmie', 'Mr. Mime', 'Scyther', 'Jynx', 'Electabuzz', 'Magmar', 'Pinsir', 'Tauros', 'Magikarp', 'Gyarados', 'Lapras', 'Ditto', 'Eevee', 'Vaporeon', 'Jolteon', 'Flareon', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Aerodactyl', 'Snorlax', 'Articuno', 'Zapdos', 'Moltres', 'Dratini', 'Dragonair', 'Dragonite', 'Mewtwo', 'Mew', 'Chikorita', 'Bayleef', 'Meganium', 'Cyndaquil', 'Quilava', 'Typhlosion', 'Totodile', 'Croconaw', 'Feraligatr', 'Sentret', 'Furret', 'Hoothoot', 'Noctowl', 'Ledyba', 'Ledian', 'Spinarak', 'Ariados', 'Crobat', 'Chinchou', 'Lanturn', 'Pichu', 'Cleffa', 'Igglybuff', 'Togepi', 'Togetic', 'Natu', 'Xatu', 'Mareep', 'Flaaffy', 'Ampharos', 'Bellossom', 'Marill', 'Azumarill', 'Sudowoodo', 'Politoed', 'Hoppip', 'Skiploom', 'Jumpluff', 'Aipom', 'Sunkern', 'Sunflora', 'Yanma', 'Wooper', 'Quagsire', 'Espeon', 'Umbreon', 'Murkrow', 'Slowking', 'Misdreavus', 'Unown', 'Wobbuffet', 'Girafarig', 'Pineco', 'Forretress', 'Dunsparce', 'Gligar', 'Steelix', 'Snubbull', 'Granbull', 'Qwilfish', 'Scizor', 'Shuckle', 'Heracross', 'Sneasel', 'Teddiursa', 'Ursaring', 'Slugma', 'Magcargo', 'Swinub', 'Piloswine', 'Corsola', 'Remoraid', 'Octillery', 'Delibird', 'Mantine', 'Skarmory', 'Houndour', 'Houndoom', 'Kingdra', 'Phanpy', 'Donphan', 'Porygon2', 'Stantler', 'Smeargle', 'Tyrogue', 'Hitmontop', 'Smoochum', 'Elekid', 'Magby', 'Miltank', 'Blissey', 'Raikou', 'Entei', 'Suicune', 'Larvitar', 'Pupitar', 'Tyranitar', 'Lugia', 'Ho-Oh', 'Celebi', 'Treecko', 'Grovyle', 'Sceptile', 'Torchic', 'Combusken', 'Blaziken', 'Mudkip', 'Marshtomp', 'Swampert', 'Poochyena', 'Mightyena', 'Zigzagoon', 'Linoone', 'Wurmple', 'Silcoon', 'Beautifly', 'Cascoon', 'Dustox', 'Lotad', 'Lombre', 'Ludicolo', 'Seedot', 'Nuzleaf', 'Shiftry', 'Taillow', 'Swellow', 'Wingull', 'Pelipper', 'Ralts', 'Kirlia', 'Gardevoir', 'Surskit', 'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking', 'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud', 'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty', 'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham', 'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise', 'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer', 'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig', 'Spinda', 'Trapinch', 'Vibrava', 'Flygon', 'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper', 'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt', 'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo', 'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette', 'Duskull', 'Dusclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut', 'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Clamperl', 'Huntail', 'Gorebyss', 'Relicanth', 'Luvdisc', 'Bagon', 'Shelgon', 'Salamence', 'Beldum', 'Metang', 'Metagross', 'Regirock', 'Regice', 'Registeel', 'Latias', 'Latios', 'Kyogre', 'Groudon', 'Rayquaza', 'Jirachi', 'Deoxys', 'Turtwig', 'Grotle', 'Torterra', 'Chimchar', 'Monferno', 'Infernape', 'Piplup', 'Prinplup', 'Empoleon', 'Starly', 'Staravia', 'Staraptor', 'Bidoof', 'Bibarel', 'Kricketot', 'Kricketune', 'Shinx', 'Luxio', 'Luxray', 'Budew', 'Roserade', 'Cranidos', 'Rampardos', 'Shieldon', 'Bastiodon', 'Burmy', 'Wormadam', 'Mothim', 'Combee', 'Vespiquen', 'Pachirisu', 'Buizel', 'Floatzel', 'Cherubi', 'Cherrim', 'Shellos', 'Gastrodon', 'Ambipom', 'Drifloon', 'Drifblim', 'Buneary', 'Lopunny', 'Mismagius', 'Honchkrow', 'Glameow', 'Purugly', 'Chingling', 'Stunky', 'Skuntank', 'Bronzor', 'Bronzong', 'Bonsly', 'Mime Jr.', 'Happiny', 'Chatot', 'Spiritomb', 'Gible', 'Gabite', 'Garchomp', 'Munchlax', 'Riolu', 'Lucario', 'Hippopotas', 'Hippowdon', 'Skorupi', 'Drapion', 'Croagunk', 'Toxicroak', 'Carnivine', 'Finneon', 'Lumineon', 'Mantyke', 'Snover', 'Abomasnow', 'Weavile', 'Magnezone', 'Lickilicky', 'Rhyperior', 'Tangrowth', 'Electivire', 'Magmortar', 'Togekiss', 'Yanmega', 'Leafeon', 'Glaceon', 'Gliscor', 'Mamoswine', 'Porygon-Z', 'Gallade', 'Probopass', 'Dusknoir', 'Froslass', 'Rotom', 'Uxie', 'Mesprit', 'Azelf', 'Dialga', 'Palkia', 'Heatran', 'Regigigas', 'Giratina', 'Cresselia', 'Phione', 'Manaphy', 'Darkrai', 'Shaymin', 'Arceus', 'Victini', 'Snivy', 'Servine', 'Serperior', 'Tepig', 'Pignite', 'Emboar', 'Oshawott', 'Dewott', 'Samurott', 'Patrat', 'Watchog', 'Lillipup', 'Herdier', 'Stoutland', 'Purrloin', 'Liepard', 'Pansage', 'Simisage', 'Pansear', 'Simisear', 'Panpour', 'Simipour', 'Munna', 'Musharna', 'Pidove', 'Tranquill', 'Unfezant', 'Blitzle', 'Zebstrika', 'Roggenrola', 'Boldore', 'Gigalith', 'Woobat', 'Swoobat', 'Drilbur', 'Excadrill', 'Audino', 'Timburr', 'Gurdurr', 'Conkeldurr', 'Tympole', 'Palpitoad', 'Seismitoad', 'Throh', 'Sawk', 'Sewaddle', 'Swadloon', 'Leavanny', 'Venipede', 'Whirlipede', 'Scolipede', 'Cottonee', 'Whimsicott', 'Petilil', 'Lilligant', 'Basculin', 'Sandile', 'Krokorok', 'Krookodile', 'Darumaka', 'Darmanitan', 'Maractus', 'Dwebble', 'Crustle', 'Scraggy', 'Scrafty', 'Sigilyph', 'Yamask', 'Cofagrigus', 'Tirtouga', 'Carracosta', 'Archen', 'Archeops', 'Trubbish', 'Garbodor', 'Zorua', 'Zoroark', 'Minccino', 'Cinccino', 'Gothita', 'Gothorita', 'Gothitelle', 'Solosis', 'Duosion', 'Reuniclus', 'Ducklett', 'Swanna', 'Vanillite', 'Vanillish', 'Vanilluxe', 'Deerling', 'Sawsbuck', 'Emolga', 'Karrablast', 'Escavalier', 'Foongus', 'Amoonguss', 'Frillish', 'Jellicent', 'Alomomola', 'Joltik', 'Galvantula', 'Ferroseed', 'Ferrothorn', 'Klink', 'Klang', 'Klinklang', 'Tynamo', 'Eelektrik', 'Eelektross', 'Elgyem', 'Beheeyem', 'Litwick', 'Lampent', 'Chandelure', 'Axew', 'Fraxure', 'Haxorus', 'Cubchoo', 'Beartic', 'Cryogonal', 'Shelmet', 'Accelgor', 'Stunfisk', 'Mienfoo', 'Mienshao', 'Druddigon', 'Golett', 'Golurk', 'Pawniard', 'Bisharp', 'Bouffalant', 'Rufflet', 'Braviary', 'Vullaby', 'Mandibuzz', 'Heatmor', 'Durant', 'Deino', 'Zweilous', 'Hydreigon', 'Larvesta', 'Volcarona', 'Cobalion', 'Terrakion', 'Virizion', 'Tornadus', 'Thundurus', 'Reshiram', 'Zekrom', 'Landorus', 'Kyurem', 'Keldeo', 'Meloetta', 'Genesect', 'Chespin', 'Quilladin', 'Chesnaught', 'Fennekin', 'Braixen', 'Delphox', 'Froakie', 'Frogadier', 'Greninja', 'Bunnelby', 'Diggersby', 'Fletchling', 'Fletchinder', 'Talonflame', 'Scatterbug', 'Spewpa', 'Vivillon', 'Litleo', 'Pyroar', 'Flabébé', 'Floette', 'Florges', 'Skiddo', 'Gogoat', 'Pancham', 'Pangoro', 'Furfrou', 'Espurr', 'Meowstic', 'Honedge', 'Doublade', 'Aegislash', 'Spritzee', 'Aromatisse', 'Swirlix', 'Slurpuff', 'Inkay', 'Malamar', 'Binacle', 'Barbaracle', 'Skrelp', 'Dragalge', 'Clauncher', 'Clawitzer', 'Helioptile', 'Heliolisk', 'Tyrunt', 'Tyrantrum', 'Amaura', 'Aurorus', 'Sylveon', 'Hawlucha', 'Dedenne', 'Carbink', 'Goomy', 'Sliggoo', 'Goodra', 'Klefki', 'Phantump', 'Trevenant', 'Pumpkaboo', 'Gourgeist', 'Bergmite', 'Avalugg', 'Noibat', 'Noivern', 'Xerneas', 'Yveltal', 'Zygarde', 'Diancie', 'Hoopa', 'Volcanion', 'Rowlet', 'Dartrix', 'Decidueye', 'Litten', 'Torracat', 'Incineroar', 'Popplio', 'Brionne', 'Primarina', 'Pikipek', 'Trumbeak', 'Toucannon', 'Yungoos', 'Gumshoos', 'Grubbin', 'Charjabug', 'Vikavolt', 'Crabrawler', 'Crabominable', 'Oricorio', 'Cutiefly', 'Ribombee', 'Rockruff', 'Lycanroc', 'Wishiwashi', 'Mareanie', 'Toxapex', 'Mudbray', 'Mudsdale', 'Dewpider', 'Araquanid', 'Fomantis', 'Lurantis', 'Morelull', 'Shiinotic', 'Salandit', 'Salazzle', 'Stufful', 'Bewear', 'Bounsweet', 'Steenee', 'Tsareena', 'Comfey', 'Oranguru', 'Passimian', 'Wimpod', 'Golisopod', 'Sandygast', 'Palossand', 'Pyukumuku', 'Type: Null', 'Silvally', 'Minior', 'Komala', 'Turtonator', 'Togedemaru', 'Mimikyu', 'Bruxish', 'Drampa', 'Dhelmise', 'Jangmo-o', 'Hakamo-o', 'Kommo-o', 'Tapu Koko', 'Tapu Lele', 'Tapu Bulu', 'Tapu Fini', 'Cosmog', 'Cosmoem', 'Solgaleo', 'Lunala', 'Nihilego', 'Buzzwole', 'Pheromosa', 'Xurkitree', 'Celesteela', 'Kartana', 'Guzzlord', 'Necrozma', 'Magearna', 'Marshadow', 'Poipole', 'Naganadel', 'Stakataka', 'Blacephalon', 'Zeraora', 'Meltan', 'Melmetal', 'Grookey', 'Thwackey', 'Rillaboom', 'Scorbunny', 'Raboot', 'Cinderace', 'Sobble', 'Drizzile', 'Inteleon', 'Skwovet', 'Greedent', 'Rookidee', 'Corvisquire', 'Corviknight', 'Blipbug', 'Dottler', 'Orbeetle', 'Nickit', 'Thievul', 'Gossifleur', 'Eldegoss', 'Wooloo', 'Dubwool', 'Chewtle', 'Drednaw', 'Yamper', 'Boltund', 'Rolycoly', 'Carkol', 'Coalossal', 'Applin', 'Flapple', 'Appletun', 'Silicobra', 'Sandaconda', 'Cramorant', 'Arrokuda', 'Barraskewda', 'Toxel', 'Toxtricity', 'Sizzlipede', 'Centiskorch', 'Clobbopus', 'Grapploct', 'Sinistea', 'Polteageist', 'Hatenna', 'Hattrem', 'Hatterene', 'Impidimp', 'Morgrem', 'Grimmsnarl', 'Obstagoon', 'Perrserker', 'Cursola', "Sirfetch'd", 'Mr. Rime', 'Runerigus', 'Milcery', 'Alcremie', 'Falinks', 'Pincurchin', 'Snom', 'Frosmoth', 'Stonjourner', 'Eiscue', 'Indeedee', 'Morpeko', 'Cufant', 'Copperajah', 'Dracozolt', 'Arctozolt', 'Dracovish', 'Arctovish', 'Duraludon', 'Dreepy', 'Drakloak', 'Dragapult', 'Zacian', 'Zamazenta', 'Eternatus', 'Kubfu', 'Urshifu', 'Zarude', 'Regieleki', 'Regidrago', 'Glastrier', 'Spectrier', 'Calyrex'];
let de_pokemonList = ['Bisasam', 'Bisaknosp', 'Bisaflor', 'Glumanda', 'Glutexo', 'Glurak', 'Schiggy', 'Schillok', 'Turtok', 'Raupy', 'Safcon', 'Smettbo', 'Hornliu', 'Kokuna', 'Bibor', 'Taubsi', 'Tauboga', 'Tauboss', 'Rattfratz', 'Rattikarl', 'Habitak', 'Ibitak', 'Rettan', 'Arbok', 'Pikachu', 'Raichu', 'Sandan', 'Sandamer', 'Nidoranf', 'Nidorina', 'Nidoqueen', 'Nidoranm', 'Nidorino', 'Nidoking', 'Piepi', 'Pixi', 'Vulpix', 'Vulnona', 'Pummeluff', 'Knuddeluff', 'Zubat', 'Golbat', 'Myrapla', 'Duflor', 'Giflor', 'Paras', 'Parasek', 'Bluzuk', 'Omot', 'Digda', 'Digdri', 'Mauzi', 'Snobilikat', 'Enton', 'Entoron', 'Menki', 'Rasaff', 'Fukano', 'Arkani', 'Quapsel', 'Quaputzi', 'Quappo', 'Abra', 'Kadabra', 'Simsala', 'Machollo', 'Maschock', 'Machomei', 'Knofensa', 'Ultrigaria', 'Sarzenia', 'Tentacha', 'Tentoxa', 'Kleinstein', 'Georok', 'Geowaz', 'Ponita', 'Gallopa', 'Flegmon', 'Lahmus', 'Magnetilo', 'Magneton', 'Porenta', 'Dodu', 'Dodri', 'Jurob', 'Jugong', 'Sleima', 'Sleimok', 'Muschas', 'Austos', 'Nebulak', 'Alpollo', 'Gengar', 'Onix', 'Traumato', 'Hypno', 'Krabby', 'Kingler', 'Voltobal', 'Lektrobal', 'Owei', 'Kokowei', 'Tragosso', 'Knogga', 'Kicklee', 'Nockchan', 'Schlurp', 'Smogon', 'Smogmog', 'Rihorn', 'Rizeros', 'Chaneira', 'Tangela', 'Kangama', 'Seeper', 'Seemon', 'Goldini', 'Golking', 'Sterndu', 'Starmie', 'Pantimos', 'Sichlor', 'Rossana', 'Elektek', 'Magmar', 'Pinsir', 'Tauros', 'Karpador', 'Garados', 'Lapras', 'Ditto', 'Evoli', 'Aquana', 'Blitza', 'Flamara', 'Porygon', 'Amonitas', 'Amoroso', 'Kabuto', 'Kabutops', 'Aerodactyl', 'Relaxo', 'Arktos', 'Zapdos', 'Lavados', 'Dratini', 'Dragonir', 'Dragoran', 'Mewtu', 'Mew', 'Endivie', 'Lorblatt', 'Meganie', 'Feurigel', 'Igelavar', 'Tornupto', 'Karnimani', 'Tyracroc', 'Impergator', 'Wiesor', 'Wiesenior', 'Hoothoot', 'Noctuh', 'Ledyba', 'Ledian', 'Webarak', 'Ariados', 'Iksbat', 'Lampi', 'Lanturn', 'Pichu', 'Pii', 'Fluffeluff', 'Togepi', 'Togetic', 'Natu', 'Xatu', 'Voltilamm', 'Waaty', 'Ampharos', 'Blubella', 'Marill', 'Azumarill', 'Mogelbaum', 'Quaxo', 'Hoppspross', 'Hubelupf', 'Papungha', 'Griffel', 'Sonnkern', 'Sonnflora', 'Yanma', 'Felino', 'Morlord', 'Psiana', 'Nachtara', 'Kramurx', 'Laschoking', 'Traunfugil', 'Icognito', 'Woingenau', 'Girafarig', 'Tannza', 'Forstellka', 'Dummisel', 'Skorgla', 'Stahlos', 'Snubbull', 'Granbull', 'Baldorfish', 'Scherox', 'Pottrott', 'Skaraborn', 'Sniebel', 'Teddiursa', 'Ursaring', 'Schneckmag', 'Magcargo', 'Quiekel', 'Keifel', 'Corasonn', 'Remoraid', 'Octillery', 'Botogel', 'Mantax', 'Panzaeron', 'Hunduster', 'Hundemon', 'Seedraking', 'Phanpy', 'Donphan', 'Porygon2', 'Damhirplex', 'Farbeagle', 'Rabauz', 'Kapoera', 'Kussilla', 'Elekid', 'Magby', 'Miltank', 'Heiteira', 'Raikou', 'Entei', 'Suicune', 'Larvitar', 'Pupitar', 'Despotar', 'Lugia', 'Ho-Oh', 'Celebi', 'Geckarbor', 'Reptain', 'Gewaldro', 'Flemmli', 'Jungglut', 'Lohgock', 'Hydropi', 'Moorabbel', 'Sumpex', 'Fiffyen', 'Magnayen', 'Zigzachs', 'Geradaks', 'Waumpel', 'Schaloko', 'Papinella', 'Panekon', 'Pudox', 'Loturzel', 'Lombrero', 'Kappalores', 'Samurzel', 'Blanas', 'Tengulist', 'Schwalbini', 'Schwalboss', 'Wingull', 'Pelipper', 'Trasla', 'Kirlia', 'Guardevoir', 'Gehweiher', 'Maskeregen', 'Knilz', 'Kapilz', 'Bummelz', 'Muntier', 'Letarking', 'Nincada', 'Ninjask', 'Ninjatom', 'Flurmel', 'Krakeelo', 'Krawumms', 'Makuhita', 'Hariyama', 'Azurill', 'Nasgnet', 'Eneco', 'Enekoro', 'Zobiris', 'Flunkifer', 'Stollunior', 'Stollrak', 'Stolloss', 'Meditie', 'Meditalis', 'Frizelbliz', 'Voltenso', 'Plusle', 'Minun', 'Volbeat', 'Illumise', 'Roselia', 'Schluppuck', 'Schlukwech', 'Kanivanha', 'Tohaido', 'Wailmer', 'Wailord', 'Camaub', 'Camerupt', 'Qurtel', 'Spoink', 'Groink', 'Pandir', 'Knacklion', 'Vibrava', 'Libelldra', 'Tuska', 'Noktuska', 'Wablu', 'Altaria', 'Sengo', 'Vipitis', 'Lunastein', 'Sonnfel', 'Schmerbe', 'Welsar', 'Krebscorps', 'Krebutack', 'Puppance', 'Lepumentas', 'Liliep', 'Wielie', 'Anorith', 'Armaldo', 'Barschwa', 'Milotic', 'Formeo', 'Kecleon', 'Shuppet', 'Banette', 'Zwirrlicht', 'Zwirrklop', 'Tropius', 'Palimpalim', 'Absol', 'Isso', 'Schneppke', 'Firnontor', 'Seemops', 'Seejong', 'Walraisa', 'Perlu', 'Aalabyss', 'Saganabyss', 'Relicanth', 'Liebiskus', 'Kindwurm', 'Draschel', 'Brutalanda', 'Tanhel', 'Metang', 'Metagross', 'Regirock', 'Regice', 'Registeel', 'Latias', 'Latios', 'Kyogre', 'Groudon', 'Rayquaza', 'Jirachi', 'Deoxys', 'Chelast', 'Chelcarain', 'Chelterrar', 'Panflam', 'Panpyro', 'Panferno', 'Plinfa', 'Pliprin', 'Impoleon', 'Staralili', 'Staravia', 'Staraptor', 'Bidiza', 'Bidifas', 'Zirpurze', 'Zirpeise', 'Sheinux', 'Luxio', 'Luxtra', 'Knospi', 'Roserade', 'Koknodon', 'Rameidon', 'Schilterus', 'Bollterus', 'Burmy', 'Burmadame', 'Moterpel', 'Wadribie', 'Honweisel', 'Pachirisu', 'Bamelin', 'Bojelin', 'Kikugi', 'Kinoso', 'Schalellos', 'Gastrodon', 'Ambidiffel', 'Driftlon', 'Drifzepeli', 'Haspiror', 'Schlapor', 'Traunmagil', 'Kramshef', 'Charmian', 'Shnurgarst', 'Klingplim', 'Skunkapuh', 'Skuntank', 'Bronzel', 'Bronzong', 'Mobai', 'Pantimimi', 'Wonneira', 'Plaudagei', 'Kryppuk', 'Kaumalat', 'Knarksel', 'Knakrack', 'Mampfaxo', 'Riolu', 'Lucario', 'Hippopotas', 'Hippoterus', 'Pionskora', 'Piondragi', 'Glibunkel', 'Toxiquak', 'Venuflibis', 'Finneon', 'Lumineon', 'Mantirps', 'Shnebedeck', 'Rexblisar', 'Snibunna', 'Magnezone', 'Schlurplek', 'Rihornior', 'Tangoloss', 'Elevoltek', 'Magbrant', 'Togekiss', 'Yanmega', 'Folipurba', 'Glaziola', 'Skorgro', 'Mamutel', 'Porygon-Z', 'Galagladi', 'Voluminas', 'Zwirrfinst', 'Frosdedje', 'Rotom', 'Selfe', 'Vesprit', 'Tobutz', 'Dialga', 'Palkia', 'Heatran', 'Regigigas', 'Giratina', 'Cresselia', 'Phione', 'Manaphy', 'Darkrai', 'Shaymin', 'Arceus', 'Victini', 'Serpifeu', 'Efoserp', 'Serpiroyal', 'Floink', 'Ferkokel', 'Flambirex', 'Ottaro', 'Zwottronin', 'Admurai', 'Nagelotz', 'Kukmarda', 'Yorkleff', 'Terribark', 'Bissbark', 'Felilou', 'Kleoparda', 'Vegimak', 'Vegichita', 'Grillmak', 'Grillchita', 'Sodamak', 'Sodachita', 'Somniam', 'Somnivora', 'Dusselgurr', 'Navitaub', 'Fasasnob', 'Elezeba', 'Zebritz', 'Kiesling', 'Sedimantur', 'Brockoloss', 'Fleknoil', 'Fletiamo', 'Rotomurf', 'Stalobor', 'Ohrdoch', 'Praktibalk', 'Strepoli', 'Meistagrif', 'Schallquap', 'Mebrana', 'Branawarz', 'Jiutesto', 'Karadonis', 'Strawickl', 'Folikon', 'Matrifol', 'Toxiped', 'Rollum', 'Cerapendra', 'Waumboll', 'Elfun', 'Lilminip', 'Dressella', 'Barschuft', 'Ganovil', 'Rokkaiman', 'Rabigator', 'Flampion', 'Flampivian', 'Maracamba', 'Lithomith', 'Castellith', 'Zurrokex', 'Irokex', 'Symvolara', 'Makabaja', 'Echnatoll', 'Galapaflos', 'Karippas', 'Flapteryx', 'Aeropteryx', 'Unratütox', 'Deponitox', 'Zorua', 'Zoroark', 'Picochilla', 'Chillabell', 'Mollimorba', 'Hypnomorba', 'Morbitesse', 'Monozyto', 'Mitodos', 'Zytomega', 'Piccolente', 'Swaroness', 'Gelatini', 'Gelatroppo', 'Gelatwino', 'Sesokitz', 'Kronjuwild', 'Emolga', 'Laukaps', 'Cavalanzas', 'Tarnpignon', 'Hutsassa', 'Quabbel', 'Apoquallyp', 'Mamolida', 'Wattzapf', 'Voltula', 'Kastadur', 'Tentantel', 'Klikk', 'Kliklak', 'Klikdiklak', 'Zapplardin', 'Zapplalek', 'Zapplarang', 'Pygraulon', 'Megalon', 'Lichtel', 'Laternecto', 'Skelabra', 'Milza', 'Sharfax', 'Maxax', 'Petznief', 'Siberio', 'Frigometri', 'Schnuthelm', 'Hydragil', 'Flunschlik', 'Lin-Fu', 'Wie-Shu', 'Shardrago', 'Golbit', 'Golgantes', 'Gladiantri', 'Caesurio', 'Bisofank', 'Geronimatz', 'Washakwil', 'Skallyk', 'Grypheldis', 'Furnifraß', 'Fermicula', 'Kapuno', 'Duodino', 'Trikephalo', 'Ignivor', 'Ramoth', 'Kobalium', 'Terrakium', 'Viridium', 'Boreos', 'Voltolos', 'Reshiram', 'Zekrom', 'Demeteros', 'Kyurem', 'Keldeo', 'Meloetta', 'Genesect', 'Igamaro', 'Igastarnish', 'Brigaron', 'Fynx', 'Rutena', 'Fennexis', 'Froxy', 'Amphizel', 'Quajutsu', 'Scoppel', 'Grebbit', 'Dartiri', 'Dartignis', 'Fiaro', 'Purmel', 'Puponcho', 'Vivillon', 'Leufeo', 'Pyroleo', 'Flabébé', 'Floette', 'Florges', 'Mähikel', 'Chevrumm', 'Pam-Pam', 'Pandagro', 'Coiffwaff', 'Psiau', 'Psiaugon', 'Gramokles', 'Duokles', 'Durengard', 'Parfi', 'Parfinesse', 'Flauschling', 'Sabbaione', 'Iscalar', 'Calamanero', 'Bithora', 'Thanathora', 'Algitt', 'Tandrak', 'Scampisto', 'Wummer', 'Eguana', 'Elezard', 'Balgoras', 'Monargoras', 'Amarino', 'Amagarga', 'Feelinara', 'Resladero', 'Dedenne', 'Rocara', 'Viscora', 'Viscargot', 'Viscogon', 'Clavion', 'Paragoni', 'Trombork', 'Irrbis', 'Pumpdjinn', 'Arktip', 'Arktilas', 'eF-eM', 'UHaFnir', 'Xerneas', 'Yveltal', 'Zygarde', 'Diancie', 'Hoopa', 'Volcanion', 'Bauz', 'Arboretoss', 'Silvarro', 'Flamiau', 'Miezunder', 'Fuegro', 'Robball', 'Marikeck', 'Primarene', 'Peppeck', 'Trompeck', 'Tukanon', 'Mangunior', 'Manguspektor', 'Mabula', 'Akkup', 'Donarion', 'Krabbox', 'Krawell', 'Choreogel', 'Wommel', 'Bandelby', 'Wuffels', 'Wolwerock', 'Lusardin', 'Garstella', 'Aggrostella', 'Pampuli', 'Pampross', 'Araqua', 'Aranestro', 'Imantis', 'Mantidea', 'Bubungus', 'Lamellux', 'Molunk', 'Amfira', 'Velursi', 'Kosturso', 'Frubberl', 'Frubaila', 'Fruyal', 'Curelei', 'Kommandutan', 'Quartermak', 'Reißlaus', 'Tectass', 'Sankabuh', 'Colossand', 'Gufa', 'Typ:Null', 'Amigento', 'Meteno', 'Koalelu', 'Tortunator', 'Togedemaru', 'Mimigma', 'Knirfish', 'Sen-Long', 'Moruda', 'Miniras', 'Mediras', 'Grandiras', 'Kapu-Riki', 'Kapu-Fala', 'Kapu-Toro', 'Kapu-Kime', 'Cosmog', 'Cosmovum', 'Solgaleo', 'Lunala', 'Anego', 'Masskito', 'Schabelle', 'Voltriant', 'Kaguron', 'Katagami', 'Schlingking', 'Necrozma', 'Magearna', 'Marshadow', 'Venicro', 'Agoyon', 'Muramura', 'Kopplosio', 'Zeraora', 'Meltan', 'Melmetal', 'Chimpep', 'Chimstix', 'Gortrom', 'Hopplo', 'Kickerlo', 'Liberlo', 'Memmeon', 'Phlegleon', 'Intelleon', 'Raffel', 'Schlaraffel', 'Meikro', 'Kranoviz', 'Krarmor', 'Sensect', 'Keradar', 'Maritellit', 'Kleptifux', 'Gaunux', 'Cottini', 'Cottomi', 'Wolly', 'Zwollock', 'Kamehaps', 'Kamalm', 'Voldi', 'Bellektro', 'Klonkett', 'Wagong', 'Montecarbo', 'Knapfel', 'Drapfel', 'Schlapfel', 'Salanga', 'Sanaconda', 'Urgl', 'Pikuda', 'Barrakiefa', 'Toxel', 'Riffex', 'Thermopod', 'Infernopod', 'Klopptopus', 'Kaocto', 'Fatalitee', 'Mortipot', 'Brimova', 'Brimano', 'Silembrim', 'Bähmon', 'Pelzebub', 'Olangaa', 'Barrikadax', 'Mauzinger', 'Gorgasonn', 'Lauchzelot', 'Pantifrost', 'Oghnatoll', 'Hokumil', 'Pokusan', 'Legios', 'Britzigel', 'Snomnom', 'Mottineva', 'Humanolith', 'Kubuin', 'Servol', 'Morpeko', 'Kupfanti', 'Patinaraja', 'Lectragon', 'Lecryodon', 'Pescragon', 'Pescryodon', 'Duraludon', 'Grolldra', 'Phandra', 'Katapuldra', 'Zacian', 'Zamazenta', 'Endynalos', 'Dakuma', 'Wulaosu', 'Zarude', 'Regieleki', 'Regidrago', 'Polaross', 'Phantoross', 'Coronospa']
let fr_pokemonList = ['Bulbizarre', 'Herbizarre', 'Florizarre', 'Salamèche', 'Reptincel', 'Dracaufeu', 'Carapuce', 'Carabaffe', 'Tortank', 'Chenipan', 'Chrysacier', 'Papilusion', 'Aspicot', 'Coconfort', 'Dardargnan', 'Roucool', 'Roucoups', 'Roucarnage', 'Rattata', 'Rattatac', 'Piafabec', 'Rapasdepic', 'Abo', 'Arbok', 'Pikachu', 'Raichu', 'Sabelette', 'Sablaireau', 'Nidoranf', 'Nidorina', 'Nidoqueen', 'Nidoranm', 'Nidorino', 'Nidoking', 'Mélofée', 'Mélodelfe', 'Goupix', 'Feunard', 'Rondoudou', 'Grodoudou', 'Nosferapti', 'Nosferalto', 'Mystherbe', 'Ortide', 'Rafflesia', 'Paras', 'Parasect', 'Mimitoss', 'Aéromite', 'Taupiqueur', 'Triopikeur', 'Miaouss', 'Persian', 'Psykokwak', 'Akwakwak', 'Férosinge', 'Colossinge', 'Caninos', 'Arcanin', 'Ptitard', 'Têtarte', 'Tartard', 'Abra', 'Kadabra', 'Alakazam', 'Machoc', 'Machopeur', 'Mackogneur', 'Chétiflor', 'Boustiflor', 'Empiflor', 'Tentacool', 'Tentacruel', 'Racaillou', 'Gravalanch', 'Grolem', 'Ponyta', 'Galopa', 'Ramoloss', 'Flagadoss', 'Magnéti', 'Magnéton', 'Canarticho', 'Doduo', 'Dodrio', 'Otaria', 'Lamantine', 'Tadmorv', 'Grotadmorv', 'Kokiyas', 'Crustabri', 'Fantominus', 'Spectrum', 'Ectoplasma', 'Onix', 'Soporifik', 'Hypnomade', 'Krabby', 'Krabboss', 'Voltorbe', 'Électrode', 'Noeunoeuf', 'Noadkoko', 'Osselait', 'Ossatueur', 'Kicklee', 'Tygnon', 'Excelangue', 'Smogo', 'Smogogo', 'Rhinocorne', 'Rhinoféros', 'Leveinard', 'Saquedeneu', 'Kangourex', 'Hypotrempe', 'Hypocéan', 'Poissirène', 'Poissoroy', 'Stari', 'Staross', 'M. Mime', 'Insécateur', 'Lippoutou', 'Élektek', 'Magmar', 'Scarabrute', 'Tauros', 'Magicarpe', 'Léviator', 'Lokhlass', 'Métamorph', 'Évoli', 'Aquali', 'Voltali', 'Pyroli', 'Porygon', 'Amonita', 'Amonistar', 'Kabuto', 'Kabutops', 'Ptéra', 'Ronflex', 'Artikodin', 'Électhor', 'Sulfura', 'Minidraco', 'Draco', 'Dracolosse', 'Mewtwo', 'Mew', 'Germignon', 'Macronium', 'Méganium', 'Héricendre', 'Feurisson', 'Typhlosion', 'Kaiminus', 'Crocrodil', 'Aligatueur', 'Fouinette', 'Fouinar', 'Hoothoot', 'Noarfang', 'Coxy', 'Coxyclaque', 'Mimigal', 'Migalos', 'Nostenfer', 'Loupio', 'Lanturn', 'Pichu', 'Mélo', 'Toudoudou', 'Togepi', 'Togetic', 'Natu', 'Xatu', 'Wattouat', 'Lainergie', 'Pharamp', 'Joliflor', 'Marill', 'Azumarill', 'Simularbre', 'Tarpaud', 'Granivol', 'Floravol', 'Cotovol', 'Capumain', 'Tournegrin', 'Héliatronc', 'Yanma', 'Axoloto', 'Maraiste', 'Mentali', 'Noctali', 'Cornèbre', 'Roigada', 'Feuforêve', 'Zarbi', 'Qulbutoké', 'Girafarig', 'Pomdepik', 'Foretress', 'Insolourdo', 'Scorplane', 'Steelix', 'Snubbull', 'Granbull', 'Qwilfish', 'Cizayox', 'Caratroc', 'Scarhino', 'Farfuret', 'Teddiursa', 'Ursaring', 'Limagma', 'Volcaropod', 'Marcacrin', 'Cochignon', 'Corayon', 'Rémoraid', 'Octillery', 'Cadoizo', 'Démanta', 'Airmure', 'Malosse', 'Démolosse', 'Hyporoi', 'Phanpy', 'Donphan', 'Porygon2', 'Cerfrousse', 'Queulorior', 'Debugant', 'Kapoera', 'Lippouti', 'Élekid', 'Magby', 'Écrémeuh', 'Leuphorie', 'Raikou', 'Entei', 'Suicune', 'Embrylex', 'Ymphect', 'Tyranocif', 'Lugia', 'Ho-Oh', 'Celebi', 'Arcko', 'Massko', 'Jungko', 'Poussifeu', 'Galifeu', 'Braségali', 'Gobou', 'Flobio', 'Laggron', 'Medhyèna', 'Grahyèna', 'Zigzaton', 'Linéon', 'Chenipotte', 'Armulys', 'Charmillon', 'Blindalys', 'Papinox', 'Nénupiot', 'Lombre', 'Ludicolo', 'Grainipiot', 'Pifeuil', 'Tengalice', 'Nirondelle', 'Hélédelle', 'Goélise', 'Bekipan', 'Tarsal', 'Kirlia', 'Gardevoir', 'Arakdo', 'Maskadra', 'Balignon', 'Chapignon', 'Parecool', 'Vigoroth', 'Monaflèmit', 'Ningale', 'Ninjask', 'Munja', 'Chuchmur', 'Ramboum', 'Brouhabam', 'Makuhita', 'Hariyama', 'Azurill', 'Tarinor', 'Skitty', 'Delcatty', 'Ténéfix', 'Mysdibule', 'Galekid', 'Galegon', 'Galeking', 'Méditikka', 'Charmina', 'Dynavolt', 'Élecsprint', 'Posipi', 'Négapi', 'Muciole', 'Lumivole', 'Rosélia', 'Gloupti', 'Avaltout', 'Carvanha', 'Sharpedo', 'Wailmer', 'Wailord', 'Chamallot', 'Camérupt', 'Chartor', 'Spoink', 'Groret', 'Spinda', 'Kraknoix', 'Vibraninf', 'Libégon', 'Cacnea', 'Cacturne', 'Tylton', 'Altaria', 'Mangriff', 'Séviper', 'Séléroc', 'Solaroc', 'Barloche', 'Barbicha', 'Écrapince', 'Colhomard', 'Balbuto', 'Kaorine', 'Lilia', 'Vacilys', 'Anorith', 'Armaldo', 'Barpau', 'Milobellus', 'Morphéo', 'Kecleon', 'Polichombr', 'Branette', 'Skelénox', 'Téraclope', 'Tropius', 'Éoko', 'Absol', 'Okéoké', 'Stalgamin', 'Oniglali', 'Obalie', 'Phogleur', 'Kaimorse', 'Coquiperl', 'Serpang', 'Rosabyss', 'Relicanth', 'Lovdisc', 'Draby', 'Drackhaus', 'Drattak', 'Terhal', 'Métang', 'Métalosse', 'Regirock', 'Regice', 'Registeel', 'Latias', 'Latios', 'Kyogre', 'Groudon', 'Rayquaza', 'Jirachi', 'Deoxys', 'Tortipouss', 'Boskara', 'Torterra', 'Ouisticram', 'Chimpenfeu', 'Simiabraz', 'Tiplouf', 'Prinplouf', 'Pingoléon', 'Étourmi', 'Étourvol', 'Étouraptor', 'Keunotor', 'Castorno', 'Crikzik', 'Mélokrik', 'Lixy', 'Luxio', 'Luxray', 'Rozbouton', 'Roserade', 'Kranidos', 'Charkos', 'Dinoclier', 'Bastiodon', 'Cheniti', 'Cheniselle', 'Papilord', 'Apitrini', 'Apireine', 'Pachirisu', 'Mustébouée', 'Mustéflott', 'Ceribou', 'Ceriflor', 'Sancoki', 'Tritosor', 'Capidextre', 'Baudrive', 'Grodrive', 'Laporeille', 'Lockpin', 'Magirêve', 'Corboss', 'Chaglam', 'Chaffreux', 'Korillon', 'Moufouette', 'Moufflair', 'Archéomire', 'Archéodong', 'Manzaï', 'Mime Jr.', 'Ptiravi', 'Pijako', 'Spiritomb', 'Griknot', 'Carmache', 'Carchacrok', 'Goinfrex', 'Riolu', 'Lucario', 'Hippopotas', 'Hippodocus', 'Rapion', 'Drascore', 'Cradopaud', 'Coatox', 'Vortente', 'Écayon', 'Luminéon', 'Babimanta', 'Blizzi', 'Blizzaroi', 'Dimoret', 'Magnézone', 'Coudlangue', 'Rhinastoc', 'Bouldeneu', 'Élekable', 'Maganon', 'Togekiss', 'Yanmega', 'Phyllali', 'Givrali', 'Scorvol', 'Mammochon', 'Porygon-Z', 'Gallame', 'Tarinorme', 'Noctunoir', 'Momartik', 'Motisma', 'Créhelf', 'Créfollet', 'Créfadet', 'Dialga', 'Palkia', 'Heatran', 'Regigigas', 'Giratina', 'Cresselia', 'Phione', 'Manaphy', 'Darkrai', 'Shaymin', 'Arceus', 'Victini', 'Vipélierre', 'Lianaja', 'Majaspic', 'Gruikui', 'Grotichon', 'Roitiflam', 'Moustillon', 'Mateloutre', 'Clamiral', 'Ratentif', 'Miradar', 'Ponchiot', 'Ponchien', 'Mastouffe', 'Chacripan', 'Léopardus', 'Feuillajou', 'Feuiloutan', 'Flamajou', 'Flamoutan', 'Flotajou', 'Flotoutan', 'Munna', 'Mushana', 'Poichigeon', 'Colombeau', 'Déflaisan', 'Zébibron', 'Zéblitz', 'Nodulithe', 'Géolithe', 'Gigalithe', 'Chovsourir', 'Rhinolove', 'Rototaupe', 'Minotaupe', 'Nanméouïe', 'Charpenti', 'Ouvrifier', 'Bétochef', 'Tritonde', 'Batracné', 'Crapustule', 'Judokrak', 'Karaclée', 'Larveyette', 'Couverdure', 'Manternel', 'Venipatte', 'Scobolide', 'Brutapode', 'Doudouvet', 'Farfaduvet', 'Chlorobule', 'Fragilady', 'Bargantua', 'Mascaïman', 'Escroco', 'Crocorible', 'Darumarond', 'Darumacho', 'Maracachi', 'Crabicoque', 'Crabaraque', 'Baggiguane', 'Baggaïd', 'Cryptéro', 'Tutafeh', 'Tutankafer', 'Carapagos', 'Mégapagos', 'Arkéapti', 'Aéroptéryx', 'Miamiasme', 'Miasmax', 'Zorua', 'Zoroark', 'Chinchidou', 'Pashmilla', 'Scrutella', 'Mesmérella', 'Sidérella', 'Nucléos', 'Méios', 'Symbios', 'Couaneton', 'Lakmécygne', 'Sorbébé', 'Sorboul', 'Sorbouboul', 'Vivaldaim', 'Haydaim', 'Emolga', 'Carabing', 'Lançargot', 'Trompignon', 'Gaulet', 'Viskuse', 'Moyade', 'Mamanbo', 'Statitik', 'Mygavolt', 'Grindur', 'Noacier', 'Tic', 'Clic', 'Cliticlic', 'Anchwatt', 'Lampéroie', 'Ohmassacre', 'Lewsor', 'Neitram', 'Funécire', 'Mélancolux', 'Lugulabre', 'Coupenotte', 'Incisache', 'Tranchodon', 'Polarhume', 'Polagriffe', 'Hexagel', 'Escargaume', 'Limaspeed', 'Limonde', 'Kungfouine', 'Shaofouine', 'Drakkarmin', 'Gringolem', 'Golemastoc', 'Scalpion', 'Scalproie', 'Frison', 'Furaiglon', 'Gueriaigle', 'Vostourno', 'Vaututrice', 'Aflamanoir', 'Fermite', 'Solochi', 'Diamat', 'Trioxhydre', 'Pyronille', 'Pyrax', 'Cobaltium', 'Terrakium', 'Viridium', 'Boréas', 'Fulguris', 'Reshiram', 'Zekrom', 'Démétéros', 'Kyurem', 'Keldeo', 'Meloetta', 'Genesect', 'Marisson', 'Boguérisse', 'Blindépique', 'Feunnec', 'Roussil', 'Goupelin', 'Grenousse', 'Croâporal', 'Amphinobi', 'Sapereau', 'Excavarenne', 'Passerouge', 'Braisillon', 'Flambusard', 'Lépidonille', 'Pérégrain', 'Prismillon', 'Hélionceau', 'Némélios', 'Flabébé', 'Floette', 'Florges', 'Cabriolaine', 'Chevroum', 'Pandespiègle', 'Pandarbare', 'Couafarel', 'Psystigri', 'Mistigrix', 'Monorpale', 'Dimoclès', 'Exagide', 'Fluvetin', 'Cocotine', 'Sucroquin', 'Cupcanaille', 'Sepiatop', 'Sepiatroce', 'Opermine', 'Golgopathe', 'Venalgue', 'Kravarech', 'Flingouste', 'Gamblast', 'Galvaran', 'Iguolta', 'Ptyranidur', 'Rexillius', 'Amagara', 'Dragmara', 'Nymphali', 'Brutalibré', 'Dedenne', 'Strassie', 'Mucuscule', 'Colimucus', 'Muplodocus', 'Trousselin', 'Brocélôme', 'Desséliande', 'Pitrouille', 'Banshitrouye', 'Grelaçon', 'Séracrawl', 'Sonistrelle', 'Bruyverne', 'Xerneas', 'Yveltal', 'Zygarde', 'Diancie', 'Hoopa', 'Volcanion', 'Brindibou', 'Efflèche', 'Archéduc', 'Flamiaou', 'Matoufeu', 'Félinferno', 'Otaquin', 'Otarlette', 'Oratoria', 'Picassaut', 'Piclairon', 'Bazoucan', 'Manglouton', 'Argouste', 'Larvibule', 'Chrysapile', 'Lucanon', 'Crabagarre', 'Crabominable', 'Plumeline', 'Bombydou', 'Rubombelle', 'Rocabot', 'Lougaroc', 'Froussardine', 'Vorastérie', 'Prédastérie', 'Tiboudet', 'Bourrinos', 'Araqua', 'Tarenbulle', 'Mimantis', 'Floramantis', 'Spododo', 'Lampignon', 'Tritox', 'Malamandre', 'Nounourson', 'Chelours', 'Croquine', 'Candine', 'Sucreine', 'Guérilande', 'Gouroutan', 'Quartermac', 'Sovkipou', 'Sarmuraï', 'Bacabouh', 'Trépassable', 'Concombaffe', 'Type:0', 'Silvallié', 'Météno', 'Dodoala', 'Boumata', 'Togedemaru', 'Mimiqui', 'Denticrisse', 'Draïeul', 'Sinistrail', 'Bébécaille', 'Écaïd', 'Ékaïser', 'Tokorico', 'Tokopiyon', 'Tokotoro', 'Tokopisco', 'Cosmog', 'Cosmovum', 'Solgaleo', 'Lunala', 'Zéroïd', 'Mouscoto', 'Cancrelove', 'Câblifère', 'Bamboiselle', 'Katagami', 'Engloutyran', 'Necrozma', 'Magearna', 'Marshadow', 'Vémini', 'Mandrillon', 'Ama-Ama', 'Pierroteknik', 'Zeraora', 'Meltan', 'Melmetal', 'Ouistempo', 'Badabouin', 'Gorythmic', 'Flambino', 'Lapyro', 'Pyrobut', 'Larméléon', 'Arrozard', 'Lézargus', 'Rongourmand', 'Rongrigou', 'Minisange', 'Bleuseille', 'Corvaillus', 'Larvadar', 'Coléodôme', 'Astronelle', 'Goupilou', 'Roublenard', 'Tournicoton', 'Blancoton', 'Moumouton', 'Moumouflon', 'Khélocrok', 'Torgamord', 'Voltoutou', 'Fulgudog', 'Charbi', 'Wagomine', 'Monthracite', 'Verpom', 'Pomdrapi', 'Dratatin', 'Dunaja', 'Dunaconda', 'Nigosier', 'Embrochet', 'Hastacuda', 'Toxizap', 'Salarsen', 'Grillepattes', 'Scolocendre', 'Poulpaf', 'Krakos', 'Théffroi', 'Polthégeist', 'Bibichut', 'Chapotus', 'Sorcilence', 'Grimalin', 'Fourbelin', 'Angoliath', 'Ixon', 'Berserkatt', 'Corayôme', 'Palarticho', 'M. Glaquette', 'Tutétékri', 'Crèmy', 'Charmilly', 'Hexadron', 'Wattapik', 'Frissonille', 'Beldeneige', 'Dolman', 'Bekaglaçon', 'Wimessir', 'Morpeko', 'Charibari', 'Pachyradjah', 'Galvagon', 'Galvagla', 'Hydragon', 'Hydragla', 'Duralugon', 'Fantyrm', 'Dispareptil', 'Lanssorien', 'Zacian', 'Zamazenta', 'Éthernatos', 'Wushours', 'Shifours', 'Zarude', 'Regieleki', 'Regidrago', 'Blizzeval', 'Spectreval', 'Sylveroy']
let ja_pokemonList = ['フシギダネ', 'フシギソウ', 'フシギバナ', 'ヒトカゲ', 'リザード', 'リザードン', 'ゼニガメ', 'カメール', 'カメックス', 'キャタピー', 'トランセル', 'バタフリー', 'ビードル', 'コクーン', 'スピアー', 'ポッポ', 'ピジョン', 'ピジョット', 'コラッタ', 'ラッタ', 'オニスズメ', 'オニドリル', 'アーボ', 'アーボック', 'ピカチュウ', 'ライチュウ', 'サンド', 'サンドパン', 'ニドランf', 'ニドリーナ', 'ニドクイン', 'ニドランm', 'ニドリーノ', 'ニドキング', 'ピッピ', 'ピクシー', 'ロコン', 'キュウコン', 'プリン', 'プクリン', 'ズバット', 'ゴルバット', 'ナゾノクサ', 'クサイハナ', 'ラフレシア', 'パラス', 'パラセクト', 'コンパン', 'モルフォン', 'ディグダ', 'ダグトリオ', 'ニャース', 'ペルシアン', 'コダック', 'ゴルダック', 'マンキー', 'オコリザル', 'ガーディ', 'ウインディ', 'ニョロモ', 'ニョロゾ', 'ニョロボン', 'ケーシィ', 'ユンゲラー', 'フーディン', 'ワンリキー', 'ゴーリキー', 'カイリキー', 'マダツボミ', 'ウツドン', 'ウツボット', 'メノクラゲ', 'ドククラゲ', 'イシツブテ', 'ゴローン', 'ゴローニャ', 'ポニータ', 'ギャロップ', 'ヤドン', 'ヤドラン', 'コイル', 'レアコイル', 'カモネギ', 'ドードー', 'ドードリオ', 'パウワウ', 'ジュゴン', 'ベトベター', 'ベトベトン', 'シェルダー', 'パルシェン', 'ゴース', 'ゴースト', 'ゲンガー', 'イワーク', 'スリープ', 'スリーパー', 'クラブ', 'キングラー', 'ビリリダマ', 'マルマイン', 'タマタマ', 'ナッシー', 'カラカラ', 'ガラガラ', 'サワムラー', 'エビワラー', 'ベロリンガ', 'ドガース', 'マタドガス', 'サイホーン', 'サイドン', 'ラッキー', 'モンジャラ', 'ガルーラ', 'タッツー', 'シードラ', 'トサキント', 'アズマオウ', 'ヒトデマン', 'スターミー', 'バリヤード', 'ストライク', 'ルージュラ', 'エレブー', 'ブーバー', 'カイロス', 'ケンタロス', 'コイキング', 'ギャラドス', 'ラプラス', 'メタモン', 'イーブイ', 'シャワーズ', 'サンダース', 'ブースター', 'ポリゴン', 'オムナイト', 'オムスター', 'カブト', 'カブトプス', 'プテラ', 'カビゴン', 'フリーザー', 'サンダー', 'ファイヤー', 'ミニリュウ', 'ハクリュー', 'カイリュー', 'ミュウツー', 'ミュウ', 'チコリータ', 'ベイリーフ', 'メガニウム', 'ヒノアラシ', 'マグマラシ', 'バクフーン', 'ワニノコ', 'アリゲイツ', 'オーダイル', 'オタチ', 'オオタチ', 'ホーホー', 'ヨルノズク', 'レディバ', 'レディアン', 'イトマル', 'アリアドス', 'クロバット', 'チョンチー', 'ランターン', 'ピチュー', 'ピィ', 'ププリン', 'トゲピー', 'トゲチック', 'ネイティ', 'ネイティオ', 'メリープ', 'モココ', 'デンリュウ', 'キレイハナ', 'マリル', 'マリルリ', 'ウソッキー', 'ニョロトノ', 'ハネッコ', 'ポポッコ', 'ワタッコ', 'エイパム', 'ヒマナッツ', 'キマワリ', 'ヤンヤンマ', 'ウパー', 'ヌオー', 'エーフィ', 'ブラッキー', 'ヤミカラス', 'ヤドキング', 'ムウマ', 'アンノーン', 'ソーナンス', 'キリンリキ', 'クヌギダマ', 'フォレトス', 'ノコッチ', 'グライガー', 'ハガネール', 'ブルー', 'グランブル', 'ハリーセン', 'ハッサム', 'ツボツボ', 'ヘラクロス', 'ニューラ', 'ヒメグマ', 'リングマ', 'マグマッグ', 'マグカルゴ', 'ウリムー', 'イノムー', 'サニーゴ', 'テッポウオ', 'オクタン', 'デリバード', 'マンタイン', 'エアームド', 'デルビル', 'ヘルガー', 'キングドラ', 'ゴマゾウ', 'ドンファン', 'ポリゴン２', 'オドシシ', 'ドーブル', 'バルキー', 'カポエラー', 'ムチュール', 'エレキッド', 'ブビィ', 'ミルタンク', 'ハピナス', 'ライコウ', 'エンテイ', 'スイクン', 'ヨーギラス', 'サナギラス', 'バンギラス', 'ルギア', 'ホウオウ', 'セレビィ', 'キモリ', 'ジュプトル', 'ジュカイン', 'アチャモ', 'ワカシャモ', 'バシャーモ', 'ミズゴロウ', 'ヌマクロー', 'ラグラージ', 'ポチエナ', 'グラエナ', 'ジグザグマ', 'マッスグマ', 'ケムッソ', 'カラサリス', 'アゲハント', 'マユルド', 'ドクケイル', 'ハスボー', 'ハスブレロ', 'ルンパッパ', 'タネボー', 'コノハナ', 'ダーテング', 'スバメ', 'オオスバメ', 'キャモメ', 'ペリッパー', 'ラルトス', 'キルリア', 'サーナイト', 'アメタマ', 'アメモース', 'キノココ', 'キノガッサ', 'ナマケロ', 'ヤルキモノ', 'ケッキング', 'ツチニン', 'テッカニン', 'ヌケニン', 'ゴニョニョ', 'ドゴーム', 'バクオング', 'マクノシタ', 'ハリテヤマ', 'ルリリ', 'ノズパス', 'エネコ', 'エネコロロ', 'ヤミラミ', 'クチート', 'ココドラ', 'コドラ', 'ボスゴドラ', 'アサナン', 'チャーレム', 'ラクライ', 'ライボルト', 'プラスル', 'マイナン', 'バルビート', 'イルミーゼ', 'ロゼリア', 'ゴクリン', 'マルノーム', 'キバニア', 'サメハダー', 'ホエルコ', 'ホエルオー', 'ドンメル', 'バクーダ', 'コータス', 'バネブー', 'ブーピッグ', 'パッチール', 'ナックラー', 'ビブラーバ', 'フライゴン', 'サボネア', 'ノクタス', 'チルット', 'チルタリス', 'ザングース', 'ハブネーク', 'ルナトーン', 'ソルロック', 'ドジョッチ', 'ナマズン', 'ヘイガニ', 'シザリガー', 'ヤジロン', 'ネンドール', 'リリーラ', 'ユレイドル', 'アノプス', 'アーマルド', 'ヒンバス', 'ミロカロス', 'ポワルン', 'カクレオン', 'カゲボウズ', 'ジュペッタ', 'ヨマワル', 'サマヨール', 'トロピウス', 'チリーン', 'アブソル', 'ソーナノ', 'ユキワラシ', 'オニゴーリ', 'タマザラシ', 'トドグラー', 'トドゼルガ', 'パールル', 'ハンテール', 'サクラビス', 'ジーランス', 'ラブカス', 'タツベイ', 'コモルー', 'ボーマンダ', 'ダンバル', 'メタング', 'メタグロス', 'レジロック', 'レジアイス', 'レジスチル', 'ラティアス', 'ラティオス', 'カイオーガ', 'グラードン', 'レックウザ', 'ジラーチ', 'デオキシス', 'ナエトル', 'ハヤシガメ', 'ドダイトス', 'ヒコザル', 'モウカザル', 'ゴウカザル', 'ポッチャマ', 'ポッタイシ', 'エンペルト', 'ムックル', 'ムクバード', 'ムクホーク', 'ビッパ', 'ビーダル', 'コロボーシ', 'コロトック', 'コリンク', 'ルクシオ', 'レントラー', 'スボミー', 'ロズレイド', 'ズガイドス', 'ラムパルド', 'タテトプス', 'トリデプス', 'ミノムッチ', 'ミノマダム', 'ガーメイル', 'ミツハニー', 'ビークイン', 'パチリス', 'ブイゼル', 'フローゼル', 'チェリンボ', 'チェリム', 'カラナクシ', 'トリトドン', 'エテボース', 'フワンテ', 'フワライド', 'ミミロル', 'ミミロップ', 'ムウマージ', 'ドンカラス', 'ニャルマー', 'ブニャット', 'リーシャン', 'スカンプー', 'スカタンク', 'ドーミラー', 'ドータクン', 'ウソハチ', 'マネネ', 'ピンプク', 'ペラップ', 'ミカルゲ', 'フカマル', 'ガバイト', 'ガブリアス', 'ゴンベ', 'リオル', 'ルカリオ', 'ヒポポタス', 'カバルドン', 'スコルピ', 'ドラピオン', 'グレッグル', 'ドクロッグ', 'マスキッパ', 'ケイコウオ', 'ネオラント', 'タマンタ', 'ユキカブリ', 'ユキノオー', 'マニューラ', 'ジバコイル', 'ベロベルト', 'ドサイドン', 'モジャンボ', 'エレキブル', 'ブーバーン', 'トゲキッス', 'メガヤンマ', 'リーフィア', 'グレイシア', 'グライオン', 'マンムー', 'ポリゴンＺ', 'エルレイド', 'ダイノーズ', 'ヨノワール', 'ユキメノコ', 'ロトム', 'ユクシー', 'エムリット', 'アグノム', 'ディアルガ', 'パルキア', 'ヒードラン', 'レジギガス', 'ギラティナ', 'クレセリア', 'フィオネ', 'マナフィ', 'ダークライ', 'シェイミ', 'アルセウス', 'ビクティニ', 'ツタージャ', 'ジャノビー', 'ジャローダ', 'ポカブ', 'チャオブー', 'エンブオー', 'ミジュマル', 'フタチマル', 'ダイケンキ', 'ミネズミ', 'ミルホッグ', 'ヨーテリー', 'ハーデリア', 'ムーランド', 'チョロネコ', 'レパルダス', 'ヤナップ', 'ヤナッキー', 'バオップ', 'バオッキー', 'ヒヤップ', 'ヒヤッキー', 'ムンナ', 'ムシャーナ', 'マメパト', 'ハトーボー', 'ケンホロウ', 'シママ', 'ゼブライカ', 'ダンゴロ', 'ガントル', 'ギガイアス', 'コロモリ', 'ココロモリ', 'モグリュー', 'ドリュウズ', 'タブンネ', 'ドッコラー', 'ドテッコツ', 'ローブシン', 'オタマロ', 'ガマガル', 'ガマゲロゲ', 'ナゲキ', 'ダゲキ', 'クルミル', 'クルマユ', 'ハハコモリ', 'フシデ', 'ホイーガ', 'ペンドラー', 'モンメン', 'エルフーン', 'チュリネ', 'ドレディア', 'バスラオ', 'メグロコ', 'ワルビル', 'ワルビアル', 'ダルマッカ', 'ヒヒダルマ', 'マラカッチ', 'イシズマイ', 'イワパレス', 'ズルッグ', 'ズルズキン', 'シンボラー', 'デスマス', 'デスカーン', 'プロトーガ', 'アバゴーラ', 'アーケン', 'アーケオス', 'ヤブクロン', 'ダストダス', 'ゾロア', 'ゾロアーク', 'チラーミィ', 'チラチーノ', 'ゴチム', 'ゴチミル', 'ゴチルゼル', 'ユニラン', 'ダブラン', 'ランクルス', 'コアルヒー', 'スワンナ', 'バニプッチ', 'バニリッチ', 'バイバニラ', 'シキジカ', 'メブキジカ', 'エモンガ', 'カブルモ', 'シュバルゴ', 'タマゲタケ', 'モロバレル', 'プルリル', 'ブルンゲル', 'ママンボウ', 'バチュル', 'デンチュラ', 'テッシード', 'ナットレイ', 'ギアル', 'ギギアル', 'ギギギアル', 'シビシラス', 'シビビール', 'シビルドン', 'リグレー', 'オーベム', 'ヒトモシ', 'ランプラー', 'シャンデラ', 'キバゴ', 'オノンド', 'オノノクス', 'クマシュン', 'ツンベアー', 'フリージオ', 'チョボマキ', 'アギルダー', 'マッギョ', 'コジョフー', 'コジョンド', 'クリムガン', 'ゴビット', 'ゴルーグ', 'コマタナ', 'キリキザン', 'バッフロン', 'ワシボン', 'ウォーグル', 'バルチャイ', 'バルジーナ', 'クイタラン', 'アイアント', 'モノズ', 'ジヘッド', 'サザンドラ', 'メラルバ', 'ウルガモス', 'コバルオン', 'テラキオン', 'ビリジオン', 'トルネロス', 'ボルトロス', 'レシラム', 'ゼクロム', 'ランドロス', 'キュレム', 'ケルディオ', 'メロエッタ', 'ゲノセクト', 'ハリマロン', 'ハリボーグ', 'ブリガロン', 'フォッコ', 'テールナー', 'マフォクシー', 'ケロマツ', 'ゲコガシラ', 'ゲッコウガ', 'ホルビー', 'ホルード', 'ヤヤコマ', 'ヒノヤコマ', 'ファイアロー', 'コフキムシ', 'コフーライ', 'ビビヨン', 'シシコ', 'カエンジシ', 'フラベベ', 'フラエッテ', 'フラージェス', 'メェークル', 'ゴーゴート', 'ヤンチャム', 'ゴロンダ', 'トリミアン', 'ニャスパー', 'ニャオニクス', 'ヒトツキ', 'ニダンギル', 'ギルガルド', 'シュシュプ', 'フレフワン', 'ペロッパフ', 'ペロリーム', 'マーイーカ', 'カラマネロ', 'カメテテ', 'ガメノデス', 'クズモー', 'ドラミドロ', 'ウデッポウ', 'ブロスター', 'エリキテル', 'エレザード', 'チゴラス', 'ガチゴラス', 'アマルス', 'アマルルガ', 'ニンフィア', 'ルチャブル', 'デデンネ', 'メレシー', 'ヌメラ', 'ヌメイル', 'ヌメルゴン', 'クレッフィ', 'ボクレー', 'オーロット', 'バケッチャ', 'パンプジン', 'カチコール', 'クレベース', 'オンバット', 'オンバーン', 'ゼルネアス', 'イベルタル', 'ジガルデ', 'ディアンシー', 'フーパ', 'ボルケニオン', 'モクロー', 'フクスロー', 'ジュナイパー', 'ニャビー', 'ニャヒート', 'ガオガエン', 'アシマリ', 'オシャマリ', 'アシレーヌ', 'ツツケラ', 'ケララッパ', 'ドデカバシ', 'ヤングース', 'デカグース', 'アゴジムシ', 'デンヂムシ', 'クワガノン', 'マケンカニ', 'ケケンカニ', 'オドリドリ', 'アブリー', 'アブリボン', 'イワンコ', 'ルガルガン', 'ヨワシ', 'ヒドイデ', 'ドヒドイデ', 'ドロバンコ', 'バンバドロ', 'シズクモ', 'オニシズクモ', 'カリキリ', 'ラランテス', 'ネマシュ', 'マシェード', 'ヤトウモリ', 'エンニュート', 'ヌイコグマ', 'キテルグマ', 'アマカジ', 'アママイコ', 'アマージョ', 'キュワワー', 'ヤレユータン', 'ナゲツケサル', 'コソクムシ', 'グソクムシャ', 'スナバァ', 'シロデスナ', 'ナマコブシ', 'タイプ：ヌル', 'シルヴァディ', 'メテノ', 'ネッコアラ', 'バクガメス', 'トゲデマル', 'ミミッキュ', 'ハギギシリ', 'ジジーロン', 'ダダリン', 'ジャラコ', 'ジャランゴ', 'ジャラランガ', 'カプ・コケコ', 'カプ・テテフ', 'カプ・ブルル', 'カプ・レヒレ', 'コスモッグ', 'コスモウム', 'ソルガレオ', 'ルナアーラ', 'ウツロイド', 'マッシブーン', 'フェローチェ', 'デンジュモク', 'テッカグヤ', 'カミツルギ', 'アクジキング', 'ネクロズマ', 'マギアナ', 'マーシャドー', 'ベベノム', 'アーゴヨン', 'ツンデツンデ', 'ズガドーン', 'ゼラオラ', 'メルタン', 'メルメタル', 'サルノリ', 'バチンキー', 'ゴリランダー', 'ヒバニー', 'ラビフット', 'エースバーン', 'メッソン', 'ジメレオン', 'インテレオン', 'ホシガリス', 'ヨクバリス', 'ココガラ', 'アオガラス', 'アーマーガア', 'サッチムシ', 'レドームシ', 'イオルブ', 'クスネ', 'フォクスライ', 'ヒメンカ', 'ワタシラガ', 'ウールー', 'バイウールー', 'カムカメ', 'カジリガメ', 'ワンパチ', 'パルスワン', 'タンドン', 'トロッゴン', 'セキタンザン', 'カジッチュ', 'アップリュー', 'タルップル', 'スナヘビ', 'サダイジャ', 'ウッウ', 'サシカマス', 'カマスジョー', 'エレズン', 'ストリンダー', 'ヤクデ', 'マルヤクデ', 'タタッコ', 'オトスパス', 'ヤバチャ', 'ポットデス', 'ミブリム', 'テブリム', 'ブリムオン', 'ベロバー', 'ギモー', 'オーロンゲ', 'タチフサグマ', 'ニャイキング', 'サニゴーン', 'ネギガナイト', 'バリコオル', 'デスバーン', 'マホミル', 'マホイップ', 'タイレーツ', 'バチンウニ', 'ユキハミ', 'モスノウ', 'イシヘンジン', 'コオリッポ', 'イエッサン', 'モルペコ', 'ゾウドウ', 'ダイオウドウ', 'パッチラゴン', 'パッチルドン', 'ウオノラゴン', 'ウオチルドン', 'ジュラルドン', 'ドラメシヤ', 'ドロンチ', 'ドラパルト', 'ザシアン', 'ザマゼンタ', 'ムゲンダイナ', 'ダクマ', 'ウーラオス', 'ザルード', 'レジエレキ', 'レジドラゴ', 'ブリザポス', 'レイスポス', 'バドレックス']
let ko_pokemonList = ['이상해씨', '이상해풀', '이상해꽃', '파이리', '리자드', '리자몽', '꼬부기', '어니부기', '거북왕', '캐터피', '단데기', '버터플', '뿔충이', '딱충이', '독침붕', '구구', '피죤', '피죤투', '꼬렛', '레트라', '깨비참', '깨비드릴조', '아보', '아보크', '피카츄', '라이츄', '모래두지', '고지', '니드런f', '니드리나', '니드퀸', '니드런m', '니드리노', '니드킹', '삐삐', '픽시', '식스테일', '나인테일', '푸린', '푸크린', '주뱃', '골뱃', '뚜벅쵸', '냄새꼬', '라플레시아', '파라스', '파라섹트', '콘팡', '도나리', '디그다', '닥트리오', '나옹', '페르시온', '고라파덕', '골덕', '망키', '성원숭', '가디', '윈디', '발챙이', '슈륙챙이', '강챙이', '캐이시', '윤겔라', '후딘', '알통몬', '근육몬', '괴력몬', '모다피', '우츠동', '우츠보트', '왕눈해', '독파리', '꼬마돌', '데구리', '딱구리', '포니타', '날쌩마', '야돈', '야도란', '코일', '레어코일', '파오리', '두두', '두트리오', '쥬쥬', '쥬레곤', '질퍽이', '질뻐기', '셀러', '파르셀', '고오스', '고우스트', '팬텀', '롱스톤', '슬리프', '슬리퍼', '크랩', '킹크랩', '찌리리공', '붐볼', '아라리', '나시', '탕구리', '텅구리', '시라소몬', '홍수몬', '내루미', '또가스', '또도가스', '뿔카노', '코뿌리', '럭키', '덩쿠리', '캥카', '쏘드라', '시드라', '콘치', '왕콘치', '별가사리', '아쿠스타', '마임맨', '스라크', '루주라', '에레브', '마그마', '쁘사이저', '켄타로스', '잉어킹', '갸라도스', '라프라스', '메타몽', '이브이', '샤미드', '쥬피썬더', '부스터', '폴리곤', '암나이트', '암스타', '투구', '투구푸스', '프테라', '잠만보', '프리져', '썬더', '파이어', '미뇽', '신뇽', '망나뇽', '뮤츠', '뮤', '치코리타', '베이리프', '메가니움', '브케인', '마그케인', '블레이범', '리아코', '엘리게이', '장크로다일', '꼬리선', '다꼬리', '부우부', '야부엉', '레디바', '레디안', '페이검', '아리아도스', '크로뱃', '초라기', '랜턴', '피츄', '삐', '푸푸린', '토게피', '토게틱', '네이티', '네이티오', '메리프', '보송송', '전룡', '아르코', '마릴', '마릴리', '꼬지모', '왕구리', '통통코', '두코', '솜솜코', '에이팜', '해너츠', '해루미', '왕자리', '우파', '누오', '에브이', '블래키', '니로우', '야도킹', '무우마', '안농', '마자용', '키링키', '피콘', '쏘콘', '노고치', '글라이거', '강철톤', '블루', '그랑블루', '침바루', '핫삼', '단단지', '헤라크로스', '포푸니', '깜지곰', '링곰', '마그마그', '마그카르고', '꾸꾸리', '메꾸리', '코산호', '총어', '대포무노', '딜리버드', '만타인', '무장조', '델빌', '헬가', '킹드라', '코코리', '코리갑', '폴리곤2', '노라키', '루브도', '배루키', '카포에라', '뽀뽀라', '에레키드', '마그비', '밀탱크', '해피너스', '라이코', '앤테이', '스이쿤', '애버라스', '데기라스', '마기라스', '루기아', '칠색조', '세레비', '나무지기', '나무돌이', '나무킹', '아차모', '영치코', '번치코', '물짱이', '늪짱이', '대짱이', '포챠나', '그라에나', '지그제구리', '직구리', '개무소', '실쿤', '뷰티플라이', '카스쿤', '독케일', '연꽃몬', '로토스', '로파파', '도토링', '잎새코', '다탱구', '테일로', '스왈로', '갈모매', '패리퍼', '랄토스', '킬리아', '가디안', '비구술', '비나방', '버섯꼬', '버섯모', '게을로', '발바로', '게을킹', '토중몬', '아이스크', '껍질몬', '소곤룡', '노공룡', '폭음룡', '마크탕', '하리뭉', '루리리', '코코파스', '에나비', '델케티', '깜까미', '입치트', '가보리', '갱도라', '보스로라', '요가랑', '요가램', '썬더라이', '썬더볼트', '플러시', '마이농', '볼비트', '네오비트', '로젤리아', '꼴깍몬', '꿀꺽몬', '샤프니아', '샤크니아', '고래왕자', '고래왕', '둔타', '폭타', '코터스', '피그점프', '피그킹', '얼루기', '톱치', '비브라바', '플라이곤', '선인왕', '밤선인', '파비코', '파비코리', '쟝고', '세비퍼', '루나톤', '솔록', '미꾸리', '메깅', '가재군', '가재장군', '오뚝군', '점토도리', '릴링', '릴리요', '아노딥스', '아말도', '빈티나', '밀로틱', '캐스퐁', '켈리몬', '어둠대신', '다크펫', '해골몽', '미라몽', '트로피우스', '치렁', '앱솔', '마자', '눈꼬마', '얼음귀신', '대굴레오', '씨레오', '씨카이저', '진주몽', '헌테일', '분홍장이', '시라칸', '사랑동이', '아공이', '쉘곤', '보만다', '메탕', '메탕구', '메타그로스', '레지락', '레지아이스', '레지스틸', '라티아스', '라티오스', '가이오가', '그란돈', '레쿠쟈', '지라치', '테오키스', '모부기', '수풀부기', '토대부기', '불꽃숭이', '파이숭이', '초염몽', '팽도리', '팽태자', '엠페르트', '찌르꼬', '찌르버드', '찌르호크', '비버니', '비버통', '귀뚤뚜기', '귀뚤톡크', '꼬링크', '럭시오', '렌트라', '꼬몽울', '로즈레이드', '두개도스', '램펄드', '방패톱스', '바리톱스', '도롱충이', '도롱마담', '나메일', '세꿀버리', '비퀸', '파치리스', '브이젤', '플로젤', '체리버', '체리꼬', '깝질무', '트리토돈', '겟핸보숭', '흔들풍손', '둥실라이드', '이어롤', '이어롭', '무우마직', '돈크로우', '나옹마', '몬냥이', '랑딸랑', '스컹뿡', '스컹탱크', '동미러', '동탁군', '꼬지지', '흉내내', '핑복', '페라페', '화강돌', '딥상어동', '한바이트', '한카리아스', '먹고자', '리오르', '루카리오', '히포포타스', '하마돈', '스콜피', '드래피온', '삐딱구리', '독개굴', '무스틈니', '형광어', '네오라이트', '타만타', '눈쓰개', '눈설왕', '포푸니라', '자포코일', '내룸벨트', '거대코뿌리', '덩쿠림보', '에레키블', '마그마번', '토게키스', '메가자리', '리피아', '글레이시아', '글라이온', '맘모꾸리', '폴리곤Z', '엘레이드', '대코파스', '야느와르몽', '눈여아', '로토무', '유크시', '엠라이트', '아그놈', '디아루가', '펄기아', '히드런', '레지기가스', '기라티나', '크레세리아', '피오네', '마나피', '다크라이', '쉐이미', '아르세우스', '비크티니', '주리비얀', '샤비', '샤로다', '뚜꾸리', '차오꿀', '염무왕', '수댕이', '쌍검자비', '대검귀', '보르쥐', '보르그', '요테리', '하데리어', '바랜드', '쌔비냥', '레파르다스', '야나프', '야나키', '바오프', '바오키', '앗차프', '앗차키', '몽나', '몽얌나', '콩둘기', '유토브', '켄호로우', '줄뮤마', '제브라이카', '단굴', '암트르', '기가이어스', '또르박쥐', '맘박쥐', '두더류', '몰드류', '다부니', '으랏차', '토쇠골', '노보청', '동챙이', '두까비', '두빅굴', '던지미', '타격귀', '두르보', '두르쿤', '모아머', '마디네', '휠구', '펜드라', '소미안', '엘풍', '치릴리', '드레디어', '배쓰나이', '깜눈크', '악비르', '악비아르', '달막화', '불비달마', '마라카치', '돌살이', '암팰리스', '곤율랭', '곤율거니', '심보러', '데스마스', '데스니칸', '프로토가', '늑골라', '아켄', '아케오스', '깨봉이', '더스트나', '조로아', '조로아크', '치라미', '치라치노', '고디탱', '고디보미', '고디모아젤', '유니란', '듀란', '란쿨루스', '꼬지보리', '스완나', '바닐프티', '바닐리치', '배바닐라', '사철록', '바라철록', '에몽가', '딱정곤', '슈바르고', '깜놀버슬', '뽀록나', '탱그릴', '탱탱겔', '맘복치', '파쪼옥', '전툴라', '철시드', '너트령', '기어르', '기기어르', '기기기어르', '저리어', '저리릴', '저리더프', '리그레', '벰크', '불켜미', '램프라', '샹델라', '터검니', '액슨도', '액스라이즈', '코고미', '툰베어', '프리지오', '쪼마리', '어지리더', '메더', '비조푸', '비조도', '크리만', '골비람', '골루그', '자망칼', '절각참', '버프론', '수리둥보', '워글', '벌차이', '버랜지나', '앤티골', '아이앤트', '모노두', '디헤드', '삼삼드래', '활화르바', '불카모스', '코바르온', '테라키온', '비리디온', '토네로스', '볼트로스', '레시라무', '제크로무', '랜드로스', '큐레무', '케르디오', '메로엣타', '게노세크트', '도치마론', '도치보구', '브리가론', '푸호꼬', '테르나', '마폭시', '개구마르', '개굴반장', '개굴닌자', '파르빗', '파르토', '화살꼬빈', '불화살빈', '파이어로', '분이벌레', '분떠도리', '비비용', '레오꼬', '화염레오', '플라베베', '플라엣테', '플라제스', '메이클', '고고트', '판짱', '부란다', '트리미앙', '냐스퍼', '냐오닉스', '단칼빙', '쌍검킬', '킬가르도', '슈쁘', '프레프티르', '나룸퍼프', '나루림', '오케이징', '칼라마네로', '거북손손', '거북손데스', '수레기', '드래캄', '완철포', '블로스터', '목도리키텔', '일레도리자드', '티고라스', '견고라스', '아마루스', '아마루르가', '님피아', '루차불', '데덴네', '멜리시', '미끄메라', '미끄네일', '미끄래곤', '클레피', '나목령', '대로트', '호바귀', '펌킨인', '꽁어름', '크레베이스', '음뱃', '음번', '제르네아스', '이벨타르', '지가르데', '디안시', '후파', '볼케니온', '나몰빼미', '빼미스로우', '모크나이퍼', '냐오불', '냐오히트', '어흥염', '누리공', '키요공', '누리레느', '콕코구리', '크라파', '왕큰부리', '영구스', '형사구스', '턱지충이', '전지충이', '투구뿌논', '오기지게', '모단단게', '춤추새', '에블리', '에리본', '암멍이', '루가루암', '약어리', '시마사리', '더시마사리', '머드나기', '만마드', '물거미', '깨비물거미', '짜랑랑', '라란티스', '자마슈', '마셰이드', '야도뇽', '염뉴트', '포곰곰', '이븐곰', '달콤아', '달무리나', '달코퀸', '큐아링', '하랑우탄', '내던숭이', '꼬시레', '갑주무사', '모래꿍', '모래성이당', '해무기', '타입:널', '실버디', '메테노', '자말라', '폭거북스', '토게데마루', '따라큐', '치갈기', '할비롱', '타타륜', '짜랑꼬', '짜랑고우', '짜랑고우거', '카푸꼬꼬꼭', '카푸나비나', '카푸브루루', '카푸느지느', '코스모그', '코스모움', '솔가레오', '루나아라', '텅비드', '매시붕', '페로코체', '전수목', '철화구야', '종이신도', '악식킹', '네크로즈마', '마기아나', '마샤도', '베베놈', '아고용', '차곡차곡', '두파팡', '제라오라', '멜탄', '멜메탈', '흥나숭', '채키몽', '고릴타', '염버니', '래비풋', '에이스번', '울머기', '누겔레온', '인텔리레온', '탐리스', '요씽리스', '파라꼬', '파크로우', '아머까오', '두루지벌레', '레돔벌레', '이올브', '훔처우', '폭슬라이', '꼬모카', '백솜모카', '우르', '배우르', '깨물부기', '갈가부기', '멍파치', '펄스멍', '탄동', '탄차곤', '석탄산', '과사삭벌레', '애프룡', '단지래플', '모래뱀', '사다이사', '윽우지', '찌로꼬치', '꼬치조', '일레즌', '스트린더', '태우지네', '다태우지네', '때때무노', '케오퍼스', '데인차', '포트데스', '몸지브림', '손지브림', '브리무음', '메롱꿍', '쏘겨모', '오롱털', '가로막구리', '나이킹', '산호르곤', '창파나이트', '마임꽁꽁', '데스판', '마빌크', '마휘핑', '대여르', '찌르성게', '누니머기', '모스노우', '돌헨진', '빙큐보', '에써르', '모르페코', '끼리동', '대왕끼리동', '파치래곤', '파치르돈', '어래곤', '어치르돈', '두랄루돈', '드라꼰', '드래런치', '드래펄트', '자시안', '자마젠타', '무한다이노', '치고마', '우라오스', '자루도', '레지에레키', '레지드래고', '블리자포스', '레이스포스', '버드렉스']

let language_map = {'ENG':pokemonList, 'JPN': ja_pokemonList, 'KOR':ko_pokemonList, 'FRE':fr_pokemonList, 'GER':de_pokemonList}

let megaList = ['Venusaur-Mega', 'Charizard-Mega-X', 'Charizard-Mega-Y', 'Blastoise-Mega', 'Beedrill-Mega', 'Pidgeot-Mega', 'Alakazam-Mega', 'Slowbro-Mega', 'Gengar-Mega', 'Kangaskhan-Mega', 'Pinsir-Mega', 'Gyarados-Mega', 'Aerodactyl-Mega', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y', 'Ampharos-Mega', 'Steelix-Mega', 'Scizor-Mega', 'Heracross-Mega', 'Houndoom-Mega', 'Tyranitar-Mega', 'Sceptile-Mega', 'Blaziken-Mega', 'Swampert-Mega', 'Gardevoir-Mega', 'Sableye-Mega', 'Mawile-Mega', 'Aggron-Mega', 'Medicham-Mega', 'Manectric-Mega', 'Sharpedo-Mega', 'Camerupt-Mega', 'Altaria-Mega', 'Banette-Mega', 'Absol-Mega', 'Glalie-Mega', 'Salamence-Mega', 'Metagross-Mega', 'Latias-Mega', 'Latios-Mega', 'Kyogre-Primal', 'Groudon-Primal', 'Rayquaza-Mega', 'Lopunny-Mega', 'Garchomp-Mega', 'Lucario-Mega', 'Abomasnow-Mega', 'Gallade-Mega', 'Audino-Mega', 'Diancie-Mega'];
let alolaList = ['Rattata-Alola', 'Raticate-Alola', 'Raichu-Alola', 'Sandshrew-Alola', 'Sandslash-Alola', 'Vulpix-Alola', 'Ninetales-Alola', 'Diglett-Alola', 'Dugtrio-Alola', 'Meowth-Alola', 'Persian-Alola', 'Geodude-Alola', 'Graveler-Alola', 'Golem-Alola', 'Grimer-Alola', 'Muk-Alola', 'Exeggutor-Alola', 'Marowak-Alola'];
let galarList = ['Meowth-Galar', 'Ponyta-Galar', 'Rapidash-Galar', 'Slowpoke-Galar', 'Slowbro-Galar', "Farfetch'd-Galar", 'Weezing-Galar', "Mr. Mime-Galar", 'Articuno-Galar', 'Zapdos-Galar', 'Moltres-Galar', 'Slowking-Galar', 'Corsola-Galar', 'Zigzagoon-Galar', 'Linoone-Galar', 'Darumaka-Galar', 'Darmanitan-Galar', 'Yamask-Galar', 'Stunfisk-Galar'];
let gmaxList = ['Venusaur-Gmax', 'Charizard-Gmax', 'Blastoise-Gmax', 'Butterfree-Gmax', 'Pikachu-Gmax', 'Meowth-Gmax', 'Machamp-Gmax', 'Gengar-Gmax', 'Kingler-Gmax', 'Lapras-Gmax', 'Eevee-Gmax', 'Snorlax-Gmax', 'Garbodor-Gmax', 'Melmetal-Gmax', 'Rillaboom-Gmax', 'Cinderace-Gmax', 'Inteleon-Gmax', 'Corviknight-Gmax', 'Orbeetle-Gmax', 'Drednaw-Gmax', 'Coalossal-Gmax', 'Flapple-Gmax', 'Sandaconda-Gmax', 'Toxtricity-Gmax', 'Centiskorch-Gmax', 'Hatterene-Gmax', 'Grimmsnarl-Gmax', 'Alcremie-Gmax', 'Copperajah-Gmax', 'Duraludon-Gmax', 'Urshifu-Gmax', 'Urshifu-rapid-strike-Gmax', 'Eternatus-Eternamax'];
let genLastPokemon = ['Mew', 'Celebi', 'Deoxys', 'Arceus', 'Genesect', 'Volcanion', 'Melmetal', 'Calyrex'];
let boxes = [];
let currentPokemonList = [];
let currentGen = 0; //0 means all
let soundEffect = new Audio('/sound-effects/gen3-click2.wav');
soundEffect.volume = 0.5;
let soundEffect2 = new Audio('/sound-effects/Dex-Fanfare.mp3');
soundEffect2.volume = 0.3;
let darkMode = false;
let useEncoded = true;

let extraPokemon = {
	// Alolan forms added to Gen7 in official Aloladex-order
    'Gumshoos':['Rattata-Alola', 'Raticate-Alola', 'Raichu-Alola'],
    'Vikavolt':['Meowth-Alola', 'Persian-Alola', 'Grimer-Alola', 'Muk-Alola'],
	'Crabominable':['Diglett-Alola', 'Dugtrio-Alola'],
	'Salazzle':['Marowak-Alola'],
	'Togedemaru':['Geodude-Alola', 'Graveler-Alola', 'Golem-Alola'],
	'Drampa':['Sandshrew-Alola', 'Sandslash-Alola', 'Vulpix-Alola', 'Ninetales-Alola'],
	'Dhelmise':['Exeggutor-Alola'],
	// Galarian forms mixed into Gen8 (made-up order for NAtdex order due to Galardex order deviation)
	'Appletun':['Stunfisk-Galar'],
	'Grapploct':['Ponyta-Galar', 'Rapidash-Galar'],
	'Grimmsnarl':['Weezing-Galar', 'Zigzagoon-Galar', 'Linoone-Galar'],
	'Obstagoon':['Meowth-Galar'],
	'Perrserker':['Corsola-Galar'],
	'Cursola':["Farfetch'd-Galar"],
	"Sirfetch'd":["Mr. Mime-Galar"],
	"Mr. Rime":['Yamask-Galar'],
	'Frosmoth':['Darumaka-Galar', 'Darmanitan-Galar'],
	'Eternatus':['Slowpoke-Galar', 'Slowbro-Galar', 'Slowking-Galar'],
	'Regidrago':['Articuno-Galar', 'Zapdos-Galar', 'Moltres-Galar'],
}

//standardize keys
for (let key in extraPokemon){
    let pokemon = standardizeName(key);
    if (pokemon != key){
        extraPokemon[pokemon] = extraPokemon[key]
        delete extraPokemon[key]
    }
}


let visualizeButtonClick = function(elem){
    elem.classList.add("smolbuttonx")
    if (darkMode){
        elem.classList.add("smolbuttonxdark")
    }
}
let visualizeButtonUnclick = function(elem){
    elem.classList.remove("smolbuttonx")
    elem.classList.remove("smolbuttonxdark")
}



function createUnguessed(index){
	let unnamedList = document.createElement("div");
/*	unnamedList.classList.add('column');*/
/*	unnamedList.classList.add('namelist');*/
	
	let unnamedContent = document.createElement("div");
	unnamedContent.classList.add('box');
	unnamedContent.classList.add('roundedf');
	unnamedContent.classList.add('topedge');
	unnamedContent.style.display = 'block';
	
	unnamedList.appendChild(unnamedContent)
	document.getElementById("panel").appendChild(unnamedList);
	
	return unnamedContent;
	
}

let megaBox = document.getElementById("pokemon-box-mega")
let gmaxBox = document.getElementById("pokemon-box-gmax")
let gen7half = document.getElementById("pokemon-box-7-5")

for (let i = 0; i <= genLastPokemon.length; i++) {
	
    //create box references/variables
    if (i !== 0) {
        boxes.push(document.getElementById("pokemon-box-" + i));
    }

    //calling functions, popup and changing button CSS
    document.getElementById("gen" + i).onclick = function () {

        if (currentGen !== i) {

            let swapGen = function () {
                currentGen = i;
                promptGen.style.display = "none";
                updateGenFilter();
                resetQuiz();
                for (let j = 0; j <= genLastPokemon.length; j++) {
                    if (j !== i) {
                        visualizeButtonUnclick(document.getElementById("gen" + j));
                    }
                }
                visualizeButtonClick(document.getElementById("gen" + i))
            }

            promptGenYes.onclick = function () {
                swapGen();

            }
            promptGenNo.onclick = function () {
                promptGen.style.display = "none";
                visualizeButtonUnclick(document.getElementById("gen" + i))
				
			}
            if (alreadyGuessedPokemon.length !== 0) {
                promptGen.style.display = 'inline';
            } else {
                swapGen();
            }

        }
    }
}

//good looking names for missing list
let formatted_lang_map = {}
for (key in language_map){
	let copiedList = []
	
	for (let i = 0; i< language_map[key].length; i++){
		copiedList.push(language_map[key][i]);
	}
	formatted_lang_map[key] = copiedList
}




let missingOptionsDiv = document.getElementById('missednames-options');
let engMissingButton = '';

let allMissingLangButtons = []


for (key in formatted_lang_map){
	let lang = document.createElement("div");
	let currentKey = key;
    lang.innerHTML += key
    lang.classList.add('smolbutton')
    lang.id = 'missing-'+ key
	
    lang.onclick = function () {
		
		for (let i = 0; i< allMissingLangButtons.length; i++){
			if (allMissingLangButtons[i] != lang){
				allMissingLangButtons[i].classList.remove('smolbuttonSwap')
				allMissingLangButtons[i].classList.add('smolbutton')
                if (darkMode){
                    allMissingLangButtons[i].classList.add('smolbuttondark')
                }
			}
			lang.classList.remove('smolbutton');
            lang.classList.remove('smolbuttondark');
			lang.classList.add('smolbuttonSwap');
		}
		
		for (let i = 0; i< formatted_lang_map[currentKey].length; i++){
			unguessedDictTexts[standardizeName(pokemonList[i])].nodeValue = formatted_lang_map[currentKey][i];
            if (standardizeName(pokemonList[i])+'galar' in  unguessedDictTexts){
                unguessedDictTexts[standardizeName(pokemonList[i])+'galar'].nodeValue = formatted_lang_map[currentKey][i]; //+ '-Galar';
            }
            if (standardizeName(pokemonList[i])+'alola' in  unguessedDictTexts){
                unguessedDictTexts[standardizeName(pokemonList[i])+'alola'].nodeValue = formatted_lang_map[currentKey][i]; // + '-Aloa';
            }
            if (standardizeName(pokemonList[i])+'mega' in  unguessedDictTexts){
                unguessedDictTexts[standardizeName(pokemonList[i])+'mega'].nodeValue = formatted_lang_map[currentKey][i]; // + '-Mega';
            }
            if (standardizeName(pokemonList[i])+'megay' in  unguessedDictTexts){
                unguessedDictTexts[standardizeName(pokemonList[i])+'megay'].nodeValue = formatted_lang_map[currentKey][i]  + ' Y';
            }
            if (standardizeName(pokemonList[i])+'megax' in  unguessedDictTexts){
                unguessedDictTexts[standardizeName(pokemonList[i])+'megax'].nodeValue = formatted_lang_map[currentKey][i]  + ' X';
            }
            if (standardizeName(pokemonList[i])+'primal' in  unguessedDictTexts){
                unguessedDictTexts[standardizeName(pokemonList[i])+'primal'].nodeValue = formatted_lang_map[currentKey][i];
            }
            if (standardizeName(pokemonList[i])+'gmax' in  unguessedDictTexts){
                unguessedDictTexts[standardizeName(pokemonList[i])+'gmax'].nodeValue = formatted_lang_map[currentKey][i];
            }
            if (standardizeName(pokemonList[i])+'eternamax' in  unguessedDictTexts){
                unguessedDictTexts[standardizeName(pokemonList[i])+'eternamax'].nodeValue = formatted_lang_map[currentKey][i];
            }
		}
		
    }
    if (currentKey == 'ENG'){
        engMissingButton = lang;
    }
    missingOptionsDiv.appendChild(lang);
	allMissingLangButtons.push(lang);
	
}



language_box = document.getElementById('lang_box')

enabledLanguages = []

let disableLanguage = function() { return; };

let enableLanguage = function(languageButton){
    enabledLanguages.push(languageButton.id)
    visualizeButtonClick(languageButton);
    languageButton.onclick = function () {
        disableLanguage(languageButton)
    }
}

disableLanguage = function(languageButton){
    if (enabledLanguages.length > 1){
        let index = enabledLanguages.indexOf(languageButton.id);
        if (index > -1) {
            enabledLanguages.splice(index, 1);
        }
        console.log('here')
        visualizeButtonUnclick(languageButton);
        languageButton.onclick = function () {
            enableLanguage(languageButton)
        }
    }
}



for (let key in language_map){
    let lang = document.createElement("div");
    lang.innerHTML += key
    lang.classList.add('smolbutton')
    lang.id = key
    lang.onclick = function () {
        enableLanguage(lang)
    }
    if (key == 'ENG'){
        lang.click()
    }
    language_box.appendChild(lang);
}




function tryTranslate(input){
    for (let k = 0; k< enabledLanguages.length; k++){
        key = enabledLanguages[k]
        for(let i = 0; i<language_map[key].length;i++){
            if (input == standardizeName(language_map[key][i])){
                console.log('translating:' + input + ' to ' +  pokemonList[i])
                return pokemonList[i]
            }
        }
    }
    return ''
}





let spriteDictionary = {};
let silhouetteDictionary = {};
let unguessedDictionary = {};



let silhouetteArray = [];
let pokeballArray = [];
let allSpirtes = [];



function showSprite(name) {
    spriteDictionary[name].style.display = "inline";
    unguessedDictionary[name].style.display = "none";
}

function hideSprite(name) {
    spriteDictionary[name].style.display = "none";
    unguessedDictionary[name].style.display = "inline";
}

function isSpriteHidden(name){
    return spriteDictionary[name].style.display == "none";
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
    input = input.replace(/[^ぁ-んァ-ン가-힣a-z0-9-_]/g, '');

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
let pokemonRevealListsByGen = [];
pokemonRevealListsByGen.push([])
pokemonListsByGen.push(pokemonList);
let currentGenList = [];
let currentGenRevealList = [];


let suffixes = ["mega", "megax", "megay", "primal", "galar", "alola", "gmax", "eternamax"]
// we kinda rely on normal versions being added first
let pokemonAlreadyIncluded = function (name, list){
    for (let i = 0; i < suffixes.length; i++){
        if (name.endsWith(suffixes[i])){
            if (list.includes(name.substring(0, name.length- suffixes[i].length ))){
                return true;
            }
        }
    }
    if (name.endsWith("megax")){
        let ypkmn = name.substring(0, name.length- "megax".length ) + 'megay'
        if (list.includes(ypkmn)){
            return true;
        }
    }else if (name.endsWith("megay")){
        let xpkmn = name.substring(0, name.length- "megay".length ) + 'megax'
        if (list.includes(xpkmn)){
            return true;
        }
    }

    return false;
}

for (let i = 0; i < pokemonList.length; i++) {
    let pokemon = pokemonList[i];

    currentGenList.push(pokemon)
    currentGenRevealList.push(pokemon)
    pokemonRevealListsByGen[0].push(pokemon)
    if (standardizeName(pokemon) in extraPokemon){
        for (let j = 0; j < extraPokemon[standardizeName(pokemon)].length; j++){
            let subPokemon = standardizeName(extraPokemon[standardizeName(pokemon)][j])
            currentGenRevealList.push(subPokemon)
            pokemonRevealListsByGen[0].push(subPokemon)
            if (!pokemonAlreadyIncluded(subPokemon, currentGenList)){
                currentGenList.push(subPokemon)
            }
        }
    }

    currentCount++;
    if (genLastPokemon.includes(pokemon)) {
        if (currentGenIndex === 6){
            for (let j = 0; j<megaList.length; j++){
                let subPokemon = standardizeName(megaList[j])
                currentGenRevealList.push(subPokemon)
                if (!pokemonAlreadyIncluded(subPokemon, currentGenList)){
                    currentGenList.push(subPokemon);
                }
            }
        }else if (currentGenIndex === 8){
            for (let j = 0; j<gmaxList.length; j++){
                let subPokemon = standardizeName(gmaxList[j])
                currentGenRevealList.push(subPokemon)
                if (!pokemonAlreadyIncluded(subPokemon, currentGenList)){
                    currentGenList.push(subPokemon);
                }
            }
        }

        genPokemonCounts[currentGenIndex] = currentCount;
        pokemonListsByGen[currentGenIndex] = currentGenList;
        pokemonRevealListsByGen[currentGenIndex] = currentGenRevealList;
        currentGenList = [];
        currentGenRevealList = [];
        currentGenIndex++;
        currentCount = 0;
    }
}

//https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
function remove_duplicates_safe(arr) {
    var seen = {};
    var ret_arr = [];
    for (var i = 0; i < arr.length; i++) {
        if (!(arr[i] in seen)) {
            ret_arr.push(arr[i]);
            seen[arr[i]] = true;
        }
    }
    return ret_arr;
}

for (let i = 0; i < pokemonListsByGen.length; i++){
    pokemonListsByGen[i] = remove_duplicates_safe(pokemonListsByGen[i])
    pokemonRevealListsByGen[i] = remove_duplicates_safe(pokemonRevealListsByGen[i])
}


function updateCurrentPokemonList() {
    currentPokemonList = pokemonListsByGen[currentGen]
    currentRevealList = pokemonRevealListsByGen[currentGen]
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


let loadedSpritesCount = 0;
let totalSpritesCount = 0;

let fullSpriteList = []
function loadSprites() {


    let loadPkmn = function(pokemonName){
        
        let sprite = document.createElement("img");
        sprite.classList.add('sprite');
        sprite.classList.add('zoom');

        sprite.src = encodedImages['sprite'][pokemonName];
        sprite.addEventListener("load", function () {
            loadedSpritesCount++;
            onSpriteLoad();
        }, false);
        totalSpritesCount++;
        spriteDictionary[pokemonName] = sprite;
        allSpirtes.push(sprite);


        let silhouette = document.createElement("img");
        silhouette.classList.add('sprite');

        silhouette.src = encodedImages['silhouette'][pokemonName];

        silhouette.style.display = "none";
        silhouette.addEventListener("load", function () {
            loadedSpritesCount++;
            onSpriteLoad();
        }, false);
        totalSpritesCount++;

        silhouetteDictionary[pokemonName] = silhouette;
        allSpirtes.push(silhouette);
    }


    //loop through filenames, not the pokemon list
    //it's easier to get the standardized name from the filename than it is to get the filename from the standardized name
    for (let i = 0; i < pokemonList.length; i++) {
        let pokemon = standardizeName(pokemonList[i]);
        loadPkmn(pokemon);
    }
    for (let i = 0; i < megaList.length; i++) {
        let pokemon = standardizeName(megaList[i]);
        loadPkmn(pokemon);
    }
    for (let i = 0; i < alolaList.length; i++) {
        let pokemon = standardizeName(alolaList[i]);
        loadPkmn(pokemon);
    }
    for (let i = 0; i < galarList.length; i++) {
        let pokemon = standardizeName(galarList[i]);
        loadPkmn(pokemon);
    }
    for (let i = 0; i < gmaxList.length; i++) {
        let pokemon = standardizeName(gmaxList[i]);
        loadPkmn(pokemon);
    }



    
    for (let i = 0; i < pokemonList.length; i++) {
        let pokemon = standardizeName(pokemonList[i]);
        fullSpriteList.push(pokemon)
        if (pokemon in extraPokemon){
            for (let j = 0; j<extraPokemon[pokemon].length; j++){
                fullSpriteList.push(standardizeName(extraPokemon[pokemon][j]))
            }
        }
        
    }





    let addToBox = function(pokemon, box){
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
    }


    //ordered appending
    let boxIndex = 0;
    for (let i = 0; i < fullSpriteList.length; i++) {
        let pokemon = standardizeName(fullSpriteList[i]);
        let box = boxes[boxIndex];
        if (pokemon == "meltan" || pokemon == "melmetal"){
            addToBox(pokemon, gen7half)
        }else{
            addToBox(pokemon, box)
        }
        
        if (genLastPokemon.includes(pokemon)) {
            boxIndex++;
        }
    }


    for (let i = 0; i < megaList.length; i++) {
        let pokemon = standardizeName(megaList[i]);
        fullSpriteList.push(pokemon)
        addToBox(pokemon, megaBox);
    }
    for (let i = 0; i < gmaxList.length; i++) {
        let pokemon = standardizeName(gmaxList[i]);
        fullSpriteList.push(pokemon)
        addToBox(pokemon, gmaxBox);
    }

    
	createUnguessedContent();

    //preload other images
	spheal = new Image();
	spheal.src = 'images/spheal.png';

    darkmodebg = new Image();
	darkmodebg.src = 'images/background-dark.svg';

    unknownDark = new Image();
	unknownDark.src = '/sprites/unknown-2.png';

}
let unguessedDict = {}
let unguessedDictTexts = {}
function createUnguessedContent(){
	
	let genIndex = 0;
	unguessedContent = createUnguessed(genIndex)
    for (let i = 0; i < fullSpriteList.length; i++) {
        let pokemon = standardizeName(fullSpriteList[i]);
		
		let _elem = document.createElement("div");
		let _img = document.createElement("img");
		let _name = document.createTextNode('')
/*		let _br = document.createElement("br");*/
		_img.style.display = 'inline';
		_img.src = spriteDictionary[pokemon].src
		_img.classList.add('spritel')
		_elem.style.display = 'none';
		_elem.appendChild(_img)
		_elem.appendChild(_name)
/*		_elem.appendChild(_br)*/
		
		unguessedDict[pokemon] = _elem;
		unguessedDictTexts[pokemon] = _name
		unguessedContent.appendChild(_elem)
        if ((genLastPokemon.includes(pokemon) || pokemon == "zeraora") && i !==  fullSpriteList.length-1) {
            genIndex++;
			unguessedContent = createUnguessed(genIndex)
        }
    }
	engMissingButton.click();
}


let alreadyGuessedPokemon = [];

let inputField = document.getElementById("pokemon");
let recentSprite = document.getElementById("recentsprite");


let parseInput = function (inputText, sendLog) {
	if (!document.getElementById("pokemon").disabled){
		inputText = inputText.toLowerCase()
	
        let inputs = []

		if (inputText=== 'nidoran') {
			inputs.push('nidoranf')
			inputs.push('nidoranm')
		}
		if (inputText === 'ニドラン'.toLowerCase() ) {
			inputs.push('ニドランf')
			inputs.push('ニドランm')
		}
	
		if (inputText === '니드런'.toLowerCase() ) {
			inputs.push('니드런f')
			inputs.push('니드런m')
		}

        inputText = standardizeName(inputText)
        inputText = tryTranslate(inputText)

		inputs.push(inputText);
		
        inputs.push(inputText + 'galar')
        inputs.push(inputText + 'alola')
        inputs.push(inputText + 'mega')
        inputs.push(inputText + 'gmax')
        if (inputText == "charizard" || inputText == "mewtwo"){
            inputs.push(inputText + 'megax')
            inputs.push(inputText + 'megay')
        }
        else if (inputText == "kyogre" || inputText == "groudon"){
            inputs.push(inputText + 'primal')
            inputs.push(inputText + 'primal')
        }
		else if (inputText == "eternatus"){
            inputs.push(inputText + 'eternamax')
        }
		else if (inputText == "urshifu"){
			inputs.push(inputText + 'rapidstrikegmax')
		}
        
		let wasCorrect = false;
		let guessResult = false;
		for (let i = 0; i < inputs.length; i++){
			//inputText = standardizeName(inputs[i]);
			//inputText = tryTranslate(inputText)
			let guessResult = tryGuessPokemon(standardizeName(inputs[i]), sendLog);
			if (!wasCorrect && guessResult){
				wasCorrect = guessResult;
			}
		}
		return wasCorrect;
	}
	return false;
};

inputField.oninput = function (){
	parseInput(inputField.value, true);
}


function play_single_sound() {
    document.getElementById('soundeffect').play();
}

function play_single_sound2() {
    document.getElementById('soundeffect2').play();
}

function tryGuessPokemon(input, sendLog) {
    try{
        showSprite(input);
    }catch(err){

    }
    if (currentPokemonList.includes(input) && !alreadyGuessedPokemon.includes(input)) {

        //showSprite(input);
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
			logGen();
        }
        if (relevantList.length === currentPokemonList.length) {
            showCongrats();
        }
        soundEffect.play();
		if (sendLog){
			logNamed(input);
		}
		return true;
    }
	return false;
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
	
	document.getElementById("missednames").style.display = "block";
	document.getElementById("ranking2").style.display = "block";

    clearInterval(activeTimer);
    let delay = 0;

    let revealList = []
    for (let i = 0; i < currentRevealList.length; i++) { 
        let pokemon = currentRevealList[i];
        if (!isSpriteHidden(pokemon)){
            continue
        }
        revealList.push(pokemon)
    }

    for (let i = 0; i < revealList.length; i++) {
        let pokemon = revealList[i];
        delay = delay + 35;
        let timeout = setTimeout(function () {
            spriteDictionary[pokemon].classList.add('revealed');
            spriteDictionary[pokemon].classList.remove('zoom');
            showSprite(pokemon);
			changeFooterPosition()
        }, delay);
        revealTimeouts.push(timeout);
    }
	
	//loop without delay
	for (let i = 0; i < revealList.length; i++) {
        let pokemon = revealList[i];
		unguessedDict[pokemon].style.display = 'inline-block';
		unguessedDict[pokemon].classList.add('fixed-width');
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
for (let i = 0; i < 3; i++) {
    pokecolumns.push(document.getElementById("pokecolumn" + (i + 1)));
}


let regionToSingle = function (regionElement){
    regionElement.classList.remove('region');
    regionElement.classList.add('regionb');
}

let regionToAll = function (regionElement){
    regionElement.classList.add('region');
    regionElement.classList.remove('regionb');
}

function updateGenFilter() {

    
    megaBox.style.display = "none";
    gmaxBox.style.display = "none";
    gen7half.style.display = "none";
    //all gens
    if (currentGen === 0) {
        gen7half.style.display = "block";
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.display = "block";
            totalPokemonCount = pokemonList.length;
            regionToAll(document.getElementById("region" + (i+1)));
        }
        regionToAll(document.getElementById("regionmega"));
        regionToAll(document.getElementById("regiongmax"));
        regionToAll(document.getElementById("region7-5"));
        document.getElementById("pokemon-box-7-5").classList.remove('unknownbox');

        for (let i = 0; i < pokecolumns.length; i++) {
            pokecolumns[i].classList.add('third');
            pokecolumns[i].classList.remove('twothirds');
        }
        for (let i = 0; i < allSpirtes.length; i++) {
            allSpirtes[i].classList.add('sprite');
            allSpirtes[i].classList.remove('spritew');
        }
    } else {
        for (let i = 0; i < boxes.length; i++) {
            if (i + 1 === currentGen) {
                regionToSingle(document.getElementById("region" + (i+1)));
                regionToSingle(document.getElementById("regionmega"));
                regionToSingle(document.getElementById("regiongmax"));
                regionToSingle(document.getElementById("region7-5"));
                document.getElementById("pokemon-box-7-5").classList.add('unknownbox');
                boxes[i].style.display = "block";
                if (i + 1 === 6){
                    megaBox.style.display = "block";
                }
                else if(i + 1 === 7){
                    gen7half.style.display = "block";
                }
                else if (i + 1 === 8){
                    gmaxBox.style.display = "block";
                }
                totalPokemonCount = pokemonListsByGen[i + 1].length;
            } else {
                boxes[i].style.display = "none";
            }

            for (let i = 0; i < pokecolumns.length; i++) {
                pokecolumns[i].classList.remove('third');
                pokecolumns[i].classList.add('twothirds');
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
function logNamed(pokemon) {
    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", '/named', true);
	xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify({name:pokemon}));

}
function logGen() {
    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", '/gen', true);
	xhttp.setRequestHeader("Content-Type", "application/json");
	let genName = 'gen' + currentGen;
    xhttp.send(JSON.stringify({gen:genName}));

}



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
    if (!darkMode)
        recentSprite.src = '/sprites/unknown.png'
    else
        recentSprite.src = '/sprites/unknown-2.png'
    document.getElementById("silhouette").checked = false;
    for (let i = 0; i < fullSpriteList.length; i++) {
        hideSprite(fullSpriteList[i]);
        spriteDictionary[fullSpriteList[i]].classList.add("zoom");
        spriteDictionary[fullSpriteList[i]].classList.remove("revealed");

    }
    changeFooterPosition();
	if (document.getElementById("panel").style.display == 'block'){
		//close and reset accordion
		document.getElementById("accordion").click();
	}
	document.getElementById("missednames").style.display = "none";
	if (document.getElementById("leaderboard2").style.display == 'block'){
		//close and reset accordion
		document.getElementById("accordion2").click();
	}
	document.getElementById("ranking2").style.display = "none";
	for (key in unguessedDict){
		unguessedDict[key].style.display = 'none';
	}
	emptyLeaderboard();
	twitchLeaderboard = {};
	document.getElementById("ranking").style.display = 'none';
	
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
				for (let m = 0; m < 4; m++) {
                    visualizeButtonUnclick(document.getElementById("timer" + m));
				}
                visualizeButtonClick(document.getElementById("timer" + j));

        }

        if(!activeTimer){
            applyNewTimer()
        }else{

            document.getElementById("prompttimer").style.display = 'block'
            document.getElementById("timer-yes").onclick = function () {
                document.getElementById("prompttimer").style.display = 'none';
                applyNewTimer();
				for (let k = 0; k < 4; k++) {
                    visualizeButtonUnclick(document.getElementById("timer" + k));
				}
                visualizeButtonClick(document.getElementById("timer" + j))
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

function swapToShiny(){
	for(let key in spriteDictionary){
		spriteDictionary[key].src = encodedImages['shiny'][key];
	}
    visualizeButtonClick(document.getElementById("shinyon"))
    visualizeButtonUnclick(document.getElementById("shinyoff"))
	
	for (key in unguessedDict){

		unguessedDict[key].getElementsByTagName('img')[0].src = encodedImages['shiny'][key]
	}
}

function swapToNormal(){
	for(let key in spriteDictionary){
		spriteDictionary[key].src = encodedImages['sprite'][key];
	}
    visualizeButtonClick(document.getElementById("shinyoff"))
    visualizeButtonUnclick(document.getElementById("shinyon"))
	for (key in unguessedDict){

		unguessedDict[key].getElementsByTagName('img')[0].src = encodedImages['sprite'][key];
	}
}

document.getElementById("shinyon").onclick = swapToShiny;
document.getElementById("shinyoff").onclick = swapToNormal;


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




let randomIntFromInterval = function (min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min)
}

var spheal;
let ethan_roll = function (){
	
	
	let canvas = document.createElement('canvas');
	canvas.style.position = 'absolute';
	canvas.style.top = '0px';
	canvas.style.left = '0px';
	canvas.style['z-index'] = 3;
	canvas.width = document.documentElement.clientWidth;
	canvas.height = document.documentElement.clientHeight + 500;
	document.body.appendChild(canvas);
	let ctx = canvas.getContext("2d");
	
	let sphealCount = 400;
	
	
	let spheals = [];

	for (let i = 0; i<sphealCount; i++){
		
		let x = randomIntFromInterval( -200,  document.documentElement.clientWidth + 200);
		let y = randomIntFromInterval( -2000,  -450);
		let speed = randomIntFromInterval(6000, 12000);
		let size = randomIntFromInterval(128,  180);
		let angle = randomIntFromInterval( 0,  360);
		let angleIncrement = randomIntFromInterval(-2000, 2000);
		
		spheals.push([x,y, speed, size, angle, angleIncrement]);
	}
	
	let fps = 60;
	let animationDuration = 6;
	let nrFrames = fps *  animationDuration;
	
	let delay = 1000/60;
	let waitFor = 0;
	for (let i = 0; i<nrFrames; i++){
		let k = i;
		setTimeout(() => {
			ctx.clearRect(0, 0, canvas.width, canvas.height); //clear the canvas
			for (let j = 0; j<spheals.length; j++){
				spheals[j][1]+= (spheals[j][2]/1000)
				spheals[j][2]*=1.005;
				ctx.save(); //saves the state of canvas
				ctx.translate(spheals[j][0] ,spheals[j][1])
				ctx.rotate(spheals[j][4] * (Math.PI / 180))
				spheals[j][4]+=(spheals[j][5]/1000);
				ctx.drawImage(spheal, -spheals[j][3]/ 2, -spheals[j][3] / 2, spheals[j][3], spheals[j][3]);
				ctx.restore()
			}
			
		}, waitFor);
		waitFor+=delay;
		
	}
	setTimeout(() => {
		document.body.removeChild(canvas);
	}, waitFor);
	
}


document.getElementById("accordion").onclick = function (){
	
	if (document.getElementById("panel").style.display == 'block'){
		document.getElementById("panel").style.display = 'none';
		document.getElementById("accordion").textContent = 'Show list';
		
		let childNodes = document.getElementById("panel").childNodes;
		
		for (let i = 0; i<childNodes.length; i++){
			childNodes[i].style.display = 'block';
		}	
		
	}else{	
		document.getElementById("panel").style.display = 'block'
		document.getElementById("accordion").textContent = 'Hide list';
		
		let childNodes = document.getElementById("panel").childNodes;
		
		for (let i = 0; i<childNodes.length; i++){
			let childElements = childNodes[i].childNodes[0].childNodes;
			let hasContent = false;

			for (let j = 0; j<childElements.length; j++){
				if (childElements[j].style.display != 'none'){
	
					hasContent = true;
					break;
				}
			}

			if (!hasContent){
				childNodes[i].style.display = 'none';
			}else{
				childNodes[i].style.display = 'block';
			}
		}
		
		
	}
	changeFooterPosition()
}

document.getElementById("accordion2").onclick = function (){
	
	if (document.getElementById("leaderboard2").style.display == 'block'){
		document.getElementById("leaderboard2").style.display = 'none';
		document.getElementById("accordion2").textContent = 'Show list';
		
		
	}else{	
		document.getElementById("leaderboard2").style.display = 'block'
		document.getElementById("accordion2").textContent = 'Hide list';
		updateFullLeaderboard();
		
		
	}
	changeFooterPosition()
}


let emptyLeaderboard = function (){
	let leaderboardDiv = document.getElementById("leaderboard");
	while(leaderboardDiv.firstChild){
		leaderboardDiv.removeChild(leaderboardDiv.firstChild);
	}
}


let isTwitchOn = false;
var client;

let twitchLeaderboard = {
    "StapoTV":5,
    "adeptcharon":3,
	"somedude":3,
	"ethan_from_chicago":2,
	"ethan_from_canadia":2,
	"ethan_from_america":2,
	"ethan_from_downtown":2,
	"ethan_from_spheal":2
}


let rankVals = [
	'rankone',
	'ranktwo',
	'rankthree'
]


let sortDictionaryByValue = function(dictionary){
    let entries = Object.entries(dictionary);
    return sorted = entries.sort((a, b) => b[1] - a[1]);
}

document.getElementById("twitch-on").onclick = function (){
	if (!isTwitchOn){
		isTwitchOn = true;
		let channelName =  document.getElementById("twitch-channel").value;
		console.log('enable', channelName);
		document.getElementById("twitch-channel").disabled = true;

        visualizeButtonUnclick(document.getElementById("twitch-off"))
        visualizeButtonClick(document.getElementById("twitch-on"))
		
		client = new tmi.Client({
			channels: [ document.getElementById("twitch-channel").value ]
		});
		
		client.connect();
		
		client.on('message', (channel, tags, message, self) => {
			console.log(`${tags['display-name']}: ${message}`);


			if (channelName.toLowerCase() == 'ethan_from_chicago'){
				if (message === "ethan_from_chicago's favorite pokemon".toLowerCase()) {
					message = 'spheal';
					ethan_roll();
				}
				if (message === "satan".toLowerCase()) {
					message = 'whimsicott';
				}
				if (message === "wilbur".toLowerCase()) {
					message = 'pidove';
					parseInput('tranquill', false);
					parseInput('unfezant', false);
				}
				if (message === "dennis".toLowerCase()) {
					message = 'roggenrola';
					parseInput('boldore', false);
					parseInput('gigalith', false);
				}
				if (message === "fortuna".toLowerCase()) {
					message = 'spheal';
				}
			}
			

			let isCorrect = parseInput(message, false);
			
			if (isCorrect){
				document.getElementById("ranking").style.display = 'block';
				if (tags['display-name'] in twitchLeaderboard){
					twitchLeaderboard[tags['display-name']] +=1;
				}
				else{
					twitchLeaderboard[tags['display-name']] =1;
				}
				
				
				let sorted = sortDictionaryByValue(twitchLeaderboard);
				emptyLeaderboard();
				let leaderboardDiv = document.getElementById("leaderboard");
				for (let i = 0; i<sorted.length; i++){
					let scoreDiv = document.createElement('div');
					scoreDiv.classList.add('inlinetext')
					scoreDiv.classList.add('rank')
					scoreDiv.classList.add(rankVals[i])
					let textNode = document.createTextNode('#' + (i+1) +' '+ sorted[i][0] + ' (' + sorted[i][1] + ')');
					scoreDiv.appendChild(textNode)
					leaderboardDiv.appendChild(scoreDiv);
					if (i >= 2){
						break;
					}
				}
				
				
				
			}

		});
		
	}
}

document.getElementById("twitch-off").onclick = function (){
	if (isTwitchOn){
		isTwitchOn = false;
		console.log('disable');
		document.getElementById("twitch-channel").disabled = false;
        visualizeButtonUnclick(document.getElementById("twitch-on"))
        visualizeButtonClick(document.getElementById("twitch-off"))
		client.disconnect();
		document.getElementById("ranking").style.display = 'none';
	}
}

let updateFullLeaderboard = function (){
    let leaderboardDiv = document.getElementById("leaderboard2");
	leaderboardDiv.classList.add('box','roundedf','topedge','bottomless');
    while (leaderboardDiv.firstChild) {
        leaderboardDiv.firstChild.remove()
    }
    if (Object.keys(twitchLeaderboard).length > 0){
        let sorted = sortDictionaryByValue(twitchLeaderboard);
        leaderboardDiv.style.display = 'block'
		
		for (let i = 0; i<sorted.length; i++){
			let scoreDiv = document.createElement('div');
			let placeDiv = document.createElement('div');
			let usernameDiv = document.createElement('div');
			let nrGuessedDiv = document.createElement('div');
			let ballImg = document.createElement("img");
			ballImg.classList.add('spriteb');
			ballImg.src = '/sprites/unknown-1.png';
			scoreDiv.classList.add('board')
			placeDiv.classList.add('place','inlinebox')
			usernameDiv.classList.add('twitchname','inlinebox')
			nrGuessedDiv.classList.add('number','inlinebox')
			let textNode = document.createTextNode('#' + (i+1));
			placeDiv.appendChild(textNode)
			let textNode2 = document.createTextNode(sorted[i][0]);
			usernameDiv.appendChild(textNode2)
			let textNode3 = document.createTextNode(' ' + sorted[i][1]);
			nrGuessedDiv.append(ballImg,textNode3)
			scoreDiv.append(placeDiv,usernameDiv,nrGuessedDiv)
			leaderboardDiv.append(scoreDiv);
		}
    }
}


document.getElementById("darkon").onclick = function (){
    if(!darkMode){
        darkMode = !darkMode
        visualizeButtonUnclick(document.getElementById("darkoff"))
        visualizeButtonClick(document.getElementById("darkon"))

        document.getElementById("body").classList.add("bodydark");

        let boxes = document.getElementsByClassName("box")

        for (let i = 0; i < boxes.length; i++){
            boxes[i].classList.add("boxdark")
        }

        let buttons = document.getElementsByClassName("button")
        for (let i = 0; i < buttons.length; i++){
            buttons[i].classList.add("buttondark")
        }


        let smolButtons = document.getElementsByClassName("smolbutton")
        for (let i = 0; i < smolButtons.length; i++){
            smolButtons[i].classList.add("smolbuttondark")
        }

        let buttonsX = document.getElementsByClassName("smolbuttonx")

        for (let i = 0; i < buttonsX.length; i++){
            buttonsX[i].classList.add("smolbuttonxdark")
        }
		
		let limelights = document.getElementsByClassName("limelight")

        for (let i = 0; i < limelights.length; i++){
            limelights[i].classList.add("limelightdark")
        }
		
		let greyers = document.getElementsByClassName("greyer")

        for (let i = 0; i < greyers.length; i++){
            greyers[i].classList.add("greyerdark")
        }

		let boarders = document.getElementsByClassName("inlinebox")

        for (let i = 0; i < boarders.length; i++){
            boarders[i].classList.add("inlineboxdark")
        }
		
        for (let i = 0; i < pokeballArray.length; i++){
            pokeballArray[i].src = '/sprites/unknown-2.png';
        }
        recentSprite.src = '/sprites/unknown-2.png'
    }
}
document.getElementById("darkoff").onclick = function (){
    if(darkMode){
        darkMode = !darkMode
        visualizeButtonUnclick(document.getElementById("darkon"))
        visualizeButtonClick(document.getElementById("darkoff"))

        document.getElementById("body").classList.remove("bodydark");

        let boxes = document.getElementsByClassName("box")

        for (let i = 0; i < boxes.length; i++){
            boxes[i].classList.remove("boxdark")
        }

        let buttons = document.getElementsByClassName("button")
        for (let i = 0; i < buttons.length; i++){
            buttons[i].classList.remove("buttondark")
        }


        let smolButtons = document.getElementsByClassName("smolbutton")
        for (let i = 0; i < smolButtons.length; i++){
            smolButtons[i].classList.remove("smolbuttondark")
        }

        let buttonsX = document.getElementsByClassName("smolbuttonx")

        for (let i = 0; i < buttonsX.length; i++){
            buttonsX[i].classList.remove("smolbuttonxdark")
        }
		
        let limelights = document.getElementsByClassName("limelight")

        for (let i = 0; i < limelights.length; i++){
            limelights[i].classList.remove("limelightdark")
        }
		
        let greyers = document.getElementsByClassName("greyer")

        for (let i = 0; i < greyers.length; i++){
            greyers[i].classList.remove("greyerdark")
        }
		
        let boarders = document.getElementsByClassName("inlinebox")

        for (let i = 0; i < boarders.length; i++){
            boarders[i].classList.remove("inlineboxdark")
        }
		
        for (let i = 0; i < pokeballArray.length; i++){
            pokeballArray[i].src = '/sprites/unknown.png';
        }
        recentSprite.src = '/sprites/unknown.png'
    }
}

loadSprites()