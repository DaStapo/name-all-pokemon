const fetch = require('node-fetch');
const fs = require('fs');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);

//what about weight?

async function loadNames(){
	const fileContent = await readFileAsync("pokeapi_ids.json", 'utf8');
    
    // Parse the JSON content into an object
    const jsonData = JSON.parse(fileContent);

	return jsonData
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


let delay = 75
async function getData(endpoint, name) {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/'+endpoint+'/'+name);
      const data = await response.json();
	  await sleep(delay)
      return data
    } catch (error) {
      console.error(error);
    }
}
async function getDataFull(URL) {
    try {
      const response = await fetch(URL);
      const data = await response.json();
	  await sleep(delay)
      return data
    } catch (error) {
      console.error(error);
    }
}

function coefficientOfVariation(data) {
	const n = data.length;
	const mean = data.reduce((acc, val) => acc + val, 0) / n;
	const stdDev = Math.sqrt(data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / n);
	const cv = (stdDev / mean) * 100;
	return cv;
}


let finalStageSpeciesCorrections = ["meowscarada", "skeledirge", "quaquaval", "oinkologne", "spidops", "lokix", "pawmot", "maushold", "dachsbun", "arboliva", "squawkabilly", "garganacl", "armarouge", "ceruledge", "bellibolt", "kilowattrel", "mabosstiff", "grafaiai", "brambleghast", "toedscruel", "klawf", "scovillain", "rabsca", "espathra", "tinkaton", "wugtrio", "bombirdier", "palafin", "revavroom", "cyclizar", "orthworm", "glimmora", "houndstone", "flamigo", "cetitan", "veluza", "dondozo", "tatsugiri", "annihilape", "clodsire", "farigiraf", "dudunsparce", "kingambit", "great-tusk", "scream-tail", "brute-bonnet", "flutter-mane", "slither-wing", "sandy-shocks", "iron-treads", "iron-bundle", "iron-hands", "iron-jugulis", "iron-moth", "iron-thorns", "baxcalibur", "gholdengo", "wo-chien", "chien-pao", "ting-lu", "chi-yu", "roaring-moon", "iron-valiant", "koraidon", "miraidon"];

let speciesSimpleList  = [
	"gender_rate",
	"capture_rate",
	"base_happiness",
	"is_baby",
	"is_legendary",
	"is_mythical",
	"hatch_counter",
	"has_gender_differences",
	//"forms_switchable",
	"growth_rate",
	"egg_groups",
	"color",
	"shape",
	"habitat",
]


let pokemonSimpleList  = [
	"base_experience",
	"abilities",
	//"location_area_encounters",
	//"moves",
	"species",
	"stats",
]


let formSimpleList  = [
	"is_mega",
	"types",
	"version_group",
]


let eggGroupFixes = {
	"Sprigatito":["Field","Grass"],
	"Tarountula":["Bug"],
	"Spidops":["Bug"],
	"Nymble":["Bug"],
	"Pawmo":["Field"],
	"Maushold":["Field","Fairy"],
	"Dolliv":["Grass"],
	"Tadbulb":["Water1"],
	"Maschiff":["Field"],
	"Capsakid":["Grass"],
	"Tinkatuff":["Fairy"],
	"Wiglett":["Water3"],
	"Wugtrio":["Water3"],
	"Finizen":["Field","Water2"],
	"Orthworm":["Field"],
	"Houndstone":["Field"],
	"Cetoddle":["Field"],
	"Cetitan":["Field"],
	"Curly Tatsugiri":["Water2"],
	"Dudunsparce":["Field"],
	"Flutter Mane":["no-eggs"],
	"Iron Bundle":["no-eggs"],
	"Iron Thorns":["no-eggs"],
	"Arctibax":["Dragon","Mineral"]
}


let speciesDict = {}

async function getPokemonData(formId){
	let finalData = {}
	try{
		let formData = await getData("pokemon-form", formId)
		let pokemonURL = formData["pokemon"]["url"]
		let pokemonData = await getDataFull(pokemonURL);
		let speciesURL = pokemonData["species"]["url"]
		let speciesData = await getDataFull(speciesURL);

		
		if (formId.includes("gmax")){
			finalData["is_gmax"] = true;
		}else{
			finalData["is_gmax"] = false;
		}


		if (!(pokemonData["species"]["name"] in speciesDict)){
			speciesDict[pokemonData["species"]["name"]] = []
		}
		speciesDict[pokemonData["species"]["name"]].push(formId)

		for (let i = 0; i < speciesSimpleList.length; i++){
			let feature = speciesSimpleList[i];
			finalData[feature] = speciesData[feature]
		}

		for (let i = 0; i < pokemonSimpleList.length; i++){
			let feature = pokemonSimpleList[i];
			finalData[feature] = pokemonData[feature]
		}

		for (let i = 0; i < formSimpleList.length; i++){
			let feature = formSimpleList[i];
			finalData[feature] = formData[feature]
		}

		if (finalData["growth_rate"] !== null){
			finalData["growth_rate"] = finalData["growth_rate"]["name"]
		}
		if (finalData["egg_groups"].length > 0){
			finalData["egg_group1"] = finalData["egg_groups"][0]["name"]
			if (finalData["egg_groups"].length > 1){
				finalData["egg_group2"] = finalData["egg_groups"][1]["name"]
			}else{
				finalData["egg_group2"] = null
			}
		}else{
			finalData["egg_group1"] = null
			finalData["egg_group2"] = null
		}
		delete finalData["egg_groups"]

		if (finalData["habitat"] !== null){
			finalData["habitat"] = finalData["habitat"]["name"]
		}
		if (finalData["shape"] !== null){
			finalData["shape"] = finalData["shape"]["name"]
		}
		if (finalData["color"] !== null){
			finalData["color"] = finalData["color"]["name"]
		}
		if (finalData["version_group"] !== null){
			finalData["version_group"] = finalData["version_group"]["name"]
		}
		delete finalData["species"]

		for (let i = 0; i<3; i++){
			if (finalData["abilities"].length > i){
				finalData["ability"+(i+1).toString()] = finalData["abilities"][i]["ability"]["name"]
			}else{
				finalData["ability"+(i+1).toString()] = null
			}
		}

		delete finalData["abilities"]


		finalData["type1"] = finalData["types"][0]["type"]["name"]
		if (finalData["types"].length > 1){
			finalData["type2"] = finalData["types"][1]["type"]["name"]
		}else{
			finalData["type2"] = null;
		}
		delete finalData["types"]

		let highestStat = "hp"
		let highestStatValue = 0
		let totalStats = 0
		let statsArr = []
		for (let i = 0; i< finalData["stats"].length; i++){
			finalData[finalData["stats"][i]["stat"]["name"].toUpperCase()] = finalData["stats"][i]["base_stat"]
			statsArr.push(finalData["stats"][i]["base_stat"])


			if (finalData["stats"][i]["base_stat"]  === highestStatValue){
				highestStatValue = finalData["stats"][i]["base_stat"] 
				highestStat = "None"
			}
			if (highestStat !== "None" && finalData["stats"][i]["base_stat"] > highestStatValue){
				highestStatValue = finalData["stats"][i]["base_stat"] 
				highestStat = finalData["stats"][i]["stat"]["name"]
			}
			totalStats+= finalData["stats"][i]["base_stat"] 
		}

		for (let i = 0; i< finalData["stats"].length; i++){
			if (finalData["stats"][i]["stat"]["name"] != highestStat && finalData["stats"][i]["base_stat"] == highestStat){
				highestStat = null
			}
		}
		finalData["stats_total"] = totalStats
		finalData["stats_highest"] = highestStat
		finalData["stats_variation"] = coefficientOfVariation(statsArr)
		finalData["offense_defense_ratio"] = (finalData["stats"][1]["base_stat"] + finalData["stats"][3]["base_stat"]) / (finalData["stats"][2]["base_stat"] + finalData["stats"][4]["base_stat"])

		delete finalData["stats"]
	} catch(error){
		console.log(finalData)
		console.log(error)
		return {};
	}
	return finalData

}


async function start() {
    let dbList = await loadNames()

	let pokemonList = []

	for (let id in dbList){
		pokemonList.push({"id":id,"pokeapi_name":dbList[id]})
	}

	console.log(dbList)
	let dataDict = {}

	if (true){
		for (let i = 0; i< pokemonList.length; i++){

			console.log('fetching', pokemonList[i]["pokeapi_name"])
			while (true){
				try{
					let data = await getPokemonData(pokemonList[i]["pokeapi_name"]);
					
					/*let name = pokemonList[i]["name"]

					if (name in eggGroupFixes){
						let eggGroups = eggGroupFixes[name]
						eggGroupFixes[name] = false
						for (let j = 1; j < 3; j++){
							if (eggGroups.length < j ){
								data["egg_group" + j] = null
							}else{
								data["egg_group" + j] = eggGroups[j-1].toLowerCase();
							}
							
						}
						console.log('fixed egg group for ', name, data)
					}*/

					dataDict[pokemonList[i]["pokeapi_name"]] = data
					break
				}catch (e){
					console.log('error',pokemonList[i]["pokeapi_name"] )
				}
			}
		}

		function getFinalEvolutionNames(chainData) {
		
			const finalEvolutionNames = [];
		
			function traverseEvolutionChain(evolutionChain) {
			  if (!evolutionChain.evolves_to.length) {
				finalEvolutionNames.push(evolutionChain.species.name);
				return;
			  }
		  
			  evolutionChain.evolves_to.forEach((evolution) => {
				traverseEvolutionChain(evolution);
			  });
			}
		
			traverseEvolutionChain(chainData);
		
			return finalEvolutionNames;
		}

		let evolutionChains = (await getDataFull("https://pokeapi.co/api/v2/evolution-chain/?limit=5000"))["results"];

		for (let key in dataDict){
			dataDict[key]["is_final_stage"] = false;
		}

		for (let i = 0; i < evolutionChains.length; i++){
			let URL = evolutionChains[i]["url"]
			let currentChain = (await getDataFull(URL))["chain"];
			let finalEvos = getFinalEvolutionNames(currentChain);
			console.log(finalEvos)
			for (let j = 0; j<finalEvos.length; j++){
				if (!(finalEvos[j] in speciesDict)){
					continue
				}
				for (let k = 0; k < speciesDict[finalEvos[j]].length; k++){
					dataDict[speciesDict[finalEvos[j]][k]]["is_final_stage"] = true;
				}
			}
		}

		for (let i = 0; i < finalStageSpeciesCorrections.length; i++){
			let speciesName = finalStageSpeciesCorrections[i]
			if (!(speciesName in speciesDict)){
				continue
			}

			for (let k = 0; k < speciesDict[speciesName].length; k++){
				dataDict[speciesDict[speciesName][k]]["is_final_stage"] = true;
			}

		}


		//console.log(dataDict)
		console.log(JSON.stringify(dataDict))
		/*
		for (let key in eggGroupFixes){
			console.log('used', key, ':', eggGroupFixes[key] == false)
		}*/
	}else{
		
	}

	let finalDict = {}

	for (let i = 0; i < pokemonList.length; i++){
		let id = pokemonList[i]["id"]
		finalDict[id] = dataDict[pokemonList[i]["pokeapi_name"]]
	}
	fs.writeFile("extra_data.json", JSON.stringify(finalDict), 'utf8', (err) => {
		if (err) {
		  console.error('Error writing JSON file:', err);
		} else {
		  console.log('JSON data has been written to the file.');
		}
	});	

	
}

start();