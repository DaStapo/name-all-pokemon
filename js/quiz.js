
class Quiz {

    //all Pokemon objects
    pokemon = []

    //key->array (lists of same basePkmn)
    pokemonBaseNameDict = {}

    //pokemon.id -> pokemon
    pokemonIdDict = {}

    silhouetteDictionary = {}
    spriteDictionary = {}
    pokeballDictionary = {}
    unguessedDictionary = {}

    unguessedDict = {}
    unguessedDictTexts = {}
    enabledLanguages = []

    //any language => id
    nameDict = {}
    nameArr = []
    //input => language
    langDict = {}

    currentBaseNames = new Set()
    //essentially sprites
    currentIds  = new Set()

    //all names all current languages
    currentLangsNames = new Set()

    revealTimeouts = []

    allSprites = []
    silhouetteArray = []
    pokeballArray = []

    missingnoEnabled = false;
    named = new Set()

    users = {}
    langCounts = {}
    currentLang = "ENG"

    filters = {}
    
    constructor(boxDict, genQuizBoxes, allLanguages){
        this.boxDict = boxDict;
        this.genQuizBoxes = genQuizBoxes;
        this.allLanguages = allLanguages;
        this.useSilhouettes = false;
    }


    loadData(allData, enabledLanguages, onReset){
        this.encodedImages = allData["encoded_images"]
        this.translations = allData["translations"]
        this.suffixes = allData["suffix_namings"]
        this.namings = allData["namings"]
        let pkmnData = allData["pokemon"]
        for (let i = 0; i < pkmnData.length; i++){
            let pkmn = new Pokemon(pkmnData[i])
            this.pokemon.push(pkmn)
            this.pokemonIdDict[pkmn.id] = pkmn
            if (!(pkmn.baseName in this.pokemonBaseNameDict)){
                this.pokemonBaseNameDict[pkmn.baseName] = []
            }
            this.pokemonBaseNameDict[pkmn.baseName].push(pkmn)
        }
        this.setupNames();
        this.setFormattedNames();
        this.setupSprites();
        this.setupMissedContent();
        this.updateLanguages(enabledLanguages)
        this.onReset = onReset
        this.usePokeball();
        
    }

    reset(){
        this.stopReveal()
        this.named = new Set()
        this.users = {}
        this.langCounts = {}
        this.missingnoEnabled = false;
        this.useSilhouettes = false;
        this.boxCounters = {}

        for (let box in this.currentBoxes){
            this.boxCounters[box] = []
        }
        
        this.usePokeball();

        for (let id in this.spriteDictionary){
            this.hideSprite(id)
            this.spriteDictionary[id].classList.add("zoom");
            this.spriteDictionary[id].classList.remove("revealed");
        }

        for (let key in this.unguessedDict){
            this.unguessedDict[key].style.display = 'none';
        }

        for (let box in this.boxDict){
            this.boxDict[box].classList.remove("outline")
            this.boxDict[box].classList.remove("outline"+this.getStyleName())
        }

        for (let id in this.unguessedDictionary){
            if (this.currentIds.has(id)){
                this.unguessedDictionary[id].style.display = "inline"
            }else{
                this.unguessedDictionary[id].style.display = "none"

            }
        }
        this.onReset();
    }

    checkHighestLang(){
        let highestKey = "ENG";
        let highestCount =0;
        for (let key in this.langCounts){
            if (this.langCounts[key] > highestCount ){
                highestCount = this.langCounts[key]
                highestKey = key
            }
        }

        if (this.currentLang !== highestKey){
            //this.setLanguage(highestKey)
            document.getElementById("missing-"+ highestKey).click();
            this.currentLang = highestKey
        }
    }

    getScore(){
        return this.named.size
    }

    getMaxScore(){
        return this.currentBaseNames.size;
    }

    setGenQuiz(genNum){
        let filters = {"boxes":this.genQuizBoxes[genNum.toString()]}
        let name;
        if (genNum === "0"){
            name = "Full"
        }else{
            name = "Generation " + genNum 
        }
        this.setQuiz(name, filters);
    }

    setTypeQuiz(type){
        let filters = {"types":[type]}
        this.setQuiz(type + " type ", filters);
    }

    setQuiz(name, filters) {

        //before we change the style name
        if (this.getStyleName() !== ""){
            document.getElementById("body").classList.remove( this.getStyleName());

            for (let i = 0; i< typeClasses.length; i++){
                let currentClass = typeClasses[i];
                let typeName = this.getStyleName();
                let allElements = document.getElementsByClassName(currentClass.replace("type", ""));
                let val  = "." + currentClass.replace("type", "")
                for (let j = 0; j<allElements.length; j++){
                    allElements[j].classList.remove(currentClass.replace("type", typeName))
                }
        
            }
    
            let bbuttonElements = document.getElementsByClassName("button");
            for (let i = 0; i < bbuttonElements.length; i++){
                bbuttonElements[i].classList.remove("button"+this.getStyleName())
            }        
        }


        this.filters = filters;
        this.name = name;
        let currentPokemonList = [];
    
        if ("boxes" in filters) {
            currentPokemonList = this.pokemon.filter(pokemon => filters.boxes.includes(pokemon.box));
        } else {
            currentPokemonList = [...this.pokemon]; // Clone the pokemon list
        }
    
        if ("types" in filters) {
            currentPokemonList = currentPokemonList.filter(pokemon =>
                filters.types.some(type => pokemon.isType(type))
            );
        }
        let maxNumberOfSame = 7
        let indexesToRemove = []
        let i = 0
        while (i<currentPokemonList.length-maxNumberOfSame){
            if (currentPokemonList[i].baseName === currentPokemonList[i+maxNumberOfSame].baseName){
                let isSequential = true;
                for (let j = 1; j<maxNumberOfSame; j++){
                    if (currentPokemonList[i].baseName !== currentPokemonList[i+j].baseName){
                        isSequential = false;
                        break
                    }
                }
                if (!isSequential){
                    continue
                }

                let j = i + 1
                while (j < currentPokemonList.length && currentPokemonList[i].baseName === currentPokemonList[j].baseName){
                    indexesToRemove.push(j)
                    j++;
                }
                i = j;
            }else{
                i++;
            }
        }
        for (let i = indexesToRemove.length - 1; i >= 0; i--) {
            currentPokemonList.splice(indexesToRemove[i] , 1);
        }

        this.currentBaseNames = new Set()
        this.currentIds = new Set()
        this.currentBoxes = {}
        for (let i = 0; i<currentPokemonList.length; i++){
            this.currentBaseNames.add(currentPokemonList[i].baseName)
            //essentially sprites
            this.currentIds.add(currentPokemonList[i].id)
            if (!(currentPokemonList[i].box in this.currentBoxes)){
                this.currentBoxes[currentPokemonList[i].box] = []
            }
            this.currentBoxes[currentPokemonList[i].box].push(currentPokemonList[i])
        }

        for (let id in this.unguessedDictionary){
            if (id in this.currentIds){
                this.unguessedDictionary[id].style.display = "inline"
            }else{
                this.unguessedDictionary[id].style.display = "none"

            }
        }
    
        for (let box in this.boxDict){
            if (box in this.currentBoxes)
            {
                this.boxDict[box].style.display = "block";
            }
            else
            {
                this.boxDict[box].style.display = "none";
            }
        }

        for (let box in this.currentBoxes){
            if (this.name === "Full"){
                regionToAll(document.getElementById("region"+box));
            }else{
                regionToSingle(document.getElementById("region"+box));
            }

        }

        this.updateLanguages(this.enabledLanguages);


        if (this.name === "Full"){
            for (let box in this.currentBoxes){
                regionToAll(document.getElementById("region"+box));
            }
            document.getElementById("pokemon-box-unknown").classList.remove('unknownbox');   

            for (let i = 0; i < this.allSprites.length; i++) {
                this.allSprites[i].classList.add('sprite');
                this.allSprites[i].classList.remove('spritew');
                this.allSprites[i].classList.remove('spritet');
            }    
            for (let i = 0; i < pokecolumns.length; i++) {
                pokecolumns[i].classList.add('fifth');
                pokecolumns[i].classList.remove('twothirds');
            } 
        }else if(this.name.includes("eneration")){
            for (let box in this.currentBoxes){
                regionToSingle(document.getElementById("region"+box));
            } 
            document.getElementById("pokemon-box-unknown").classList.add('unknownbox');
            for (let i = 0; i < this.allSprites.length; i++) {
                this.allSprites[i].classList.add('spritew');
                this.allSprites[i].classList.remove('sprite');
                this.allSprites[i].classList.remove('spritet');
            }
            for (let i = 0; i < pokecolumns.length; i++) {
                pokecolumns[i].classList.remove('fifth');
                pokecolumns[i].classList.add('twothirds');
            }
        }else{
            //TYPE TODO ALL OF THIS BETTER
            document.getElementById("pokemon-box-unknown").classList.remove('unknownbox');   
            for (let box in this.currentBoxes){
                regionToSingle(document.getElementById("region"+box));
            }

            for (let i = 0; i < pokecolumns.length; i++) {
                pokecolumns[i].classList.add('fifth');
                pokecolumns[i].classList.remove('twothirds');
            }
            for (let i = 0; i < this.allSprites.length; i++) {
                this.allSprites[i].classList.add('spritet');
                this.allSprites[i].classList.remove('spritew')
                this.allSprites[i].classList.remove('sprite');
            }
        }


        if ("types" in filters){

            document.getElementById("body").classList.add(this.getStyleName());
            if(darkMode){
                document.getElementById("body").classList.add("blenddark")
            }
            else{
                document.getElementById("body").classList.add("blend")
            }

            for (let i = 0; i< typeClasses.length; i++){
                let currentClass = typeClasses[i];
                if(currentClass.includes('dark') && !darkMode){
                    continue;
                }
        
                let allElements = document.getElementsByClassName(currentClass.replace("type", ""));
                for (let j = 0; j<allElements.length; j++){
                    allElements[j].classList.add(currentClass.replace("type", this.getStyleName()))
                }
        
            }
        
        
            let bbuttonElements = document.getElementsByClassName("button");
            for (let i = 0; i < bbuttonElements.length; i++){
                bbuttonElements[i].classList.add("button"+this.getStyleName())
            }

            let imgName = this.getStyleName().toUpperCase();
            if (imgName === "EVIL"){
                imgName = "DARK"
            }

            document.getElementById("bgpattern").style.display = 'block';
            document.getElementById("bgpattern2").style.display = 'block';
            document.getElementById("bgpattern2").src = "/images/types/"+ imgName +".svg";
            document.getElementById("bgpattern2").src = "/images/types/"+ imgName +".svg";

            document.getElementById("bgpattern").style.opacity = 0;
            setTimeout(()=>{
                document.getElementById("bgpattern").src = "/images/types/"+ imgName+".svg";

                document.getElementById("bgpattern").style.opacity = 1;
            },250)
        }else{
            document.getElementById("body").classList.remove("blend")
            document.getElementById("body").classList.remove("blenddark")
            document.getElementById("bgpattern").style.display = 'none';
            document.getElementById("bgpattern2").style.display = 'none';
        }



        this.reset();


    }

    getStyleName(){
        if ("types" in this.filters){
            if (this.filters["types"][0] === "dark"){
                return "evil"
            }
            return this.filters["types"][0]
        }
        return "";
    }

    setFormattedNames(){

        for (let id in this.pokemonIdDict){
            let pkmn = this.pokemonIdDict[id]
            let translation = this.translations[pkmn.baseName]
    
            let formattedDict = null
            if (pkmn.id in this.namings){
                formattedDict = {}
                for (let key in translation){
                    formattedDict[key] = translation[key] + this.namings[pkmn.id]
                }
            }else{
                for (let suffix in this.suffixes){
                    if (pkmn.id.endsWith(suffix)){
                        let without = pkmn.id.substring(0, pkmn.id.length - suffix.length);
                        if (without in this.pokemonBaseNameDict){
                            formattedDict = {}
                            for (let key in translation){
                                formattedDict[key] = translation[key] + this.suffixes[suffix]
                            }
                            break;
                        }
                    }
                }
            }
            if (formattedDict === null){
                formattedDict = {}
                for (let key in translation){
                    formattedDict[key] = translation[key]
                }
            }
            pkmn.setFormattedNames(formattedDict);
        }
    }

    setLanguage(lang){
        for (let id in this.unguessedDictTexts){
            this.unguessedDictTexts[id].nodeValue  = this.pokemonIdDict[id].getFormattedName(lang)
        }
    }


    updateLanguages(enabledLanguages){
        this.enabledLanguages = enabledLanguages;
        this.currentLangsNames= new Set()
        this.nameDict = {}
        this.nameArr = []
        for (let id of this.currentIds){
            for (let j = 0; j < enabledLanguages.length; j++){
                let key = enabledLanguages[j];
                this.currentLangsNames.add(standardizeName(this.translations[this.pokemonIdDict[id].baseName][key]))
            }
        }
        for (let i = 0; i < this.pokemon.length; i++ ){
            for (let j = 0; j < this.enabledLanguages.length; j++){
                let key = this.enabledLanguages[j];
                /*if (this.translations[id][key] in this.nameDict && standardizeName(this.translations[id][key]) !== id){
                    console.log('alert, same names for' + this.translations[id]["ENG"] + " and " + id)
                }*/
                
                this.nameDict[standardizeName(this.translations[this.pokemon[i].baseName][key])] = this.pokemon[i].id
                this.nameArr.push(this.pokemon[i].baseName)
            }
        }

        
    }
    setupNames(){
        for (let i = 0; i < this.pokemon.length; i++ ){
            for (let j = 0; j < this.allLanguages.length; j++){
                let key = this.allLanguages[j];
                if (standardizeName(this.translations[this.pokemon[i].baseName]["ENG"]) === standardizeName(this.translations[this.pokemon[i].baseName][key])){
                    this.langDict[standardizeName(this.translations[this.pokemon[i].baseName][key])] = "ENG"
                }else{
                    this.langDict[standardizeName(this.translations[this.pokemon[i].baseName][key])] = key
                }

            }
        }
    }

    startMissingno(){

        if (!this.missingnoEnabled){
            return
        }
        
    
        let visibleSprites = []
        for (let i = 0; i< this.allSprites.length; i++){
            if (this.allSprites[i].style.display != "none" && this.allSprites[i].parentElement.style.display != "none" && this.allSprites[i].parentElement.parentElement.style.display != "none"){
                visibleSprites.push(this.allSprites[i])
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
        let that = this
        setTimeout(()=>{
            if ((originalSrc.indexOf('/unknown') !== -1)){
                if (darkMode){
                    originalSrc = '/sprites/unknown-2.png';
                }else{
                    originalSrc = '/sprites/unknown.png';
                }
            }
            visibleSprites[randomIndex].src  = originalSrc
            that.startMissingno();
        }, randomIntFromInterval(300, 3000))
    }


    parseInput(inputText, user){
        inputText = inputText.toLowerCase()
        
        let inputs = []
        
        if (inputText === 'nidoran' || inputText === 'ニドラン'.toLowerCase() ||inputText === '니드런'.toLowerCase() ) {
            inputs.push('nidoranf')
            inputs.push('nidoranm')
        }
        
        
        if (inputText == "missingno" || inputText == "けつばん"){

            if (!this.missingnoEnabled){
                this.missingnoEnabled = true;
                if (soundEnabled){
                    soundEffectMissingno.play();
                }
                
                this.startMissingno()
                return [true, "missingno"];
            }
        
        }
        
        inputText = standardizeName(inputText)
        let originalInput = inputText;
        

        let subGerman = originalInput
        subGerman = subGerman.replace("ae", "ä")
        subGerman = subGerman.replace("oe", "ö")
        subGerman = subGerman.replace("ue", "ü")
        subGerman = subGerman.replace( "ss", "ß")
        subGerman = standardizeName(subGerman);
        if (originalInput !== subGerman){
            inputs.push(subGerman);
        }
        
        inputs.push(inputText);
        
        let correct = false;
        let message = null

        for (let i = 0; i < inputs.length; i++){
            inputs[i] = standardizeName(inputs[i]);
            let input = inputs[i]

            if (input in this.nameDict){

                let id = this.nameDict[input]
                let baseName = this.pokemonIdDict[id].baseName

                if (this.named.has(baseName)){

                    let overlap = false;
                    for (let key in this.nameDict){
                        if (key.startsWith(input) && key !== input){
                            overlap = true;
                            break
                        }
                    }
                    if (!overlap){
                        message =  this.pokemonIdDict[id].getFormattedName(this.currentLang)+ " already named."
                    }
                    continue;
                }

                if (!(this.currentBaseNames.has(baseName))){

                    let found = false
                    for (const langName of this.currentLangsNames) {
                        if (langName.startsWith(input)) {
                            found = true;
                            break;
                        }
                    }
                    if (!found){
                        message = this.pokemonIdDict[id].getFormattedName(this.currentLang) + " is not part of this quiz."
                    }
                    continue;
                    
                }
                if (!(this.currentLangsNames.has(input))){
                    continue
                }

                let relatedPokemon = this.pokemonBaseNameDict[baseName]

                let relevantPokemon = []
                for (let i = 0; i< relatedPokemon.length; i++){
                    if (this.currentIds.has(relatedPokemon[i].id)){
                        relevantPokemon.push(relatedPokemon[i])
                    }
                }

                for (let i = 0; i< relevantPokemon.length; i++){
                    this.showSprite(relevantPokemon[i].id)
                }

                this.named.add(baseName)
                if (!(user in this.users)){
                    this.users[user] = 0
                }
                this.users[user]+=1
                if (!(this.langDict[input] in this.langCounts)){
                    this.langCounts[this.langDict[input]] = 0
                }
                this.langCounts[this.langDict[input]]+=1
                this.checkHighestLang()
                recentSprite.src = this.spriteDictionary[relevantPokemon[relevantPokemon.length-1].id].src;
                correct = true;
            }

        }
        return [correct, message];

    }

    getEndText(){
        let genText = ' ';
        if (this.name !== "Full") {
            genText = " " + this.name.charAt(0).toUpperCase() + this.name.slice(1) + " "
        }
        return genText
    }

    isSilhouettesEnabled(){
        return this.useSilhouettes
    }

    animateCongrats(){
        for (let id of this.currentIds){
            if (this.named.has(this.pokemonIdDict[id].baseName)){
                animateInput(id)
            }
            
        }
        
    }
    

    setSilhouettes() {
        for (let i = 0; i < this.silhouetteArray.length; i++) {
            this.silhouetteArray[i].style.display = "inline";
            this.pokeballArray[i].style.display = "none";
        }
        this.useSilhouettes=true
    }
    
    usePokeball() {
        for (let i = 0; i < this.silhouetteArray.length; i++) {
            this.silhouetteArray[i].style.display = "none";
            this.pokeballArray[i].style.display = "inline";
        }
    }


    hideSprite(id){
        this.spriteDictionary[id].style.display = "none";
        this.unguessedDictionary[id].style.display = "inline";
    }

    setupSprites(){
        for (let i = 0; i< this.pokemon.length; i++){
            let pokemon = this.pokemon[i];

            let sprite = document.createElement("img");
            sprite.classList.add('sprite');
            sprite.classList.add('zoom');
            sprite.src = this.encodedImages['sprite'][pokemon.id];

            this.spriteDictionary[pokemon.id] = sprite;
            this.allSprites.push(sprite)
            let silhouette = document.createElement("img");
            silhouette.classList.add('sprite');
            silhouette.src = this.encodedImages['silhouette'][pokemon.id];
            silhouette.style.display = "none";
            this.silhouetteDictionary[pokemon.id] = silhouette;
            this.silhouetteArray.push(silhouette)
            this.allSprites.push(silhouette)
            let unguessed = document.createElement("div");
            //not included to loading bar, all use the same single image
            let pokeballImg = document.createElement("img");
            pokeballImg.classList.add('sprite');
            pokeballImg.src = '/sprites/unknown.png';
            this.unguessedDictionary[pokemon.id] = unguessed;
            this.pokeballDictionary[pokemon.id] = pokeballImg;
            this.pokeballArray.push(pokeballImg)
            this.allSprites.push(pokeballImg)

            unguessed.appendChild(this.silhouetteDictionary[pokemon.id])
            unguessed.appendChild(pokeballImg)

            let box = this.boxDict[pokemon.box]

            box.appendChild(this.spriteDictionary[pokemon.id]);
            box.appendChild(unguessed);
            this.hideSprite(pokemon.id);

        }
    }

    setupMissedContent(){
        let contentDict = {}
        for (let key in this.boxDict){
            let unnamedList = document.createElement("div");
            let unnamedContent = document.createElement("div");
            unnamedContent.classList.add('box');
            unnamedContent.classList.add('roundedf');
            unnamedContent.classList.add('topedge');
            unnamedContent.style.display = 'block';
            unnamedList.appendChild(unnamedContent)
            document.getElementById("panel").appendChild(unnamedList);
            contentDict[key] = unnamedContent;
        }

        for (let i = 0; i< this.pokemon.length; i++){

            let pokemon = this.pokemon[i];

            let _elem = document.createElement("div");
            let _img = document.createElement("img");
            let _name = document.createTextNode('')
            _img.style.display = 'inline';
            _img.src = this.spriteDictionary[pokemon.id].src
            _img.classList.add('spritel')
            _elem.style.display = 'none';
            _elem.appendChild(_img)
            _elem.appendChild(_name)

            this.unguessedDict[pokemon.id] = _elem;
            this.unguessedDictTexts[pokemon.id] = _name
            contentDict[pokemon.box].appendChild(_elem)
            
        }

    }

    getLeaderboardData(){

    }

    showSprite(id){
        this.spriteDictionary[id].style.display = "inline";
        this.unguessedDictionary[id].style.display = "none";
        let currentBox = this.pokemonIdDict[id].box;
        this.boxCounters[currentBox].push(this.pokemonIdDict[id])
        if (this.boxCounters[currentBox].length === this.currentBoxes[currentBox].length){
            let boxElem = this.spriteDictionary[id].parentElement;
            boxElem.classList.add('outline')
            boxElem.classList.add('outline'+this.getStyleName())
        }
    }
    stopReveal() {
        for (let i = 0; i < this.revealTimeouts.length; i++) {
            clearInterval(this.revealTimeouts[i])
        }
        this.revealTimeouts = [];
    }
    giveUp(){

        let delay = 0;
        let revealList = []
        for (const id of this.currentIds) {
            if (!(this.named.has(this.pokemonIdDict[id].baseName))){
                revealList.push(id)
            }
        }
    
        for (let i = 0; i < revealList.length; i++) {
            let id = revealList[i];
            delay = delay + 35;
            let that = this;
            let timeout = setTimeout(function () {
                that.spriteDictionary[id].classList.add('revealed');
                that.spriteDictionary[id].classList.remove('zoom');
                that.showSprite(id);
                changeFooterPosition()
            }, delay);
            this.revealTimeouts.push(timeout);
        }
        
        //loop without delay
        for (let i = 0; i < revealList.length; i++) {
            let id = revealList[i];
            this.unguessedDict[id].style.display = 'inline-block';
            this.unguessedDict[id].classList.add('fixed-width');
        }
    }

    shinyOn(){
        for (let id of this.currentIds){
            this.spriteDictionary[id].src = this.encodedImages['shiny'][id]
            this.unguessedDict[id].getElementsByTagName('img')[0].src = this.encodedImages['shiny'][id]
        }
    }

    shinyOff(){
        for (let id of this.currentIds){
            this.spriteDictionary[id].src = this.encodedImages['sprite'][id]
            this.unguessedDict[id].getElementsByTagName('img')[0].src = this.encodedImages['sprite'][id]
        }
    }


}