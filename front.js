
let pokemonList = ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise', 'Caterpie', 'Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Pidgeotto', 'Pidgeot', 'Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Arbok', 'Pikachu', 'Raichu', 'Sandshrew', 'Sandslash', 'Nidoranf', 'Nidorina', 'Nidoqueen', 'Nidoranm', 'Nidorino', 'Nidoking', 'Clefairy', 'Clefable', 'Vulpix', 'Ninetales', 'Jigglypuff', 'Wigglytuff', 'Zubat', 'Golbat', 'Oddish', 'Gloom', 'Vileplume', 'Paras', 'Parasect', 'Venonat', 'Venomoth', 'Diglett', 'Dugtrio', 'Meowth', 'Persian', 'Psyduck', 'Golduck', 'Mankey', 'Primeape', 'Growlithe', 'Arcanine', 'Poliwag', 'Poliwhirl', 'Poliwrath', 'Abra', 'Kadabra', 'Alakazam', 'Machop', 'Machoke', 'Machamp', 'Bellsprout', 'Weepinbell', 'Victreebel', 'Tentacool', 'Tentacruel', 'Geodude', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowpoke', 'Slowbro', 'Magnemite', 'Magneton', "Farfetch'd", 'Doduo', 'Dodrio', 'Seel', 'Dewgong', 'Grimer', 'Muk', 'Shellder', 'Cloyster', 'Gastly', 'Haunter', 'Gengar', 'Onix', 'Drowzee', 'Hypno', 'Krabby', 'Kingler', 'Voltorb', 'Electrode', 'Exeggcute', 'Exeggutor', 'Cubone', 'Marowak', 'Hitmonlee', 'Hitmonchan', 'Lickitung', 'Koffing', 'Weezing', 'Rhyhorn', 'Rhydon', 'Chansey', 'Tangela', 'Kangaskhan', 'Horsea', 'Seadra', 'Goldeen', 'Seaking', 'Staryu', 'Starmie', 'Mr. Mime', 'Scyther', 'Jynx', 'Electabuzz', 'Magmar', 'Pinsir', 'Tauros', 'Magikarp', 'Gyarados', 'Lapras', 'Ditto', 'Eevee', 'Vaporeon', 'Jolteon', 'Flareon', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Aerodactyl', 'Snorlax', 'Articuno', 'Zapdos', 'Moltres', 'Dratini', 'Dragonair', 'Dragonite', 'Mewtwo', 'Mew', 'Chikorita', 'Bayleef', 'Meganium', 'Cyndaquil', 'Quilava', 'Typhlosion', 'Totodile', 'Croconaw', 'Feraligatr', 'Sentret', 'Furret', 'Hoothoot', 'Noctowl', 'Ledyba', 'Ledian', 'Spinarak', 'Ariados', 'Crobat', 'Chinchou', 'Lanturn', 'Pichu', 'Cleffa', 'Igglybuff', 'Togepi', 'Togetic', 'Natu', 'Xatu', 'Mareep', 'Flaaffy', 'Ampharos', 'Bellossom', 'Marill', 'Azumarill', 'Sudowoodo', 'Politoed', 'Hoppip', 'Skiploom', 'Jumpluff', 'Aipom', 'Sunkern', 'Sunflora', 'Yanma', 'Wooper', 'Quagsire', 'Espeon', 'Umbreon', 'Murkrow', 'Slowking', 'Misdreavus', 'Unown', 'Wobbuffet', 'Girafarig', 'Pineco', 'Forretress', 'Dunsparce', 'Gligar', 'Steelix', 'Snubbull', 'Granbull', 'Qwilfish', 'Scizor', 'Shuckle', 'Heracross', 'Sneasel', 'Teddiursa', 'Ursaring', 'Slugma', 'Magcargo', 'Swinub', 'Piloswine', 'Corsola', 'Remoraid', 'Octillery', 'Delibird', 'Mantine', 'Skarmory', 'Houndour', 'Houndoom', 'Kingdra', 'Phanpy', 'Donphan', 'Porygon2', 'Stantler', 'Smeargle', 'Tyrogue', 'Hitmontop', 'Smoochum', 'Elekid', 'Magby', 'Miltank', 'Blissey', 'Raikou', 'Entei', 'Suicune', 'Larvitar', 'Pupitar', 'Tyranitar', 'Lugia', 'Ho-Oh', 'Celebi', 'Treecko', 'Grovyle', 'Sceptile', 'Torchic', 'Combusken', 'Blaziken', 'Mudkip', 'Marshtomp', 'Swampert', 'Poochyena', 'Mightyena', 'Zigzagoon', 'Linoone', 'Wurmple', 'Silcoon', 'Beautifly', 'Cascoon', 'Dustox', 'Lotad', 'Lombre', 'Ludicolo', 'Seedot', 'Nuzleaf', 'Shiftry', 'Taillow', 'Swellow', 'Wingull', 'Pelipper', 'Ralts', 'Kirlia', 'Gardevoir', 'Surskit', 'Masquerain', 'Shroomish', 'Breloom', 'Slakoth', 'Vigoroth', 'Slaking', 'Nincada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud', 'Makuhita', 'Hariyama', 'Azurill', 'Nosepass', 'Skitty', 'Delcatty', 'Sableye', 'Mawile', 'Aron', 'Lairon', 'Aggron', 'Meditite', 'Medicham', 'Electrike', 'Manectric', 'Plusle', 'Minun', 'Volbeat', 'Illumise', 'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharpedo', 'Wailmer', 'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig', 'Spinda', 'Trapinch', 'Vibrava', 'Flygon', 'Cacnea', 'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper', 'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt', 'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo', 'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette', 'Duskull', 'Dusclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut', 'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Clamperl', 'Huntail', 'Gorebyss', 'Relicanth', 'Luvdisc', 'Bagon', 'Shelgon', 'Salamence', 'Beldum', 'Metang', 'Metagross', 'Regirock', 'Regice', 'Registeel', 'Latias', 'Latios', 'Kyogre', 'Groudon', 'Rayquaza', 'Jirachi', 'Deoxys', 'Turtwig', 'Grotle', 'Torterra', 'Chimchar', 'Monferno', 'Infernape', 'Piplup', 'Prinplup', 'Empoleon', 'Starly', 'Staravia', 'Staraptor', 'Bidoof', 'Bibarel', 'Kricketot', 'Kricketune', 'Shinx', 'Luxio', 'Luxray', 'Budew', 'Roserade', 'Cranidos', 'Rampardos', 'Shieldon', 'Bastiodon', 'Burmy', 'Wormadam', 'Mothim', 'Combee', 'Vespiquen', 'Pachirisu', 'Buizel', 'Floatzel', 'Cherubi', 'Cherrim', 'Shellos', 'Gastrodon', 'Ambipom', 'Drifloon', 'Drifblim', 'Buneary', 'Lopunny', 'Mismagius', 'Honchkrow', 'Glameow', 'Purugly', 'Chingling', 'Stunky', 'Skuntank', 'Bronzor', 'Bronzong', 'Bonsly', 'Mime Jr.', 'Happiny', 'Chatot', 'Spiritomb', 'Gible', 'Gabite', 'Garchomp', 'Munchlax', 'Riolu', 'Lucario', 'Hippopotas', 'Hippowdon', 'Skorupi', 'Drapion', 'Croagunk', 'Toxicroak', 'Carnivine', 'Finneon', 'Lumineon', 'Mantyke', 'Snover', 'Abomasnow', 'Weavile', 'Magnezone', 'Lickilicky', 'Rhyperior', 'Tangrowth', 'Electivire', 'Magmortar', 'Togekiss', 'Yanmega', 'Leafeon', 'Glaceon', 'Gliscor', 'Mamoswine', 'Porygon-Z', 'Gallade', 'Probopass', 'Dusknoir', 'Froslass', 'Rotom', 'Uxie', 'Mesprit', 'Azelf', 'Dialga', 'Palkia', 'Heatran', 'Regigigas', 'Giratina', 'Cresselia', 'Phione', 'Manaphy', 'Darkrai', 'Shaymin', 'Arceus', 'Victini', 'Snivy', 'Servine', 'Serperior', 'Tepig', 'Pignite', 'Emboar', 'Oshawott', 'Dewott', 'Samurott', 'Patrat', 'Watchog', 'Lillipup', 'Herdier', 'Stoutland', 'Purrloin', 'Liepard', 'Pansage', 'Simisage', 'Pansear', 'Simisear', 'Panpour', 'Simipour', 'Munna', 'Musharna', 'Pidove', 'Tranquill', 'Unfezant', 'Blitzle', 'Zebstrika', 'Roggenrola', 'Boldore', 'Gigalith', 'Woobat', 'Swoobat', 'Drilbur', 'Excadrill', 'Audino', 'Timburr', 'Gurdurr', 'Conkeldurr', 'Tympole', 'Palpitoad', 'Seismitoad', 'Throh', 'Sawk', 'Sewaddle', 'Swadloon', 'Leavanny', 'Venipede', 'Whirlipede', 'Scolipede', 'Cottonee', 'Whimsicott', 'Petilil', 'Lilligant', 'Basculin', 'Sandile', 'Krokorok', 'Krookodile', 'Darumaka', 'Darmanitan', 'Maractus', 'Dwebble', 'Crustle', 'Scraggy', 'Scrafty', 'Sigilyph', 'Yamask', 'Cofagrigus', 'Tirtouga', 'Carracosta', 'Archen', 'Archeops', 'Trubbish', 'Garbodor', 'Zorua', 'Zoroark', 'Minccino', 'Cinccino', 'Gothita', 'Gothorita', 'Gothitelle', 'Solosis', 'Duosion', 'Reuniclus', 'Ducklett', 'Swanna', 'Vanillite', 'Vanillish', 'Vanilluxe', 'Deerling', 'Sawsbuck', 'Emolga', 'Karrablast', 'Escavalier', 'Foongus', 'Amoonguss', 'Frillish', 'Jellicent', 'Alomomola', 'Joltik', 'Galvantula', 'Ferroseed', 'Ferrothorn', 'Klink', 'Klang', 'Klinklang', 'Tynamo', 'Eelektrik', 'Eelektross', 'Elgyem', 'Beheeyem', 'Litwick', 'Lampent', 'Chandelure', 'Axew', 'Fraxure', 'Haxorus', 'Cubchoo', 'Beartic', 'Cryogonal', 'Shelmet', 'Accelgor', 'Stunfisk', 'Mienfoo', 'Mienshao', 'Druddigon', 'Golett', 'Golurk', 'Pawniard', 'Bisharp', 'Bouffalant', 'Rufflet', 'Braviary', 'Vullaby', 'Mandibuzz', 'Heatmor', 'Durant', 'Deino', 'Zweilous', 'Hydreigon', 'Larvesta', 'Volcarona', 'Cobalion', 'Terrakion', 'Virizion', 'Tornadus', 'Thundurus', 'Reshiram', 'Zekrom', 'Landorus', 'Kyurem', 'Keldeo', 'Meloetta', 'Genesect', 'Chespin', 'Quilladin', 'Chesnaught', 'Fennekin', 'Braixen', 'Delphox', 'Froakie', 'Frogadier', 'Greninja', 'Bunnelby', 'Diggersby', 'Fletchling', 'Fletchinder', 'Talonflame', 'Scatterbug', 'Spewpa', 'Vivillon', 'Litleo', 'Pyroar', 'Flabébé', 'Floette', 'Florges', 'Skiddo', 'Gogoat', 'Pancham', 'Pangoro', 'Furfrou', 'Espurr', 'Meowstic', 'Honedge', 'Doublade', 'Aegislash', 'Spritzee', 'Aromatisse', 'Swirlix', 'Slurpuff', 'Inkay', 'Malamar', 'Binacle', 'Barbaracle', 'Skrelp', 'Dragalge', 'Clauncher', 'Clawitzer', 'Helioptile', 'Heliolisk', 'Tyrunt', 'Tyrantrum', 'Amaura', 'Aurorus', 'Sylveon', 'Hawlucha', 'Dedenne', 'Carbink', 'Goomy', 'Sliggoo', 'Goodra', 'Klefki', 'Phantump', 'Trevenant', 'Pumpkaboo', 'Gourgeist', 'Bergmite', 'Avalugg', 'Noibat', 'Noivern', 'Xerneas', 'Yveltal', 'Zygarde', 'Diancie', 'Hoopa', 'Volcanion', 'Rowlet', 'Dartrix', 'Decidueye', 'Litten', 'Torracat', 'Incineroar', 'Popplio', 'Brionne', 'Primarina', 'Pikipek', 'Trumbeak', 'Toucannon', 'Yungoos', 'Gumshoos', 'Grubbin', 'Charjabug', 'Vikavolt', 'Crabrawler', 'Crabominable', 'Oricorio', 'Cutiefly', 'Ribombee', 'Rockruff', 'Lycanroc', 'Wishiwashi', 'Mareanie', 'Toxapex', 'Mudbray', 'Mudsdale', 'Dewpider', 'Araquanid', 'Fomantis', 'Lurantis', 'Morelull', 'Shiinotic', 'Salandit', 'Salazzle', 'Stufful', 'Bewear', 'Bounsweet', 'Steenee', 'Tsareena', 'Comfey', 'Oranguru', 'Passimian', 'Wimpod', 'Golisopod', 'Sandygast', 'Palossand', 'Pyukumuku', 'Type: Null', 'Silvally', 'Minior', 'Komala', 'Turtonator', 'Togedemaru', 'Mimikyu', 'Bruxish', 'Drampa', 'Dhelmise', 'Jangmo-o', 'Hakamo-o', 'Kommo-o', 'Tapu Koko', 'Tapu Lele', 'Tapu Bulu', 'Tapu Fini', 'Cosmog', 'Cosmoem', 'Solgaleo', 'Lunala', 'Nihilego', 'Buzzwole', 'Pheromosa', 'Xurkitree', 'Celesteela', 'Kartana', 'Guzzlord', 'Necrozma', 'Magearna', 'Marshadow', 'Poipole', 'Naganadel', 'Stakataka', 'Blacephalon', 'Zeraora', 'Meltan', 'Melmetal', 'Grookey', 'Thwackey', 'Rillaboom', 'Scorbunny', 'Raboot', 'Cinderace', 'Sobble', 'Drizzile', 'Inteleon', 'Skwovet', 'Greedent', 'Rookidee', 'Corvisquire', 'Corviknight', 'Blipbug', 'Dottler', 'Orbeetle', 'Nickit', 'Thievul', 'Gossifleur', 'Eldegoss', 'Wooloo', 'Dubwool', 'Chewtle', 'Drednaw', 'Yamper', 'Boltund', 'Rolycoly', 'Carkol', 'Coalossal', 'Applin', 'Flapple', 'Appletun', 'Silicobra', 'Sandaconda', 'Cramorant', 'Arrokuda', 'Barraskewda', 'Toxel', 'Toxtricity', 'Sizzlipede', 'Centiskorch', 'Clobbopus', 'Grapploct', 'Sinistea', 'Polteageist', 'Hatenna', 'Hattrem', 'Hatterene', 'Impidimp', 'Morgrem', 'Grimmsnarl', 'Obstagoon', 'Perrserker', 'Cursola', "Sirfetch'd", 'Mr. Rime', 'Runerigus', 'Milcery', 'Alcremie', 'Falinks', 'Pincurchin', 'Snom', 'Frosmoth', 'Stonjourner', 'Eiscue', 'Indeedee', 'Morpeko', 'Cufant', 'Copperajah', 'Dracozolt', 'Arctozolt', 'Dracovish', 'Arctovish', 'Duraludon', 'Dreepy', 'Drakloak', 'Dragapult', 'Zacian', 'Zamazenta', 'Eternatus', 'Kubfu', 'Urshifu', 'Zarude', 'Regieleki', 'Regidrago', 'Glastrier', 'Spectrier', 'Calyrex', 'Wyrdeer', 'Kleavor', 'Ursaluna', 'Basculegion', 'Sneasler', 'Overqwil', 'Enamorus'];
let de_pokemonList = ['Bisasam', 'Bisaknosp', 'Bisaflor', 'Glumanda', 'Glutexo', 'Glurak', 'Schiggy', 'Schillok', 'Turtok', 'Raupy', 'Safcon', 'Smettbo', 'Hornliu', 'Kokuna', 'Bibor', 'Taubsi', 'Tauboga', 'Tauboss', 'Rattfratz', 'Rattikarl', 'Habitak', 'Ibitak', 'Rettan', 'Arbok', 'Pikachu', 'Raichu', 'Sandan', 'Sandamer', 'Nidoranf', 'Nidorina', 'Nidoqueen', 'Nidoranm', 'Nidorino', 'Nidoking', 'Piepi', 'Pixi', 'Vulpix', 'Vulnona', 'Pummeluff', 'Knuddeluff', 'Zubat', 'Golbat', 'Myrapla', 'Duflor', 'Giflor', 'Paras', 'Parasek', 'Bluzuk', 'Omot', 'Digda', 'Digdri', 'Mauzi', 'Snobilikat', 'Enton', 'Entoron', 'Menki', 'Rasaff', 'Fukano', 'Arkani', 'Quapsel', 'Quaputzi', 'Quappo', 'Abra', 'Kadabra', 'Simsala', 'Machollo', 'Maschock', 'Machomei', 'Knofensa', 'Ultrigaria', 'Sarzenia', 'Tentacha', 'Tentoxa', 'Kleinstein', 'Georok', 'Geowaz', 'Ponita', 'Gallopa', 'Flegmon', 'Lahmus', 'Magnetilo', 'Magneton', 'Porenta', 'Dodu', 'Dodri', 'Jurob', 'Jugong', 'Sleima', 'Sleimok', 'Muschas', 'Austos', 'Nebulak', 'Alpollo', 'Gengar', 'Onix', 'Traumato', 'Hypno', 'Krabby', 'Kingler', 'Voltobal', 'Lektrobal', 'Owei', 'Kokowei', 'Tragosso', 'Knogga', 'Kicklee', 'Nockchan', 'Schlurp', 'Smogon', 'Smogmog', 'Rihorn', 'Rizeros', 'Chaneira', 'Tangela', 'Kangama', 'Seeper', 'Seemon', 'Goldini', 'Golking', 'Sterndu', 'Starmie', 'Pantimos', 'Sichlor', 'Rossana', 'Elektek', 'Magmar', 'Pinsir', 'Tauros', 'Karpador', 'Garados', 'Lapras', 'Ditto', 'Evoli', 'Aquana', 'Blitza', 'Flamara', 'Porygon', 'Amonitas', 'Amoroso', 'Kabuto', 'Kabutops', 'Aerodactyl', 'Relaxo', 'Arktos', 'Zapdos', 'Lavados', 'Dratini', 'Dragonir', 'Dragoran', 'Mewtu', 'Mew', 'Endivie', 'Lorblatt', 'Meganie', 'Feurigel', 'Igelavar', 'Tornupto', 'Karnimani', 'Tyracroc', 'Impergator', 'Wiesor', 'Wiesenior', 'Hoothoot', 'Noctuh', 'Ledyba', 'Ledian', 'Webarak', 'Ariados', 'Iksbat', 'Lampi', 'Lanturn', 'Pichu', 'Pii', 'Fluffeluff', 'Togepi', 'Togetic', 'Natu', 'Xatu', 'Voltilamm', 'Waaty', 'Ampharos', 'Blubella', 'Marill', 'Azumarill', 'Mogelbaum', 'Quaxo', 'Hoppspross', 'Hubelupf', 'Papungha', 'Griffel', 'Sonnkern', 'Sonnflora', 'Yanma', 'Felino', 'Morlord', 'Psiana', 'Nachtara', 'Kramurx', 'Laschoking', 'Traunfugil', 'Icognito', 'Woingenau', 'Girafarig', 'Tannza', 'Forstellka', 'Dummisel', 'Skorgla', 'Stahlos', 'Snubbull', 'Granbull', 'Baldorfish', 'Scherox', 'Pottrott', 'Skaraborn', 'Sniebel', 'Teddiursa', 'Ursaring', 'Schneckmag', 'Magcargo', 'Quiekel', 'Keifel', 'Corasonn', 'Remoraid', 'Octillery', 'Botogel', 'Mantax', 'Panzaeron', 'Hunduster', 'Hundemon', 'Seedraking', 'Phanpy', 'Donphan', 'Porygon2', 'Damhirplex', 'Farbeagle', 'Rabauz', 'Kapoera', 'Kussilla', 'Elekid', 'Magby', 'Miltank', 'Heiteira', 'Raikou', 'Entei', 'Suicune', 'Larvitar', 'Pupitar', 'Despotar', 'Lugia', 'Ho-Oh', 'Celebi', 'Geckarbor', 'Reptain', 'Gewaldro', 'Flemmli', 'Jungglut', 'Lohgock', 'Hydropi', 'Moorabbel', 'Sumpex', 'Fiffyen', 'Magnayen', 'Zigzachs', 'Geradaks', 'Waumpel', 'Schaloko', 'Papinella', 'Panekon', 'Pudox', 'Loturzel', 'Lombrero', 'Kappalores', 'Samurzel', 'Blanas', 'Tengulist', 'Schwalbini', 'Schwalboss', 'Wingull', 'Pelipper', 'Trasla', 'Kirlia', 'Guardevoir', 'Gehweiher', 'Maskeregen', 'Knilz', 'Kapilz', 'Bummelz', 'Muntier', 'Letarking', 'Nincada', 'Ninjask', 'Ninjatom', 'Flurmel', 'Krakeelo', 'Krawumms', 'Makuhita', 'Hariyama', 'Azurill', 'Nasgnet', 'Eneco', 'Enekoro', 'Zobiris', 'Flunkifer', 'Stollunior', 'Stollrak', 'Stolloss', 'Meditie', 'Meditalis', 'Frizelbliz', 'Voltenso', 'Plusle', 'Minun', 'Volbeat', 'Illumise', 'Roselia', 'Schluppuck', 'Schlukwech', 'Kanivanha', 'Tohaido', 'Wailmer', 'Wailord', 'Camaub', 'Camerupt', 'Qurtel', 'Spoink', 'Groink', 'Pandir', 'Knacklion', 'Vibrava', 'Libelldra', 'Tuska', 'Noktuska', 'Wablu', 'Altaria', 'Sengo', 'Vipitis', 'Lunastein', 'Sonnfel', 'Schmerbe', 'Welsar', 'Krebscorps', 'Krebutack', 'Puppance', 'Lepumentas', 'Liliep', 'Wielie', 'Anorith', 'Armaldo', 'Barschwa', 'Milotic', 'Formeo', 'Kecleon', 'Shuppet', 'Banette', 'Zwirrlicht', 'Zwirrklop', 'Tropius', 'Palimpalim', 'Absol', 'Isso', 'Schneppke', 'Firnontor', 'Seemops', 'Seejong', 'Walraisa', 'Perlu', 'Aalabyss', 'Saganabyss', 'Relicanth', 'Liebiskus', 'Kindwurm', 'Draschel', 'Brutalanda', 'Tanhel', 'Metang', 'Metagross', 'Regirock', 'Regice', 'Registeel', 'Latias', 'Latios', 'Kyogre', 'Groudon', 'Rayquaza', 'Jirachi', 'Deoxys', 'Chelast', 'Chelcarain', 'Chelterrar', 'Panflam', 'Panpyro', 'Panferno', 'Plinfa', 'Pliprin', 'Impoleon', 'Staralili', 'Staravia', 'Staraptor', 'Bidiza', 'Bidifas', 'Zirpurze', 'Zirpeise', 'Sheinux', 'Luxio', 'Luxtra', 'Knospi', 'Roserade', 'Koknodon', 'Rameidon', 'Schilterus', 'Bollterus', 'Burmy', 'Burmadame', 'Moterpel', 'Wadribie', 'Honweisel', 'Pachirisu', 'Bamelin', 'Bojelin', 'Kikugi', 'Kinoso', 'Schalellos', 'Gastrodon', 'Ambidiffel', 'Driftlon', 'Drifzepeli', 'Haspiror', 'Schlapor', 'Traunmagil', 'Kramshef', 'Charmian', 'Shnurgarst', 'Klingplim', 'Skunkapuh', 'Skuntank', 'Bronzel', 'Bronzong', 'Mobai', 'Pantimimi', 'Wonneira', 'Plaudagei', 'Kryppuk', 'Kaumalat', 'Knarksel', 'Knakrack', 'Mampfaxo', 'Riolu', 'Lucario', 'Hippopotas', 'Hippoterus', 'Pionskora', 'Piondragi', 'Glibunkel', 'Toxiquak', 'Venuflibis', 'Finneon', 'Lumineon', 'Mantirps', 'Shnebedeck', 'Rexblisar', 'Snibunna', 'Magnezone', 'Schlurplek', 'Rihornior', 'Tangoloss', 'Elevoltek', 'Magbrant', 'Togekiss', 'Yanmega', 'Folipurba', 'Glaziola', 'Skorgro', 'Mamutel', 'Porygon-Z', 'Galagladi', 'Voluminas', 'Zwirrfinst', 'Frosdedje', 'Rotom', 'Selfe', 'Vesprit', 'Tobutz', 'Dialga', 'Palkia', 'Heatran', 'Regigigas', 'Giratina', 'Cresselia', 'Phione', 'Manaphy', 'Darkrai', 'Shaymin', 'Arceus', 'Victini', 'Serpifeu', 'Efoserp', 'Serpiroyal', 'Floink', 'Ferkokel', 'Flambirex', 'Ottaro', 'Zwottronin', 'Admurai', 'Nagelotz', 'Kukmarda', 'Yorkleff', 'Terribark', 'Bissbark', 'Felilou', 'Kleoparda', 'Vegimak', 'Vegichita', 'Grillmak', 'Grillchita', 'Sodamak', 'Sodachita', 'Somniam', 'Somnivora', 'Dusselgurr', 'Navitaub', 'Fasasnob', 'Elezeba', 'Zebritz', 'Kiesling', 'Sedimantur', 'Brockoloss', 'Fleknoil', 'Fletiamo', 'Rotomurf', 'Stalobor', 'Ohrdoch', 'Praktibalk', 'Strepoli', 'Meistagrif', 'Schallquap', 'Mebrana', 'Branawarz', 'Jiutesto', 'Karadonis', 'Strawickl', 'Folikon', 'Matrifol', 'Toxiped', 'Rollum', 'Cerapendra', 'Waumboll', 'Elfun', 'Lilminip', 'Dressella', 'Barschuft', 'Ganovil', 'Rokkaiman', 'Rabigator', 'Flampion', 'Flampivian', 'Maracamba', 'Lithomith', 'Castellith', 'Zurrokex', 'Irokex', 'Symvolara', 'Makabaja', 'Echnatoll', 'Galapaflos', 'Karippas', 'Flapteryx', 'Aeropteryx', 'Unratütox', 'Deponitox', 'Zorua', 'Zoroark', 'Picochilla', 'Chillabell', 'Mollimorba', 'Hypnomorba', 'Morbitesse', 'Monozyto', 'Mitodos', 'Zytomega', 'Piccolente', 'Swaroness', 'Gelatini', 'Gelatroppo', 'Gelatwino', 'Sesokitz', 'Kronjuwild', 'Emolga', 'Laukaps', 'Cavalanzas', 'Tarnpignon', 'Hutsassa', 'Quabbel', 'Apoquallyp', 'Mamolida', 'Wattzapf', 'Voltula', 'Kastadur', 'Tentantel', 'Klikk', 'Kliklak', 'Klikdiklak', 'Zapplardin', 'Zapplalek', 'Zapplarang', 'Pygraulon', 'Megalon', 'Lichtel', 'Laternecto', 'Skelabra', 'Milza', 'Sharfax', 'Maxax', 'Petznief', 'Siberio', 'Frigometri', 'Schnuthelm', 'Hydragil', 'Flunschlik', 'Lin-Fu', 'Wie-Shu', 'Shardrago', 'Golbit', 'Golgantes', 'Gladiantri', 'Caesurio', 'Bisofank', 'Geronimatz', 'Washakwil', 'Skallyk', 'Grypheldis', 'Furnifraß', 'Fermicula', 'Kapuno', 'Duodino', 'Trikephalo', 'Ignivor', 'Ramoth', 'Kobalium', 'Terrakium', 'Viridium', 'Boreos', 'Voltolos', 'Reshiram', 'Zekrom', 'Demeteros', 'Kyurem', 'Keldeo', 'Meloetta', 'Genesect', 'Igamaro', 'Igastarnish', 'Brigaron', 'Fynx', 'Rutena', 'Fennexis', 'Froxy', 'Amphizel', 'Quajutsu', 'Scoppel', 'Grebbit', 'Dartiri', 'Dartignis', 'Fiaro', 'Purmel', 'Puponcho', 'Vivillon', 'Leufeo', 'Pyroleo', 'Flabébé', 'Floette', 'Florges', 'Mähikel', 'Chevrumm', 'Pam-Pam', 'Pandagro', 'Coiffwaff', 'Psiau', 'Psiaugon', 'Gramokles', 'Duokles', 'Durengard', 'Parfi', 'Parfinesse', 'Flauschling', 'Sabbaione', 'Iscalar', 'Calamanero', 'Bithora', 'Thanathora', 'Algitt', 'Tandrak', 'Scampisto', 'Wummer', 'Eguana', 'Elezard', 'Balgoras', 'Monargoras', 'Amarino', 'Amagarga', 'Feelinara', 'Resladero', 'Dedenne', 'Rocara', 'Viscora', 'Viscargot', 'Viscogon', 'Clavion', 'Paragoni', 'Trombork', 'Irrbis', 'Pumpdjinn', 'Arktip', 'Arktilas', 'eF-eM', 'UHaFnir', 'Xerneas', 'Yveltal', 'Zygarde', 'Diancie', 'Hoopa', 'Volcanion', 'Bauz', 'Arboretoss', 'Silvarro', 'Flamiau', 'Miezunder', 'Fuegro', 'Robball', 'Marikeck', 'Primarene', 'Peppeck', 'Trompeck', 'Tukanon', 'Mangunior', 'Manguspektor', 'Mabula', 'Akkup', 'Donarion', 'Krabbox', 'Krawell', 'Choreogel', 'Wommel', 'Bandelby', 'Wuffels', 'Wolwerock', 'Lusardin', 'Garstella', 'Aggrostella', 'Pampuli', 'Pampross', 'Araqua', 'Aranestro', 'Imantis', 'Mantidea', 'Bubungus', 'Lamellux', 'Molunk', 'Amfira', 'Velursi', 'Kosturso', 'Frubberl', 'Frubaila', 'Fruyal', 'Curelei', 'Kommandutan', 'Quartermak', 'Reißlaus', 'Tectass', 'Sankabuh', 'Colossand', 'Gufa', 'Typ:Null', 'Amigento', 'Meteno', 'Koalelu', 'Tortunator', 'Togedemaru', 'Mimigma', 'Knirfish', 'Sen-Long', 'Moruda', 'Miniras', 'Mediras', 'Grandiras', 'Kapu-Riki', 'Kapu-Fala', 'Kapu-Toro', 'Kapu-Kime', 'Cosmog', 'Cosmovum', 'Solgaleo', 'Lunala', 'Anego', 'Masskito', 'Schabelle', 'Voltriant', 'Kaguron', 'Katagami', 'Schlingking', 'Necrozma', 'Magearna', 'Marshadow', 'Venicro', 'Agoyon', 'Muramura', 'Kopplosio', 'Zeraora', 'Meltan', 'Melmetal', 'Chimpep', 'Chimstix', 'Gortrom', 'Hopplo', 'Kickerlo', 'Liberlo', 'Memmeon', 'Phlegleon', 'Intelleon', 'Raffel', 'Schlaraffel', 'Meikro', 'Kranoviz', 'Krarmor', 'Sensect', 'Keradar', 'Maritellit', 'Kleptifux', 'Gaunux', 'Cottini', 'Cottomi', 'Wolly', 'Zwollock', 'Kamehaps', 'Kamalm', 'Voldi', 'Bellektro', 'Klonkett', 'Wagong', 'Montecarbo', 'Knapfel', 'Drapfel', 'Schlapfel', 'Salanga', 'Sanaconda', 'Urgl', 'Pikuda', 'Barrakiefa', 'Toxel', 'Riffex', 'Thermopod', 'Infernopod', 'Klopptopus', 'Kaocto', 'Fatalitee', 'Mortipot', 'Brimova', 'Brimano', 'Silembrim', 'Bähmon', 'Pelzebub', 'Olangaar', 'Barrikadax', 'Mauzinger', 'Gorgasonn', 'Lauchzelot', 'Pantifrost', 'Oghnatoll', 'Hokumil', 'Pokusan', 'Legios', 'Britzigel', 'Snomnom', 'Mottineva', 'Humanolith', 'Kubuin', 'Servol', 'Morpeko', 'Kupfanti', 'Patinaraja', 'Lectragon', 'Lecryodon', 'Pescragon', 'Pescryodon', 'Duraludon', 'Grolldra', 'Phandra', 'Katapuldra', 'Zacian', 'Zamazenta', 'Endynalos', 'Dakuma', 'Wulaosu', 'Zarude', 'Regieleki', 'Regidrago', 'Polaross', 'Phantoross', 'Coronospa', 'Damythir', 'Axantor', 'Ursaluna', 'Salmagnis', 'Snieboss', 'Myriador', 'Cupidos']
let fr_pokemonList = ['Bulbizarre', 'Herbizarre', 'Florizarre', 'Salamèche', 'Reptincel', 'Dracaufeu', 'Carapuce', 'Carabaffe', 'Tortank', 'Chenipan', 'Chrysacier', 'Papilusion', 'Aspicot', 'Coconfort', 'Dardargnan', 'Roucool', 'Roucoups', 'Roucarnage', 'Rattata', 'Rattatac', 'Piafabec', 'Rapasdepic', 'Abo', 'Arbok', 'Pikachu', 'Raichu', 'Sabelette', 'Sablaireau', 'Nidoranf', 'Nidorina', 'Nidoqueen', 'Nidoranm', 'Nidorino', 'Nidoking', 'Mélofée', 'Mélodelfe', 'Goupix', 'Feunard', 'Rondoudou', 'Grodoudou', 'Nosferapti', 'Nosferalto', 'Mystherbe', 'Ortide', 'Rafflesia', 'Paras', 'Parasect', 'Mimitoss', 'Aéromite', 'Taupiqueur', 'Triopikeur', 'Miaouss', 'Persian', 'Psykokwak', 'Akwakwak', 'Férosinge', 'Colossinge', 'Caninos', 'Arcanin', 'Ptitard', 'Têtarte', 'Tartard', 'Abra', 'Kadabra', 'Alakazam', 'Machoc', 'Machopeur', 'Mackogneur', 'Chétiflor', 'Boustiflor', 'Empiflor', 'Tentacool', 'Tentacruel', 'Racaillou', 'Gravalanch', 'Grolem', 'Ponyta', 'Galopa', 'Ramoloss', 'Flagadoss', 'Magnéti', 'Magnéton', 'Canarticho', 'Doduo', 'Dodrio', 'Otaria', 'Lamantine', 'Tadmorv', 'Grotadmorv', 'Kokiyas', 'Crustabri', 'Fantominus', 'Spectrum', 'Ectoplasma', 'Onix', 'Soporifik', 'Hypnomade', 'Krabby', 'Krabboss', 'Voltorbe', 'Électrode', 'Noeunoeuf', 'Noadkoko', 'Osselait', 'Ossatueur', 'Kicklee', 'Tygnon', 'Excelangue', 'Smogo', 'Smogogo', 'Rhinocorne', 'Rhinoféros', 'Leveinard', 'Saquedeneu', 'Kangourex', 'Hypotrempe', 'Hypocéan', 'Poissirène', 'Poissoroy', 'Stari', 'Staross', 'M. Mime', 'Insécateur', 'Lippoutou', 'Élektek', 'Magmar', 'Scarabrute', 'Tauros', 'Magicarpe', 'Léviator', 'Lokhlass', 'Métamorph', 'Évoli', 'Aquali', 'Voltali', 'Pyroli', 'Porygon', 'Amonita', 'Amonistar', 'Kabuto', 'Kabutops', 'Ptéra', 'Ronflex', 'Artikodin', 'Électhor', 'Sulfura', 'Minidraco', 'Draco', 'Dracolosse', 'Mewtwo', 'Mew', 'Germignon', 'Macronium', 'Méganium', 'Héricendre', 'Feurisson', 'Typhlosion', 'Kaiminus', 'Crocrodil', 'Aligatueur', 'Fouinette', 'Fouinar', 'Hoothoot', 'Noarfang', 'Coxy', 'Coxyclaque', 'Mimigal', 'Migalos', 'Nostenfer', 'Loupio', 'Lanturn', 'Pichu', 'Mélo', 'Toudoudou', 'Togepi', 'Togetic', 'Natu', 'Xatu', 'Wattouat', 'Lainergie', 'Pharamp', 'Joliflor', 'Marill', 'Azumarill', 'Simularbre', 'Tarpaud', 'Granivol', 'Floravol', 'Cotovol', 'Capumain', 'Tournegrin', 'Héliatronc', 'Yanma', 'Axoloto', 'Maraiste', 'Mentali', 'Noctali', 'Cornèbre', 'Roigada', 'Feuforêve', 'Zarbi', 'Qulbutoké', 'Girafarig', 'Pomdepik', 'Foretress', 'Insolourdo', 'Scorplane', 'Steelix', 'Snubbull', 'Granbull', 'Qwilfish', 'Cizayox', 'Caratroc', 'Scarhino', 'Farfuret', 'Teddiursa', 'Ursaring', 'Limagma', 'Volcaropod', 'Marcacrin', 'Cochignon', 'Corayon', 'Rémoraid', 'Octillery', 'Cadoizo', 'Démanta', 'Airmure', 'Malosse', 'Démolosse', 'Hyporoi', 'Phanpy', 'Donphan', 'Porygon2', 'Cerfrousse', 'Queulorior', 'Debugant', 'Kapoera', 'Lippouti', 'Élekid', 'Magby', 'Écrémeuh', 'Leuphorie', 'Raikou', 'Entei', 'Suicune', 'Embrylex', 'Ymphect', 'Tyranocif', 'Lugia', 'Ho-Oh', 'Celebi', 'Arcko', 'Massko', 'Jungko', 'Poussifeu', 'Galifeu', 'Braségali', 'Gobou', 'Flobio', 'Laggron', 'Medhyèna', 'Grahyèna', 'Zigzaton', 'Linéon', 'Chenipotte', 'Armulys', 'Charmillon', 'Blindalys', 'Papinox', 'Nénupiot', 'Lombre', 'Ludicolo', 'Grainipiot', 'Pifeuil', 'Tengalice', 'Nirondelle', 'Hélédelle', 'Goélise', 'Bekipan', 'Tarsal', 'Kirlia', 'Gardevoir', 'Arakdo', 'Maskadra', 'Balignon', 'Chapignon', 'Parecool', 'Vigoroth', 'Monaflèmit', 'Ningale', 'Ninjask', 'Munja', 'Chuchmur', 'Ramboum', 'Brouhabam', 'Makuhita', 'Hariyama', 'Azurill', 'Tarinor', 'Skitty', 'Delcatty', 'Ténéfix', 'Mysdibule', 'Galekid', 'Galegon', 'Galeking', 'Méditikka', 'Charmina', 'Dynavolt', 'Élecsprint', 'Posipi', 'Négapi', 'Muciole', 'Lumivole', 'Rosélia', 'Gloupti', 'Avaltout', 'Carvanha', 'Sharpedo', 'Wailmer', 'Wailord', 'Chamallot', 'Camérupt', 'Chartor', 'Spoink', 'Groret', 'Spinda', 'Kraknoix', 'Vibraninf', 'Libégon', 'Cacnea', 'Cacturne', 'Tylton', 'Altaria', 'Mangriff', 'Séviper', 'Séléroc', 'Solaroc', 'Barloche', 'Barbicha', 'Écrapince', 'Colhomard', 'Balbuto', 'Kaorine', 'Lilia', 'Vacilys', 'Anorith', 'Armaldo', 'Barpau', 'Milobellus', 'Morphéo', 'Kecleon', 'Polichombr', 'Branette', 'Skelénox', 'Téraclope', 'Tropius', 'Éoko', 'Absol', 'Okéoké', 'Stalgamin', 'Oniglali', 'Obalie', 'Phogleur', 'Kaimorse', 'Coquiperl', 'Serpang', 'Rosabyss', 'Relicanth', 'Lovdisc', 'Draby', 'Drackhaus', 'Drattak', 'Terhal', 'Métang', 'Métalosse', 'Regirock', 'Regice', 'Registeel', 'Latias', 'Latios', 'Kyogre', 'Groudon', 'Rayquaza', 'Jirachi', 'Deoxys', 'Tortipouss', 'Boskara', 'Torterra', 'Ouisticram', 'Chimpenfeu', 'Simiabraz', 'Tiplouf', 'Prinplouf', 'Pingoléon', 'Étourmi', 'Étourvol', 'Étouraptor', 'Keunotor', 'Castorno', 'Crikzik', 'Mélokrik', 'Lixy', 'Luxio', 'Luxray', 'Rozbouton', 'Roserade', 'Kranidos', 'Charkos', 'Dinoclier', 'Bastiodon', 'Cheniti', 'Cheniselle', 'Papilord', 'Apitrini', 'Apireine', 'Pachirisu', 'Mustébouée', 'Mustéflott', 'Ceribou', 'Ceriflor', 'Sancoki', 'Tritosor', 'Capidextre', 'Baudrive', 'Grodrive', 'Laporeille', 'Lockpin', 'Magirêve', 'Corboss', 'Chaglam', 'Chaffreux', 'Korillon', 'Moufouette', 'Moufflair', 'Archéomire', 'Archéodong', 'Manzaï', 'Mime Jr.', 'Ptiravi', 'Pijako', 'Spiritomb', 'Griknot', 'Carmache', 'Carchacrok', 'Goinfrex', 'Riolu', 'Lucario', 'Hippopotas', 'Hippodocus', 'Rapion', 'Drascore', 'Cradopaud', 'Coatox', 'Vortente', 'Écayon', 'Luminéon', 'Babimanta', 'Blizzi', 'Blizzaroi', 'Dimoret', 'Magnézone', 'Coudlangue', 'Rhinastoc', 'Bouldeneu', 'Élekable', 'Maganon', 'Togekiss', 'Yanmega', 'Phyllali', 'Givrali', 'Scorvol', 'Mammochon', 'Porygon-Z', 'Gallame', 'Tarinorme', 'Noctunoir', 'Momartik', 'Motisma', 'Créhelf', 'Créfollet', 'Créfadet', 'Dialga', 'Palkia', 'Heatran', 'Regigigas', 'Giratina', 'Cresselia', 'Phione', 'Manaphy', 'Darkrai', 'Shaymin', 'Arceus', 'Victini', 'Vipélierre', 'Lianaja', 'Majaspic', 'Gruikui', 'Grotichon', 'Roitiflam', 'Moustillon', 'Mateloutre', 'Clamiral', 'Ratentif', 'Miradar', 'Ponchiot', 'Ponchien', 'Mastouffe', 'Chacripan', 'Léopardus', 'Feuillajou', 'Feuiloutan', 'Flamajou', 'Flamoutan', 'Flotajou', 'Flotoutan', 'Munna', 'Mushana', 'Poichigeon', 'Colombeau', 'Déflaisan', 'Zébibron', 'Zéblitz', 'Nodulithe', 'Géolithe', 'Gigalithe', 'Chovsourir', 'Rhinolove', 'Rototaupe', 'Minotaupe', 'Nanméouïe', 'Charpenti', 'Ouvrifier', 'Bétochef', 'Tritonde', 'Batracné', 'Crapustule', 'Judokrak', 'Karaclée', 'Larveyette', 'Couverdure', 'Manternel', 'Venipatte', 'Scobolide', 'Brutapode', 'Doudouvet', 'Farfaduvet', 'Chlorobule', 'Fragilady', 'Bargantua', 'Mascaïman', 'Escroco', 'Crocorible', 'Darumarond', 'Darumacho', 'Maracachi', 'Crabicoque', 'Crabaraque', 'Baggiguane', 'Baggaïd', 'Cryptéro', 'Tutafeh', 'Tutankafer', 'Carapagos', 'Mégapagos', 'Arkéapti', 'Aéroptéryx', 'Miamiasme', 'Miasmax', 'Zorua', 'Zoroark', 'Chinchidou', 'Pashmilla', 'Scrutella', 'Mesmérella', 'Sidérella', 'Nucléos', 'Méios', 'Symbios', 'Couaneton', 'Lakmécygne', 'Sorbébé', 'Sorboul', 'Sorbouboul', 'Vivaldaim', 'Haydaim', 'Emolga', 'Carabing', 'Lançargot', 'Trompignon', 'Gaulet', 'Viskuse', 'Moyade', 'Mamanbo', 'Statitik', 'Mygavolt', 'Grindur', 'Noacier', 'Tic', 'Clic', 'Cliticlic', 'Anchwatt', 'Lampéroie', 'Ohmassacre', 'Lewsor', 'Neitram', 'Funécire', 'Mélancolux', 'Lugulabre', 'Coupenotte', 'Incisache', 'Tranchodon', 'Polarhume', 'Polagriffe', 'Hexagel', 'Escargaume', 'Limaspeed', 'Limonde', 'Kungfouine', 'Shaofouine', 'Drakkarmin', 'Gringolem', 'Golemastoc', 'Scalpion', 'Scalproie', 'Frison', 'Furaiglon', 'Gueriaigle', 'Vostourno', 'Vaututrice', 'Aflamanoir', 'Fermite', 'Solochi', 'Diamat', 'Trioxhydre', 'Pyronille', 'Pyrax', 'Cobaltium', 'Terrakium', 'Viridium', 'Boréas', 'Fulguris', 'Reshiram', 'Zekrom', 'Démétéros', 'Kyurem', 'Keldeo', 'Meloetta', 'Genesect', 'Marisson', 'Boguérisse', 'Blindépique', 'Feunnec', 'Roussil', 'Goupelin', 'Grenousse', 'Croâporal', 'Amphinobi', 'Sapereau', 'Excavarenne', 'Passerouge', 'Braisillon', 'Flambusard', 'Lépidonille', 'Pérégrain', 'Prismillon', 'Hélionceau', 'Némélios', 'Flabébé', 'Floette', 'Florges', 'Cabriolaine', 'Chevroum', 'Pandespiègle', 'Pandarbare', 'Couafarel', 'Psystigri', 'Mistigrix', 'Monorpale', 'Dimoclès', 'Exagide', 'Fluvetin', 'Cocotine', 'Sucroquin', 'Cupcanaille', 'Sepiatop', 'Sepiatroce', 'Opermine', 'Golgopathe', 'Venalgue', 'Kravarech', 'Flingouste', 'Gamblast', 'Galvaran', 'Iguolta', 'Ptyranidur', 'Rexillius', 'Amagara', 'Dragmara', 'Nymphali', 'Brutalibré', 'Dedenne', 'Strassie', 'Mucuscule', 'Colimucus', 'Muplodocus', 'Trousselin', 'Brocélôme', 'Desséliande', 'Pitrouille', 'Banshitrouye', 'Grelaçon', 'Séracrawl', 'Sonistrelle', 'Bruyverne', 'Xerneas', 'Yveltal', 'Zygarde', 'Diancie', 'Hoopa', 'Volcanion', 'Brindibou', 'Efflèche', 'Archéduc', 'Flamiaou', 'Matoufeu', 'Félinferno', 'Otaquin', 'Otarlette', 'Oratoria', 'Picassaut', 'Piclairon', 'Bazoucan', 'Manglouton', 'Argouste', 'Larvibule', 'Chrysapile', 'Lucanon', 'Crabagarre', 'Crabominable', 'Plumeline', 'Bombydou', 'Rubombelle', 'Rocabot', 'Lougaroc', 'Froussardine', 'Vorastérie', 'Prédastérie', 'Tiboudet', 'Bourrinos', 'Araqua', 'Tarenbulle', 'Mimantis', 'Floramantis', 'Spododo', 'Lampignon', 'Tritox', 'Malamandre', 'Nounourson', 'Chelours', 'Croquine', 'Candine', 'Sucreine', 'Guérilande', 'Gouroutan', 'Quartermac', 'Sovkipou', 'Sarmuraï', 'Bacabouh', 'Trépassable', 'Concombaffe', 'Type:0', 'Silvallié', 'Météno', 'Dodoala', 'Boumata', 'Togedemaru', 'Mimiqui', 'Denticrisse', 'Draïeul', 'Sinistrail', 'Bébécaille', 'Écaïd', 'Ékaïser', 'Tokorico', 'Tokopiyon', 'Tokotoro', 'Tokopisco', 'Cosmog', 'Cosmovum', 'Solgaleo', 'Lunala', 'Zéroïd', 'Mouscoto', 'Cancrelove', 'Câblifère', 'Bamboiselle', 'Katagami', 'Engloutyran', 'Necrozma', 'Magearna', 'Marshadow', 'Vémini', 'Mandrillon', 'Ama-Ama', 'Pierroteknik', 'Zeraora', 'Meltan', 'Melmetal', 'Ouistempo', 'Badabouin', 'Gorythmic', 'Flambino', 'Lapyro', 'Pyrobut', 'Larméléon', 'Arrozard', 'Lézargus', 'Rongourmand', 'Rongrigou', 'Minisange', 'Bleuseille', 'Corvaillus', 'Larvadar', 'Coléodôme', 'Astronelle', 'Goupilou', 'Roublenard', 'Tournicoton', 'Blancoton', 'Moumouton', 'Moumouflon', 'Khélocrok', 'Torgamord', 'Voltoutou', 'Fulgudog', 'Charbi', 'Wagomine', 'Monthracite', 'Verpom', 'Pomdrapi', 'Dratatin', 'Dunaja', 'Dunaconda', 'Nigosier', 'Embrochet', 'Hastacuda', 'Toxizap', 'Salarsen', 'Grillepattes', 'Scolocendre', 'Poulpaf', 'Krakos', 'Théffroi', 'Polthégeist', 'Bibichut', 'Chapotus', 'Sorcilence', 'Grimalin', 'Fourbelin', 'Angoliath', 'Ixon', 'Berserkatt', 'Corayôme', 'Palarticho', 'M. Glaquette', 'Tutétékri', 'Crèmy', 'Charmilly', 'Hexadron', 'Wattapik', 'Frissonille', 'Beldeneige', 'Dolman', 'Bekaglaçon', 'Wimessir', 'Morpeko', 'Charibari', 'Pachyradjah', 'Galvagon', 'Galvagla', 'Hydragon', 'Hydragla', 'Duralugon', 'Fantyrm', 'Dispareptil', 'Lanssorien', 'Zacian', 'Zamazenta', 'Éthernatos', 'Wushours', 'Shifours', 'Zarude', 'Regieleki', 'Regidrago', 'Blizzeval', 'Spectreval', 'Sylveroy', 'Cerbyllin', 'Hachécateur', 'Ursaking', 'Paragruel', 'Farfurex', 'Qwilpik', 'Amovénus']
let ja_pokemonList = ['フシギダネ', 'フシギソウ', 'フシギバナ', 'ヒトカゲ', 'リザード', 'リザードン', 'ゼニガメ', 'カメール', 'カメックス', 'キャタピー', 'トランセル', 'バタフリー', 'ビードル', 'コクーン', 'スピアー', 'ポッポ', 'ピジョン', 'ピジョット', 'コラッタ', 'ラッタ', 'オニスズメ', 'オニドリル', 'アーボ', 'アーボック', 'ピカチュウ', 'ライチュウ', 'サンド', 'サンドパン', 'ニドランf', 'ニドリーナ', 'ニドクイン', 'ニドランm', 'ニドリーノ', 'ニドキング', 'ピッピ', 'ピクシー', 'ロコン', 'キュウコン', 'プリン', 'プクリン', 'ズバット', 'ゴルバット', 'ナゾノクサ', 'クサイハナ', 'ラフレシア', 'パラス', 'パラセクト', 'コンパン', 'モルフォン', 'ディグダ', 'ダグトリオ', 'ニャース', 'ペルシアン', 'コダック', 'ゴルダック', 'マンキー', 'オコリザル', 'ガーディ', 'ウインディ', 'ニョロモ', 'ニョロゾ', 'ニョロボン', 'ケーシィ', 'ユンゲラー', 'フーディン', 'ワンリキー', 'ゴーリキー', 'カイリキー', 'マダツボミ', 'ウツドン', 'ウツボット', 'メノクラゲ', 'ドククラゲ', 'イシツブテ', 'ゴローン', 'ゴローニャ', 'ポニータ', 'ギャロップ', 'ヤドン', 'ヤドラン', 'コイル', 'レアコイル', 'カモネギ', 'ドードー', 'ドードリオ', 'パウワウ', 'ジュゴン', 'ベトベター', 'ベトベトン', 'シェルダー', 'パルシェン', 'ゴース', 'ゴースト', 'ゲンガー', 'イワーク', 'スリープ', 'スリーパー', 'クラブ', 'キングラー', 'ビリリダマ', 'マルマイン', 'タマタマ', 'ナッシー', 'カラカラ', 'ガラガラ', 'サワムラー', 'エビワラー', 'ベロリンガ', 'ドガース', 'マタドガス', 'サイホーン', 'サイドン', 'ラッキー', 'モンジャラ', 'ガルーラ', 'タッツー', 'シードラ', 'トサキント', 'アズマオウ', 'ヒトデマン', 'スターミー', 'バリヤード', 'ストライク', 'ルージュラ', 'エレブー', 'ブーバー', 'カイロス', 'ケンタロス', 'コイキング', 'ギャラドス', 'ラプラス', 'メタモン', 'イーブイ', 'シャワーズ', 'サンダース', 'ブースター', 'ポリゴン', 'オムナイト', 'オムスター', 'カブト', 'カブトプス', 'プテラ', 'カビゴン', 'フリーザー', 'サンダー', 'ファイヤー', 'ミニリュウ', 'ハクリュー', 'カイリュー', 'ミュウツー', 'ミュウ', 'チコリータ', 'ベイリーフ', 'メガニウム', 'ヒノアラシ', 'マグマラシ', 'バクフーン', 'ワニノコ', 'アリゲイツ', 'オーダイル', 'オタチ', 'オオタチ', 'ホーホー', 'ヨルノズク', 'レディバ', 'レディアン', 'イトマル', 'アリアドス', 'クロバット', 'チョンチー', 'ランターン', 'ピチュー', 'ピィ', 'ププリン', 'トゲピー', 'トゲチック', 'ネイティ', 'ネイティオ', 'メリープ', 'モココ', 'デンリュウ', 'キレイハナ', 'マリル', 'マリルリ', 'ウソッキー', 'ニョロトノ', 'ハネッコ', 'ポポッコ', 'ワタッコ', 'エイパム', 'ヒマナッツ', 'キマワリ', 'ヤンヤンマ', 'ウパー', 'ヌオー', 'エーフィ', 'ブラッキー', 'ヤミカラス', 'ヤドキング', 'ムウマ', 'アンノーン', 'ソーナンス', 'キリンリキ', 'クヌギダマ', 'フォレトス', 'ノコッチ', 'グライガー', 'ハガネール', 'ブルー', 'グランブル', 'ハリーセン', 'ハッサム', 'ツボツボ', 'ヘラクロス', 'ニューラ', 'ヒメグマ', 'リングマ', 'マグマッグ', 'マグカルゴ', 'ウリムー', 'イノムー', 'サニーゴ', 'テッポウオ', 'オクタン', 'デリバード', 'マンタイン', 'エアームド', 'デルビル', 'ヘルガー', 'キングドラ', 'ゴマゾウ', 'ドンファン', 'ポリゴン２', 'オドシシ', 'ドーブル', 'バルキー', 'カポエラー', 'ムチュール', 'エレキッド', 'ブビィ', 'ミルタンク', 'ハピナス', 'ライコウ', 'エンテイ', 'スイクン', 'ヨーギラス', 'サナギラス', 'バンギラス', 'ルギア', 'ホウオウ', 'セレビィ', 'キモリ', 'ジュプトル', 'ジュカイン', 'アチャモ', 'ワカシャモ', 'バシャーモ', 'ミズゴロウ', 'ヌマクロー', 'ラグラージ', 'ポチエナ', 'グラエナ', 'ジグザグマ', 'マッスグマ', 'ケムッソ', 'カラサリス', 'アゲハント', 'マユルド', 'ドクケイル', 'ハスボー', 'ハスブレロ', 'ルンパッパ', 'タネボー', 'コノハナ', 'ダーテング', 'スバメ', 'オオスバメ', 'キャモメ', 'ペリッパー', 'ラルトス', 'キルリア', 'サーナイト', 'アメタマ', 'アメモース', 'キノココ', 'キノガッサ', 'ナマケロ', 'ヤルキモノ', 'ケッキング', 'ツチニン', 'テッカニン', 'ヌケニン', 'ゴニョニョ', 'ドゴーム', 'バクオング', 'マクノシタ', 'ハリテヤマ', 'ルリリ', 'ノズパス', 'エネコ', 'エネコロロ', 'ヤミラミ', 'クチート', 'ココドラ', 'コドラ', 'ボスゴドラ', 'アサナン', 'チャーレム', 'ラクライ', 'ライボルト', 'プラスル', 'マイナン', 'バルビート', 'イルミーゼ', 'ロゼリア', 'ゴクリン', 'マルノーム', 'キバニア', 'サメハダー', 'ホエルコ', 'ホエルオー', 'ドンメル', 'バクーダ', 'コータス', 'バネブー', 'ブーピッグ', 'パッチール', 'ナックラー', 'ビブラーバ', 'フライゴン', 'サボネア', 'ノクタス', 'チルット', 'チルタリス', 'ザングース', 'ハブネーク', 'ルナトーン', 'ソルロック', 'ドジョッチ', 'ナマズン', 'ヘイガニ', 'シザリガー', 'ヤジロン', 'ネンドール', 'リリーラ', 'ユレイドル', 'アノプス', 'アーマルド', 'ヒンバス', 'ミロカロス', 'ポワルン', 'カクレオン', 'カゲボウズ', 'ジュペッタ', 'ヨマワル', 'サマヨール', 'トロピウス', 'チリーン', 'アブソル', 'ソーナノ', 'ユキワラシ', 'オニゴーリ', 'タマザラシ', 'トドグラー', 'トドゼルガ', 'パールル', 'ハンテール', 'サクラビス', 'ジーランス', 'ラブカス', 'タツベイ', 'コモルー', 'ボーマンダ', 'ダンバル', 'メタング', 'メタグロス', 'レジロック', 'レジアイス', 'レジスチル', 'ラティアス', 'ラティオス', 'カイオーガ', 'グラードン', 'レックウザ', 'ジラーチ', 'デオキシス', 'ナエトル', 'ハヤシガメ', 'ドダイトス', 'ヒコザル', 'モウカザル', 'ゴウカザル', 'ポッチャマ', 'ポッタイシ', 'エンペルト', 'ムックル', 'ムクバード', 'ムクホーク', 'ビッパ', 'ビーダル', 'コロボーシ', 'コロトック', 'コリンク', 'ルクシオ', 'レントラー', 'スボミー', 'ロズレイド', 'ズガイドス', 'ラムパルド', 'タテトプス', 'トリデプス', 'ミノムッチ', 'ミノマダム', 'ガーメイル', 'ミツハニー', 'ビークイン', 'パチリス', 'ブイゼル', 'フローゼル', 'チェリンボ', 'チェリム', 'カラナクシ', 'トリトドン', 'エテボース', 'フワンテ', 'フワライド', 'ミミロル', 'ミミロップ', 'ムウマージ', 'ドンカラス', 'ニャルマー', 'ブニャット', 'リーシャン', 'スカンプー', 'スカタンク', 'ドーミラー', 'ドータクン', 'ウソハチ', 'マネネ', 'ピンプク', 'ペラップ', 'ミカルゲ', 'フカマル', 'ガバイト', 'ガブリアス', 'ゴンベ', 'リオル', 'ルカリオ', 'ヒポポタス', 'カバルドン', 'スコルピ', 'ドラピオン', 'グレッグル', 'ドクロッグ', 'マスキッパ', 'ケイコウオ', 'ネオラント', 'タマンタ', 'ユキカブリ', 'ユキノオー', 'マニューラ', 'ジバコイル', 'ベロベルト', 'ドサイドン', 'モジャンボ', 'エレキブル', 'ブーバーン', 'トゲキッス', 'メガヤンマ', 'リーフィア', 'グレイシア', 'グライオン', 'マンムー', 'ポリゴンＺ', 'エルレイド', 'ダイノーズ', 'ヨノワール', 'ユキメノコ', 'ロトム', 'ユクシー', 'エムリット', 'アグノム', 'ディアルガ', 'パルキア', 'ヒードラン', 'レジギガス', 'ギラティナ', 'クレセリア', 'フィオネ', 'マナフィ', 'ダークライ', 'シェイミ', 'アルセウス', 'ビクティニ', 'ツタージャ', 'ジャノビー', 'ジャローダ', 'ポカブ', 'チャオブー', 'エンブオー', 'ミジュマル', 'フタチマル', 'ダイケンキ', 'ミネズミ', 'ミルホッグ', 'ヨーテリー', 'ハーデリア', 'ムーランド', 'チョロネコ', 'レパルダス', 'ヤナップ', 'ヤナッキー', 'バオップ', 'バオッキー', 'ヒヤップ', 'ヒヤッキー', 'ムンナ', 'ムシャーナ', 'マメパト', 'ハトーボー', 'ケンホロウ', 'シママ', 'ゼブライカ', 'ダンゴロ', 'ガントル', 'ギガイアス', 'コロモリ', 'ココロモリ', 'モグリュー', 'ドリュウズ', 'タブンネ', 'ドッコラー', 'ドテッコツ', 'ローブシン', 'オタマロ', 'ガマガル', 'ガマゲロゲ', 'ナゲキ', 'ダゲキ', 'クルミル', 'クルマユ', 'ハハコモリ', 'フシデ', 'ホイーガ', 'ペンドラー', 'モンメン', 'エルフーン', 'チュリネ', 'ドレディア', 'バスラオ', 'メグロコ', 'ワルビル', 'ワルビアル', 'ダルマッカ', 'ヒヒダルマ', 'マラカッチ', 'イシズマイ', 'イワパレス', 'ズルッグ', 'ズルズキン', 'シンボラー', 'デスマス', 'デスカーン', 'プロトーガ', 'アバゴーラ', 'アーケン', 'アーケオス', 'ヤブクロン', 'ダストダス', 'ゾロア', 'ゾロアーク', 'チラーミィ', 'チラチーノ', 'ゴチム', 'ゴチミル', 'ゴチルゼル', 'ユニラン', 'ダブラン', 'ランクルス', 'コアルヒー', 'スワンナ', 'バニプッチ', 'バニリッチ', 'バイバニラ', 'シキジカ', 'メブキジカ', 'エモンガ', 'カブルモ', 'シュバルゴ', 'タマゲタケ', 'モロバレル', 'プルリル', 'ブルンゲル', 'ママンボウ', 'バチュル', 'デンチュラ', 'テッシード', 'ナットレイ', 'ギアル', 'ギギアル', 'ギギギアル', 'シビシラス', 'シビビール', 'シビルドン', 'リグレー', 'オーベム', 'ヒトモシ', 'ランプラー', 'シャンデラ', 'キバゴ', 'オノンド', 'オノノクス', 'クマシュン', 'ツンベアー', 'フリージオ', 'チョボマキ', 'アギルダー', 'マッギョ', 'コジョフー', 'コジョンド', 'クリムガン', 'ゴビット', 'ゴルーグ', 'コマタナ', 'キリキザン', 'バッフロン', 'ワシボン', 'ウォーグル', 'バルチャイ', 'バルジーナ', 'クイタラン', 'アイアント', 'モノズ', 'ジヘッド', 'サザンドラ', 'メラルバ', 'ウルガモス', 'コバルオン', 'テラキオン', 'ビリジオン', 'トルネロス', 'ボルトロス', 'レシラム', 'ゼクロム', 'ランドロス', 'キュレム', 'ケルディオ', 'メロエッタ', 'ゲノセクト', 'ハリマロン', 'ハリボーグ', 'ブリガロン', 'フォッコ', 'テールナー', 'マフォクシー', 'ケロマツ', 'ゲコガシラ', 'ゲッコウガ', 'ホルビー', 'ホルード', 'ヤヤコマ', 'ヒノヤコマ', 'ファイアロー', 'コフキムシ', 'コフーライ', 'ビビヨン', 'シシコ', 'カエンジシ', 'フラベベ', 'フラエッテ', 'フラージェス', 'メェークル', 'ゴーゴート', 'ヤンチャム', 'ゴロンダ', 'トリミアン', 'ニャスパー', 'ニャオニクス', 'ヒトツキ', 'ニダンギル', 'ギルガルド', 'シュシュプ', 'フレフワン', 'ペロッパフ', 'ペロリーム', 'マーイーカ', 'カラマネロ', 'カメテテ', 'ガメノデス', 'クズモー', 'ドラミドロ', 'ウデッポウ', 'ブロスター', 'エリキテル', 'エレザード', 'チゴラス', 'ガチゴラス', 'アマルス', 'アマルルガ', 'ニンフィア', 'ルチャブル', 'デデンネ', 'メレシー', 'ヌメラ', 'ヌメイル', 'ヌメルゴン', 'クレッフィ', 'ボクレー', 'オーロット', 'バケッチャ', 'パンプジン', 'カチコール', 'クレベース', 'オンバット', 'オンバーン', 'ゼルネアス', 'イベルタル', 'ジガルデ', 'ディアンシー', 'フーパ', 'ボルケニオン', 'モクロー', 'フクスロー', 'ジュナイパー', 'ニャビー', 'ニャヒート', 'ガオガエン', 'アシマリ', 'オシャマリ', 'アシレーヌ', 'ツツケラ', 'ケララッパ', 'ドデカバシ', 'ヤングース', 'デカグース', 'アゴジムシ', 'デンヂムシ', 'クワガノン', 'マケンカニ', 'ケケンカニ', 'オドリドリ', 'アブリー', 'アブリボン', 'イワンコ', 'ルガルガン', 'ヨワシ', 'ヒドイデ', 'ドヒドイデ', 'ドロバンコ', 'バンバドロ', 'シズクモ', 'オニシズクモ', 'カリキリ', 'ラランテス', 'ネマシュ', 'マシェード', 'ヤトウモリ', 'エンニュート', 'ヌイコグマ', 'キテルグマ', 'アマカジ', 'アママイコ', 'アマージョ', 'キュワワー', 'ヤレユータン', 'ナゲツケサル', 'コソクムシ', 'グソクムシャ', 'スナバァ', 'シロデスナ', 'ナマコブシ', 'タイプ：ヌル', 'シルヴァディ', 'メテノ', 'ネッコアラ', 'バクガメス', 'トゲデマル', 'ミミッキュ', 'ハギギシリ', 'ジジーロン', 'ダダリン', 'ジャラコ', 'ジャランゴ', 'ジャラランガ', 'カプ・コケコ', 'カプ・テテフ', 'カプ・ブルル', 'カプ・レヒレ', 'コスモッグ', 'コスモウム', 'ソルガレオ', 'ルナアーラ', 'ウツロイド', 'マッシブーン', 'フェローチェ', 'デンジュモク', 'テッカグヤ', 'カミツルギ', 'アクジキング', 'ネクロズマ', 'マギアナ', 'マーシャドー', 'ベベノム', 'アーゴヨン', 'ツンデツンデ', 'ズガドーン', 'ゼラオラ', 'メルタン', 'メルメタル', 'サルノリ', 'バチンキー', 'ゴリランダー', 'ヒバニー', 'ラビフット', 'エースバーン', 'メッソン', 'ジメレオン', 'インテレオン', 'ホシガリス', 'ヨクバリス', 'ココガラ', 'アオガラス', 'アーマーガア', 'サッチムシ', 'レドームシ', 'イオルブ', 'クスネ', 'フォクスライ', 'ヒメンカ', 'ワタシラガ', 'ウールー', 'バイウールー', 'カムカメ', 'カジリガメ', 'ワンパチ', 'パルスワン', 'タンドン', 'トロッゴン', 'セキタンザン', 'カジッチュ', 'アップリュー', 'タルップル', 'スナヘビ', 'サダイジャ', 'ウッウ', 'サシカマス', 'カマスジョー', 'エレズン', 'ストリンダー', 'ヤクデ', 'マルヤクデ', 'タタッコ', 'オトスパス', 'ヤバチャ', 'ポットデス', 'ミブリム', 'テブリム', 'ブリムオン', 'ベロバー', 'ギモー', 'オーロンゲ', 'タチフサグマ', 'ニャイキング', 'サニゴーン', 'ネギガナイト', 'バリコオル', 'デスバーン', 'マホミル', 'マホイップ', 'タイレーツ', 'バチンウニ', 'ユキハミ', 'モスノウ', 'イシヘンジン', 'コオリッポ', 'イエッサン', 'モルペコ', 'ゾウドウ', 'ダイオウドウ', 'パッチラゴン', 'パッチルドン', 'ウオノラゴン', 'ウオチルドン', 'ジュラルドン', 'ドラメシヤ', 'ドロンチ', 'ドラパルト', 'ザシアン', 'ザマゼンタ', 'ムゲンダイナ', 'ダクマ', 'ウーラオス', 'ザルード', 'レジエレキ', 'レジドラゴ', 'ブリザポス', 'レイスポス', 'バドレックス', 'アヤシシ', 'バサギリ', 'ガチグマ', 'イダイトウ', 'オオニューラ', 'ハリーマン', 'ラブトロス']
let ko_pokemonList = ['이상해씨', '이상해풀', '이상해꽃', '파이리', '리자드', '리자몽', '꼬부기', '어니부기', '거북왕', '캐터피', '단데기', '버터플', '뿔충이', '딱충이', '독침붕', '구구', '피죤', '피죤투', '꼬렛', '레트라', '깨비참', '깨비드릴조', '아보', '아보크', '피카츄', '라이츄', '모래두지', '고지', '니드런f', '니드리나', '니드퀸', '니드런m', '니드리노', '니드킹', '삐삐', '픽시', '식스테일', '나인테일', '푸린', '푸크린', '주뱃', '골뱃', '뚜벅쵸', '냄새꼬', '라플레시아', '파라스', '파라섹트', '콘팡', '도나리', '디그다', '닥트리오', '나옹', '페르시온', '고라파덕', '골덕', '망키', '성원숭', '가디', '윈디', '발챙이', '슈륙챙이', '강챙이', '캐이시', '윤겔라', '후딘', '알통몬', '근육몬', '괴력몬', '모다피', '우츠동', '우츠보트', '왕눈해', '독파리', '꼬마돌', '데구리', '딱구리', '포니타', '날쌩마', '야돈', '야도란', '코일', '레어코일', '파오리', '두두', '두트리오', '쥬쥬', '쥬레곤', '질퍽이', '질뻐기', '셀러', '파르셀', '고오스', '고우스트', '팬텀', '롱스톤', '슬리프', '슬리퍼', '크랩', '킹크랩', '찌리리공', '붐볼', '아라리', '나시', '탕구리', '텅구리', '시라소몬', '홍수몬', '내루미', '또가스', '또도가스', '뿔카노', '코뿌리', '럭키', '덩쿠리', '캥카', '쏘드라', '시드라', '콘치', '왕콘치', '별가사리', '아쿠스타', '마임맨', '스라크', '루주라', '에레브', '마그마', '쁘사이저', '켄타로스', '잉어킹', '갸라도스', '라프라스', '메타몽', '이브이', '샤미드', '쥬피썬더', '부스터', '폴리곤', '암나이트', '암스타', '투구', '투구푸스', '프테라', '잠만보', '프리져', '썬더', '파이어', '미뇽', '신뇽', '망나뇽', '뮤츠', '뮤', '치코리타', '베이리프', '메가니움', '브케인', '마그케인', '블레이범', '리아코', '엘리게이', '장크로다일', '꼬리선', '다꼬리', '부우부', '야부엉', '레디바', '레디안', '페이검', '아리아도스', '크로뱃', '초라기', '랜턴', '피츄', '삐', '푸푸린', '토게피', '토게틱', '네이티', '네이티오', '메리프', '보송송', '전룡', '아르코', '마릴', '마릴리', '꼬지모', '왕구리', '통통코', '두코', '솜솜코', '에이팜', '해너츠', '해루미', '왕자리', '우파', '누오', '에브이', '블래키', '니로우', '야도킹', '무우마', '안농', '마자용', '키링키', '피콘', '쏘콘', '노고치', '글라이거', '강철톤', '블루', '그랑블루', '침바루', '핫삼', '단단지', '헤라크로스', '포푸니', '깜지곰', '링곰', '마그마그', '마그카르고', '꾸꾸리', '메꾸리', '코산호', '총어', '대포무노', '딜리버드', '만타인', '무장조', '델빌', '헬가', '킹드라', '코코리', '코리갑', '폴리곤2', '노라키', '루브도', '배루키', '카포에라', '뽀뽀라', '에레키드', '마그비', '밀탱크', '해피너스', '라이코', '앤테이', '스이쿤', '애버라스', '데기라스', '마기라스', '루기아', '칠색조', '세레비', '나무지기', '나무돌이', '나무킹', '아차모', '영치코', '번치코', '물짱이', '늪짱이', '대짱이', '포챠나', '그라에나', '지그제구리', '직구리', '개무소', '실쿤', '뷰티플라이', '카스쿤', '독케일', '연꽃몬', '로토스', '로파파', '도토링', '잎새코', '다탱구', '테일로', '스왈로', '갈모매', '패리퍼', '랄토스', '킬리아', '가디안', '비구술', '비나방', '버섯꼬', '버섯모', '게을로', '발바로', '게을킹', '토중몬', '아이스크', '껍질몬', '소곤룡', '노공룡', '폭음룡', '마크탕', '하리뭉', '루리리', '코코파스', '에나비', '델케티', '깜까미', '입치트', '가보리', '갱도라', '보스로라', '요가랑', '요가램', '썬더라이', '썬더볼트', '플러시', '마이농', '볼비트', '네오비트', '로젤리아', '꼴깍몬', '꿀꺽몬', '샤프니아', '샤크니아', '고래왕자', '고래왕', '둔타', '폭타', '코터스', '피그점프', '피그킹', '얼루기', '톱치', '비브라바', '플라이곤', '선인왕', '밤선인', '파비코', '파비코리', '쟝고', '세비퍼', '루나톤', '솔록', '미꾸리', '메깅', '가재군', '가재장군', '오뚝군', '점토도리', '릴링', '릴리요', '아노딥스', '아말도', '빈티나', '밀로틱', '캐스퐁', '켈리몬', '어둠대신', '다크펫', '해골몽', '미라몽', '트로피우스', '치렁', '앱솔', '마자', '눈꼬마', '얼음귀신', '대굴레오', '씨레오', '씨카이저', '진주몽', '헌테일', '분홍장이', '시라칸', '사랑동이', '아공이', '쉘곤', '보만다', '메탕', '메탕구', '메타그로스', '레지락', '레지아이스', '레지스틸', '라티아스', '라티오스', '가이오가', '그란돈', '레쿠쟈', '지라치', '테오키스', '모부기', '수풀부기', '토대부기', '불꽃숭이', '파이숭이', '초염몽', '팽도리', '팽태자', '엠페르트', '찌르꼬', '찌르버드', '찌르호크', '비버니', '비버통', '귀뚤뚜기', '귀뚤톡크', '꼬링크', '럭시오', '렌트라', '꼬몽울', '로즈레이드', '두개도스', '램펄드', '방패톱스', '바리톱스', '도롱충이', '도롱마담', '나메일', '세꿀버리', '비퀸', '파치리스', '브이젤', '플로젤', '체리버', '체리꼬', '깝질무', '트리토돈', '겟핸보숭', '흔들풍손', '둥실라이드', '이어롤', '이어롭', '무우마직', '돈크로우', '나옹마', '몬냥이', '랑딸랑', '스컹뿡', '스컹탱크', '동미러', '동탁군', '꼬지지', '흉내내', '핑복', '페라페', '화강돌', '딥상어동', '한바이트', '한카리아스', '먹고자', '리오르', '루카리오', '히포포타스', '하마돈', '스콜피', '드래피온', '삐딱구리', '독개굴', '무스틈니', '형광어', '네오라이트', '타만타', '눈쓰개', '눈설왕', '포푸니라', '자포코일', '내룸벨트', '거대코뿌리', '덩쿠림보', '에레키블', '마그마번', '토게키스', '메가자리', '리피아', '글레이시아', '글라이온', '맘모꾸리', '폴리곤Z', '엘레이드', '대코파스', '야느와르몽', '눈여아', '로토무', '유크시', '엠라이트', '아그놈', '디아루가', '펄기아', '히드런', '레지기가스', '기라티나', '크레세리아', '피오네', '마나피', '다크라이', '쉐이미', '아르세우스', '비크티니', '주리비얀', '샤비', '샤로다', '뚜꾸리', '차오꿀', '염무왕', '수댕이', '쌍검자비', '대검귀', '보르쥐', '보르그', '요테리', '하데리어', '바랜드', '쌔비냥', '레파르다스', '야나프', '야나키', '바오프', '바오키', '앗차프', '앗차키', '몽나', '몽얌나', '콩둘기', '유토브', '켄호로우', '줄뮤마', '제브라이카', '단굴', '암트르', '기가이어스', '또르박쥐', '맘박쥐', '두더류', '몰드류', '다부니', '으랏차', '토쇠골', '노보청', '동챙이', '두까비', '두빅굴', '던지미', '타격귀', '두르보', '두르쿤', '모아머', '마디네', '휠구', '펜드라', '소미안', '엘풍', '치릴리', '드레디어', '배쓰나이', '깜눈크', '악비르', '악비아르', '달막화', '불비달마', '마라카치', '돌살이', '암팰리스', '곤율랭', '곤율거니', '심보러', '데스마스', '데스니칸', '프로토가', '늑골라', '아켄', '아케오스', '깨봉이', '더스트나', '조로아', '조로아크', '치라미', '치라치노', '고디탱', '고디보미', '고디모아젤', '유니란', '듀란', '란쿨루스', '꼬지보리', '스완나', '바닐프티', '바닐리치', '배바닐라', '사철록', '바라철록', '에몽가', '딱정곤', '슈바르고', '깜놀버슬', '뽀록나', '탱그릴', '탱탱겔', '맘복치', '파쪼옥', '전툴라', '철시드', '너트령', '기어르', '기기어르', '기기기어르', '저리어', '저리릴', '저리더프', '리그레', '벰크', '불켜미', '램프라', '샹델라', '터검니', '액슨도', '액스라이즈', '코고미', '툰베어', '프리지오', '쪼마리', '어지리더', '메더', '비조푸', '비조도', '크리만', '골비람', '골루그', '자망칼', '절각참', '버프론', '수리둥보', '워글', '벌차이', '버랜지나', '앤티골', '아이앤트', '모노두', '디헤드', '삼삼드래', '활화르바', '불카모스', '코바르온', '테라키온', '비리디온', '토네로스', '볼트로스', '레시라무', '제크로무', '랜드로스', '큐레무', '케르디오', '메로엣타', '게노세크트', '도치마론', '도치보구', '브리가론', '푸호꼬', '테르나', '마폭시', '개구마르', '개굴반장', '개굴닌자', '파르빗', '파르토', '화살꼬빈', '불화살빈', '파이어로', '분이벌레', '분떠도리', '비비용', '레오꼬', '화염레오', '플라베베', '플라엣테', '플라제스', '메이클', '고고트', '판짱', '부란다', '트리미앙', '냐스퍼', '냐오닉스', '단칼빙', '쌍검킬', '킬가르도', '슈쁘', '프레프티르', '나룸퍼프', '나루림', '오케이징', '칼라마네로', '거북손손', '거북손데스', '수레기', '드래캄', '완철포', '블로스터', '목도리키텔', '일레도리자드', '티고라스', '견고라스', '아마루스', '아마루르가', '님피아', '루차불', '데덴네', '멜리시', '미끄메라', '미끄네일', '미끄래곤', '클레피', '나목령', '대로트', '호바귀', '펌킨인', '꽁어름', '크레베이스', '음뱃', '음번', '제르네아스', '이벨타르', '지가르데', '디안시', '후파', '볼케니온', '나몰빼미', '빼미스로우', '모크나이퍼', '냐오불', '냐오히트', '어흥염', '누리공', '키요공', '누리레느', '콕코구리', '크라파', '왕큰부리', '영구스', '형사구스', '턱지충이', '전지충이', '투구뿌논', '오기지게', '모단단게', '춤추새', '에블리', '에리본', '암멍이', '루가루암', '약어리', '시마사리', '더시마사리', '머드나기', '만마드', '물거미', '깨비물거미', '짜랑랑', '라란티스', '자마슈', '마셰이드', '야도뇽', '염뉴트', '포곰곰', '이븐곰', '달콤아', '달무리나', '달코퀸', '큐아링', '하랑우탄', '내던숭이', '꼬시레', '갑주무사', '모래꿍', '모래성이당', '해무기', '타입:널', '실버디', '메테노', '자말라', '폭거북스', '토게데마루', '따라큐', '치갈기', '할비롱', '타타륜', '짜랑꼬', '짜랑고우', '짜랑고우거', '카푸꼬꼬꼭', '카푸나비나', '카푸브루루', '카푸느지느', '코스모그', '코스모움', '솔가레오', '루나아라', '텅비드', '매시붕', '페로코체', '전수목', '철화구야', '종이신도', '악식킹', '네크로즈마', '마기아나', '마샤도', '베베놈', '아고용', '차곡차곡', '두파팡', '제라오라', '멜탄', '멜메탈', '흥나숭', '채키몽', '고릴타', '염버니', '래비풋', '에이스번', '울머기', '누겔레온', '인텔리레온', '탐리스', '요씽리스', '파라꼬', '파크로우', '아머까오', '두루지벌레', '레돔벌레', '이올브', '훔처우', '폭슬라이', '꼬모카', '백솜모카', '우르', '배우르', '깨물부기', '갈가부기', '멍파치', '펄스멍', '탄동', '탄차곤', '석탄산', '과사삭벌레', '애프룡', '단지래플', '모래뱀', '사다이사', '윽우지', '찌로꼬치', '꼬치조', '일레즌', '스트린더', '태우지네', '다태우지네', '때때무노', '케오퍼스', '데인차', '포트데스', '몸지브림', '손지브림', '브리무음', '메롱꿍', '쏘겨모', '오롱털', '가로막구리', '나이킹', '산호르곤', '창파나이트', '마임꽁꽁', '데스판', '마빌크', '마휘핑', '대여르', '찌르성게', '누니머기', '모스노우', '돌헨진', '빙큐보', '에써르', '모르페코', '끼리동', '대왕끼리동', '파치래곤', '파치르돈', '어래곤', '어치르돈', '두랄루돈', '드라꼰', '드래런치', '드래펄트', '자시안', '자마젠타', '무한다이노', '치고마', '우라오스', '자루도', '레지에레키', '레지드래고', '블리자포스', '레이스포스', '버드렉스', '신비록', '사마자르', '다투곰', '대쓰여너', '포푸니크', '장침바루', '러브로스']

let language_map = {'ENG':pokemonList, 'FRE':fr_pokemonList, 'GER':de_pokemonList, 'KOR':ko_pokemonList, 'JPN': ja_pokemonList}

let megaList = ['Venusaur-Mega', 'Charizard-Mega-X', 'Charizard-Mega-Y', 'Blastoise-Mega', 'Beedrill-Mega', 'Pidgeot-Mega', 'Alakazam-Mega', 'Slowbro-Mega', 'Gengar-Mega', 'Kangaskhan-Mega', 'Pinsir-Mega', 'Gyarados-Mega', 'Aerodactyl-Mega', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y', 'Ampharos-Mega', 'Steelix-Mega', 'Scizor-Mega', 'Heracross-Mega', 'Houndoom-Mega', 'Tyranitar-Mega', 'Sceptile-Mega', 'Blaziken-Mega', 'Swampert-Mega', 'Gardevoir-Mega', 'Sableye-Mega', 'Mawile-Mega', 'Aggron-Mega', 'Medicham-Mega', 'Manectric-Mega', 'Sharpedo-Mega', 'Camerupt-Mega', 'Altaria-Mega', 'Banette-Mega', 'Absol-Mega', 'Glalie-Mega', 'Salamence-Mega', 'Metagross-Mega', 'Latias-Mega', 'Latios-Mega', 'Kyogre-Primal', 'Groudon-Primal', 'Rayquaza-Mega', 'Lopunny-Mega', 'Garchomp-Mega', 'Lucario-Mega', 'Abomasnow-Mega', 'Gallade-Mega', 'Audino-Mega', 'Diancie-Mega'];
let alolaList = ['Rattata-Alola', 'Raticate-Alola', 'Raichu-Alola', 'Sandshrew-Alola', 'Sandslash-Alola', 'Vulpix-Alola', 'Ninetales-Alola', 'Diglett-Alola', 'Dugtrio-Alola', 'Meowth-Alola', 'Persian-Alola', 'Geodude-Alola', 'Graveler-Alola', 'Golem-Alola', 'Grimer-Alola', 'Muk-Alola', 'Exeggutor-Alola', 'Marowak-Alola'];
let galarList = ['Meowth-Galar', 'Ponyta-Galar', 'Rapidash-Galar', 'Slowpoke-Galar', 'Slowbro-Galar', "Farfetch'd-Galar", 'Weezing-Galar', "Mr. Mime-Galar", 'Articuno-Galar', 'Zapdos-Galar', 'Moltres-Galar', 'Slowking-Galar', 'Corsola-Galar', 'Zigzagoon-Galar', 'Linoone-Galar', 'Darumaka-Galar', 'Darmanitan-Galar', 'Yamask-Galar', 'Stunfisk-Galar'];
let gmaxList = ['Venusaur-Gmax', 'Charizard-Gmax', 'Blastoise-Gmax', 'Butterfree-Gmax', 'Pikachu-Gmax', 'Meowth-Gmax', 'Machamp-Gmax', 'Gengar-Gmax', 'Kingler-Gmax', 'Lapras-Gmax', 'Eevee-Gmax', 'Snorlax-Gmax', 'Garbodor-Gmax', 'Melmetal-Gmax', 'Rillaboom-Gmax', 'Cinderace-Gmax', 'Inteleon-Gmax', 'Corviknight-Gmax', 'Orbeetle-Gmax', 'Drednaw-Gmax', 'Coalossal-Gmax', 'Flapple-Gmax', 'Appletun-Gmax', 'Sandaconda-Gmax', 'Toxtricity-Gmax', 'Centiskorch-Gmax', 'Hatterene-Gmax', 'Grimmsnarl-Gmax', 'Alcremie-Gmax', 'Copperajah-Gmax', 'Duraludon-Gmax', 'Urshifu-Gmax', 'Urshifu-rapid-strike-Gmax', 'Eternatus-Eternamax'];
let hisuiList = ['Decidueye-Hisui', 'Typhlosion-Hisui', 'Samurott-Hisui', 'Lilligant-Hisui', 'Sliggoo-Hisui', 'Goodra-Hisui', 'Growlithe-Hisui', 'Arcanine-Hisui', 'Voltorb-Hisui', 'Electrode-Hisui', 'Sneasel-Hisui', 'Qwilfish-Hisui', 'Avalugg-Hisui', 'Zorua-Hisui', 'Zoroark-Hisui', 'Braviary-Hisui'];
let genLastPokemon = ['Mew', 'Celebi', 'Deoxys', 'Arceus', 'Genesect', 'Volcanion', 'Melmetal', 'Calyrex', 'Enamorus'];
let genLastSprite = ['Mew', 'Celebi', 'Deoxys-speed', 'Arceus-Fairy', 'Genesect', 'Volcanion', 'Melmetal', 'Calyrex-Shadow-Rider', 'Palkia-Origin'];
let genNames = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "8-5"]

let typeDict = {"bulbasaur": {"primary": "grass", "secondary": "poison"}, "ivysaur": {"primary": "grass", "secondary": "poison"}, "venusaur": {"primary": "grass", "secondary": "poison"}, "charmander": {"primary": "fire"}, "charmeleon": {"primary": "fire"}, "charizard": {"primary": "fire", "secondary": "flying"}, "squirtle": {"primary": "water"}, "wartortle": {"primary": "water"}, "blastoise": {"primary": "water"}, "caterpie": {"primary": "bug"}, "metapod": {"primary": "bug"}, "butterfree": {"primary": "bug", "secondary": "flying"}, "weedle": {"primary": "bug", "secondary": "poison"}, "kakuna": {"primary": "bug", "secondary": "poison"}, "beedrill": {"primary": "bug", "secondary": "poison"}, "pidgey": {"primary": "normal", "secondary": "flying"}, "pidgeotto": {"primary": "normal", "secondary": "flying"}, "pidgeot": {"primary": "normal", "secondary": "flying"}, "rattata": {"primary": "normal"}, "raticate": {"primary": "normal"}, "spearow": {"primary": "normal", "secondary": "flying"}, "fearow": {"primary": "normal", "secondary": "flying"}, "ekans": {"primary": "poison"}, "arbok": {"primary": "poison"}, "pikachu": {"primary": "electric"}, "raichu": {"primary": "electric"}, "sandshrew": {"primary": "ground"}, "sandslash": {"primary": "ground"}, "nidoranf": {"primary": "poison"}, "nidorina": {"primary": "poison"}, "nidoqueen": {"primary": "poison", "secondary": "ground"}, "nidoranm": {"primary": "poison"}, "nidorino": {"primary": "poison"}, "nidoking": {"primary": "poison", "secondary": "ground"}, "clefairy": {"primary": "fairy"}, "clefable": {"primary": "fairy"}, "vulpix": {"primary": "fire"}, "ninetales": {"primary": "fire"}, "jigglypuff": {"primary": "normal", "secondary": "fairy"}, "wigglytuff": {"primary": "normal", "secondary": "fairy"}, "zubat": {"primary": "poison", "secondary": "flying"}, "golbat": {"primary": "poison", "secondary": "flying"}, "oddish": {"primary": "grass", "secondary": "poison"}, "gloom": {"primary": "grass", "secondary": "poison"}, "vileplume": {"primary": "grass", "secondary": "poison"}, "paras": {"primary": "bug", "secondary": "grass"}, "parasect": {"primary": "bug", "secondary": "grass"}, "venonat": {"primary": "bug", "secondary": "poison"}, "venomoth": {"primary": "bug", "secondary": "poison"}, "diglett": {"primary": "ground"}, "dugtrio": {"primary": "ground"}, "meowth": {"primary": "normal"}, "persian": {"primary": "normal"}, "psyduck": {"primary": "water"}, "golduck": {"primary": "water"}, "mankey": {"primary": "fighting"}, "primeape": {"primary": "fighting"}, "growlithe": {"primary": "fire"}, "arcanine": {"primary": "fire"}, "poliwag": {"primary": "water"}, "poliwhirl": {"primary": "water"}, "poliwrath": {"primary": "water", "secondary": "fighting"}, "abra": {"primary": "psychic"}, "kadabra": {"primary": "psychic"}, "alakazam": {"primary": "psychic"}, "machop": {"primary": "fighting"}, "machoke": {"primary": "fighting"}, "machamp": {"primary": "fighting"}, "bellsprout": {"primary": "grass", "secondary": "poison"}, "weepinbell": {"primary": "grass", "secondary": "poison"}, "victreebel": {"primary": "grass", "secondary": "poison"}, "tentacool": {"primary": "water", "secondary": "poison"}, "tentacruel": {"primary": "water", "secondary": "poison"}, "geodude": {"primary": "rock", "secondary": "ground"}, "graveler": {"primary": "rock", "secondary": "ground"}, "golem": {"primary": "rock", "secondary": "ground"}, "ponyta": {"primary": "fire"}, "rapidash": {"primary": "fire"}, "slowpoke": {"primary": "water", "secondary": "psychic"}, "slowbro": {"primary": "water", "secondary": "psychic"}, "magnemite": {"primary": "electric", "secondary": "steel"}, "magneton": {"primary": "electric", "secondary": "steel"}, "farfetch'd": {"primary": "normal", "secondary": "flying"}, "doduo": {"primary": "normal", "secondary": "flying"}, "dodrio": {"primary": "normal", "secondary": "flying"}, "seel": {"primary": "water"}, "dewgong": {"primary": "water", "secondary": "ice"}, "grimer": {"primary": "poison"}, "muk": {"primary": "poison"}, "shellder": {"primary": "water"}, "cloyster": {"primary": "water", "secondary": "ice"}, "gastly": {"primary": "ghost", "secondary": "poison"}, "haunter": {"primary": "ghost", "secondary": "poison"}, "gengar": {"primary": "ghost", "secondary": "poison"}, "onix": {"primary": "rock", "secondary": "ground"}, "drowzee": {"primary": "psychic"}, "hypno": {"primary": "psychic"}, "krabby": {"primary": "water"}, "kingler": {"primary": "water"}, "voltorb": {"primary": "electric"}, "electrode": {"primary": "electric"}, "exeggcute": {"primary": "grass", "secondary": "psychic"}, "exeggutor": {"primary": "grass", "secondary": "psychic"}, "cubone": {"primary": "ground"}, "marowak": {"primary": "ground"}, "hitmonlee": {"primary": "fighting"}, "hitmonchan": {"primary": "fighting"}, "lickitung": {"primary": "normal"}, "koffing": {"primary": "poison"}, "weezing": {"primary": "poison"}, "rhyhorn": {"primary": "ground", "secondary": "rock"}, "rhydon": {"primary": "ground", "secondary": "rock"}, "chansey": {"primary": "normal"}, "tangela": {"primary": "grass"}, "kangaskhan": {"primary": "normal"}, "horsea": {"primary": "water"}, "seadra": {"primary": "water"}, "goldeen": {"primary": "water"}, "seaking": {"primary": "water"}, "staryu": {"primary": "water"}, "starmie": {"primary": "water", "secondary": "psychic"}, "mr. mime": {"primary": "psychic", "secondary": "fairy"}, "scyther": {"primary": "bug", "secondary": "flying"}, "jynx": {"primary": "ice", "secondary": "psychic"}, "electabuzz": {"primary": "electric"}, "magmar": {"primary": "fire"}, "pinsir": {"primary": "bug"}, "tauros": {"primary": "normal"}, "magikarp": {"primary": "water"}, "gyarados": {"primary": "water", "secondary": "flying"}, "lapras": {"primary": "water", "secondary": "ice"}, "ditto": {"primary": "normal"}, "eevee": {"primary": "normal"}, "vaporeon": {"primary": "water"}, "jolteon": {"primary": "electric"}, "flareon": {"primary": "fire"}, "porygon": {"primary": "normal"}, "omanyte": {"primary": "rock", "secondary": "water"}, "omastar": {"primary": "rock", "secondary": "water"}, "kabuto": {"primary": "rock", "secondary": "water"}, "kabutops": {"primary": "rock", "secondary": "water"}, "aerodactyl": {"primary": "rock", "secondary": "flying"}, "snorlax": {"primary": "normal"}, "articuno": {"primary": "ice", "secondary": "flying"}, "zapdos": {"primary": "electric", "secondary": "flying"}, "moltres": {"primary": "fire", "secondary": "flying"}, "dratini": {"primary": "dragon"}, "dragonair": {"primary": "dragon"}, "dragonite": {"primary": "dragon", "secondary": "flying"}, "mewtwo": {"primary": "psychic"}, "mew": {"primary": "psychic"}, "chikorita": {"primary": "grass"}, "bayleef": {"primary": "grass"}, "meganium": {"primary": "grass"}, "cyndaquil": {"primary": "fire"}, "quilava": {"primary": "fire"}, "typhlosion": {"primary": "fire"}, "totodile": {"primary": "water"}, "croconaw": {"primary": "water"}, "feraligatr": {"primary": "water"}, "sentret": {"primary": "normal"}, "furret": {"primary": "normal"}, "hoothoot": {"primary": "normal", "secondary": "flying"}, "noctowl": {"primary": "normal", "secondary": "flying"}, "ledyba": {"primary": "bug", "secondary": "flying"}, "ledian": {"primary": "bug", "secondary": "flying"}, "spinarak": {"primary": "bug", "secondary": "poison"}, "ariados": {"primary": "bug", "secondary": "poison"}, "crobat": {"primary": "poison", "secondary": "flying"}, "chinchou": {"primary": "water", "secondary": "electric"}, "lanturn": {"primary": "water", "secondary": "electric"}, "pichu": {"primary": "electric"}, "cleffa": {"primary": "fairy"}, "igglybuff": {"primary": "normal", "secondary": "fairy"}, "togepi": {"primary": "fairy"}, "togetic": {"primary": "fairy", "secondary": "flying"}, "natu": {"primary": "psychic", "secondary": "flying"}, "xatu": {"primary": "psychic", "secondary": "flying"}, "mareep": {"primary": "electric"}, "flaaffy": {"primary": "electric"}, "ampharos": {"primary": "electric"}, "bellossom": {"primary": "grass"}, "marill": {"primary": "water", "secondary": "fairy"}, "azumarill": {"primary": "water", "secondary": "fairy"}, "sudowoodo": {"primary": "rock"}, "politoed": {"primary": "water"}, "hoppip": {"primary": "grass", "secondary": "flying"}, "skiploom": {"primary": "grass", "secondary": "flying"}, "jumpluff": {"primary": "grass", "secondary": "flying"}, "aipom": {"primary": "normal"}, "sunkern": {"primary": "grass"}, "sunflora": {"primary": "grass"}, "yanma": {"primary": "bug", "secondary": "flying"}, "wooper": {"primary": "water", "secondary": "ground"}, "quagsire": {"primary": "water", "secondary": "ground"}, "espeon": {"primary": "psychic"}, "umbreon": {"primary": "dark"}, "murkrow": {"primary": "dark", "secondary": "flying"}, "slowking": {"primary": "water", "secondary": "psychic"}, "misdreavus": {"primary": "ghost"}, "unown": {"primary": "psychic"}, "wobbuffet": {"primary": "psychic"}, "girafarig": {"primary": "normal", "secondary": "psychic"}, "pineco": {"primary": "bug"}, "forretress": {"primary": "bug", "secondary": "steel"}, "dunsparce": {"primary": "normal"}, "gligar": {"primary": "ground", "secondary": "flying"}, "steelix": {"primary": "steel", "secondary": "ground"}, "snubbull": {"primary": "fairy"}, "granbull": {"primary": "fairy"}, "qwilfish": {"primary": "water", "secondary": "poison"}, "scizor": {"primary": "bug", "secondary": "steel"}, "shuckle": {"primary": "bug", "secondary": "rock"}, "heracross": {"primary": "bug", "secondary": "fighting"}, "sneasel": {"primary": "dark", "secondary": "ice"}, "teddiursa": {"primary": "normal"}, "ursaring": {"primary": "normal"}, "slugma": {"primary": "fire"}, "magcargo": {"primary": "fire", "secondary": "rock"}, "swinub": {"primary": "ice", "secondary": "ground"}, "piloswine": {"primary": "ice", "secondary": "ground"}, "corsola": {"primary": "water", "secondary": "rock"}, "remoraid": {"primary": "water"}, "octillery": {"primary": "water"}, "delibird": {"primary": "ice", "secondary": "flying"}, "mantine": {"primary": "water", "secondary": "flying"}, "skarmory": {"primary": "steel", "secondary": "flying"}, "houndour": {"primary": "dark", "secondary": "fire"}, "houndoom": {"primary": "dark", "secondary": "fire"}, "kingdra": {"primary": "water", "secondary": "dragon"}, "phanpy": {"primary": "ground"}, "donphan": {"primary": "ground"}, "porygon2": {"primary": "normal"}, "stantler": {"primary": "normal"}, "smeargle": {"primary": "normal"}, "tyrogue": {"primary": "fighting"}, "hitmontop": {"primary": "fighting"}, "smoochum": {"primary": "ice", "secondary": "psychic"}, "elekid": {"primary": "electric"}, "magby": {"primary": "fire"}, "miltank": {"primary": "normal"}, "blissey": {"primary": "normal"}, "raikou": {"primary": "electric"}, "entei": {"primary": "fire"}, "suicune": {"primary": "water"}, "larvitar": {"primary": "rock", "secondary": "ground"}, "pupitar": {"primary": "rock", "secondary": "ground"}, "tyranitar": {"primary": "rock", "secondary": "dark"}, "lugia": {"primary": "psychic", "secondary": "flying"}, "ho-oh": {"primary": "fire", "secondary": "flying"}, "celebi": {"primary": "psychic", "secondary": "grass"}, "treecko": {"primary": "grass"}, "grovyle": {"primary": "grass"}, "sceptile": {"primary": "grass"}, "torchic": {"primary": "fire"}, "combusken": {"primary": "fire", "secondary": "fighting"}, "blaziken": {"primary": "fire", "secondary": "fighting"}, "mudkip": {"primary": "water"}, "marshtomp": {"primary": "water", "secondary": "ground"}, "swampert": {"primary": "water", "secondary": "ground"}, "poochyena": {"primary": "dark"}, "mightyena": {"primary": "dark"}, "zigzagoon": {"primary": "normal"}, "linoone": {"primary": "normal"}, "wurmple": {"primary": "bug"}, "silcoon": {"primary": "bug"}, "beautifly": {"primary": "bug", "secondary": "flying"}, "cascoon": {"primary": "bug"}, "dustox": {"primary": "bug", "secondary": "poison"}, "lotad": {"primary": "water", "secondary": "grass"}, "lombre": {"primary": "water", "secondary": "grass"}, "ludicolo": {"primary": "water", "secondary": "grass"}, "seedot": {"primary": "grass"}, "nuzleaf": {"primary": "grass", "secondary": "dark"}, "shiftry": {"primary": "grass", "secondary": "dark"}, "taillow": {"primary": "normal", "secondary": "flying"}, "swellow": {"primary": "normal", "secondary": "flying"}, "wingull": {"primary": "water", "secondary": "flying"}, "pelipper": {"primary": "water", "secondary": "flying"}, "ralts": {"primary": "psychic", "secondary": "fairy"}, "kirlia": {"primary": "psychic", "secondary": "fairy"}, "gardevoir": {"primary": "psychic", "secondary": "fairy"}, "surskit": {"primary": "bug", "secondary": "water"}, "masquerain": {"primary": "bug", "secondary": "flying"}, "shroomish": {"primary": "grass"}, "breloom": {"primary": "grass", "secondary": "fighting"}, "slakoth": {"primary": "normal"}, "vigoroth": {"primary": "normal"}, "slaking": {"primary": "normal"}, "nincada": {"primary": "bug", "secondary": "ground"}, "ninjask": {"primary": "bug", "secondary": "flying"}, "shedinja": {"primary": "bug", "secondary": "ghost"}, "whismur": {"primary": "normal"}, "loudred": {"primary": "normal"}, "exploud": {"primary": "normal"}, "makuhita": {"primary": "fighting"}, "hariyama": {"primary": "fighting"}, "azurill": {"primary": "normal", "secondary": "fairy"}, "nosepass": {"primary": "rock"}, "skitty": {"primary": "normal"}, "delcatty": {"primary": "normal"}, "sableye": {"primary": "dark", "secondary": "ghost"}, "mawile": {"primary": "steel", "secondary": "fairy"}, "aron": {"primary": "steel", "secondary": "rock"}, "lairon": {"primary": "steel", "secondary": "rock"}, "aggron": {"primary": "steel", "secondary": "rock"}, "meditite": {"primary": "fighting", "secondary": "psychic"}, "medicham": {"primary": "fighting", "secondary": "psychic"}, "electrike": {"primary": "electric"}, "manectric": {"primary": "electric"}, "plusle": {"primary": "electric"}, "minun": {"primary": "electric"}, "volbeat": {"primary": "bug"}, "illumise": {"primary": "bug"}, "roselia": {"primary": "grass", "secondary": "poison"}, "gulpin": {"primary": "poison"}, "swalot": {"primary": "poison"}, "carvanha": {"primary": "water", "secondary": "dark"}, "sharpedo": {"primary": "water", "secondary": "dark"}, "wailmer": {"primary": "water"}, "wailord": {"primary": "water"}, "numel": {"primary": "fire", "secondary": "ground"}, "camerupt": {"primary": "fire", "secondary": "ground"}, "torkoal": {"primary": "fire"}, "spoink": {"primary": "psychic"}, "grumpig": {"primary": "psychic"}, "spinda": {"primary": "normal"}, "trapinch": {"primary": "ground"}, "vibrava": {"primary": "ground", "secondary": "dragon"}, "flygon": {"primary": "ground", "secondary": "dragon"}, "cacnea": {"primary": "grass"}, "cacturne": {"primary": "grass", "secondary": "dark"}, "swablu": {"primary": "normal", "secondary": "flying"}, "altaria": {"primary": "dragon", "secondary": "flying"}, "zangoose": {"primary": "normal"}, "seviper": {"primary": "poison"}, "lunatone": {"primary": "rock", "secondary": "psychic"}, "solrock": {"primary": "rock", "secondary": "psychic"}, "barboach": {"primary": "water", "secondary": "ground"}, "whiscash": {"primary": "water", "secondary": "ground"}, "corphish": {"primary": "water"}, "crawdaunt": {"primary": "water", "secondary": "dark"}, "baltoy": {"primary": "ground", "secondary": "psychic"}, "claydol": {"primary": "ground", "secondary": "psychic"}, "lileep": {"primary": "rock", "secondary": "grass"}, "cradily": {"primary": "rock", "secondary": "grass"}, "anorith": {"primary": "rock", "secondary": "bug"}, "armaldo": {"primary": "rock", "secondary": "bug"}, "feebas": {"primary": "water"}, "milotic": {"primary": "water"}, "castform": {"primary": "normal"}, "kecleon": {"primary": "normal"}, "shuppet": {"primary": "ghost"}, "banette": {"primary": "ghost"}, "duskull": {"primary": "ghost"}, "dusclops": {"primary": "ghost"}, "tropius": {"primary": "grass", "secondary": "flying"}, "chimecho": {"primary": "psychic"}, "absol": {"primary": "dark"}, "wynaut": {"primary": "psychic"}, "snorunt": {"primary": "ice"}, "glalie": {"primary": "ice"}, "spheal": {"primary": "ice", "secondary": "water"}, "sealeo": {"primary": "ice", "secondary": "water"}, "walrein": {"primary": "ice", "secondary": "water"}, "clamperl": {"primary": "water"}, "huntail": {"primary": "water"}, "gorebyss": {"primary": "water"}, "relicanth": {"primary": "water", "secondary": "rock"}, "luvdisc": {"primary": "water"}, "bagon": {"primary": "dragon"}, "shelgon": {"primary": "dragon"}, "salamence": {"primary": "dragon", "secondary": "flying"}, "beldum": {"primary": "steel", "secondary": "psychic"}, "metang": {"primary": "steel", "secondary": "psychic"}, "metagross": {"primary": "steel", "secondary": "psychic"}, "regirock": {"primary": "rock"}, "regice": {"primary": "ice"}, "registeel": {"primary": "steel"}, "latias": {"primary": "dragon", "secondary": "psychic"}, "latios": {"primary": "dragon", "secondary": "psychic"}, "kyogre": {"primary": "water"}, "groudon": {"primary": "ground"}, "rayquaza": {"primary": "dragon", "secondary": "flying"}, "jirachi": {"primary": "steel", "secondary": "psychic"}, "deoxys": {"primary": "psychic"}, "turtwig": {"primary": "grass"}, "grotle": {"primary": "grass"}, "torterra": {"primary": "grass", "secondary": "ground"}, "chimchar": {"primary": "fire"}, "monferno": {"primary": "fire", "secondary": "fighting"}, "infernape": {"primary": "fire", "secondary": "fighting"}, "piplup": {"primary": "water"}, "prinplup": {"primary": "water"}, "empoleon": {"primary": "water", "secondary": "steel"}, "starly": {"primary": "normal", "secondary": "flying"}, "staravia": {"primary": "normal", "secondary": "flying"}, "staraptor": {"primary": "normal", "secondary": "flying"}, "bidoof": {"primary": "normal"}, "bibarel": {"primary": "normal", "secondary": "water"}, "kricketot": {"primary": "bug"}, "kricketune": {"primary": "bug"}, "shinx": {"primary": "electric"}, "luxio": {"primary": "electric"}, "luxray": {"primary": "electric"}, "budew": {"primary": "grass", "secondary": "poison"}, "roserade": {"primary": "grass", "secondary": "poison"}, "cranidos": {"primary": "rock"}, "rampardos": {"primary": "rock"}, "shieldon": {"primary": "rock", "secondary": "steel"}, "bastiodon": {"primary": "rock", "secondary": "steel"}, "burmy": {"primary": "bug"}, "wormadam": {"primary": "bug", "secondary": "grass"}, "mothim": {"primary": "bug", "secondary": "flying"}, "combee": {"primary": "bug", "secondary": "flying"}, "vespiquen": {"primary": "bug", "secondary": "flying"}, "pachirisu": {"primary": "electric"}, "buizel": {"primary": "water"}, "floatzel": {"primary": "water"}, "cherubi": {"primary": "grass"}, "cherrim": {"primary": "grass"}, "shellos": {"primary": "water"}, "gastrodon": {"primary": "water", "secondary": "ground"}, "ambipom": {"primary": "normal"}, "drifloon": {"primary": "ghost", "secondary": "flying"}, "drifblim": {"primary": "ghost", "secondary": "flying"}, "buneary": {"primary": "normal"}, "lopunny": {"primary": "normal"}, "mismagius": {"primary": "ghost"}, "honchkrow": {"primary": "dark", "secondary": "flying"}, "glameow": {"primary": "normal"}, "purugly": {"primary": "normal"}, "chingling": {"primary": "psychic"}, "stunky": {"primary": "poison", "secondary": "dark"}, "skuntank": {"primary": "poison", "secondary": "dark"}, "bronzor": {"primary": "steel", "secondary": "psychic"}, "bronzong": {"primary": "steel", "secondary": "psychic"}, "bonsly": {"primary": "rock"}, "mime jr.": {"primary": "psychic", "secondary": "fairy"}, "happiny": {"primary": "normal"}, "chatot": {"primary": "normal", "secondary": "flying"}, "spiritomb": {"primary": "ghost", "secondary": "dark"}, "gible": {"primary": "dragon", "secondary": "ground"}, "gabite": {"primary": "dragon", "secondary": "ground"}, "garchomp": {"primary": "dragon", "secondary": "ground"}, "munchlax": {"primary": "normal"}, "riolu": {"primary": "fighting"}, "lucario": {"primary": "fighting", "secondary": "steel"}, "hippopotas": {"primary": "ground"}, "hippowdon": {"primary": "ground"}, "skorupi": {"primary": "poison", "secondary": "bug"}, "drapion": {"primary": "poison", "secondary": "dark"}, "croagunk": {"primary": "poison", "secondary": "fighting"}, "toxicroak": {"primary": "poison", "secondary": "fighting"}, "carnivine": {"primary": "grass"}, "finneon": {"primary": "water"}, "lumineon": {"primary": "water"}, "mantyke": {"primary": "water", "secondary": "flying"}, "snover": {"primary": "grass", "secondary": "ice"}, "abomasnow": {"primary": "grass", "secondary": "ice"}, "weavile": {"primary": "dark", "secondary": "ice"}, "magnezone": {"primary": "electric", "secondary": "steel"}, "lickilicky": {"primary": "normal"}, "rhyperior": {"primary": "ground", "secondary": "rock"}, "tangrowth": {"primary": "grass"}, "electivire": {"primary": "electric"}, "magmortar": {"primary": "fire"}, "togekiss": {"primary": "fairy", "secondary": "flying"}, "yanmega": {"primary": "bug", "secondary": "flying"}, "leafeon": {"primary": "grass"}, "glaceon": {"primary": "ice"}, "gliscor": {"primary": "ground", "secondary": "flying"}, "mamoswine": {"primary": "ice", "secondary": "ground"}, "porygon-z": {"primary": "normal"}, "gallade": {"primary": "psychic", "secondary": "fighting"}, "probopass": {"primary": "rock", "secondary": "steel"}, "dusknoir": {"primary": "ghost"}, "froslass": {"primary": "ice", "secondary": "ghost"}, "rotom": {"primary": "electric", "secondary": "ghost"}, "uxie": {"primary": "psychic"}, "mesprit": {"primary": "psychic"}, "azelf": {"primary": "psychic"}, "dialga": {"primary": "steel", "secondary": "dragon"}, "palkia": {"primary": "water", "secondary": "dragon"}, "heatran": {"primary": "fire", "secondary": "steel"}, "regigigas": {"primary": "normal"}, "giratina": {"primary": "ghost", "secondary": "dragon"}, "cresselia": {"primary": "psychic"}, "phione": {"primary": "water"}, "manaphy": {"primary": "water"}, "darkrai": {"primary": "dark"}, "shaymin": {"primary": "grass"}, "arceus": {"primary": "normal"}, "victini": {"primary": "psychic", "secondary": "fire"}, "snivy": {"primary": "grass"}, "servine": {"primary": "grass"}, "serperior": {"primary": "grass"}, "tepig": {"primary": "fire"}, "pignite": {"primary": "fire", "secondary": "fighting"}, "emboar": {"primary": "fire", "secondary": "fighting"}, "oshawott": {"primary": "water"}, "dewott": {"primary": "water"}, "samurott": {"primary": "water"}, "patrat": {"primary": "normal"}, "watchog": {"primary": "normal"}, "lillipup": {"primary": "normal"}, "herdier": {"primary": "normal"}, "stoutland": {"primary": "normal"}, "purrloin": {"primary": "dark"}, "liepard": {"primary": "dark"}, "pansage": {"primary": "grass"}, "simisage": {"primary": "grass"}, "pansear": {"primary": "fire"}, "simisear": {"primary": "fire"}, "panpour": {"primary": "water"}, "simipour": {"primary": "water"}, "munna": {"primary": "psychic"}, "musharna": {"primary": "psychic"}, "pidove": {"primary": "normal", "secondary": "flying"}, "tranquill": {"primary": "normal", "secondary": "flying"}, "unfezant": {"primary": "normal", "secondary": "flying"}, "blitzle": {"primary": "electric"}, "zebstrika": {"primary": "electric"}, "roggenrola": {"primary": "rock"}, "boldore": {"primary": "rock"}, "gigalith": {"primary": "rock"}, "woobat": {"primary": "psychic", "secondary": "flying"}, "swoobat": {"primary": "psychic", "secondary": "flying"}, "drilbur": {"primary": "ground"}, "excadrill": {"primary": "ground", "secondary": "steel"}, "audino": {"primary": "normal"}, "timburr": {"primary": "fighting"}, "gurdurr": {"primary": "fighting"}, "conkeldurr": {"primary": "fighting"}, "tympole": {"primary": "water"}, "palpitoad": {"primary": "water", "secondary": "ground"}, "seismitoad": {"primary": "water", "secondary": "ground"}, "throh": {"primary": "fighting"}, "sawk": {"primary": "fighting"}, "sewaddle": {"primary": "bug", "secondary": "grass"}, "swadloon": {"primary": "bug", "secondary": "grass"}, "leavanny": {"primary": "bug", "secondary": "grass"}, "venipede": {"primary": "bug", "secondary": "poison"}, "whirlipede": {"primary": "bug", "secondary": "poison"}, "scolipede": {"primary": "bug", "secondary": "poison"}, "cottonee": {"primary": "grass", "secondary": "fairy"}, "whimsicott": {"primary": "grass", "secondary": "fairy"}, "petilil": {"primary": "grass"}, "lilligant": {"primary": "grass"}, "basculin": {"primary": "water"}, "sandile": {"primary": "ground", "secondary": "dark"}, "krokorok": {"primary": "ground", "secondary": "dark"}, "krookodile": {"primary": "ground", "secondary": "dark"}, "darumaka": {"primary": "fire"}, "darmanitan": {"primary": "fire"}, "maractus": {"primary": "grass"}, "dwebble": {"primary": "bug", "secondary": "rock"}, "crustle": {"primary": "bug", "secondary": "rock"}, "scraggy": {"primary": "dark", "secondary": "fighting"}, "scrafty": {"primary": "dark", "secondary": "fighting"}, "sigilyph": {"primary": "psychic", "secondary": "flying"}, "yamask": {"primary": "ghost"}, "cofagrigus": {"primary": "ghost"}, "tirtouga": {"primary": "water", "secondary": "rock"}, "carracosta": {"primary": "water", "secondary": "rock"}, "archen": {"primary": "rock", "secondary": "flying"}, "archeops": {"primary": "rock", "secondary": "flying"}, "trubbish": {"primary": "poison"}, "garbodor": {"primary": "poison"}, "zorua": {"primary": "dark"}, "zoroark": {"primary": "dark"}, "minccino": {"primary": "normal"}, "cinccino": {"primary": "normal"}, "gothita": {"primary": "psychic"}, "gothorita": {"primary": "psychic"}, "gothitelle": {"primary": "psychic"}, "solosis": {"primary": "psychic"}, "duosion": {"primary": "psychic"}, "reuniclus": {"primary": "psychic"}, "ducklett": {"primary": "water", "secondary": "flying"}, "swanna": {"primary": "water", "secondary": "flying"}, "vanillite": {"primary": "ice"}, "vanillish": {"primary": "ice"}, "vanilluxe": {"primary": "ice"}, "deerling": {"primary": "normal", "secondary": "grass"}, "sawsbuck": {"primary": "normal", "secondary": "grass"}, "emolga": {"primary": "electric", "secondary": "flying"}, "karrablast": {"primary": "bug"}, "escavalier": {"primary": "bug", "secondary": "steel"}, "foongus": {"primary": "grass", "secondary": "poison"}, "amoonguss": {"primary": "grass", "secondary": "poison"}, "frillish": {"primary": "water", "secondary": "ghost"}, "jellicent": {"primary": "water", "secondary": "ghost"}, "alomomola": {"primary": "water"}, "joltik": {"primary": "bug", "secondary": "electric"}, "galvantula": {"primary": "bug", "secondary": "electric"}, "ferroseed": {"primary": "grass", "secondary": "steel"}, "ferrothorn": {"primary": "grass", "secondary": "steel"}, "klink": {"primary": "steel"}, "klang": {"primary": "steel"}, "klinklang": {"primary": "steel"}, "tynamo": {"primary": "electric"}, "eelektrik": {"primary": "electric"}, "eelektross": {"primary": "electric"}, "elgyem": {"primary": "psychic"}, "beheeyem": {"primary": "psychic"}, "litwick": {"primary": "ghost", "secondary": "fire"}, "lampent": {"primary": "ghost", "secondary": "fire"}, "chandelure": {"primary": "ghost", "secondary": "fire"}, "axew": {"primary": "dragon"}, "fraxure": {"primary": "dragon"}, "haxorus": {"primary": "dragon"}, "cubchoo": {"primary": "ice"}, "beartic": {"primary": "ice"}, "cryogonal": {"primary": "ice"}, "shelmet": {"primary": "bug"}, "accelgor": {"primary": "bug"}, "stunfisk": {"primary": "ground", "secondary": "electric"}, "mienfoo": {"primary": "fighting"}, "mienshao": {"primary": "fighting"}, "druddigon": {"primary": "dragon"}, "golett": {"primary": "ground", "secondary": "ghost"}, "golurk": {"primary": "ground", "secondary": "ghost"}, "pawniard": {"primary": "dark", "secondary": "steel"}, "bisharp": {"primary": "dark", "secondary": "steel"}, "bouffalant": {"primary": "normal"}, "rufflet": {"primary": "normal", "secondary": "flying"}, "braviary": {"primary": "normal", "secondary": "flying"}, "vullaby": {"primary": "dark", "secondary": "flying"}, "mandibuzz": {"primary": "dark", "secondary": "flying"}, "heatmor": {"primary": "fire"}, "durant": {"primary": "bug", "secondary": "steel"}, "deino": {"primary": "dark", "secondary": "dragon"}, "zweilous": {"primary": "dark", "secondary": "dragon"}, "hydreigon": {"primary": "dark", "secondary": "dragon"}, "larvesta": {"primary": "bug", "secondary": "fire"}, "volcarona": {"primary": "bug", "secondary": "fire"}, "cobalion": {"primary": "steel", "secondary": "fighting"}, "terrakion": {"primary": "rock", "secondary": "fighting"}, "virizion": {"primary": "grass", "secondary": "fighting"}, "tornadus": {"primary": "flying"}, "thundurus": {"primary": "electric", "secondary": "flying"}, "reshiram": {"primary": "dragon", "secondary": "fire"}, "zekrom": {"primary": "dragon", "secondary": "electric"}, "landorus": {"primary": "ground", "secondary": "flying"}, "kyurem": {"primary": "dragon", "secondary": "ice"}, "keldeo": {"primary": "water", "secondary": "fighting"}, "meloetta": {"primary": "normal", "secondary": "psychic"}, "genesect": {"primary": "bug", "secondary": "steel"}, "chespin": {"primary": "grass"}, "quilladin": {"primary": "grass"}, "chesnaught": {"primary": "grass", "secondary": "fighting"}, "fennekin": {"primary": "fire"}, "braixen": {"primary": "fire"}, "delphox": {"primary": "fire", "secondary": "psychic"}, "froakie": {"primary": "water"}, "frogadier": {"primary": "water"}, "greninja": {"primary": "water", "secondary": "dark"}, "bunnelby": {"primary": "normal"}, "diggersby": {"primary": "normal", "secondary": "ground"}, "fletchling": {"primary": "normal", "secondary": "flying"}, "fletchinder": {"primary": "fire", "secondary": "flying"}, "talonflame": {"primary": "fire", "secondary": "flying"}, "scatterbug": {"primary": "bug"}, "spewpa": {"primary": "bug"}, "vivillon": {"primary": "bug", "secondary": "flying"}, "litleo": {"primary": "fire", "secondary": "normal"}, "pyroar": {"primary": "fire", "secondary": "normal"}, "flab\u00e9b\u00e9": {"primary": "fairy"}, "floette": {"primary": "fairy"}, "florges": {"primary": "fairy"}, "skiddo": {"primary": "grass"}, "gogoat": {"primary": "grass"}, "pancham": {"primary": "fighting"}, "pangoro": {"primary": "fighting", "secondary": "dark"}, "furfrou": {"primary": "normal"}, "espurr": {"primary": "psychic"}, "meowstic": {"primary": "psychic"}, "honedge": {"primary": "steel", "secondary": "ghost"}, "doublade": {"primary": "steel", "secondary": "ghost"}, "aegislash": {"primary": "steel", "secondary": "ghost"}, "spritzee": {"primary": "fairy"}, "aromatisse": {"primary": "fairy"}, "swirlix": {"primary": "fairy"}, "slurpuff": {"primary": "fairy"}, "inkay": {"primary": "dark", "secondary": "psychic"}, "malamar": {"primary": "dark", "secondary": "psychic"}, "binacle": {"primary": "rock", "secondary": "water"}, "barbaracle": {"primary": "rock", "secondary": "water"}, "skrelp": {"primary": "poison", "secondary": "water"}, "dragalge": {"primary": "poison", "secondary": "dragon"}, "clauncher": {"primary": "water"}, "clawitzer": {"primary": "water"}, "helioptile": {"primary": "electric", "secondary": "normal"}, "heliolisk": {"primary": "electric", "secondary": "normal"}, "tyrunt": {"primary": "rock", "secondary": "dragon"}, "tyrantrum": {"primary": "rock", "secondary": "dragon"}, "amaura": {"primary": "rock", "secondary": "ice"}, "aurorus": {"primary": "rock", "secondary": "ice"}, "sylveon": {"primary": "fairy"}, "hawlucha": {"primary": "fighting", "secondary": "flying"}, "dedenne": {"primary": "electric", "secondary": "fairy"}, "carbink": {"primary": "rock", "secondary": "fairy"}, "goomy": {"primary": "dragon"}, "sliggoo": {"primary": "dragon"}, "goodra": {"primary": "dragon"}, "klefki": {"primary": "steel", "secondary": "fairy"}, "phantump": {"primary": "ghost", "secondary": "grass"}, "trevenant": {"primary": "ghost", "secondary": "grass"}, "pumpkaboo": {"primary": "ghost", "secondary": "grass"}, "gourgeist": {"primary": "ghost", "secondary": "grass"}, "bergmite": {"primary": "ice"}, "avalugg": {"primary": "ice"}, "noibat": {"primary": "flying", "secondary": "dragon"}, "noivern": {"primary": "flying", "secondary": "dragon"}, "xerneas": {"primary": "fairy"}, "yveltal": {"primary": "dark", "secondary": "flying"}, "zygarde": {"primary": "dragon", "secondary": "ground"}, "diancie": {"primary": "rock", "secondary": "fairy"}, "hoopa": {"primary": "psychic", "secondary": "ghost"}, "volcanion": {"primary": "fire", "secondary": "water"}, "rowlet": {"primary": "grass", "secondary": "flying"}, "dartrix": {"primary": "grass", "secondary": "flying"}, "decidueye": {"primary": "grass", "secondary": "ghost"}, "litten": {"primary": "fire"}, "torracat": {"primary": "fire"}, "incineroar": {"primary": "fire", "secondary": "dark"}, "popplio": {"primary": "water"}, "brionne": {"primary": "water"}, "primarina": {"primary": "water", "secondary": "fairy"}, "pikipek": {"primary": "normal", "secondary": "flying"}, "trumbeak": {"primary": "normal", "secondary": "flying"}, "toucannon": {"primary": "normal", "secondary": "flying"}, "yungoos": {"primary": "normal"}, "gumshoos": {"primary": "normal"}, "grubbin": {"primary": "bug"}, "charjabug": {"primary": "bug", "secondary": "electric"}, "vikavolt": {"primary": "bug", "secondary": "electric"}, "crabrawler": {"primary": "fighting"}, "crabominable": {"primary": "fighting", "secondary": "ice"}, "oricorio": {"primary": "fire", "secondary": "flying"}, "cutiefly": {"primary": "bug", "secondary": "fairy"}, "ribombee": {"primary": "bug", "secondary": "fairy"}, "rockruff": {"primary": "rock"}, "lycanroc": {"primary": "rock"}, "wishiwashi": {"primary": "water"}, "mareanie": {"primary": "poison", "secondary": "water"}, "toxapex": {"primary": "poison", "secondary": "water"}, "mudbray": {"primary": "ground"}, "mudsdale": {"primary": "ground"}, "dewpider": {"primary": "water", "secondary": "bug"}, "araquanid": {"primary": "water", "secondary": "bug"}, "fomantis": {"primary": "grass"}, "lurantis": {"primary": "grass"}, "morelull": {"primary": "grass", "secondary": "fairy"}, "shiinotic": {"primary": "grass", "secondary": "fairy"}, "salandit": {"primary": "poison", "secondary": "fire"}, "salazzle": {"primary": "poison", "secondary": "fire"}, "stufful": {"primary": "normal", "secondary": "fighting"}, "bewear": {"primary": "normal", "secondary": "fighting"}, "bounsweet": {"primary": "grass"}, "steenee": {"primary": "grass"}, "tsareena": {"primary": "grass"}, "comfey": {"primary": "fairy"}, "oranguru": {"primary": "normal", "secondary": "psychic"}, "passimian": {"primary": "fighting"}, "wimpod": {"primary": "bug", "secondary": "water"}, "golisopod": {"primary": "bug", "secondary": "water"}, "sandygast": {"primary": "ghost", "secondary": "ground"}, "palossand": {"primary": "ghost", "secondary": "ground"}, "pyukumuku": {"primary": "water"}, "type: null": {"primary": "normal"}, "silvally": {"primary": "normal"}, "minior": {"primary": "rock", "secondary": "flying"}, "komala": {"primary": "normal"}, "turtonator": {"primary": "fire", "secondary": "dragon"}, "togedemaru": {"primary": "electric", "secondary": "steel"}, "mimikyu": {"primary": "ghost", "secondary": "fairy"}, "bruxish": {"primary": "water", "secondary": "psychic"}, "drampa": {"primary": "normal", "secondary": "dragon"}, "dhelmise": {"primary": "ghost", "secondary": "grass"}, "jangmo-o": {"primary": "dragon"}, "hakamo-o": {"primary": "dragon", "secondary": "fighting"}, "kommo-o": {"primary": "dragon", "secondary": "fighting"}, "tapu koko": {"primary": "electric", "secondary": "fairy"}, "tapu lele": {"primary": "psychic", "secondary": "fairy"}, "tapu bulu": {"primary": "grass", "secondary": "fairy"}, "tapu fini": {"primary": "water", "secondary": "fairy"}, "cosmog": {"primary": "psychic"}, "cosmoem": {"primary": "psychic"}, "solgaleo": {"primary": "psychic", "secondary": "steel"}, "lunala": {"primary": "psychic", "secondary": "ghost"}, "nihilego": {"primary": "rock", "secondary": "poison"}, "buzzwole": {"primary": "bug", "secondary": "fighting"}, "pheromosa": {"primary": "bug", "secondary": "fighting"}, "xurkitree": {"primary": "electric"}, "celesteela": {"primary": "steel", "secondary": "flying"}, "kartana": {"primary": "grass", "secondary": "steel"}, "guzzlord": {"primary": "dark", "secondary": "dragon"}, "necrozma": {"primary": "psychic"}, "magearna": {"primary": "steel", "secondary": "fairy"}, "marshadow": {"primary": "fighting", "secondary": "ghost"}, "poipole": {"primary": "poison"}, "naganadel": {"primary": "poison", "secondary": "dragon"}, "stakataka": {"primary": "rock", "secondary": "steel"}, "blacephalon": {"primary": "fire", "secondary": "ghost"}, "zeraora": {"primary": "electric"}, "meltan": {"primary": "steel"}, "melmetal": {"primary": "steel"}, "grookey": {"primary": "grass"}, "thwackey": {"primary": "grass"}, "rillaboom": {"primary": "grass"}, "scorbunny": {"primary": "fire"}, "raboot": {"primary": "fire"}, "cinderace": {"primary": "fire"}, "sobble": {"primary": "water"}, "drizzile": {"primary": "water"}, "inteleon": {"primary": "water"}, "skwovet": {"primary": "normal"}, "greedent": {"primary": "normal"}, "rookidee": {"primary": "flying"}, "corvisquire": {"primary": "flying"}, "corviknight": {"primary": "flying", "secondary": "steel"}, "blipbug": {"primary": "bug"}, "dottler": {"primary": "bug", "secondary": "psychic"}, "orbeetle": {"primary": "bug", "secondary": "psychic"}, "nickit": {"primary": "dark"}, "thievul": {"primary": "dark"}, "gossifleur": {"primary": "grass"}, "eldegoss": {"primary": "grass"}, "wooloo": {"primary": "normal"}, "dubwool": {"primary": "normal"}, "chewtle": {"primary": "water"}, "drednaw": {"primary": "water", "secondary": "rock"}, "yamper": {"primary": "electric"}, "boltund": {"primary": "electric"}, "rolycoly": {"primary": "rock"}, "carkol": {"primary": "rock", "secondary": "fire"}, "coalossal": {"primary": "rock", "secondary": "fire"}, "applin": {"primary": "grass", "secondary": "dragon"}, "flapple": {"primary": "grass", "secondary": "dragon"}, "appletun": {"primary": "grass", "secondary": "dragon"}, "silicobra": {"primary": "ground"}, "sandaconda": {"primary": "ground"}, "cramorant": {"primary": "flying", "secondary": "water"}, "arrokuda": {"primary": "water"}, "barraskewda": {"primary": "water"}, "toxel": {"primary": "electric", "secondary": "poison"}, "toxtricity": {"primary": "electric", "secondary": "poison"}, "sizzlipede": {"primary": "fire", "secondary": "bug"}, "centiskorch": {"primary": "fire", "secondary": "bug"}, "clobbopus": {"primary": "fighting"}, "grapploct": {"primary": "fighting"}, "sinistea": {"primary": "ghost"}, "polteageist": {"primary": "ghost"}, "hatenna": {"primary": "psychic"}, "hattrem": {"primary": "psychic"}, "hatterene": {"primary": "psychic", "secondary": "fairy"}, "impidimp": {"primary": "dark", "secondary": "fairy"}, "morgrem": {"primary": "dark", "secondary": "fairy"}, "grimmsnarl": {"primary": "dark", "secondary": "fairy"}, "obstagoon": {"primary": "dark", "secondary": "normal"}, "perrserker": {"primary": "steel"}, "cursola": {"primary": "ghost"}, "sirfetch'd": {"primary": "fighting"}, "mr. rime": {"primary": "ice", "secondary": "psychic"}, "runerigus": {"primary": "ground", "secondary": "ghost"}, "milcery": {"primary": "fairy"}, "alcremie": {"primary": "fairy"}, "falinks": {"primary": "fighting"}, "pincurchin": {"primary": "electric"}, "snom": {"primary": "ice", "secondary": "bug"}, "frosmoth": {"primary": "ice", "secondary": "bug"}, "stonjourner": {"primary": "rock"}, "eiscue": {"primary": "ice"}, "indeedee": {"primary": "psychic", "secondary": "normal"}, "morpeko": {"primary": "electric", "secondary": "dark"}, "cufant": {"primary": "steel"}, "copperajah": {"primary": "steel"}, "dracozolt": {"primary": "electric", "secondary": "dragon"}, "arctozolt": {"primary": "electric", "secondary": "ice"}, "dracovish": {"primary": "water", "secondary": "dragon"}, "arctovish": {"primary": "water", "secondary": "ice"}, "duraludon": {"primary": "steel", "secondary": "dragon"}, "dreepy": {"primary": "dragon", "secondary": "ghost"}, "drakloak": {"primary": "dragon", "secondary": "ghost"}, "dragapult": {"primary": "dragon", "secondary": "ghost"}, "zacian": {"primary": "fairy"}, "zamazenta": {"primary": "fighting"}, "eternatus": {"primary": "poison", "secondary": "dragon"}, "kubfu": {"primary": "fighting"}, "urshifu": {"secondary": "water"}, "zarude": {"primary": "dark", "secondary": "grass"}, "regieleki": {"primary": "electric"}, "regidrago": {"primary": "dragon"}, "glastrier": {"primary": "ice"}, "spectrier": {"primary": "ghost"}, "calyrex": {"primary": "psychic", "secondary": "grass"}, "pidgeot-mega": {"primary": "normal", "secondary": "flying"}, "meowth-gmax": {"primary": "normal"}, "kangaskhan-mega": {"primary": "normal"}, "eevee-gmax": {"primary": "normal"}, "snorlax-gmax": {"primary": "normal"}, "lopunny-mega": {"primary": "normal", "secondary": "fighting"}, "audino-mega": {"primary": "normal", "secondary": "fairy"}, "meloetta-pirouette": {"primary": "normal", "secondary": "fighting"}, "zorua-hisui": {"primary": "normal", "secondary": "ghost"}, "zoroark-hisui": {"primary": "normal", "secondary": "ghost"}, "wyrdeer": {"primary": "normal", "secondary": "psychic"}, "rattata-alola": {"secondary": "normal", "primary": "dark"}, "raticate-alola": {"secondary": "normal", "primary": "dark"}, "zigzagoon-galar": {"secondary": "normal", "primary": "dark"}, "linoone-galar": {"secondary": "normal", "primary": "dark"}, "indeedee-f": {"secondary": "normal", "primary": "psychic"}, "ursaluna": {"secondary": "normal", "primary": "ground"}, "charizard-mega-y": {"primary": "fire", "secondary": "flying"}, "charizard-mega-x": {"primary": "fire", "secondary": "dragon"}, "charizard-gmax": {"primary": "fire", "secondary": "flying"}, "blaziken-mega": {"primary": "fire", "secondary": "fighting"}, "camerupt-mega": {"primary": "fire", "secondary": "ground"}, "darmanitan-zen": {"primary": "fire", "secondary": "psychic"}, "cinderace-gmax": {"primary": "fire"}, "centiskorch-gmax": {"primary": "fire", "secondary": "bug"}, "marowak-alola": {"primary": "fire", "secondary": "ghost"}, "castform-sunny": {"primary": "fire"}, "arceus-fire": {"primary": "fire"}, "silvally-fire": {"primary": "fire"}, "typhlosion-hisui": {"primary": "fire", "secondary": "ghost"}, "growlithe-hisui": {"primary": "fire", "secondary": "rock"}, "arcanine-hisui": {"primary": "fire", "secondary": "rock"}, "houndoom-mega": {"secondary": "fire", "primary": "dark"}, "darmanitan-galar-zen": {"secondary": "fire", "primary": "ice"}, "coalossal-gmax": {"secondary": "fire", "primary": "rock"}, "groudon-primal": {"secondary": "fire", "primary": "ground"}, "rotom-heat": {"secondary": "fire", "primary": "electric"}, "blastoise-mega": {"primary": "water"}, "blastoise-gmax": {"primary": "water"}, "slowbro-mega": {"primary": "water", "secondary": "psychic"}, "kingler-gmax": {"primary": "water"}, "gyarados-mega": {"primary": "water", "secondary": "dark"}, "lapras-gmax": {"primary": "water", "secondary": "ice"}, "swampert-mega": {"primary": "water", "secondary": "ground"}, "sharpedo-mega": {"primary": "water", "secondary": "dark"}, "kyogre-primal": {"primary": "water"}, "inteleon-gmax": {"primary": "water"}, "drednaw-gmax": {"primary": "water", "secondary": "rock"}, "castform-rainy": {"primary": "water"}, "arceus-water": {"primary": "water"}, "silvally-water": {"primary": "water"}, "basculin-blue-striped": {"primary": "water"}, "wishiwashi-school": {"primary": "water"}, "keldeo-resolute": {"primary": "water", "secondary": "fighting"}, "samurott-hisui": {"primary": "water", "secondary": "dark"}, "palkia-origin": {"primary": "water", "secondary": "dragon"}, "basculin-white-striped": {"primary": "water"}, "basculegion": {"primary": "water", "secondary": "ghost"}, "basculegion-f": {"primary": "water", "secondary": "ghost"}, "urshifu-rapid-strike-gmax": {"secondary": "water", "primary": "fighting"}, "rotom-wash": {"secondary": "water", "primary": "electric"}, "venusaur-mega": {"primary": "grass", "secondary": "poison"}, "venusaur-gmax": {"primary": "grass", "secondary": "poison"}, "exeggutor-alola": {"primary": "grass", "secondary": "dragon"}, "sceptile-mega": {"primary": "grass", "secondary": "dragon"}, "abomasnow-mega": {"primary": "grass", "secondary": "ice"}, "shaymin-sky": {"primary": "grass", "secondary": "flying"}, "rillaboom-gmax": {"primary": "grass"}, "flapple-gmax": {"primary": "grass", "secondary": "dragon"}, "appletun-gmax": {"primary": "grass", "secondary": "dragon"}, "arceus-grass": {"primary": "grass"}, "silvally-grass": {"primary": "grass"}, "cherrim-sunshine": {"primary": "grass"}, "decidueye-hisui": {"primary": "grass", "secondary": "fighting"}, "lilligant-hisui": {"primary": "grass", "secondary": "fighting"}, "rotom-mow": {"secondary": "grass", "primary": "electric"}, "voltorb-hisui": {"secondary": "grass", "primary": "electric"}, "electrode-hisui": {"secondary": "grass", "primary": "electric"}, "pikachu-gmax": {"primary": "electric"}, "raichu-alola": {"primary": "electric", "secondary": "psychic"}, "ampharos-mega": {"primary": "electric", "secondary": "dragon"}, "manectric-mega": {"primary": "electric"}, "rotom-fan": {"primary": "electric", "secondary": "flying"}, "rotom-frost": {"primary": "electric", "secondary": "ice"}, "toxtricity-gmax": {"primary": "electric", "secondary": "poison"}, "arceus-electric": {"primary": "electric"}, "oricorio-pom-pom": {"primary": "electric", "secondary": "flying"}, "silvally-electric": {"primary": "electric"}, "thundurus-therian": {"primary": "electric", "secondary": "flying"}, "toxtricity-low-key": {"primary": "electric", "secondary": "poison"}, "geodude-alola": {"secondary": "electric", "primary": "rock"}, "graveler-alola": {"secondary": "electric", "primary": "rock"}, "golem-alola": {"secondary": "electric", "primary": "rock"}, "glalie-mega": {"primary": "ice"}, "sandshrew-alola": {"primary": "ice", "secondary": "steel"}, "sandslash-alola": {"primary": "ice", "secondary": "steel"}, "vulpix-alola": {"primary": "ice"}, "ninetales-alola": {"primary": "ice", "secondary": "fairy"}, "\"mr. mime-galar\"": {"primary": "ice", "secondary": "psychic"}, "castform-snowy": {"primary": "ice"}, "arceus-ice": {"primary": "ice"}, "darumaka-galar": {"primary": "ice"}, "darmanitan-galar": {"primary": "ice"}, "silvally-ice": {"primary": "ice"}, "avalugg-hisui": {"primary": "ice", "secondary": "rock"}, "calyrex-ice-rider": {"secondary": "ice", "primary": "psychic"}, "kyurem-black": {"secondary": "ice", "primary": "dragon"}, "kyurem-white": {"secondary": "ice", "primary": "dragon"}, "diglett-alola": {"primary": "ground", "secondary": "steel"}, "dugtrio-alola": {"primary": "ground", "secondary": "steel"}, "stunfisk-galar": {"primary": "ground", "secondary": "steel"}, "sandaconda-gmax": {"primary": "ground"}, "arceus-ground": {"primary": "ground"}, "silvally-ground": {"primary": "ground"}, "yamask-galar": {"primary": "ground", "secondary": "ghost"}, "landorus-therian": {"primary": "ground", "secondary": "flying"}, "steelix-mega": {"secondary": "ground", "primary": "steel"}, "garchomp-mega": {"secondary": "ground", "primary": "dragon"}, "wormadam-sandy": {"secondary": "ground", "primary": "bug"}, "zygarde-10": {"secondary": "ground", "primary": "dragon"}, "zygarde-complete": {"secondary": "ground", "primary": "dragon"}, "corviknight-gmax": {"primary": "flying", "secondary": "steel"}, "arceus-flying": {"primary": "flying"}, "silvally-flying": {"primary": "flying"}, "tornadus-therian": {"primary": "flying"}, "butterfree-gmax": {"secondary": "flying", "primary": "bug"}, "aerodactyl-mega": {"secondary": "flying", "primary": "rock"}, "articuno-galar": {"secondary": "flying", "primary": "psychic"}, "zapdos-galar": {"secondary": "flying", "primary": "fighting"}, "moltres-galar": {"secondary": "flying", "primary": "dark"}, "salamence-mega": {"secondary": "flying", "primary": "dragon"}, "rayquaza-mega": {"secondary": "flying", "primary": "dragon"}, "oricorio-pau": {"secondary": "flying", "primary": "psychic"}, "oricorio-sensu": {"secondary": "flying", "primary": "ghost"}, "pinsir-mega": {"secondary": "flying", "primary": "bug"}, "braviary-hisui": {"secondary": "flying", "primary": "psychic"}, "enamorus": {"secondary": "flying", "primary": "fairy"}, "enamorus-therian": {"secondary": "flying", "primary": "fairy"}, "grimer-alola": {"primary": "poison", "secondary": "dark"}, "muk-alola": {"primary": "poison", "secondary": "dark"}, "weezing-galar": {"primary": "poison", "secondary": "fairy"}, "garbodor-gmax": {"primary": "poison"}, "eternatus-eternamax": {"primary": "poison", "secondary": "dragon"}, "slowbro-galar": {"primary": "poison", "secondary": "psychic"}, "slowking-galar": {"primary": "poison", "secondary": "psychic"}, "arceus-poison": {"primary": "poison"}, "silvally-poison": {"primary": "poison"}, "beedrill-mega": {"secondary": "poison", "primary": "bug"}, "gengar-mega": {"secondary": "poison", "primary": "ghost"}, "gengar-gmax": {"secondary": "poison", "primary": "ghost"}, "sneasel-hisui": {"secondary": "poison", "primary": "fighting"}, "qwilfish-hisui": {"secondary": "poison", "primary": "dark"}, "sneasler": {"secondary": "poison", "primary": "fighting"}, "overqwil": {"secondary": "poison", "primary": "dark"}, "machamp-gmax": {"primary": "fighting"}, "medicham-mega": {"primary": "fighting", "secondary": "psychic"}, "lucario-mega": {"primary": "fighting", "secondary": "steel"}, "zamazenta-crowned": {"primary": "fighting", "secondary": "steel"}, "urshifu-gmax": {"primary": "fighting", "secondary": "dark"}, "\"farfetchd-galar\"": {"primary": "fighting"}, "arceus-fighting": {"primary": "fighting"}, "silvally-fighting": {"primary": "fighting"}, "heracross-mega": {"secondary": "fighting", "primary": "bug"}, "gallade-mega": {"secondary": "fighting", "primary": "psychic"}, "mewtwo-mega-x": {"secondary": "fighting", "primary": "psychic"}, "alakazam-mega": {"primary": "psychic"}, "slowpoke-galar": {"primary": "psychic"}, "mewtwo-mega-y": {"primary": "psychic"}, "gardevoir-mega": {"primary": "psychic", "secondary": "fairy"}, "hoopa-unbound": {"primary": "psychic", "secondary": "dark"}, "necrozma-dawn-wings": {"primary": "psychic", "secondary": "ghost"}, "necrozma-dusk-mane": {"primary": "psychic", "secondary": "steel"}, "necrozma-ultra": {"primary": "psychic", "secondary": "dragon"}, "hatterene-gmax": {"primary": "psychic", "secondary": "fairy"}, "calyrex-shadow-rider": {"primary": "psychic", "secondary": "ghost"}, "ponyta-galar": {"primary": "psychic"}, "rapidash-galar": {"primary": "psychic", "secondary": "fairy"}, "arceus-psychic": {"primary": "psychic"}, "silvally-psychic": {"primary": "psychic"}, "meowstic-f": {"primary": "psychic"}, "metagross-mega": {"secondary": "psychic", "primary": "steel"}, "latios-mega": {"secondary": "psychic", "primary": "dragon"}, "latias-mega": {"secondary": "psychic", "primary": "dragon"}, "orbeetle-gmax": {"secondary": "psychic", "primary": "bug"}, "sableye-mega": {"primary": "dark", "secondary": "ghost"}, "absol-mega": {"primary": "dark"}, "grimmsnarl-gmax": {"primary": "dark", "secondary": "fairy"}, "meowth-alola": {"primary": "dark"}, "persian-alola": {"primary": "dark"}, "arceus-dark": {"primary": "dark"}, "silvally-dark": {"primary": "dark"}, "tyranitar-mega": {"secondary": "dark", "primary": "rock"}, "scizor-mega": {"primary": "bug", "secondary": "steel"}, "wormadam-trash": {"primary": "bug", "secondary": "steel"}, "arceus-bug": {"primary": "bug"}, "silvally-bug": {"primary": "bug"}, "kleavor": {"primary": "bug", "secondary": "rock"}, "diancie-mega": {"primary": "rock", "secondary": "fairy"}, "arceus-rock": {"primary": "rock"}, "silvally-rock": {"primary": "rock"}, "lycanroc-midnight": {"primary": "rock"}, "lycanroc-dusk": {"primary": "rock"}, "banette-mega": {"primary": "ghost"}, "corsola-galar": {"primary": "ghost"}, "arceus-ghost": {"primary": "ghost"}, "silvally-ghost": {"primary": "ghost"}, "giratina-origin": {"primary": "ghost", "secondary": "dragon"}, "altaria-mega": {"primary": "dragon", "secondary": "fairy"}, "arceus-dragon": {"primary": "dragon"}, "silvally-dragon": {"primary": "dragon"}, "duraludon-gmax": {"secondary": "dragon", "primary": "steel"}, "sliggoo-hisui": {"secondary": "dragon", "primary": "steel"}, "goodra-hisui": {"secondary": "dragon", "primary": "steel"}, "dialga-origin": {"secondary": "dragon", "primary": "steel"}, "mawile-mega": {"primary": "steel", "secondary": "fairy"}, "aggron-mega": {"primary": "steel"}, "melmetal-gmax": {"primary": "steel"}, "copperajah-gmax": {"primary": "steel"}, "meowth-galar": {"primary": "steel"}, "arceus-steel": {"primary": "steel"}, "silvally-steel": {"primary": "steel"}, "zacian-crowned": {"secondary": "steel", "primary": "fairy"}, "alcremie-gmax": {"primary": "fairy"}, "arceus-fairy": {"primary": "fairy"}, "silvally-fairy": {"primary": "fairy"}, "deoxys-attack": {"primary": "psychic"}, "deoxys-defense": {"primary": "psychic"}, "deoxys-speed": {"primary": "psychic"}}
let typeList = ["normal", "fire", "water", "grass", "electric", "ice", "ground", "flying", "poison", "fighting", "psychic", "dark", "bug", "rock", "ghost", "dragon", "steel", "fairy"]
let boxes = [];
let currentPokemonList = [];
let currentGen = 0; //0 means all
let currentType = ""
let soundEffect = new Audio('/sound-effects/gen3-click2.wav');
let soundEffectMissingno = new Audio('/sound-effects/032.wav');
soundEffectMissingno.volume = 0.2;
soundEffect.volume = 0.5;
let soundEffect2 = new Audio('/sound-effects/Dex-Fanfare.mp3');
soundEffect2.volume = 0.3;
let darkMode = false;
let useEncoded = true;
let suffixes = ["alola", "galar", "hisui", "mega", "megax", "megay", "primal", "gmax","rapidstrikegmax", "eternamax", "water", "grass", "fire", "electric", "ice", "ground", "flying", "poison", "fighting", "psychic", "dark", "bug", "rock", "ghost", "dragon", "steel", "fairy", "sunny", "rainy", "snowy", "sandy", "trash", "heat", "wash", "mow", "frost", "fan", "sky", "zen","galarzen", "pirouette", "unbound", "pompom", "pau", "sensu", "duskmane", "dawnwings", "ultra", "crowned", "icerider", "shadowrider", "f", "dusk", "midnight", "bluestriped", "whitestriped", "sunshine", "school", "origin", "therian", "white", "black", "resolute", "10", "complete", "lowkey", "attack", "defense", "speed"]
let logActions = true;
let isSpellingEnabled = false;
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
	'Frosmoth':['Darumaka-Galar', 'Darmanitan-Galar', 'Darmanitan-Galar-Zen'],
	'Eternatus':['Slowpoke-Galar', 'Slowbro-Galar', 'Slowking-Galar'],
	'Regidrago':['Articuno-Galar', 'Zapdos-Galar', 'Moltres-Galar'],
	//regular forms added after their base forms
	'Castform':['Castform-Sunny', 'Castform-Rainy', 'Castform-Snowy'],
    'Deoxys' :['Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed'],
	'Wormadam':['Wormadam-Sandy', 'Wormadam-Trash'],
	'Rotom':['Rotom-Heat', 'Rotom-Wash', 'Rotom-Mow', 'Rotom-Frost', 'Rotom-Fan'],
	'Shaymin':['Shaymin-Sky'],
	'Arceus':['Arceus-Water', 'Arceus-Grass', 'Arceus-Fire', 'Arceus-Electric', 'Arceus-Ice', 'Arceus-Ground', 'Arceus-Flying', 'Arceus-Fighting', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Dark', 'Arceus-Bug', 'Arceus-Rock', 'Arceus-Ghost', 'Arceus-Steel', 'Arceus-Dragon', 'Arceus-Fairy'],
	'Darmanitan':['Darmanitan-Zen'],
	'Meloetta':['Meloetta-Pirouette'],
	'Hoopa':['Hoopa-Unbound'],
	'Oricorio':['Oricorio-Pom-Pom', 'Oricorio-Pau', 'Oricorio-Sensu'],
	'Silvally':['Silvally-Water', 'Silvally-Grass', 'Silvally-Fire', 'Silvally-Electric', 'Silvally-Ice', 'Silvally-Ground', 'Silvally-Flying', 'Silvally-Fighting', 'Silvally-Poison', 'Silvally-Psychic', 'Silvally-Dark', 'Silvally-Bug', 'Silvally-Rock', 'Silvally-Ghost', 'Silvally-Steel', 'Silvally-Dragon', 'Silvally-Fairy', 'Zygarde-10', 'Zygarde-Complete'],
	'Necrozma':['Necrozma-Dusk-Mane', 'Necrozma-Dawn-Wings', 'Necrozma-Ultra'],
	'Zacian':['Zacian-Crowned'],
	'Zamazenta':['Zamazenta-Crowned'],
	'Calyrex':['Calyrex-Ice-Rider', 'Calyrex-Shadow-Rider'],
	//minor forms (fucntionally identical and always next to original)
	//'Basculin':['Basculin-Blue-Striped'],
	'Lycanroc':['lycanroc-Midnight', 'Lycanroc-Dusk'],
	'Meowstic':['Meowstic-F'],
	'Indeedee':['Indeedee-F'],
	'Cherrim':['Cherrim-Sunshine'],
	'Wishiwashi':['Wishiwashi-School'],
	'Giratina':['Giratina-Origin'],
	'Tornadus':['Tornadus-Therian'],
	'Thundurus':['Thundurus-Therian'],
	'Landorus':['Landorus-Therian'],
	'Kyurem':['Kyurem-Black', 'Kyurem-White'],
	//'Keldeo':['Keldeo-Resolute'],
	'Toxtricity':['Toxtricity-Low-Key'],
    // Hisuian forms in Hisuidex-order (except Qwilfish due to Overqwil dexnumber after Sneasler) + regular PLA forms
    "hisuiplaceholder": ['Decidueye-Hisui', 'Typhlosion-Hisui', 'Samurott-Hisui'],
    'Kleavor' :['Lilligant-Hisui'],
    'Ursaluna' :['Sliggoo-Hisui', 'Goodra-Hisui', 'Growlithe-Hisui', 'Arcanine-Hisui', 'Basculin-White-Striped'],
    'Basculegion' :['Basculegion-F', 'Voltorb-Hisui', 'Electrode-Hisui', 'Sneasel-Hisui'],
    'Sneasler' :['Qwilfish-Hisui'],
    'Overqwil' :['Avalugg-Hisui', 'Zorua-Hisui', 'Zoroark-Hisui', 'Braviary-Hisui'],
    'Enamorus' :['Enamorus-Therian', 'Dialga-Origin', 'Palkia-Origin'],
}

//standardize keys
for (let key in extraPokemon){
    let pokemon = standardizeName(key);
    if (pokemon != key){
        extraPokemon[pokemon] = extraPokemon[key]
        delete extraPokemon[key]
    }
}


let getCurrentTypeName = function (){
    let typeName = currentType
    if (typeName == "dark"){
        typeName = "evil"
    }
    return typeName;
}
let visualizeButtonClick = function(elem){
    elem.classList.add("smolbuttonx")
    if (darkMode){
        elem.classList.add("smolbuttonxdark")
    }

    if (currentType !== ""){
        let typeName = getCurrentTypeName();
        elem.classList.add("smolbuttonx"+typeName)
        if (darkMode){
            elem.classList.add("smolbuttonxdark"+typeName)
        }
    }

}
let visualizeButtonUnclick = function(elem){
    elem.classList.remove("smolbuttonx")
    elem.classList.remove("smolbuttonxdark")
    if (currentType !== ""){
        let typeName = currentType
        if (typeName == "dark"){
            typeName = "evil"
        }
        elem.classList.remove("smolbuttonx"+typeName)
        elem.classList.remove("smolbuttonxdark"+typeName)
    }
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
        boxes.push(document.getElementById("pokemon-box-" + genNames[i]));
    }

    //calling functions, popup and changing button CSS
    document.getElementById("gen" +genNames[i]).onclick = function () {

            let swapGen = function () {
                document.getElementById("genselection").onclick = off2;
                currentGen = i;
                promptGen.style.display = "none";
                resetQuiz();
                updateGenFilter();
                
            }

            promptGenYes.onclick = function () {
                swapGen();
				off2();

            }
            promptGenNo.onclick = function () {
                promptGen.style.display = "none";				
			}
            if (alreadyGuessedPokemon.length !== 0) {
                promptGen.style.display = 'inline';
            } else {
                swapGen();
				off2();
            }
    }
}

//good looking names for missing list
let formatted_lang_map = {}
let nidoranfIndex = pokemonList.indexOf('Nidoranf')
let nidoranmIndex = pokemonList.indexOf('Nidoranm')
for (key in language_map){
	let copiedList = []
	
	for (let i = 0; i< language_map[key].length; i++){
		copiedList.push(language_map[key][i]);
        if (i == nidoranfIndex){
            copiedList[i] = copiedList[i].substring(0, copiedList[i].length - 1) + '♀';
        }else if (i == nidoranmIndex){
            copiedList[i] = copiedList[i].substring(0, copiedList[i].length - 1) + '♂';
        }
	}
	formatted_lang_map[key] = copiedList
}




let missingOptionsDiv = document.getElementById('missednames-options');
let engMissingButton = '';

let allMissingLangButtons = []
let missingLangDict = {}
let lastLangInput = 'ENG';

for (key in formatted_lang_map){
	let lang = document.createElement("div");
	let currentKey = key;
    lang.innerHTML += key
    lang.classList.add('smolbutton')
    lang.id = 'missing-'+ key
	
    lang.onclick = function () {
		let typeName = getCurrentTypeName();
		for (let i = 0; i< allMissingLangButtons.length; i++){
			if (allMissingLangButtons[i] != lang){
				allMissingLangButtons[i].classList.remove('smolbuttonSwap')
                allMissingLangButtons[i].classList.remove('smolbuttonSwap'+typeName)
				allMissingLangButtons[i].classList.add('smolbutton')
                allMissingLangButtons[i].classList.add('smolbutton' + typeName)

                if (darkMode){
                    allMissingLangButtons[i].classList.add('smolbuttondark')
                    allMissingLangButtons[i].classList.add('smolbuttondark'+typeName)
                }
			}
			lang.classList.remove('smolbutton');
            lang.classList.remove('smolbutton'+typeName);
            lang.classList.remove('smolbuttondark');
            lang.classList.remove('smolbuttondark'+typeName);
			lang.classList.add('smolbuttonSwap');
            lang.classList.add('smolbuttonSwap'+typeName);
		}
		
		for (let i = 0; i< formatted_lang_map[currentKey].length; i++){
            if(pokemonList[i] === "wormadam"){
                unguessedDictTexts[standardizeName(pokemonList[i])].nodeValue = formatted_lang_map[currentKey][i] + " G"
            }
			else if(pokemonList[i] === "shaymin"){
                unguessedDictTexts[standardizeName(pokemonList[i])].nodeValue = formatted_lang_map[currentKey][i] + " L"
            }
			else if(pokemonList[i] === "meloetta"){
                unguessedDictTexts[standardizeName(pokemonList[i])].nodeValue = formatted_lang_map[currentKey][i] + " A"
            }
			else if(pokemonList[i] === "hoopa"){
                unguessedDictTexts[standardizeName(pokemonList[i])].nodeValue = formatted_lang_map[currentKey][i] + " C"
            }
			else if(pokemonList[i] === "oricorio"){
                unguessedDictTexts[standardizeName(pokemonList[i])].nodeValue = formatted_lang_map[currentKey][i] + " B"
            }
			else if(pokemonList[i] === "zacian"){
                unguessedDictTexts[standardizeName(pokemonList[i])].nodeValue = formatted_lang_map[currentKey][i] + " H"
            }
			else if(pokemonList[i] === "zamazenta"){
                unguessedDictTexts[standardizeName(pokemonList[i])].nodeValue = formatted_lang_map[currentKey][i] + " H"
            }
			else if(pokemonList[i] === "indeedee"){
                unguessedDictTexts[standardizeName(pokemonList[i])].nodeValue = formatted_lang_map[currentKey][i] + " ♂"
            }
			else if(pokemonList[i] === "meowstic"){
                unguessedDictTexts[standardizeName(pokemonList[i])].nodeValue = formatted_lang_map[currentKey][i] + " ♂"
            }
			//else if(pokemonList[i] === "basculin"){
            //    unguessedDictTexts[standardizeName(pokemonList[i])].nodeValue = formatted_lang_map[currentKey][i] + " R"
            //}
			else if(pokemonList[i] === "cherrim"){
                unguessedDictTexts[standardizeName(pokemonList[i])].nodeValue = formatted_lang_map[currentKey][i] + " O"
            }
			else if(pokemonList[i] === "lycanroc"){
                unguessedDictTexts[standardizeName(pokemonList[i])].nodeValue = formatted_lang_map[currentKey][i] + " MD"
            }
			else if(pokemonList[i] === "giratina"){
                unguessedDictTexts[standardizeName(pokemonList[i])].nodeValue = formatted_lang_map[currentKey][i] + " A"
            }
			else if(pokemonList[i] === "tornadus"){
                unguessedDictTexts[standardizeName(pokemonList[i])].nodeValue = formatted_lang_map[currentKey][i] + " I"
            }
			else if(pokemonList[i] === "thundurus"){
                unguessedDictTexts[standardizeName(pokemonList[i])].nodeValue = formatted_lang_map[currentKey][i] + " I"
            }
			else if(pokemonList[i] === "landorus"){
                unguessedDictTexts[standardizeName(pokemonList[i])].nodeValue = formatted_lang_map[currentKey][i] + " I"
            }
			//else if(pokemonList[i] === "keldeo"){
            //    unguessedDictTexts[standardizeName(pokemonList[i])].nodeValue = formatted_lang_map[currentKey][i] + " O"
            //}
			else if(pokemonList[i] === "zygarde"){
                unguessedDictTexts[standardizeName(pokemonList[i])].nodeValue = formatted_lang_map[currentKey][i] + " 50%"
            }
			else if(pokemonList[i] === "toxtricity"){
                unguessedDictTexts[standardizeName(pokemonList[i])].nodeValue = formatted_lang_map[currentKey][i] + " A"
            }
			else if(pokemonList[i] === "basculegion"){
                unguessedDictTexts[standardizeName(pokemonList[i])].nodeValue = formatted_lang_map[currentKey][i] + " ♂"
            }
			else if(pokemonList[i] === "enamorus"){
                unguessedDictTexts[standardizeName(pokemonList[i])].nodeValue = formatted_lang_map[currentKey][i] + " I"
            }
			else if(pokemonList[i] === "dialga"){
                unguessedDictTexts[standardizeName(pokemonList[i])].nodeValue = formatted_lang_map[currentKey][i] + " A"
            }
			else if(pokemonList[i] === "palkia"){
                unguessedDictTexts[standardizeName(pokemonList[i])].nodeValue = formatted_lang_map[currentKey][i] + " A"
            }
            else{
			    unguessedDictTexts[standardizeName(pokemonList[i])].nodeValue = formatted_lang_map[currentKey][i];
            }

            for (let j  = 0; j<suffixes.length; j++){
                if (standardizeName(pokemonList[i])+suffixes[j] in  unguessedDictTexts){
                    if(suffixes[j] === "megay"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'megay'].nodeValue = formatted_lang_map[currentKey][i]  + ' Y';
                    }
                    else if(suffixes[j] === "megax"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'megax'].nodeValue = formatted_lang_map[currentKey][i]  + ' X';
                    }
					else if(suffixes[j] === "primal"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'primal'].nodeValue = 'P ' + formatted_lang_map[currentKey][i];
                    }
                    else if(suffixes[j] === "sunny"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'sunny'].nodeValue = formatted_lang_map[currentKey][i]  + ' S';
                    }
					else if(suffixes[j] === "rainy"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'rainy'].nodeValue = formatted_lang_map[currentKey][i]  + ' R';
                    }
					else if(suffixes[j] === "snowy"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'snowy'].nodeValue = formatted_lang_map[currentKey][i]  + ' H';
                    }
					else if(suffixes[j] === "sandy"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'sandy'].nodeValue = formatted_lang_map[currentKey][i]  + ' S';
                    }
					else if(suffixes[j] === "trash"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'trash'].nodeValue = formatted_lang_map[currentKey][i]  + ' T';
                    }
					else if(suffixes[j] === "heat"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'heat'].nodeValue = formatted_lang_map[currentKey][i]  + ' H';
                    }
					else if(suffixes[j] === "wash"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'wash'].nodeValue = formatted_lang_map[currentKey][i]  + ' W';
                    }
					else if(suffixes[j] === "mow"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'mow'].nodeValue = formatted_lang_map[currentKey][i]  + ' M';
                    }
					else if(suffixes[j] === "frost"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'frost'].nodeValue = formatted_lang_map[currentKey][i]  + ' F';
                    }
					else if(suffixes[j] === "fan"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'fan'].nodeValue = formatted_lang_map[currentKey][i]  + ' S';
                    }
					else if(suffixes[j] === "sky"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'sky'].nodeValue = formatted_lang_map[currentKey][i]  + ' S';
                    }
					else if(suffixes[j] === "zen"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'zen'].nodeValue = formatted_lang_map[currentKey][i]  + ' Z';
                    }
					else if(suffixes[j] === "galarzen"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'galarzen'].nodeValue = formatted_lang_map[currentKey][i]  + ' Z';
                    }
					else if(suffixes[j] === "pirouette"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'pirouette'].nodeValue = formatted_lang_map[currentKey][i]  + ' P';
                    }
					else if(suffixes[j] === "unbound"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'unbound'].nodeValue = formatted_lang_map[currentKey][i]  + ' U';
                    }
					else if(suffixes[j] === "pompom"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'pompom'].nodeValue = formatted_lang_map[currentKey][i]  + ' PP';
                    }
					else if(suffixes[j] === "pau"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'pau'].nodeValue = formatted_lang_map[currentKey][i]  + ' P';
                    }
					else if(suffixes[j] === "sensu"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'sensu'].nodeValue = formatted_lang_map[currentKey][i]  + ' S';
                    }
					else if(suffixes[j] === "duskmane"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'duskmane'].nodeValue = 'DM ' + formatted_lang_map[currentKey][i];
                    }
					else if(suffixes[j] === "dawnwings"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'dawnwings'].nodeValue = 'DW ' + formatted_lang_map[currentKey][i];
                    }
					else if(suffixes[j] === "ultra"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'ultra'].nodeValue = 'U ' + formatted_lang_map[currentKey][i];
                    }
					else if(suffixes[j] === "crowned"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'crowned'].nodeValue = formatted_lang_map[currentKey][i]  + ' C';
                    }
					else if(suffixes[j] === "icerider"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'icerider'].nodeValue = 'I ' + formatted_lang_map[currentKey][i];
                    }
					else if(suffixes[j] === "shadowrider"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'shadowrider'].nodeValue = 'S ' + formatted_lang_map[currentKey][i];
                    }
					else if(suffixes[j] === "eternamax"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'eternamax'].nodeValue = formatted_lang_map[currentKey][i]  + ' E';
                    }
					else if(suffixes[j] === "f"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'f'].nodeValue = formatted_lang_map[currentKey][i]  + ' ♀';
                    }
					else if(suffixes[j] === "dusk"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'dusk'].nodeValue = formatted_lang_map[currentKey][i]  + ' D';
                    }
					else if(suffixes[j] === "midnight"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'midnight'].nodeValue = formatted_lang_map[currentKey][i]  + ' MN';
                    }
					else if(suffixes[j] === "bluestriped"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'bluestriped'].nodeValue = formatted_lang_map[currentKey][i]  + ' B';
                    }
					else if(suffixes[j] === "sunshine"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'sunshine'].nodeValue = formatted_lang_map[currentKey][i]  + ' S';
                    }
					else if(suffixes[j] === "school"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'school'].nodeValue = formatted_lang_map[currentKey][i]  + ' S';
                    }
					else if(suffixes[j] === "origin"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'origin'].nodeValue = formatted_lang_map[currentKey][i]  + ' O';
                    }
					else if(suffixes[j] === "therian"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'therian'].nodeValue = formatted_lang_map[currentKey][i]  + ' T';
                    }
					else if(suffixes[j] === "white"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'white'].nodeValue = 'W ' + formatted_lang_map[currentKey][i];
                    }
					else if(suffixes[j] === "black"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'black'].nodeValue = 'B ' + formatted_lang_map[currentKey][i];
                    }
					//else if(suffixes[j] === "resolute"){
                    //    unguessedDictTexts[standardizeName(pokemonList[i])+'resolute'].nodeValue = formatted_lang_map[currentKey][i]  + ' R';
                    //}
					else if(suffixes[j] === "10"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'10'].nodeValue = formatted_lang_map[currentKey][i]  + ' 10%';
                    }
					else if(suffixes[j] === "complete"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'complete'].nodeValue = formatted_lang_map[currentKey][i]  + ' C';
                    }
					else if(suffixes[j] === "lowkey"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'lowkey'].nodeValue = formatted_lang_map[currentKey][i]  + ' L';
                    }
					else if(suffixes[j] === "attack"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'attack'].nodeValue = formatted_lang_map[currentKey][i] + ' A';
                    }
					else if(suffixes[j] === "defense"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'defense'].nodeValue = formatted_lang_map[currentKey][i] + ' D';
                    }
					else if(suffixes[j] === "speed"){
                        unguessedDictTexts[standardizeName(pokemonList[i])+'speed'].nodeValue = formatted_lang_map[currentKey][i] + ' S';
                    }
                    else if(suffixes[j] === 'gmax'){
                        if (pokemonList[i] == 'urshifu'){
                            unguessedDictTexts[standardizeName(pokemonList[i])+'gmax'].nodeValue = formatted_lang_map[currentKey][i] + ' SS';
                            unguessedDictTexts[standardizeName(pokemonList[i])+'rapidstrikegmax'].nodeValue = formatted_lang_map[currentKey][i] + ' RS';
                        }
                        else{
                            unguessedDictTexts[standardizeName(pokemonList[i])+'gmax'].nodeValue = formatted_lang_map[currentKey][i];
                        }
                    }
                    else{
                        unguessedDictTexts[standardizeName(pokemonList[i])+suffixes[j]].nodeValue = formatted_lang_map[currentKey][i];
                    }
                }
            }
		}
		
    }
    if (currentKey == 'ENG'){
        engMissingButton = lang;
    }
    missingLangDict[currentKey] = lang;
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
    if (key == 'ENG' || key == 'JPN' || key == 'KOR'){
        lang.click()
    }
    language_box.appendChild(lang);
}




function tryTranslate(input){
    for (let k = 0; k< enabledLanguages.length; k++){
        key = enabledLanguages[k]
        for(let i = 0; i<language_map[key].length;i++){
            if (input == standardizeName(language_map[key][i])){
                //console.log('translating:' + input + ' to ' +  pokemonList[i])
                if (lastLangInput !== key){
                    lastLangInput = key
                    missingLangDict[lastLangInput].click();
                }
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
let allSprites = [];



function showSprite(name) {
    spriteDictionary[name].style.display = "inline";
    unguessedDictionary[name].style.display = "none";

    if (currentGen === 0){
        
        
        
        let boxElem = spriteDictionary[name].parentElement;

        let allRevealed = true;
        for (let i = 0; i < currentRevealList.length; i++){
            if (unguessedDictionary[currentRevealList[i]].parentElement == boxElem){
                if (unguessedDictionary[currentRevealList[i]].style.display != 'none'){
                    allRevealed= false;
                    break
                }
            }
        }
        

        if (allRevealed){
            
            boxElem.classList.add('outline')
            boxElem.classList.add('outline'+getCurrentTypeName())
        }
    }
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
    input = input.replace(/[^ぁ-んァ-ン가-힣a-z0-9-_ß]/g, '');

    return input;
}

//standardize both lists
for (let i = 0; i < pokemonList.length; i++) {
    pokemonList[i] = standardizeName(pokemonList[i]);
}
for (let i = 0; i < genLastPokemon.length; i++) {
    genLastPokemon[i] = standardizeName(genLastPokemon[i]);
    genLastSprite[i] = standardizeName(genLastSprite[i]);
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


// we kinda rely on normal versions being added first
let pokemonAlreadyIncluded = function (name, list){

    for (let i = 0; i < suffixes.length; i++){
        if (name.endsWith(suffixes[i])){
            if (list.includes(name.substring(0, name.length- suffixes[i].length ))){
                return true;
            }
        }
    }

    // --- suffixes that show up in lists without the non-suffix pokemon
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
    
    }else if (name.endsWith("complete")){
        let temp = name.substring(0, name.length- "complete".length ) + '10'
        if (list.includes(temp)){
            return true;
        }
    }

    return false;
}



let pokemonRevealListByType = {};
let pokemonListByType = {}

for (let i = 0; i < typeList.length; i++) {
    pokemonRevealListByType[typeList[i]] = []
    pokemonListByType[typeList[i]] = []
}

for (key in typeDict){
    let temp = typeDict[key]
    delete typeDict[key]
    typeDict[standardizeName(key)] = temp
}
//typeDict["urshifu"]["primary"] = "fighting"
//typeDict["urshifu"]["secondary"] = "dark"
let combinedList = pokemonList.concat(megaList).concat(gmaxList).concat(extraPokemon["hisuiplaceholder"])
for (let i = 0; i < combinedList.length; i++) {
    let pokemon = standardizeName(combinedList[i]);
    
    if (pokemon === 'urshifu'){
        pokemonListByType["dark"].push(pokemon)
        pokemonRevealListByType["dark"].push(pokemon)
        pokemonListByType["water"].push(pokemon)
        pokemonRevealListByType["water"].push(pokemon)
        pokemonListByType["fighting"].push(pokemon)
        pokemonRevealListByType["fighting"].push(pokemon)
        continue
    }
    
 //for future update testing
    if (!(pokemon in typeDict)){
        console.log('missing pokemon', pokemon)
        continue
    }
    let types = typeDict[pokemon]
    if (!("primary" in types)){
        console.log('missing primary', pokemon)
        continue
    }

    pokemonRevealListByType[types["primary"]].push(pokemon)
    if ("secondary" in types){
        pokemonRevealListByType[types["secondary"]].push(pokemon)
    }
    if (!pokemonAlreadyIncluded(pokemon, pokemonListByType[types["primary"]])){
        pokemonListByType[types["primary"]].push(pokemon)
    }
    if ("secondary" in types){
        if (!pokemonAlreadyIncluded(pokemon, pokemonListByType[types["secondary"]])){
            pokemonListByType[types["secondary"]].push(pokemon)
        }
    }


    if (standardizeName(pokemon) in extraPokemon){
        for (let j = 0; j < extraPokemon[standardizeName(pokemon)].length; j++){
            let subPokemon = standardizeName(extraPokemon[standardizeName(pokemon)][j])
            types = typeDict[subPokemon]
            
            pokemonRevealListByType[types["primary"]].push(subPokemon)

            if ("secondary" in types){
                pokemonRevealListByType[types["secondary"]].push(subPokemon)
            }

            if (!pokemonAlreadyIncluded(subPokemon, pokemonListByType[types["primary"]])){
                pokemonListByType[types["primary"]].push(subPokemon)
            }
            if ("secondary" in types){
                if (!pokemonAlreadyIncluded(subPokemon, pokemonListByType[types["secondary"]])){
                    pokemonListByType[types["secondary"]].push(subPokemon)
                }
            }
        }
    }
}

for (let i = 0; i < pokemonList.length; i++) {
    let pokemon = pokemonList[i];

    if (i > 0 && pokemonList[i-1] == "calyrex"){
        for (let j = 0; j < extraPokemon['hisuiplaceholder'].length; j++){
            
            let subPokemon = standardizeName(extraPokemon['hisuiplaceholder'][j])
            currentGenRevealList.push(subPokemon)
            pokemonRevealListsByGen[0].push(subPokemon)
            if (!pokemonAlreadyIncluded(subPokemon, currentGenList)){
                currentGenList.push(subPokemon)
            }
        }
    }

    currentGenList.push(pokemon)
    currentGenRevealList.push(pokemon)
    pokemonRevealListsByGen[0].push(pokemon)

    if (standardizeName(pokemon) in extraPokemon){


        // --- 
        let pokemonCounters = {}
        let pkmnLists = {}
        for (let j = 0; j < extraPokemon[standardizeName(pokemon)].length; j++){
            let subPokemon = standardizeName(extraPokemon[standardizeName(pokemon)][j])
            for (let i = 0; i < suffixes.length; i++){
                if (subPokemon.endsWith(suffixes[i])){
                    let withoutSuffix = subPokemon.substring(0, subPokemon.length- suffixes[i].length);
                    if (!(withoutSuffix in pokemonCounters)){
                        pokemonCounters[withoutSuffix] = 0
                        pkmnLists[withoutSuffix] = []
                    }
                    pokemonCounters[withoutSuffix] +=1
                    pkmnLists[withoutSuffix].push(subPokemon)
                    break
                }
            }
        }
        let finalIgnoreList = []
        for (let key in pokemonCounters){
            if (pokemonCounters[key] > 15){
                finalIgnoreList = finalIgnoreList.concat(pkmnLists[key])
            }
        }
        // ---





        for (let j = 0; j < extraPokemon[standardizeName(pokemon)].length; j++){
            let subPokemon = standardizeName(extraPokemon[standardizeName(pokemon)][j])
            if (finalIgnoreList.includes(subPokemon)){
                continue;
            }
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

    let loadedPokemonDict = {}
    let loadPkmn = function(pokemonName){
        if (pokemonName in loadedPokemonDict){
            return;
        }
        if ( !(pokemonName in encodedImages['sprite']) ){
            console.log(pokemonName, 'missing in sprites')
        }
        if ( !(pokemonName in encodedImages['shiny']) ){
            console.log(pokemonName, 'missing in shinys')
        }
        if ( !(pokemonName in encodedImages['silhouette']) ){
            console.log(pokemonName, 'missing in silhouettes')
        }
        loadedPokemonDict[pokemonName] = 1
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
        allSprites.push(sprite);


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
        allSprites.push(silhouette);
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

        if (i > 0 && pokemonList[i-1] == "calyrex"){
            for (let j = 0; j<extraPokemon["hisuiplaceholder"].length; j++){
                fullSpriteList.push(standardizeName(extraPokemon["hisuiplaceholder"][j]))
                loadPkmn(standardizeName(extraPokemon["hisuiplaceholder"][j]));
            }
        }
        

        fullSpriteList.push(pokemon)
        if (pokemon in extraPokemon){
            for (let j = 0; j<extraPokemon[pokemon].length; j++){
                fullSpriteList.push(standardizeName(extraPokemon[pokemon][j]))
                loadPkmn(standardizeName(extraPokemon[pokemon][j]));
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
        allSprites.push(pokeballImg);

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
        
        if (genLastSprite.includes(pokemon)) {
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

    darkmodebg = new Image();
	darkmodebg.src = 'images/background-dark.svg';

    unknownDark = new Image();
	unknownDark.src = '/sprites/unknown-2.png';

    missingno = new Image();
	missingno.src = 'images/missingno.png';

    missingno = new Image();
	missingno.src = 'images/missingno2.png';

    missingno = new Image();
	missingno.src = 'images/missingno3.png';

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
        if ((genLastSprite.includes(pokemon) || pokemon == "zeraora") && i !==  fullSpriteList.length-1) {
            genIndex++;
			unguessedContent = createUnguessed(genIndex)
        }
    }
	engMissingButton.click();
}


let alreadyGuessedPokemon = [];

let inputField = document.getElementById("pokemon");
let recentSprite = document.getElementById("recentsprite");


//filter some obvious ones
let subSuffixes = []
for (let i = 0; i < suffixes.length; i++){
    if (suffixes[i] == "megax" || suffixes[i] == "megay" || suffixes[i] == "primal"|| suffixes[i] == "eternamax" ||suffixes[i] == "rapidstrikegmax"){
        continue
    }
    subSuffixes.push(suffixes[i])
}

let parseInput = function (inputText, sendLog, isTwitchChat) {

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


        if (inputText == "missingno" || inputText == "けつばん"){
            if (!missingnoEnabled){
                missingnoEnabled = true;
                startMissingno()
                inputField.value = '';
                soundEffectMissingno.play();
            }

        }

        inputText = standardizeName(inputText)
        inputText = tryTranslate(inputText)

		inputs.push(inputText);
		

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


        for (let i = 0; i < subSuffixes.length; i++){
            inputs.push(inputText + subSuffixes[i])
        }

        
		let wasCorrect = false;
		let guessResult = false;
		for (let i = 0; i < inputs.length; i++){
			//inputText = standardizeName(inputs[i]);
			//inputText = tryTranslate(inputText)
			guessResult = tryGuessPokemon(standardizeName(inputs[i]), sendLog, isTwitchChat);
			if (!wasCorrect && guessResult){
				wasCorrect = guessResult;
			}
		}
		return wasCorrect;
	}
	return false;
};



function getSimilarityScores(input){
	let similarityDict = {}
	input = standardizeName(input)
    
    for (let k = 0; k< enabledLanguages.length; k++){
        key = enabledLanguages[k]
        for(let i = 0; i<language_map[key].length;i++){
            let pkmn =  standardizeName(language_map[key][i])
            let engPkmn  = pokemonList[i]
            if (currentPokemonList.includes(engPkmn) && !alreadyGuessedPokemon.includes(engPkmn)){
                let similarityScore = Levenshtein(pkmn, input)
                similarityDict[pkmn] = similarityScore
            }
        }
    }

    sortedVals = sortDictionaryByValue(similarityDict)
    return sortedVals.reverse()

}

function getMostSimilarInput(input){
    
    let sortedList = getSimilarityScores(input)
    if (sortedList.length>0){
        return sortedList[0][0];
    }

    return "???";
}


let spellingElement =  document.getElementById("spelling");
let spellingButton =  document.getElementById("spellingbutton");
let spellingCheck =  document.getElementById("check");
let spellingHint =  document.getElementById("hint");


function spellingHelp() {
    if (isSpellingEnabled){
        spellingElement.style.display = "none";
        spellingButton.classList.add("smolbuttonx");
        isSpellingEnabled = false;
    }else{
        spellingElement.style.display = "inline-block";
        spellingButton.classList.remove("smolbuttonx");
        isSpellingEnabled = true;
    }
}

function showHint(){
    spellingCheck.style.display = "none";
    spellingHint.style.display = "inline-block"
    spellingHint.innerHTML = getMostSimilarInput(inputField.value)
}


function hideHint(){
    spellingCheck.style.display = "inline-block";
    spellingHint.style.display = "none"
    spellingHint.innerHTML = "";
}



inputField.oninput = function (){
	parseInput(inputField.value, true, false);

}


function play_single_sound() {
    document.getElementById('soundeffect').play();
}

function play_single_sound2() {
    document.getElementById('soundeffect2').play();
}

function tryGuessPokemon(input, sendLog,isTwitchChat) {
    try{
        if (currentRevealList.includes(input)){
            showSprite(input);
        }
    }catch(err){

    }
    if (currentPokemonList.includes(input) && !alreadyGuessedPokemon.includes(input)) {

        //showSprite(input);
        if (!isTwitchChat){
            inputField.value = '';
            hideHint()
        }
        recentSprite.src = spriteDictionary[input].src;
        alreadyGuessedPokemon.push(input);
        let relevantList = getAlreadyGuessedAndRelevantPokemon();
        setCounter(relevantList.length);
        if (!activeTimer) {
            if (currentTime === 0) {
                startTimer();
            } else {
                startCountdown(currentTime)
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
		//animateInput(input);
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
        genText = ' generation ' + genNames[currentGen] + ' ';
    }else{
        if(currentType !== ""){
            genText = " " + currentType.charAt(0).toUpperCase() + currentType.slice(1) + " type "
        }
    }

    document.getElementById("gen-name").innerHTML = genText

    let timerScore = '';
    let pokemonCount = '';
    if (currentTime === 0) {
        timerScore = timerText.innerHTML;
        pokemonCount = ' every ';
    } else {
		
		if(lastDiff === 0){
			timerScore = currentTime + ' minutes';
		}else{
			timerScore = msToTime(currentTime*60*1000 - lastDiff)
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

    if (Object.keys(twitchLeaderboard).length > 0){
	    document.getElementById("ranking2").style.display = "block";
        //document.getElementById("accordion2").click();
    }
    document.getElementById("ranking").style.display = "none";
    
    for (let i = 0; i < currentRevealList.length; i++) { 
        let pokemon = currentRevealList[i];
        if (!isSpriteHidden(pokemon)){
            animateInput(pokemon)
        }
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
	if (currentTime === 0) {
		updateTimer(0);
	} else {
		updateTimer(1000 * 60 * currentTime);
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
	

    if (Object.keys(twitchLeaderboard).length > 0){
	    document.getElementById("ranking2").style.display = "block";
        //document.getElementById("accordion2").click();
    }
    document.getElementById("ranking").style.display = "none";

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
    document.getElementById("missednames").style.display = "block";
    document.getElementById("accordion").click();
	
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



let typeClasses = [
    "smolbuttonxdarktype",
    "smolbuttonxtype",
    "limetype",
    "limelighttype",
    "outlinetype",
    "topedgetype",
    "input-twitchtype",
    "input-twitchtype:disabled",
    "input-timertype",
    "smolbuttontype",
    "smolbuttonSwaptype",
    "smolbuttontype:hover",
    "inlineboxtype",
    "buttondarktype",
    "limelightdarktype",
    "inlineboxdarktype" ,
    "arrowtype",
]

function updateTypeFilter(type){

    currentGen = 0;
    updateGenFilter();
    

    currentPokemonList = pokemonListByType[type]
    currentRevealList = pokemonRevealListByType[type]


    megaBox.style.display = "none";
    gmaxBox.style.display = "none";
    gen7half.style.display = "none";

    totalPokemonCount = pokemonListByType[type].length;
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.display = "none";
        regionToSingle(document.getElementById("region" + genNames[i+1]));
    }
    regionToSingle(document.getElementById("regionmega"));
    regionToSingle(document.getElementById("regiongmax"));
    regionToSingle(document.getElementById("region7-5"));
    document.getElementById("pokemon-box-7-5").classList.remove('unknownbox');

    for (let i = 0; i < pokecolumns.length; i++) {
        pokecolumns[i].classList.add('third');
        pokecolumns[i].classList.remove('twothirds');
    }
    for (let i = 0; i < allSprites.length; i++) {
        allSprites[i].classList.add('spritet');
        allSprites[i].classList.remove('spritew');
		allSprites[i].classList.remove('sprite');
    }

    
    document.getElementById("body").classList.add(type);
    if(darkMode){
        document.getElementById("body").classList.add("blenddark")
    }
    else{
        document.getElementById("body").classList.add("blend")
    }

    document.getElementById("bgpattern").style.display = 'block';
    document.getElementById("bgpattern2").style.display = 'block';
    document.getElementById("bgpattern").src = "/images/types/"+ type.toUpperCase()+".svg";
    document.getElementById("bgpattern2").src = "/images/types/"+ type.toUpperCase() +".svg";

    let typeName = type;
    if (typeName=="dark"){
        typeName = "evil"
    }
    for (let i = 0; i< typeClasses.length; i++){
        let currentClass = typeClasses[i];
        if(currentClass.includes('dark') && !darkMode){
            continue;
        }

        let allElements = document.getElementsByClassName(currentClass.replace("type", ""));
        //let allElements = document.querySelectorAll("." + currentClass.replace("type", ""));
        for (let j = 0; j<allElements.length; j++){
            allElements[j].classList.add(currentClass.replace("type", typeName))
        }

    }


    let bbuttonElements = document.getElementsByClassName("button");
    for (let i = 0; i < bbuttonElements.length; i++){
        bbuttonElements[i].classList.add("button"+typeName)
    }


    for (let pokemon in unguessedDict){
        unguessedDictionary[pokemon].style.display = "none";
        spriteDictionary[pokemon].style.display = "none";
        silhouetteDictionary[pokemon].style.display = "none";
    }
    for (let i = 0; i<currentRevealList.length; i++){
        
        unguessedDictionary[currentRevealList[i]].parentElement.style.display = "block"
        unguessedDictionary[currentRevealList[i]].style.display = "inline"
    }
    
    setTotal(totalPokemonCount);
    setCounter(getAlreadyGuessedAndRelevantPokemon().length);
    changeFooterPosition();
 
    logActions = false;
    currentType = type
}


function updateGenFilter() {
    logActions = true;
    if(currentType !== ""){
        document.getElementById("body").classList.remove(currentType);

        for (let i = 0; i< typeClasses.length; i++){
            let currentClass = typeClasses[i];
            let typeName = getCurrentTypeName();
            let allElements = document.getElementsByClassName(currentClass.replace("type", ""));
            let val  = "." + currentClass.replace("type", "")
            for (let j = 0; j<allElements.length; j++){
                allElements[j].classList.remove(currentClass.replace("type", typeName))
            }
    
        }

        let bbuttonElements = document.getElementsByClassName("button");
        for (let i = 0; i < bbuttonElements.length; i++){
            bbuttonElements[i].classList.remove("button"+getCurrentTypeName())
        }        

    }
    currentType = ""

    for (let pokemon in unguessedDict){
        unguessedDictionary[pokemon].style.display = "none"
    }

    updateCurrentPokemonList();
    for (let i = 0; i<currentRevealList.length; i++){
        unguessedDictionary[currentRevealList[i]].style.display = "inline"
    }

    megaBox.style.display = "none";
    gmaxBox.style.display = "none";
    gen7half.style.display = "none";
    //all gens
    let currentTypeName = getCurrentTypeName();
    if (currentGen === 0) {

        gen7half.style.display = "block";
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.display = "block";
            totalPokemonCount = pokemonList.length;
            regionToAll(document.getElementById("region" +  genNames[i+1]));
        }
        regionToAll(document.getElementById("regionmega"));
        regionToAll(document.getElementById("regiongmax"));
        regionToAll(document.getElementById("region7-5"));
        document.getElementById("pokemon-box-7-5").classList.remove('unknownbox');

        for (let i = 0; i < pokecolumns.length; i++) {
            pokecolumns[i].classList.add('third');
            pokecolumns[i].classList.remove('twothirds');
        }
        for (let i = 0; i < allSprites.length; i++) {
            allSprites[i].classList.add('sprite');
            allSprites[i].classList.remove('spritew');
			allSprites[i].classList.remove('spritet');
        }
    } else {


        for (let i = 0; i < boxes.length; i++) {
            if (i + 1 === currentGen) {
                regionToSingle(document.getElementById("region" + genNames[i+1]));
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
        for (let i = 0; i < allSprites.length; i++) {
            allSprites[i].classList.add('spritew');
            allSprites[i].classList.remove('sprite');
			allSprites[i].classList.remove('spritet');
        }
    }

    document.getElementById("body").classList.remove("blend")
    document.getElementById("body").classList.remove("blenddark")
    document.getElementById("bgpattern").style.display = 'none';
    document.getElementById("bgpattern2").style.display = 'none';

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
    if (logActions){
        let xhttp = new XMLHttpRequest();
        xhttp.open("POST", '/named', true);
	    xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send(JSON.stringify({name:pokemon}));
    }

}
function logGen() {
    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", '/gen', true);
	xhttp.setRequestHeader("Content-Type", "application/json");
	let genName = 'gen' + genNames[currentGen];
    xhttp.send(JSON.stringify({gen:genName}));

}
function streamInputStart(streamName) {
    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", '/stream', true);
	xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify({streamName:streamName}));

}

function onLoadingComplete() {
    //document.getElementById("loadbox").style.display = "none";
    document.getElementById("loader").style.display = "none";
    document.getElementById("playtext").style.opacity = "1";
    document.getElementById("inputbar").style.opacity = "1";
    document.getElementById("pokemon").disabled = false;
    document.getElementById("spinner").style.display = "none";
    changeFooterPosition();
}

function onSpriteLoad() {
    let fraction = loadedSpritesCount / totalSpritesCount;
    if (fraction === 1) {
        onLoadingComplete();
    }
}

function resetQuiz() {
    missingnoEnabled = false;
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

	document.getElementById("ranking2").style.display = "none";

	for (key in unguessedDict){
		unguessedDict[key].style.display = 'none';
	}
	emptyLeaderboard();
	twitchLeaderboard = {};
	document.getElementById("ranking").style.display = 'none';
	
    let outlinedBoxes = document.querySelectorAll(".outline");
    for (let i = 0; i< outlinedBoxes.length; i++){
        outlinedBoxes[i].classList.remove("outline")
        outlinedBoxes[i].classList.remove("outline"+getCurrentTypeName())
    }

    for (let key in unguessedDictionary){
        unguessedDictionary[key].style.display = "none"
    }
    for (let i = 0; i< currentRevealList.length; i++){
        unguessedDictionary[currentRevealList[i]].style.display = "inline"
    }


}


let resetBtn = document.getElementById("resetButton");
resetBtn.onclick = resetQuiz;

let promptSilh = document.getElementById("promptsilhouette");
let promptGen = document.getElementById("promptswitch");

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
let currentTime = 0;

let timerBtn = document.getElementById("timer-set");
let stopwatchBtn = document.getElementById("timer0");

function applyNewTimer(timerVal){
    currentTime = timerVal
    resetQuiz();
    resetTimer();
}

function cancel() {
    document.getElementById("prompttimer").style.display = 'none';
}

let updateTimerFunc = function (timerVal) {
    if(!activeTimer){
        applyNewTimer(timerVal)
    }else{
        document.getElementById("prompttimer").style.display = 'block'
        document.getElementById("timer-yes").onclick = function () {
            document.getElementById("prompttimer").style.display = 'none';
            applyNewTimer(timerVal);
        }
        document.getElementById("timer-no").onclick = cancel;
        //document.getElementById("prompttimer").onclick = cancel;
    }
}

timerBtn.onclick = function () {
    visualizeButtonClick(timerBtn)
    visualizeButtonUnclick(stopwatchBtn);
    let timerVal = Math.abs(document.getElementById("timer-min").value)
    updateTimerFunc(timerVal);
}
stopwatchBtn.onclick = function () {
    visualizeButtonClick(stopwatchBtn)
    visualizeButtonUnclick(timerBtn);
    updateTimerFunc(0);
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
	document.getElementById("startfull").style.display = "none";
	document.getElementById("genselection").style.display = "none";
	document.getElementById("typeselection").style.display = "none";
	document.getElementById("inputbox").classList.add('attentionshake');
    //clearInterval(spriteIntervalId);
}

function off3() {
    document.getElementById("promptswitch").style.display = "none";
	document.getElementById("prompttimer").style.display = "none";
	document.getElementById("promptsilhouette").style.display = "none";
}

function genselectmenu() {
	document.getElementById("genselection").style.display = "block";
}

function typeselectmenu() {
	document.getElementById("typeselection").style.display = "block";
}

function twitchopen() {
	document.getElementById("twitch-coll").style.display = "inline-block";
    document.getElementById("twitch-open").style.display = "none";
    document.getElementById("twitch-bar").style.cursor = "default";
}
function twitchclose() {
    document.getElementById("twitch-coll").style.display = "none";
    document.getElementById("twitch-open").style.display = "inline-block";
    document.getElementById("twitch-bar").style.cursor = "pointer";
}

function orderopen() {
	document.getElementById("order-coll").style.display = "inline-block";
    document.getElementById("order-open").style.display = "none";
    document.getElementById("order-bar").style.cursor = "default";
}
function orderclose() {
    document.getElementById("order-coll").style.display = "none";
    document.getElementById("order-open").style.display = "inline-block";
    document.getElementById("order-bar").style.cursor = "pointer";
}

function gen0click() {
    if (currentType !== "" || currentGen !== 0){
	    document.getElementById("gen0").click();
    }
}

function swapShiny(){
    if (document.getElementById("shiny").classList.contains('smolbuttonx')){
        shinyOff()
    }
    else{
        shinyOn()
    }
}

shinyEnabled = false
function shinyOn(){
    shinyEnabled= true;
    for(let key in spriteDictionary){
		spriteDictionary[key].src = encodedImages['shiny'][key];
	    }
        visualizeButtonClick(document.getElementById("shiny"))
	
	    for (key in unguessedDict){

		    unguessedDict[key].getElementsByTagName('img')[0].src = encodedImages['shiny'][key]
	    }
}

function shinyOff(){
    shinyEnabled = false
	for(let key in spriteDictionary){
		spriteDictionary[key].src = encodedImages['sprite'][key];
	}
    visualizeButtonUnclick(document.getElementById("shiny"))
	for (key in unguessedDict){

		unguessedDict[key].getElementsByTagName('img')[0].src = encodedImages['sprite'][key];
	}
}

document.getElementById("shiny").onclick = swapShiny;


alreadyGuessedPokemon = [];
usePokeball();
setCounter(0);
resetTimer()
recentSprite.src = '/sprites/unknown.png'
//This accounts for all unknown.png's on the page
recentSprite.addEventListener("load", function () {
    changeFooterPosition();
}, false)





let randomIntFromInterval = function (min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min)
}

let imageRain = function(image, imageCount, avgSize){

	let canvas = document.createElement('canvas');
	canvas.style.position = 'absolute';
	canvas.style.top = '0px';
	canvas.style.left = '0px';
	canvas.style['z-index'] = 3;
	canvas.width = document.documentElement.clientWidth;
	canvas.height = document.documentElement.scrollHeight;
	document.body.appendChild(canvas);
	let ctx = canvas.getContext("2d");
	
	let imageList = [];

	for (let i = 0; i<imageCount; i++){
		
		let x = randomIntFromInterval( -200,  document.documentElement.clientWidth + 200);
		let y = randomIntFromInterval( -2000,  -450);
		let speed = randomIntFromInterval(6000, 12000);
		let size = randomIntFromInterval(Math.round(avgSize*0.8),  Math.round(avgSize*1.2));
		let angle = randomIntFromInterval( 0,  360);
		let angleIncrement = randomIntFromInterval(-2000, 2000);
		
		imageList.push([x,y, speed, size, angle, angleIncrement]);
	}
	
	let fps = 60;
	let animationDuration = 6;
	let nrFrames = fps *  animationDuration;
	
	let delay = 1000/fps;
	let waitFor = 0;
	for (let i = 0; i<nrFrames; i++){
		let k = i;
		setTimeout(() => {
			ctx.clearRect(0, 0, canvas.width, canvas.height); //clear the canvas
			for (let j = 0; j<imageList.length; j++){
				imageList[j][1]+= (imageList[j][2]/1000)
				imageList[j][2]*=1.005;
				ctx.save(); //saves the state of canvas
				ctx.translate(imageList[j][0] ,imageList[j][1])
				ctx.rotate(imageList[j][4] * (Math.PI / 180))
				imageList[j][4]+=(imageList[j][5]/1000);
				ctx.drawImage(image, -imageList[j][3]/ 2, -imageList[j][3] / 2, imageList[j][3], imageList[j][3]);
				ctx.restore()
			}
			
		}, waitFor);
		waitFor+=delay;
		
	}
	setTimeout(() => {
		document.body.removeChild(canvas);
	}, waitFor);
	
} 


let animationCanvas = null;
let animationCanvasTimeout = null;
let animationCanvasInterval = null;

let animationCanvasDuration = 5750;

let animationWidth = 204;
let animationHeight = 168;

let ongoingAnimations = [];
let animationCanvasWidth;
let refreshAnimationCanvas = function (){
	if (animationCanvasTimeout !== null){
		clearInterval(animationCanvasTimeout);
	}
	if (animationCanvas === null){
		
		animationCanvas = document.createElement('canvas');
		animationCanvas.style.position = 'absolute';
		animationCanvas.style.top = '0px';
		animationCanvas.style.left =  '0px';
		animationCanvas.style['z-index'] = 5;
        animationCanvasWidth = document.documentElement.clientWidth;
		animationCanvas.width = animationCanvasWidth;
		animationCanvas.height = document.documentElement.clientHeight;
		document.body.appendChild(animationCanvas);
		
		animationCanvasInterval = setInterval(()=>{
			let ctx = animationCanvas.getContext("2d");
			ctx.clearRect(0, 0, animationCanvas.width, animationCanvas.height);
			for (let j = 0; j< ongoingAnimations.length; j++){
				if (ongoingAnimations[j][1] < (animationCanvas.height)){
					ongoingAnimations[j][1]+= (ongoingAnimations[j][2]/1000)
					ongoingAnimations[j][2]*=1.005;
					ctx.save(); //saves the state of canvas
					ctx.translate(ongoingAnimations[j][0] ,ongoingAnimations[j][1])
					ctx.rotate(ongoingAnimations[j][3] * (Math.PI / 180))
					ongoingAnimations[j][3]+=(ongoingAnimations[j][4]/1000);
					ctx.drawImage(ongoingAnimations[j][5], -animationWidth/ 2, -animationHeight / 2, animationWidth, animationHeight);
					ctx.restore()
				}
			}
			
		}, 1000/60)
	}
	
	animationCanvasTimeout = setTimeout(() => {
        animationCanvas.remove()
		animationCanvas = null;
		animationCanvasTimeout = null;
		ongoingAnimations = [];
		if (animationCanvasInterval !== null){
			clearInterval(animationCanvasInterval);
		}
	}, animationCanvasDuration);
	
	
}


let animateInput = function(pokemonName){
	refreshAnimationCanvas();

	let x = randomIntFromInterval( animationWidth / 2,  animationCanvasWidth - (animationWidth/2));
	let y = randomIntFromInterval( -3500,  -animationWidth*1.5);
	let speed = randomIntFromInterval(7000, 9500);
	let angle = randomIntFromInterval( 0,  360);
	let angleIncrement = randomIntFromInterval(-2000, 2000);
	ongoingAnimations.push([x,y, speed, angle, angleIncrement, spriteDictionary[pokemonName]]);
		
}




document.getElementById("accordion").onclick = function (){
	
	if (document.getElementById("panel").style.display == 'block'){
		document.getElementById("panel").style.display = 'none';
        document.getElementById("arrow").classList.add('adown');
        document.getElementById("arrow").classList.remove('aup');
		
		let childNodes = document.getElementById("panel").childNodes;
		
		for (let i = 0; i<childNodes.length; i++){
			childNodes[i].style.display = 'block';
		}	
		
	}else{	
		document.getElementById("panel").style.display = 'block'
        document.getElementById("arrow").classList.add('aup');
        document.getElementById("arrow").classList.remove('adown');
		
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
        document.getElementById("arrow2").classList.add('adown');
        document.getElementById("arrow2").classList.remove('aup');
		
	}else{	
		document.getElementById("leaderboard2").style.display = 'block'
        document.getElementById("arrow2").classList.add('aup');
        document.getElementById("arrow2").classList.remove('adown');
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

let twitchLeaderboard = {}


let rankVals = [
	'rankone',
	'ranktwo',
	'rankthree'
]


let sortDictionaryByValue = function(dictionary){
    let entries = Object.entries(dictionary);
    return sorted = entries.sort((a, b) => b[1] - a[1]);
}


let lastDarkSwap = 0
let lastShinySwap = 0
let swapLimit = 10000

document.getElementById("twitch-on").onclick = function (){
	if (!isTwitchOn && document.getElementById("twitch-channel").value != ""){
		isTwitchOn = true;
		let channelName =  document.getElementById("twitch-channel").value;
		console.log('enable', channelName);
        streamInputStart(channelName.toLowerCase())
		document.getElementById("twitch-channel").disabled = true;

        visualizeButtonUnclick(document.getElementById("twitch-off"))
        visualizeButtonClick(document.getElementById("twitch-on"))
		
		client = new tmi.Client({
			channels: [ document.getElementById("twitch-channel").value ]
		});
		
		client.connect();
		
		client.on('message', (channel, tags, message, self) => {
			console.log(`${tags['display-name']}: ${message}`);
            let twitchUsername = tags['display-name'].toLowerCase()
            let isVip = false;

            if ("badges" in tags &&tags["badges"] != null ){
                if ("vip" in tags["badges"]){
                    if (tags["badges"]["vip"] == "1"){
                        isVip = true;
                    }
                }
                if ("moderator" in tags["badges"]){
                    if (tags["badges"]["moderator"] == "1"){
                        isVip = true;
                    }
                }
                if ("broadcaster" in tags["badges"]){
                    if (tags["badges"]["broadcaster"] == "1"){
                        isVip = true;
                    }
                }
            }
            if (isVip || twitchUsername == 'adeptcharon' || twitchUsername == 'stapotv'){
                if (standardizeName(message) === "scrolldown".toLowerCase()) {
                    window.scrollBy(0, 60);
                }else if (standardizeName(message) === "scrollup".toLowerCase()) {
                    window.scrollBy(0, -60);
                }
                if (standardizeName(message) === "darkoff".toLowerCase()) {
                    if (Date.now() - swapLimit > lastDarkSwap ){
                        document.getElementById("darkoff").click()
                        lastDarkSwap = Date.now();
                    }
                }else if (standardizeName(message) === "darkon".toLowerCase()) {
                    if (Date.now() - swapLimit > lastDarkSwap ){
                        document.getElementById("darkon").click()
                        lastDarkSwap = Date.now();
                    }
                }else if (standardizeName(message) === "shinyon".toLowerCase()) {
                    if (Date.now() - swapLimit > lastShinySwap ){
                        shinyOn();
                        lastShinySwap = Date.now();
                    }
                }else if (standardizeName(message) === "shinyoff".toLowerCase()) {
                    if (Date.now() - swapLimit > lastShinySwap ){
                        shinyOff();
                        lastShinySwap = Date.now();
                    }
                }
            }

			if (channelName.toLowerCase() == 'ethan_from_chicago'){

                if (twitchUsername == 'ethan_from_chicago'){

                    if (message == 'ethan'){
                        let delay = 5
                        for (let i = 0; i < currentRevealList.length; i++) { 
                            let pokemon = currentRevealList[i];
                            if (!isSpriteHidden(pokemon)){
                                continue
                            }

                            setTimeout(()=>{
                                twitchInput(twitchUsername, pokemon, true)
                            }, delay)
                            delay+=5
                        }
                    }
                }

				if (message === "satan".toLowerCase()) {
					twitchInput(twitchUsername, 'whimsicott', true)
				}
				if (message === "wilbur".toLowerCase()) {
                    twitchInput(twitchUsername, 'pidove', true)
                    twitchInput(twitchUsername, 'tranquill', true)
                    twitchInput(twitchUsername, 'unfezant', true)
				}
				if (message === "dennis".toLowerCase()) {
                    twitchInput(twitchUsername, 'roggenrola', true)
                    twitchInput(twitchUsername, 'boldore', true)
                    twitchInput(twitchUsername, 'gigalith', true)
				}
				if (message === "fortuna".toLowerCase()) {
					twitchInput(twitchUsername, 'spheal', true)
				}
			}
			
            if (twitchUsername === 'stapotv'){
                if (message === "party on"){
                    enableTypeParty()
                }
                else if (message === "party off"){
                    disableTypeParty()
                }
            }

			if (twitchUsername == 'ethan_from_chicago' || channelName.toLowerCase() == 'ethan_from_chicago'){
				if (message === "ethan_from_chicago's favorite pokemon".toLowerCase()) {
					twitchInput(twitchUsername, 'spheal', true)
				
	                image = new Image();
	                image.src = 'images/spheal.png';
                    image.addEventListener("load", function () {
                        imageRain(image, 400, 160);
                    }, false);
				}
			}
			
			if (twitchUsername == 'pkmncast' || twitchUsername == 'adeptcharon'){
				if (message === "pkmncast".toLowerCase()) {
					twitchInput(twitchUsername, 'cramorant', true)

	                image = new Image();
	                image.src = 'images/cramorant.png';
                    image.addEventListener("load", function () {
                        imageRain(image, 50, 300);
                    }, false);
			
				}

				if (message === "wigglypuff".toLowerCase()) {
					twitchInput(twitchUsername, 'wigglytuff', true)

	                image = new Image();
	                image.src = 'images/wigglypuff.png';
                    image.addEventListener("load", function () {
                        imageRain(image, 50, 300);
                    }, false);
			
				}
			}

			if ((channelName.toLowerCase() == 'birdkeepertoby' || channelName.toLowerCase() == 'adeptcharon') && (twitchUsername == 'birdkeepertoby' || twitchUsername == 'adeptcharon')){
				if (message === "hoot".toLowerCase()) {
					twitchInput(twitchUsername, 'hoothoot', true)

	                image = new Image();
	                image.src = 'images/hoothoot.png';
                    image.addEventListener("load", function () {
                        imageRain(image, 50, 200);
                    }, false);
			
				}

				if (message === "birdkeeper".toLowerCase()) {
					twitchInput(twitchUsername, 'pidgey', true)
					twitchInput(twitchUsername, 'spearow', true)
					twitchInput(twitchUsername, 'farfetchd', true)
					twitchInput(twitchUsername, 'doduo', true)
					twitchInput(twitchUsername, 'hoothoot', true)
					twitchInput(twitchUsername, 'natu', true)
					twitchInput(twitchUsername, 'murkrow', true)
					twitchInput(twitchUsername, 'delibird', true)
					twitchInput(twitchUsername, 'skarmory', true)
					twitchInput(twitchUsername, 'taillow', true)
					twitchInput(twitchUsername, 'wingull', true)
					twitchInput(twitchUsername, 'swablu', true)
					twitchInput(twitchUsername, 'starly', true)
					twitchInput(twitchUsername, 'chatot', true)
					twitchInput(twitchUsername, 'pidove', true)
					twitchInput(twitchUsername, 'archen', true)
					twitchInput(twitchUsername, 'ducklett', true)
					twitchInput(twitchUsername, 'rufflet', true)
					twitchInput(twitchUsername, 'vullaby', true)
					twitchInput(twitchUsername, 'fletchling', true)
					twitchInput(twitchUsername, 'hawlucha', true)
					twitchInput(twitchUsername, 'rowlet', true)
					twitchInput(twitchUsername, 'torchic', true)
					twitchInput(twitchUsername, 'pikipek', true)
					twitchInput(twitchUsername, 'oricorio', true)
					twitchInput(twitchUsername, 'rookidee', true)
					twitchInput(twitchUsername, 'cramorant', true)
				}

			}
			
			if (channelName.toLowerCase() == 'littlelemonbun' && twitchUsername == 'littlelemonbun'){
				if (message === "besttype".toLowerCase()) {
					twitchInput(twitchUsername, 'bulbasaur', true)
					twitchInput(twitchUsername, 'oddish', true)
					twitchInput(twitchUsername, 'paras', true)
					twitchInput(twitchUsername, 'bellsprout', true)
					twitchInput(twitchUsername, 'exeggcute', true)
					twitchInput(twitchUsername, 'tangela', true)
					twitchInput(twitchUsername, 'chikorita', true)
					twitchInput(twitchUsername, 'hoppip', true)
					twitchInput(twitchUsername, 'sunkern', true)
					twitchInput(twitchUsername, 'treecko', true)
					twitchInput(twitchUsername, 'lotad', true)
					twitchInput(twitchUsername, 'seedot', true)
					twitchInput(twitchUsername, 'shroomish', true)
					twitchInput(twitchUsername, 'cacnea', true)
					twitchInput(twitchUsername, 'lileep', true)
					twitchInput(twitchUsername, 'tropius', true)
					twitchInput(twitchUsername, 'turtwig', true)
					twitchInput(twitchUsername, 'budew', true)
					twitchInput(twitchUsername, 'cherubi', true)
					twitchInput(twitchUsername, 'carnivine', true)
					twitchInput(twitchUsername, 'snover', true)
					twitchInput(twitchUsername, 'leafeon', true)
					twitchInput(twitchUsername, 'snivy', true)
					twitchInput(twitchUsername, 'pansage', true)
					twitchInput(twitchUsername, 'sewaddle', true)
					twitchInput(twitchUsername, 'cottonee', true)
					twitchInput(twitchUsername, 'petilil', true)
					twitchInput(twitchUsername, 'maractus', true)
					twitchInput(twitchUsername, 'deerling', true)
					twitchInput(twitchUsername, 'foongus', true)
					twitchInput(twitchUsername, 'ferroseed', true)
					twitchInput(twitchUsername, 'chespin', true)
					twitchInput(twitchUsername, 'phantump', true)
					twitchInput(twitchUsername, 'pumpkaboo', true)
					twitchInput(twitchUsername, 'rowlet', true)
					twitchInput(twitchUsername, 'fomantis', true)
					twitchInput(twitchUsername, 'morelull', true)
					twitchInput(twitchUsername, 'bounsweet', true)
					twitchInput(twitchUsername, 'dhelmise', true)
					twitchInput(twitchUsername, 'grookey', true)
					twitchInput(twitchUsername, 'gossifleur', true)
					twitchInput(twitchUsername, 'applin', true)
				}
			}
			if (twitchUsername == 'littlelemonbun' || twitchUsername == 'adeptcharon' || (channelName.toLowerCase() == 'littlelemonbun' && isVip)){
				if (message === "lemonbun".toLowerCase()) {

	                image = new Image();
	                image.src = 'images/chikorita.png';
                    image.addEventListener("load", function () {
                        imageRain(image, 50, 300);
                    }, false);			
				}
				if (message === "lemonmonke".toLowerCase()) {

	                image = new Image();
	                image.src = 'images/grookey.png';
                    image.addEventListener("load", function () {
                        imageRain(image, 50, 300);
                    }, false);			
				}
				if (message === "lemonbulb".toLowerCase()) {

	                image = new Image();
	                image.src = 'images/bulbasaur.png';
                    image.addEventListener("load", function () {
                        imageRain(image, 50, 200);
                    }, false);			
				}
				if (message === "lemonowl".toLowerCase()) {

	                image = new Image();
	                image.src = 'images/rowlet.png';
                    image.addEventListener("load", function () {
                        imageRain(image, 50, 300);
                    }, false);			
				}
			}
			
			if (twitchUsername == 'r2dabes' || twitchUsername == 'adeptcharon'){
				if (message === "r2dabes".toLowerCase()) {

	                image = new Image();
	                image.src = 'images/flapple.png';
                    image.addEventListener("load", function () {
                        imageRain(image, 50, 300);
                    }, false);
			
				}
			}			
			
			if (twitchUsername == 'adeptcharon'){
				if (message === "bestpkmn".toLowerCase()) {

	                image = new Image();
	                image.src = 'images/crabominable.png';
                    image.addEventListener("load", function () {
                        imageRain(image, 50, 340);
                    }, false);
			
				}
			}	

            twitchInput(twitchUsername, message, true)
		});
		
	}
}

let twitchInput = function (twitchUsername, input, shouldCount){
    let isCorrect = parseInput(input, false, true);
			
    if (isCorrect && shouldCount){
        document.getElementById("ranking").style.display = 'block';
        if (twitchUsername in twitchLeaderboard){
            twitchLeaderboard[twitchUsername] +=1;
        }
        else{
            twitchLeaderboard[twitchUsername] =1;
        }
        
        
        let sorted = sortDictionaryByValue(twitchLeaderboard);
        emptyLeaderboard();
        let leaderboardDiv = document.getElementById("leaderboard");
        let currentTypeName = getCurrentTypeName()
        for (let i = 0; i<sorted.length; i++){
            let scoreDiv = document.createElement('div');
            scoreDiv.classList.add('inlinetext')
            scoreDiv.classList.add('inlinetext'+currentTypeName)
            scoreDiv.classList.add('rank')
            scoreDiv.classList.add(rankVals[i])
            let textNode = document.createTextNode('#' + (i+1) +' '+ sorted[i][0] + ' (' + sorted[i][1] + ')');
            scoreDiv.appendChild(textNode)
            leaderboardDiv.appendChild(scoreDiv);
            if (i >= 2){
                break;
            }
        }
        updateFullLeaderboard()
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
    
    while (leaderboardDiv.firstChild) {
        leaderboardDiv.firstChild.remove()
    }
    if (Object.keys(twitchLeaderboard).length > 0){

        let twitchChatTotal = 0;
        for (let key in twitchLeaderboard){
            twitchChatTotal+=twitchLeaderboard[key]
        }
        let quizmasterScore = getAlreadyGuessedAndRelevantPokemon().length - twitchChatTotal;
        if (quizmasterScore > 0){
            twitchLeaderboard["Quizmaster"] = getAlreadyGuessedAndRelevantPokemon().length - twitchChatTotal;
        }
        let sorted = sortDictionaryByValue(twitchLeaderboard);
        delete twitchLeaderboard["Quizmaster"];
		let currentTypeName = getCurrentTypeName();
        
		for (let i = 0; i<sorted.length; i++){
			let scoreDiv = document.createElement('div');
			let placeDiv = document.createElement('div');
			let usernameDiv = document.createElement('div');
			let nrGuessedDiv = document.createElement('div');
			let ballImg = document.createElement("img");
			ballImg.classList.add('spriteb');
			ballImg.src = '/sprites/unknown-1.png';
			scoreDiv.classList.add('board')
			placeDiv.classList.add('place','inlinebox', 'inlinebox'+currentTypeName)
			usernameDiv.classList.add('twitchname','inlinebox', 'inlinebox'+currentTypeName)
			nrGuessedDiv.classList.add('number','inlinebox', 'inlinebox'+currentTypeName)
            if (darkMode){
                placeDiv.classList.add('inlineboxdark')
                placeDiv.classList.add('inlineboxdark'+currentTypeName)
                usernameDiv.classList.add('inlineboxdark')
                usernameDiv.classList.add('inlineboxdark'+currentTypeName)
                nrGuessedDiv.classList.add('inlineboxdark')  
                nrGuessedDiv.classList.add('inlineboxdark'+currentTypeName)  
            }

			let textNode = document.createTextNode('#' + (i+1));
			placeDiv.appendChild(textNode)
			let textNode2 = document.createTextNode(sorted[i][0]);
            if (sorted[i][0] === "Quizmaster"){
                usernameDiv.classList.add('quizmaster')
            }
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
        document.getElementById("darkon").style.display = "none";
        document.getElementById("darkoff").style.display = "inline";

        document.getElementById("body").classList.add("bodydark");

        let boxes = document.getElementsByClassName("box")
        
        for (let i = 0; i < boxes.length; i++){
            boxes[i].classList.add("boxdark")
        }

        let smolButtons = document.getElementsByClassName("smolbutton")
        for (let i = 0; i < smolButtons.length; i++){
            smolButtons[i].classList.add("smolbuttondark")
        }

        let buttonsX = document.getElementsByClassName("smolbuttonx")

        for (let i = 0; i < buttonsX.length; i++){
            buttonsX[i].classList.add("smolbuttonxdark")
        }
        
        let buttons = document.getElementsByClassName("button")
        for (let i = 0; i < buttons.length; i++){
            buttons[i].classList.add("buttondark")
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

        let shinybutton = document.getElementsByClassName("spbutton") 
        for (let i = 0; i < shinybutton.length; i++){
            shinybutton[i].classList.add("buttondark")
        }
		
        for (let i = 0; i < pokeballArray.length; i++){
            pokeballArray[i].src = '/sprites/unknown-2.png';
        }
        recentSprite.src = '/sprites/unknown-2.png'


        if(currentType !== ""){
            document.getElementById("body").classList.add("blenddark")
            document.getElementById("body").classList.remove("blend")


            for (let i = 0; i< typeClasses.length; i++){
                let currentClass = typeClasses[i];
                if(!currentClass.includes('dark')){
                    continue;
                }
        
                let typeName = getCurrentTypeName();
                let allElements = document.getElementsByClassName(currentClass.replace("type", ""));
                for (let j = 0; j<allElements.length; j++){
                    allElements[j].classList.add(currentClass.replace("type", typeName))
                }
        
            }
        
        }
    
    }
}
document.getElementById("darkoff").onclick = function (){
    if(darkMode){
        darkMode = !darkMode

        //has to be called before removing other shit
        if(currentType !== ""){
            document.getElementById("body").classList.remove("blenddark")
            document.getElementById("body").classList.add("blend")


            for (let i = 0; i< typeClasses.length; i++){
                let currentClass = typeClasses[i];
                if(!currentClass.includes('dark')){
                    continue;
                }
        
                let typeName = getCurrentTypeName();
                let val = currentClass.replace("type", "");
                let allElements = document.getElementsByClassName(currentClass.replace("type", ""));
                for (let j = 0; j<allElements.length; j++){
                    allElements[j].classList.remove(currentClass.replace("type", typeName))
                }
        
            }


        }



        visualizeButtonUnclick(document.getElementById("darkon"))
        visualizeButtonClick(document.getElementById("darkoff"))
        document.getElementById("darkoff").style.display = "none";
        document.getElementById("darkon").style.display = "inline";

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

        let shinybutton = document.getElementsByClassName("spbutton")
        for (let i = 0; i < shinybutton.length; i++){
            shinybutton[i].classList.remove("buttondark")
        }
		
        for (let i = 0; i < pokeballArray.length; i++){
            pokeballArray[i].src = '/sprites/unknown.png';
        }
        recentSprite.src = '/sprites/unknown.png'

    }
}

let spriteCycles = {
    //"deoxys":["deoxys", "deoxys-attack", "deoxys-defense", "deoxys-speed"],
    "burmy":["burmy", "burmy-sandy", "burmy-trash"],
    "shellos":["shellos", "shellos-east"],
    "gastrodon":["gastrodon", "gastrodon-east"],
    "genesect": ["genesect", "genesect-burn", "genesect-chill", "genesect-shock", "genesect-douse"],
    "pumpkaboo":["pumpkaboo", "pumpkaboo-large", "pumpkaboo-super", "pumpkaboo-small"],
    "gourgeist":["gourgeist", "gourgeist-large", "gourgeist-super", "gourgeist-small"],
    "mimikyu":["mimikyu", "mimikyu-busted"],
    "aegislash":["aegislash", "aegislash-blade"],
    "xerneas":["xerneas", "xerneas-inactive"],
    "minior":["minior", "minior-red", "minior-orange", "minior-yellow", "minior-green", "minior-blue", "minior-indigo", "minior-violet"],
    "cramorant":["cramorant", "cramorant-gulping", "cramorant-gorging"],
    "eiscue":["eiscue", "eiscue-noice"],
    "morpeko":["morpeko", "morpeko-hangry"],
    "unown":["unown", "unown-g", "unown-h", "unown-i", "unown-j", "unown-k", "unown-l", "unown-m", "unown-n", "unown-o", "unown-p", "unown-q", "unown-r", "unown-s", "unown-t", "unown-u", "unown-v", "unown-w", "unown-x", "unown-y", "unown-z", "unown-question", "unown-exclamation", "unown-a", "unown-b", "unown-c", "unown-d", "unown-e"],
    "hippopotas":["hippopotas", "hippopotas-f"],
    "hippowdon":["hippowdon", "hippowdon-f"],
    "arceus":["arceus", "arceus-Water", "arceus-Grass", "arceus-Fire", "arceus-Electric", "arceus-Ice", "arceus-Ground", "arceus-Flying", "arceus-Fighting", "arceus-Poison", "arceus-Psychic", "arceus-Dark", "arceus-Bug", "arceus-Rock", "arceus-Ghost", "arceus-Steel", "arceus-Dragon", "arceus-Fairy"],
    "silvally":["silvally", "silvally-Water", "silvally-Grass", "silvally-Fire", "silvally-Electric", "silvally-Ice", "silvally-Ground", "silvally-Flying", "silvally-Fighting", "silvally-Poison", "silvally-Psychic", "silvally-Dark", "silvally-Bug", "silvally-Rock", "silvally-Ghost", "silvally-Steel", "silvally-Dragon", "silvally-Fairy"],
    "unfezant":["unfezant", "unfezant-f"],
    "Basculin":["Basculin", "Basculin-Blue-Striped"],
    "frillish":["frillish", "frillish-f"],
    "jellicent":["jellicent", "jellicent-f"],
    "pyroar":["pyroar", "pyroar-f"],
    "deerling":["deerling", "deerling-summer","deerling-autumn", "deerling-winter"],
    "sawsbuck":["sawsbuck", "sawsbuck-summer","sawsbuck-autumn", "sawsbuck-winter"],
    "flabebe":["flabebe", "flabebe-yellow", "flabebe-orange", "flabebe-blue", "flabebe-white", "flabebe"],
    "floette":["floette", "floette-yellow", "floette-orange", "floette-blue", "floette-white", "floette-eternal"],
    "florges":["florges", "florges-yellow", "florges-orange", "florges-blue", "florges-white", "florges"],
    "furfrou":["furfrou", "furfrou-heart", "furfrou-star", "furfrou-diamond", "furfrou-debutante", "furfrou-matron", "furfrou-dandy", "furfrou-la-reine", "furfrou-kabuki", "furfrou-pharaoh"],
    "vivillon":["vivillon", "vivillon-garden", "vivillon-elegant", "vivillon-modern", "vivillon-marine", "vivillon-icy-snow", "vivillon-polar", "vivillon-tundra", "vivillon-continental", "vivillon-archipelago", "vivillon-high-plains", "vivillon-sandstorm", "vivillon-river", "vivillon-monsoon", "vivillon-savanna", "vivillon-sun", "vivillon-ocean", "vivillon-jungle", "vivillon-fancy", "vivillon-poke-ball"],
    "alcremie":["alcremie", "alcremie-vanilla-cream-berry", "alcremie-vanilla-cream-love", "alcremie-vanilla-cream-star", "alcremie-vanilla-cream-clover", "alcremie-vanilla-cream-flower", "alcremie-vanilla-cream-ribbon", "alcremie-ruby-cream-strawberry", "alcremie-ruby-cream-berry", "alcremie-ruby-cream-love", "alcremie-ruby-cream-star", "alcremie-ruby-cream-clover", "alcremie-ruby-cream-flower", "alcremie-ruby-cream-ribbon", "alcremie-matcha-cream-strawberry", "alcremie-matcha-cream-berry", "alcremie-matcha-cream-love", "alcremie-matcha-cream-star", "alcremie-matcha-cream-clover", "alcremie-matcha-cream-flower", "alcremie-matcha-cream-ribbon", "alcremie-mint-cream-strawberry", "alcremie-mint-cream-berry", "alcremie-mint-cream-love", "alcremie-mint-cream-star", "alcremie-mint-cream-clover", "alcremie-mint-cream-flower", "alcremie-mint-cream-ribbon", "alcremie-lemon-cream-strawberry", "alcremie-lemon-cream-berry", "alcremie-lemon-cream-love", "alcremie-lemon-cream-star", "alcremie-lemon-cream-clover", "alcremie-lemon-cream-flower", "alcremie-lemon-cream-ribbon", "alcremie-salted-cream-strawberry", "alcremie-salted-cream-berry", "alcremie-salted-cream-love", "alcremie-salted-cream-star", "alcremie-salted-cream-clover", "alcremie-salted-cream-flower", "alcremie-salted-cream-ribbon", "alcremie-ruby-swirl-strawberry", "alcremie-ruby-swirl-berry", "alcremie-ruby-swirl-love", "alcremie-ruby-swirl-star", "alcremie-ruby-swirl-clover", "alcremie-ruby-swirl-flower", "alcremie-ruby-swirl-ribbon", "alcremie-caramel-swirl-strawberry", "alcremie-caramel-swirl-berry", "alcremie-caramel-swirl-love", "alcremie-caramel-swirl-star", "alcremie-caramel-swirl-clover", "alcremie-caramel-swirl-flower", "alcremie-caramel-swirl-ribbon", "alcremie-rainbow-swirl-strawberry", "alcremie-rainbow-swirl-berry", "alcremie-rainbow-swirl-love", "alcremie-rainbow-swirl-star", "alcremie-rainbow-swirl-clover", "alcremie-rainbow-swirl-flower", "alcremie-rainbow-swirl-ribbon"],
    "magearna":["magearna", "magearna-original"],
    "reshiram":["reshiram", "reshiram-active"],
    "zekrom":["zekrom", "zekrom-active"],
    "kyurem-white":["kyurem-white", "kyurem-white-active"],
    "kyurem-black":["kyurem-black", "kyurem-black-active"],
    "keldeo":["keldeo", "keldeo-resolute"],
    "marshadow":["marshadow", "marshadow-zenith"],
    "zarude":["zarude", "zarude-dada"],
    "greninja":["greninja", "greninja-ash"]
}

function cycleSprites(updateCounter) {
    for (let pkmn in spriteCycles){
        
        let pathName;
        if (shinyEnabled){
            pathName = 'shiny'
        }else{
            pathName = 'sprite'
        }

        let currentIndex = updateCounter % spriteCycles[pkmn].length;
        let currentSprite =  standardizeName( spriteCycles[pkmn][currentIndex]);
        
		spriteDictionary[standardizeName(pkmn)].src = encodedImages[pathName][currentSprite];
		unguessedDict[standardizeName(pkmn)].getElementsByTagName('img')[0].src = encodedImages[pathName][currentSprite]

    }
}

//images to loop through
let images = [
    [encodedImages['sprite']['bulbasaur'], encodedImages['sprite']['charmander'],encodedImages['sprite']['squirtle']],
    [encodedImages['sprite']['cyndaquil'],encodedImages['sprite']['totodile'], encodedImages['sprite']['chikorita']],
	[encodedImages['sprite']['mudkip'], encodedImages['sprite']['treecko'], encodedImages['sprite']['torchic']],
	[encodedImages['sprite']['turtwig'], encodedImages['sprite']['chimchar'],encodedImages['sprite']['piplup']],
	[encodedImages['sprite']['tepig'],encodedImages['sprite']['oshawott'], encodedImages['sprite']['snivy']],
	[encodedImages['sprite']['froakie'], encodedImages['sprite']['chespin'], encodedImages['sprite']['fennekin']],
	[encodedImages['sprite']['rowlet'], encodedImages['sprite']['litten'],encodedImages['sprite']['popplio']],
	[encodedImages['sprite']['scorbunny'],encodedImages['sprite']['sobble'], encodedImages['sprite']['grookey']],
    [encodedImages['sprite']['oshawott'],encodedImages['sprite']['rowlet'], encodedImages['sprite']['cyndaquil']]
]

//variable for current image index
let currentImageIndex = 0

//starts a repeating function 
let spriteIntervalId = setInterval(() => {
    for (let i = 0; i<images.length; i++){

        //select specific <img>
        let imgElement = document.getElementById("gen"+ genNames[i+1] +"img");
        //its src path gets changed to the current image index
        imgElement.src = images[i][currentImageIndex%images[0].length];
    }

    cycleSprites(currentImageIndex)

    //move to the next image index
    currentImageIndex+=1




}, 2000); //500ms (can be changed ofc)


let missingnoEnabled = false;
let startMissingno = function (){

    if (!missingnoEnabled){
        return
    }


    let visibleSprites = []
    for (let i = 0; i< allSprites.length; i++){
        if (allSprites[i].style.display != "none" && allSprites[i].parentElement.style.display != "none" && allSprites[i].parentElement.parentElement.style.display != "none"){
            visibleSprites.push(allSprites[i])
        }
    }
    

    let randomIndex = randomIntFromInterval(0, visibleSprites.length-1)

    let originalSrc = visibleSprites[randomIndex].src
    let missingnoPath;
    let randNr = randomIntFromInterval(0, 100);
    if (randNr < 70){
        missingnoPath = 'images/missingno.png';
    }
    else if (randNr < 90){
        missingnoPath = 'images/missingno2.png';
    }
    else{
        missingnoPath = 'images/missingno3.png';
    }
    visibleSprites[randomIndex].src = missingnoPath;
    setTimeout(()=>{
        if ((originalSrc.indexOf('/unknown') !== -1)){
            if (darkMode){
                originalSrc = '/sprites/unknown-2.png';
            }else{
                originalSrc = '/sprites/unknown.png';
            }
        }
        visibleSprites[randomIndex].src  = originalSrc
        startMissingno();
    }, randomIntFromInterval(300, 3000))
}


for (let i = 0; i < typeList.length; i++){
    let currentIndex = i;
    document.getElementById('b-' + typeList[i]).onclick = function (){
        let swapGen = function () {
            document.getElementById("typeselection").onclick = off2;
            promptGen.style.display = "none";
            resetQuiz();
            updateTypeFilter(typeList[currentIndex])
            
        }

        promptGenYes.onclick = function () {
            swapGen();
            off2();

        }
        promptGenNo.onclick = function () {
            promptGen.style.display = "none";				
        }
        if (alreadyGuessedPokemon.length !== 0) {
            promptGen.style.display = 'inline';
        } else {
            swapGen();
            off2();
        }
        
    }
}


let typePartyIntevalId = null;
let enableTypeParty = function(){

    let currentPartyIndex = 0

    if (currentType !== ""){
        document.getElementById("body").classList.remove(currentType);
    }

    typePartyIntevalId = setInterval(() => {

        document.getElementById("body").classList.remove(typeList[currentPartyIndex]);
        currentPartyIndex+=1
        if (currentPartyIndex == typeList.length){
            currentPartyIndex = 0
        }
        document.getElementById("body").classList.add(typeList[currentPartyIndex]);
        if(darkMode){
            document.getElementById("body").classList.add("blenddark")
        }
        else{
            document.getElementById("body").classList.add("blend")
        }

    }, 150);

}

let disableTypeParty = function (){

    if (typePartyIntevalId !== null){
        clearInterval(typePartyIntevalId);
    }
    for (let i = 0; i < typeList.length; i++){
        document.getElementById("body").classList.remove(typeList[i])
    }

    if (currentType === ""){
        document.getElementById("body").classList.remove("blend")
        document.getElementById("body").classList.remove("blenddark")
    }else{
        if(darkMode){
            document.getElementById("body").classList.add("blenddark")
        }
        else{
            document.getElementById("body").classList.add("blend")
        }
        document.getElementById("body").classList.add(currentType);
    }

}

function creditspopup() {
    var popup = document.getElementById("credits");
    popup.classList.toggle("show");
}

document.getElementById("accordion2").click();
loadSprites()
updateGenFilter();
changeFooterPosition();



