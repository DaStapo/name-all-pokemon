class Pokemon {

    id
    box
    primaryType
    secondaryType

    constructor(dataJson){
        this.data = dataJson;
        this.id = dataJson["id"]
        this.baseName = dataJson["baseName"]
        this.primaryType = dataJson["primaryType"]
        this.secondaryType = dataJson["secondaryType"]
        this.box = dataJson["box"]
    }

    setExtraData(dataJson){
        this.extraData = dataJson;
    }

    isType(type){
        return this.primaryType === type || this.secondaryType === type;
    }

    setFormattedNames(formattedDict){
        this.formattedDict = formattedDict;
    }

    getFormattedName(lang){
        return this.formattedDict[lang];
    }
}

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
    shinyEnabled = false;
    named = new Set()

    users = {}
    langCounts = {}
    currentLang = "ENG"

    spriteCycles = {}

    filters = {}

    paused = false;

    orderModeSet = new Set()
    baseNameIdDict = {}
    orderMode = false;

    revealedShadows = new Set()

    giveUpState = false;
    spooky = false;

    name = "none"

    boxConstruction = []
    
    constructor(boxDict, genQuizBoxes, allLanguages){
        this.boxDict = boxDict;
        this.genQuizBoxes = genQuizBoxes;
        this.allLanguages = allLanguages;
        this.useSilhouettes = false;
        this.startSpooky()
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
                this.orderModeSet.add(pkmn.id)
                this.baseNameIdDict[pkmn.baseName] = pkmn.id
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
        this.giveUpState = false
        this.stopReveal()
        this.named = new Set()
        this.users = {}
        this.langCounts = {}
        this.missingnoEnabled = false;
        this.useSilhouettes = false;
        this.revealedShadows = new Set()
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
        document.getElementById("pokemon-box-big").classList.remove("outline")
        document.getElementById("pokemon-box-big").classList.remove("outline"+this.getStyleName())
        

        for (let id in this.unguessedDictionary){
            if (this.currentIds.has(id)){
                this.unguessedDictionary[id].style.display = "inline"
            }else{
                this.unguessedDictionary[id].style.display = "none"

            }
        }
        
        this.onReset();
    }


    setOrderMode(val){
        this.orderMode = val
        this.setQuiz(this.name, this.filters)
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
            if (this.orderMode){
                visualizeButtonClick(document.getElementById("order-off"))
                visualizeButtonUnclick(document.getElementById("order-on"))
                this.orderMode = false;
                showUserMessage("Order mode disabled")
            }
        }


        /*
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
        }*/




        let currentCycles = {}
        let indexesToRemove = []
        let i = 0
        while (i < currentPokemonList.length-1){

            if(currentPokemonList[i].baseName === currentPokemonList[i+1].baseName){
                currentCycles[currentPokemonList[i].id] = [currentPokemonList[i].id]
                let j = 1
                while ((i+j)  < currentPokemonList.length && currentPokemonList[i].baseName === currentPokemonList[i+j].baseName){
                    indexesToRemove.push(i+j)
                    currentCycles[currentPokemonList[i].id].push(currentPokemonList[i+j].id)
                    j+=1;
                }
                j-=1
                i+=j
            }
            i+=1
        }


        for (let i = indexesToRemove.length - 1; i >= 0; i--) {
            currentPokemonList.splice(indexesToRemove[i] , 1);
        }

        if (this.orderMode){
            let tempList = []
            for (let i = 0; i< currentPokemonList.length; i++ ){
                if (currentPokemonList[i].box === "gmax" || currentPokemonList[i].box === "mega" ){
                    continue
                }
                let id = currentPokemonList[i].id;
                if (this.orderModeSet.has(id)){
                    tempList.push(currentPokemonList[i])
                }else{
                    let basePkmnId = this.baseNameIdDict[currentPokemonList[i].baseName]
                    if (!(basePkmnId in currentCycles)){
                        currentCycles[basePkmnId] = [basePkmnId]
                    }

                    if(id in currentCycles){
                        for (let j = 0; j < currentCycles[id].length; j++){
                            currentCycles[basePkmnId].push(currentCycles[id][j])
                        }
                    }else{
                        currentCycles[basePkmnId].push(id)
                    }
                }
            }
            currentPokemonList = tempList

            if ("darumaka" in currentCycles){
                currentCycles["darumaka"] = ["darumaka", "darumaka", "darumakagalar", "darumakagalar"]
            }
            if ("meowth" in currentCycles){
                currentCycles["meowth"] = ["meowth", "meowthalola", "meowthgalar"]
            }
            if ("persian" in currentCycles){
                currentCycles["persian"] = ["persian", "persianalola", "persian"]
            }
        }

        this.spriteCycles = currentCycles;

        this.currentBaseNames = new Set()
        this.currentIds = new Set()
        this.currentBoxes = {}
        this.currentPokemonList = currentPokemonList
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

        this.moveBoxes()
        this.resetCurrentSprites()
        this.reset();

    }

    moveBoxes(){
        
        let isCurrentlyBig = document.getElementById("pokemon-box-big").children.length > 2
        
        let neededBig = this.orderMode && ("boxes" in this.filters && this.filters["boxes"].length > 5)

        if(neededBig){
            if(!isCurrentlyBig){
                for (let i = 0; i < this.boxConstruction.length; i++){
                    let box = this.boxConstruction[i][0]
                    let children = this.boxConstruction[i][1]
                    for (let j = 0; j < children.length; j++){
                        box.removeChild(children[j])
                        document.getElementById("pokemon-box-big").appendChild(children[j])

                    }
                }
                document.getElementById("pokemon-box-big").style.display = "block"
                document.getElementById("gen-boxes").style.display = "none" 
            }
        }
        else{
            if(isCurrentlyBig){
                for (let i = 0; i < this.boxConstruction.length; i++){
                    let box = this.boxConstruction[i][0]
                    let children = this.boxConstruction[i][1]
                    for (let j = 0; j < children.length; j++){
                        document.getElementById("pokemon-box-big").removeChild(children[j])
                        box.appendChild(children[j])
                        
                    }
                }   
                document.getElementById("pokemon-box-big").style.display = "none"
                document.getElementById("gen-boxes").style.display = "block"
            }
        }


        if (this.orderMode){
            if ("boxes" in this.filters && neededBig){
                if (this.filters["boxes"].length > 5){
                    document.getElementById("regionall").innerText = ""
                }else{
                    let fullText = ''
                    for (let i =0; i < this.filters["boxes"].length; i++){
                        let regionName = this.filters["boxes"][i] ;
                        regionName = regionName.charAt(0).toUpperCase() + regionName.slice(1)
                        fullText += regionName+ ", "
                    }
                    document.getElementById("regionall").innerText = fullText.substring(0, fullText.length-2)

                }
            }
        }


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
            if (pkmn.baseName === "nidoranm" || pkmn.baseName === "nidoranf"){
                for (let key in formattedDict){
                    if (formattedDict[key].endsWith("m") || formattedDict[key].endsWith("f") ){
                        formattedDict[key] = formattedDict[key].substring(0, formattedDict[key].length-1)
                    }
                }
            }
            pkmn.setFormattedNames(formattedDict);
        }
    }

    setLanguage(lang){
        for (let id in this.unguessedDictTexts){
            this.unguessedDictTexts[id].nodeValue  = this.pokemonIdDict[id].getFormattedName(lang)
        }
        this.currentLang = lang
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
                let daName = standardizeName(this.translations[this.pokemon[i].baseName][key])
                this.nameDict[daName] = this.pokemon[i].id
                this.nameArr.push(daName)
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
            missingnoPath = '/images/missingno.png';
        }
        else if (randNr < 90){
            missingnoPath = '/images/missingno2.png';
        }
        else{
            missingnoPath = '/images/missingno3.png';
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


    startSpooky(){

        if (!this.spooky){
            return
        }
        let that = this

        setTimeout(()=>{

            if (that.spooky){
                let visibleSprites = []
                for (let i = 0; i< this.allSprites.length; i++){
                    if (this.allSprites[i].style.display != "none" && this.allSprites[i].parentElement.style.display != "none" && this.allSprites[i].parentElement.parentElement.style.display != "none"){
                        visibleSprites.push(this.allSprites[i])
                    }
                }
                if (visibleSprites.length < 1){
                    setTimeout(()=>{
                        that.startSpooky();
                    }, 1000)
        
                }else{
                    let playedSound = false;
                    if(soundEnabled){
                        let soundEffectF4 = new Audio('/sound-effects/ruby_00F4.wav');
                        soundEffectF4.volume = 0.2;
                        soundEffectF4.play().then(() => {
                            playedSound = true;
                        })
                    }
                    let randomIndex = randomIntFromInterval(0, visibleSprites.length-1)

                    let originalSrc = visibleSprites[randomIndex].src
                    let duskullPath = "/images/duskull.gif";

                    visibleSprites[randomIndex].src = duskullPath;



                    setTimeout(()=>{



                        if ((originalSrc.indexOf('/unknown') !== -1)){
                            if (darkMode){
                                originalSrc = '/sprites/unknown-2.png';
                            }else{
                                originalSrc = '/sprites/unknown.png';
                            }
                        }
                        visibleSprites[randomIndex].src  = originalSrc
                        if (that.spooky){
                            if (soundEnabled && playedSound){
                                let soundEffectED = new Audio('/sound-effects/ruby_00ED.wav');
                                soundEffectED.volume = 0.2;
                                soundEffectED.play()
                                document.getElementById('spooky').style.display="block"
                            }
                            if (!soundEnabled){
                                document.getElementById('spooky').style.display="block"
                            }

                            that.startSpooky()
                        }
                    }, randomIntFromInterval(3500, 4500));
                }
                
            }
        }, randomIntFromInterval(10000, 25000))
    
    }



    parseInput(inputText, user, onCorrect = null){
        if(paused){
            return [false, null]
        }
        inputText = inputText.toLowerCase()
        
        let inputs = []
        
        if (inputText === 'nidoran' || inputText === 'ニドラン'.toLowerCase() ||inputText === '니드런'.toLowerCase() ) {
            if(!this.orderMode){
                inputs.push('nidoranf')
                inputs.push('nidoranm')
            }else{
                if (!this.named.has("nidoranf")){
                    inputs.push('nidoranf')
                }else{
                    inputs.push('nidoranm')
                    
                }
            }

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
        let pkmn = null

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
                        message =  this.pokemonIdDict[this.baseNameIdDict[baseName]].getFormattedName(this.currentLang)+ " already named"
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
                        message = this.pokemonIdDict[this.baseNameIdDict[baseName]].getFormattedName(this.currentLang) + " is not part of this quiz"
                    }
                    continue;
                    
                }
                if (!(this.currentLangsNames.has(input))){
                    continue
                }

                if (this.orderMode){

                    //safe from latency
                    let highestNamed = -1
                    for (let k = 0; k < this.currentPokemonList.length; k++){
                        if (this.named.has(this.currentPokemonList[k].baseName)){
                            if (k > highestNamed){
                                highestNamed = k
                            }
                        }
                    }

                    if (baseName !== this.currentPokemonList[highestNamed+1].baseName){
                        let overlap = false;
                        for (let key in this.nameDict){
                            if (key.startsWith(input) && key !== input){
                                overlap = true;
                                break
                            }
                        }
                        if (!overlap){
                            message =  this.pokemonIdDict[this.baseNameIdDict[baseName]].getFormattedName(this.currentLang)+ " is not the next Pokémon"
                        }
                        continue;
                    }
                }

                let recentPkmn = this.addNamed(baseName)
                this.addUserPoint(user)
                if (!(this.langDict[input] in this.langCounts)){
                    this.langCounts[this.langDict[input]] = 0
                }
                this.langCounts[this.langDict[input]]+=1
                this.checkHighestLang()
                recentSprite.src = this.spriteDictionary[recentPkmn.id].src;
                correct = true;
                if (onCorrect !== null){
                    onCorrect(baseName)
                }
            }

        }
        return [correct, message];

    }

    addUserPoint(user){
        if (!(user in this.users)){
            this.users[user] = 0
        }
        this.users[user]+=1
    }

    addNamed(baseName){

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

        return relevantPokemon[relevantPokemon.length-1];
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
    

    isAllShadowsRevealed(){

        let all = true;
        for (let k = 0; k < this.currentPokemonList.length; k++){
            let pkmn = this.currentPokemonList[k]
            if (!(this.revealedShadows.has(pkmn.id) || this.named.has(pkmn.baseName))){
                all = false;
                break
            }
        }
        return all;

    }


    revealNextShadow(){

        for (let k = 0; k < this.currentPokemonList.length; k++){
            if (!(this.named.has(this.currentPokemonList[k].baseName))){
                this.silhouetteDictionary[this.currentPokemonList[k].id] .style.display = "inline";
                this.pokeballDictionary[this.currentPokemonList[k].id] .style.display = "none";
                this.revealedShadows.add(this.currentPokemonList[k].id)
                return this.currentPokemonList[k].id
            }
        }
        return null;

    }
    revealRandomShadow(){
        if (!this.orderMode){
            let possibleIds = []
            for (let k = 0; k < this.currentPokemonList.length; k++){
                let pkmn = this.currentPokemonList[k]
                if (!(this.named.has(pkmn.baseName)) && !(this.revealedShadows.has(pkmn.id))){
                    possibleIds.push(this.currentPokemonList[k].id)
                }
            }
            if (possibleIds.length > 0){
                let index = Math.floor(Math.random() * possibleIds.length);
                let id = possibleIds[index]
                this.silhouetteDictionary[id] .style.display = "inline";
                this.pokeballDictionary[id] .style.display = "none";
                this.revealedShadows.add(id)
                return id
            }
        }
        return null;
    }


    revealSingleShadow(id){
        if (!this.revealedShadows.has(id)){
            this.revealedShadows.add(id)
            this.silhouetteDictionary[id] .style.display = "inline";
            this.pokeballDictionary[id] .style.display = "none";
        }
    }



    setSilhouettes() {
        
        for (let id of this.currentIds){
            this.revealSingleShadow(id)
        }
        /*
        for (let i = 0; i < this.silhouetteArray.length; i++) {
            if (this.silhouetteArray[i].style.display != "inline"){
                this.silhouetteArray[i].style.display = "inline";
                this.pokeballArray[i].style.display = "none";
            }
        }*/
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
            
            this.boxConstruction.push([box, [this.spriteDictionary[pokemon.id], unguessed]])
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
        let pkmn = this.pokemonIdDict[id]

        if (this.spriteDictionary[id].parentElement.id === "pokemon-box-big"){
            if (id === this.currentPokemonList[this.currentPokemonList.length-1].id){
                this.spriteDictionary[id].parentElement.classList.add('outline')
                this.spriteDictionary[id].parentElement.classList.add('outline'+this.getStyleName())
            }
        }
        else{
            if(!(this.boxCounters[currentBox].includes(pkmn))){
                this.boxCounters[currentBox].push(pkmn)
                if (this.boxCounters[currentBox].length === this.currentBoxes[currentBox].length){
                    let boxElem = this.spriteDictionary[id].parentElement;
                    boxElem.classList.add('outline')
                    boxElem.classList.add('outline'+this.getStyleName())
                }
            }
        }

    }

    stopReveal() {
        for (let i = 0; i < this.revealTimeouts.length; i++) {
            clearInterval(this.revealTimeouts[i])
        }
        this.revealTimeouts = [];
    }
    giveUp(){
        this.giveUpState = true
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


    resetCurrentSprites(){
        if (this.shinyEnabled){
            for (let id of this.currentIds){
                this.spriteDictionary[id].src = this.encodedImages['shiny'][id]
                this.unguessedDict[id].getElementsByTagName('img')[0].src = this.encodedImages['shiny'][id]
            }
        }else{
            for (let id of this.currentIds){
                this.spriteDictionary[id].src = this.encodedImages['sprite'][id]
                this.unguessedDict[id].getElementsByTagName('img')[0].src = this.encodedImages['sprite'][id]
            }         
        }
    }

    shinyOn(){
        this.shinyEnabled = true;
        this.resetCurrentSprites();
    }

    shinyOff(){
        this.shinyEnabled = false;
        this.resetCurrentSprites();
    }

}

let allLanguages = ['ENG', 'FRE', 'GER', 'ESP', 'ITA', 'KOR', 'JPN', 'CHT', 'CHS']

let typeList = ["normal", "fire", "water", "grass", "electric", "ice", "ground", "flying", "poison", "fighting", "psychic", "dark", "bug", "rock", "ghost", "dragon", "steel", "fairy"]
let boxIds = ["kanto", "johto", "hoenn", "sinnoh", "unova", "kalos", "alola", "mega", "unknown", "galar", "gmax", "hisui", "paldea", "kitakami"]
let genQuizBoxes = {
    "0": ["kanto", "johto", "hoenn", "sinnoh", "unova", "kalos", "mega", "alola", "unknown", "galar", "gmax", "hisui", "paldea", "kitakami"],
    "1": ["kanto"],
    "2": ["johto"],
    "3": ["hoenn"],
    "4": ["sinnoh"],
    "5": ["unova"],
    "6": ["kalos", "mega"],
    "7": ["alola", "unknown"],
    "8": ["galar", "gmax", "hisui"],
    "9": ["paldea", "kitakami"],
}

let soundEffect = new Audio('/sound-effects/gen3-click2.wav');
let soundEffectMissingno = new Audio('/sound-effects/032.wav');
soundEffectMissingno.volume = 0.2;
soundEffect.volume = 0.5;
let soundEffect2 = new Audio('/sound-effects/Dex-Fanfare.mp3');
let soundEffectJoin = new Audio('/sound-effects/quizjoin.wav');
soundEffectJoin.volume = 0.35
let soundEffectExit = new Audio('/sound-effects/quizleave.wav');
soundEffectExit.volume = 0.35
soundEffect2.volume = 0.3;

let soundEffectWrongOrder = new Audio('/sound-effects/wrong.mp3');
soundEffectWrongOrder.volume = 0.15

var nameAll;

let darkMode = false;
let isSpellingEnabled = false;
let currentType = ""
let activeTimer = false;
let isTwitchOn = false;
var soundEnabled = true;
var paused = false;
var isSocketHost = false;
let socket = null;
let shadowHelpInterval = null;
let shadowHelpIntervalMessage = null;
let timerObj = {}

var client;
let rankVals = [
    'rankone',
    'ranktwo',
    'rankthree'
]
let myUsername = "Quizmaster"

let lastDarkSwap = 0
let lastShinySwap = 0
let swapLimit = 10000


let missingOptionsDiv = document.getElementById('missednames-options');
let language_box = document.getElementById('lang_box')

let inputField = document.getElementById("pokemon");
let recentSprite = document.getElementById("recentsprite");

let spellingElement = document.getElementById("spelling");
let spellingButton = document.getElementById("spellingbutton");
let spellingCheck = document.getElementById("check");
let spellingHint = document.getElementById("hint");

let radioPokeball = document.getElementById("pokeball");
let radioSilhouette = document.getElementById("silhouette");
let orderModeMenu = document.getElementById("orderbox");
let enableOrderBtn =  document.getElementById("order-on");
let disableOrderBtn =  document.getElementById("order-off");
let shadowNextBtn =  document.getElementById("shadownext");
let shadowHelpRadio =  document.getElementById("shadowhelp");

let counterText = document.getElementById("counter");
let totalText = document.getElementById("total");

let giveUpBtn = document.getElementById("surrender");

let resetBtn = document.getElementById("resetButton");

let promptSilh = document.getElementById("promptsilhouette");
let promptOrderEnable = document.getElementById("promptorder-enable");
let promptOrderDisable = document.getElementById("promptorder-disable");
let promptGen = document.getElementById("promptswitch");

let promptSilhYes = document.getElementById("sil-yes");
let promptSilhNo = document.getElementById("sil-no");
let promptOrderEnableYes = document.getElementById("order-enable-yes");
let promptOrderDisableYes = document.getElementById("order-disable-yes");
let promptOrderEnableNo = document.getElementById("order-enable-no");
let promptOrderDisableNo = document.getElementById("order-disable-no");
let promptGenYes = document.getElementById("gen-yes");
let promptGenNo = document.getElementById("gen-no");

let timerBtn = document.getElementById("timer-set");
let stopwatchBtn = document.getElementById("timer0");


let timerText = document.getElementById("timer");
let pauseBtn = document.getElementById("pause")

let main = document.getElementById("main");
let footer = document.getElementById("footer");

let hostGame = document.getElementById("hostButton")
let linkGame = document.getElementById("linkButton")
let usernamePrompt = document.getElementById("promptusername")

let genBoxes = document.getElementById("gen-boxes")
let bigBox = document.getElementById("pokemon-box-big")

let saveButton = document.getElementById("savestate")
let loadButton = document.getElementById("loadstate")


let boxDict = {}
for (let i = 0; i < boxIds.length; i++) {
    let boxId = boxIds[i]
    boxDict[boxId] = document.getElementById("pokemon-box-" + boxId)
}

let randomIntFromInterval = function (min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
let quiz = new Quiz(boxDict, genQuizBoxes, allLanguages)


document.getElementById("return").onclick = function () {
    window.removeEventListener('beforeunload', beforeUnload);
    window.location.href = "/";
}

function noSuchRoom() {
    document.getElementById("return-message").innerText = "Room no longer exists"
    document.getElementById("return-overlay").style.display = "block";
}
function roomClosed() {
    document.getElementById("return-message").innerText = "The host has disbanded the room"
    document.getElementById("return-overlay").style.display = "block";
}
function multiplayerDisabled() {
    document.getElementById("return-message").innerText = "Multiplayer is undergoing maintenance. Try again later."
    document.getElementById("return-overlay").style.display = "block";
}


let multiplayerUrl;

let current = new URL(window.location.href);
if (current.hostname.includes('localhost')) {
    multiplayerUrl = "//localhost:3001/"
}
else {
    multiplayerUrl = "//stapo.cloud/"
}



function loadSocketIO() {
    return new Promise((resolve, reject) => {
        let path = multiplayerUrl + 'socket.io/socket.io.js'
        const script = document.createElement('script');
        script.src = path
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}


function getRoomNameFromURL() {
    const pathArray = window.location.pathname.split('/');
    // Assuming the room name is the second part of the URL
    return pathArray[pathArray.length - 1];
}
let roomId = getRoomNameFromURL();

MAX_RETRIES = 5
RETRY_INTERVAL_MS = 1000
retries = 0
async function fetchData(endpoint, warn=true) {
    try {
        let response = await fetch('/' + endpoint, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        });
        let data = await response.json();
        retries = 0
        return data;

    } catch (error) {
        console.error('Error fetching data:', error);
        if (warn){
            retries++;
            if (retries <= MAX_RETRIES) {
                await new Promise(resolve => setTimeout(resolve, RETRY_INTERVAL_MS));
                return fetchData(endpoint, warn);
            } else {
                console.error(error);
                alert("There seems to be a problem with fetching the data. Please try refreshing the page.");
            }
        }
    }
}

async function postMultiplayerServer(endpoint, body) {

    try {
        let response = await fetch(multiplayerUrl + endpoint, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
        return false;
    }

}
async function getMultiplayerServer(endpoint) {

    try {
        let response = await fetch(multiplayerUrl + endpoint, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        });
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
        return false;
    }

}

//if (roomId)
if (roomId.length > 1) {
    postMultiplayerServer("roomExists", { "roomId": roomId }).then((result) => {
        if (!result["success"]) {
            noSuchRoom();
        }
    })
    document.getElementById("guest-info").style.display = "block"
    document.getElementById("loadboxguest").style.display = "block"
    document.getElementById("savemenu").style.display = "none"
    document.getElementById("loadbox").style.display = "none"
    document.getElementById("extrashadow").style.display = "none"
    usernamePrompt.style.display = "block"
    radioSilhouette.style.display = "none"
    orderModeMenu.style.display = "none"
    giveUpBtn.style.display = "none"
    resetBtn.style.display = "none"
    timerBtn.style.display = "none"
    stopwatchBtn.style.display = "none"
    pauseBtn.style.display = "none"
    hostGame.style.display = "none"
    document.getElementById("genselect").style.display = "none"
    document.getElementById("typeselect").style.display = "none"
    document.getElementById("timers").style.display = "none"
    document.getElementById("twitchbox").style.display = "none"
    document.getElementById("fullQuizButton").style.display = "none"
    document.getElementById("playtext").style.display = "none"
    pauseBtn.style.display = "none"
    document.getElementById("unpause").style.display = "none"
    document.getElementById("pause-text").innerText = "Paused by host"
} else {
    roomId = null;
    document.getElementById("host-info").style.display = "block"
}
function beforeUnload(e){
    if (timerText.innerHTML != "00:00:00") {
        e.preventDefault();
        e.returnValue = '';
    }
}



async function loadData() {


    function onReset() {
        socketResetQuiz()
        //clearInterval(activeTimer);
        timerObj = { "type": "none" }
        roomUpdateTimer(timerObj)
        setCounter(0);
        setTotal(quiz.getMaxScore());
        resetTimer();
        inputField.disabled = false;



        if (!darkMode)
            recentSprite.src = '/sprites/unknown.png'
        else
            recentSprite.src = '/sprites/unknown-2.png'

        document.getElementById("silhouette").checked = false;

        changeFooterPosition();

        if (document.getElementById("panel").style.display == 'block') {
            //close and reset accordion
            document.getElementById("accordion").click();
        }
        document.getElementById("missednames").style.display = "none";

        document.getElementById("ranking2").style.display = "none";
        document.getElementById("ranking").style.display = 'none';

        emptyLeaderboard();

    }



    let allData = await fetchData("pkmnData.json")
    let encodedImages = allData["encoded_images"]

    quiz.loadData(allData, enabledLanguages, onReset)



    function host(username) {
        if (socket !== null) {
            let data = {}
            data["username"] = username
            if (myUsername in quiz.users) {
                quiz.users[username] = quiz.users[myUsername]
                delete quiz.users[myUsername]
            }
            myUsername = username

            data["state"] = getQuizState();
            data["state"]["timer"]["updatedAt"] = Date.now()
            socket.emit('host', data);
        }
    }


    function socketChangeQuiz() {
        if (socket !== null && isSocketHost) {
            socket.emit('stateChange', { "state": getQuizState() })
        }
    }
    function socketResetQuiz() {
        if (socket !== null && isSocketHost) {
            socket.emit('reset', { "state": getQuizState() })

        }
    }
    function socketSetSilhouettes() {
        if (socket !== null && isSocketHost) {
            socket.emit('stateChange', { "silhouettes": true })
        }
    }
    /*function socketSetOrderMode(val) {
        if (socket !== null && isSocketHost) {
            socket.emit('stateChange', { "orderMode": val })
        }
    }*/
    function socketSetPaused(val) {
        if (socket !== null && isSocketHost) {
            socket.emit('stateChange', { "paused": val })
            socketUpdateTimer();
        }
    }
    function socketRevealSingleShadow(id) {
        if (socket !== null && isSocketHost) {
            socket.emit('reveal', { "revealSingle": id })
        }
    }
    function socketGiveUp() {
        if (socket !== null && isSocketHost) {
            socket.emit('stateChange', { "giveup": true })
        }
    }
    function socketCongrats() {
        if (socket !== null && isSocketHost) {
            socket.emit('stateChange', { "showcongrats": true })
        }
    }
    function socketHostMessage(message) {
        if (socket !== null && isSocketHost) {
            socket.emit('message', { "message": message })
        }
    }
    function socketUpdateTimer() {
        timerObj["updatedAt"] = Date.now()
        if (socket !== null && isSocketHost) {
            socket.emit('stateChange', { "timer": timerObj })
        }
    }
    function enableSocket(onSuccess, onFail) {
        loadSocketIO().then(() => {
            try{
                socket = io(multiplayerUrl);

                socket.on('userJoined', (username) => {
                    if (soundEnabled){
                        soundEffectJoin.play();
                    }
                    showUserMessage(username + " joined the room !")
                });
                socket.on('userLeft', (username) => {
                    if (soundEnabled){
                        soundEffectExit.play();
                    }
                    showUserMessage(username + " left the room !")
                });
    
                socket.on('roomCreated', (roomId) => {
    
                    function copyLink() {
                        var currentURL = new URL(window.location.href);
                        var currentDomain = currentURL.hostname + (currentURL.port ? ':' + currentURL.port : '');
                        let url = "https://" + currentDomain + "/join/" + roomId
                        if (currentDomain.includes('localhost')){
                            url = "http://" + currentDomain + "/join/" + roomId
                        }
                        navigator.clipboard.writeText(url)
                        showUserMessage("Copied link to clipboard (" + url + ")")
                    }
    
                    linkGame.onclick = function () {
                        copyLink()
                    }
                    linkGame.style.display = "block"
                    hostGame.style.display = "none"
                    copyLink()
    
                });
    
                socket.on('named', (data) => {
                    const { username, id } = data;
                    quiz.addNamed(id)
                    quiz.addUserPoint(username)
    
                    if (soundEnabled) {
                        soundEffect.play();
                    }
                    setCounter(quiz.getScore());
                    if (!activeTimer) {
                        if (currentTime === 0) {
                            startTimer();
                        } else {
                            startCountdown(currentTime)
                        }
                    }
                    if (quiz.getMaxScore() === quiz.getScore()) {
                        if (roomId === null) {
                            showCongrats();
                        }
                    }
                    updateRankings()
                    updateFullLeaderboard()
                });
    
    
                socket.on('noSuchRoom', () => {
                    noSuchRoom();
                });
                socket.on('reset', () => {
                    quiz.reset();
                });
                socket.on('end', () => {
                    roomClosed();
                });
                socket.on('message', (data) => {
                    showUserMessage(data["message"])
                });
                socket.on('scores', (users) => {
                    quiz.users = users;
                    updateFullLeaderboard();
                    updateRankings()
                });
                socket.on('reveal', (data) => {
                    if ("revealSingle" in data){
                        quiz.revealSingleShadow(data["revealSingle"])
                    }else if ("revealMultiple" in data){
                        for (let i = 0; i < data["revealMultiple"].length; i++){
                            quiz.revealSingleShadow(data["revealMultiple"][i])
                        }
                    }
                });
    
                // Listen for user joining
                socket.on('stateChange', (data) => {
                    for (let key in data) {
                        if (key === "giveup") {
                            giveUp();
                        } else if (key === "silhouettes") {
                            if (data[key]){
                                quiz.setSilhouettes()
                            }
                        }
                       /* else if (key === "orderMode") {
                           quiz.orderMode = true;
                        }*/ else if (key === "showcongrats") {
                            showCongrats();
                        } else if (key === "paused") {
                            if (data["paused"]) {
                                pauseOn();
                            } else {
                                pauseOff();
                            }
                        } else if (key === "state") {
                            setQuizState(data["state"])
                            updateRankings()
                            updateFullLeaderboard()
                        } else if (key === "timer") {
                            roomUpdateTimer(data["timer"])
                        }
                    }
                });
                onSuccess()
            }catch (error){
                onFail();
                console.log(error)
            }
        }).catch((error) => {
            onFail();
        });
    }



    // Function to join a room
    function joinRoom(username) {
        myUsername = username;
        socket.emit('joinRoom', { roomId, username });
    }
    // Function to join a room
    function socketNamedPkmn(baseName) {
        socket.emit('named', { "id": baseName });
    }

    function hostGameClick() {
        
        usernamePrompt.style.display = "block"
        let usernameInput = document.getElementById("input-username")
        let usernameButton = document.getElementById("username-confirm")

        usernameButton.onclick = function () {
            let username = document.getElementById("input-username").value
            if (username.length < 2) {
                showUserMessage("Username should be at least 2 characters long")
                return;
            } else {
                
                let onSuccess = function (){
                    isSocketHost = true;
                    usernamePrompt.style.display = "none"
                    usernamePrompt.removeEventListener("keyup", detectEnter);
                    hostGame.disabled = true;
                    hostGame.innerText = "Generating room..."
                    host(username);
                }

                let onFail = function (){
                    multiplayerDisabled();
                }

                enableSocket(onSuccess, onFail)
            }

        }
        usernameInput.focus();
        function detectEnter(event) {
            if (event.keyCode === 13) {
                usernameButton.click();
            }else if (event.keyCode === 27) {
                usernamePrompt.style.display = "none"
            }
        }
        usernamePrompt.addEventListener("keyup", detectEnter);

        usernamePrompt.onclick = function () {
            usernamePrompt.style.display = "none"
        }
        usernameInput.onclick = function(e){
            e.stopPropagation();
        }


    }

    function hostGameDisabled() {
        showUserMessage("Multiplayer is undergoing maintenance. Try again later.")
    }

    if (roomId === null) {

        async function checkMultiplayerStatus() {
            let multiplayerOnline = getMultiplayerServer("online");
            let multiplayerEnabled = fetchData("multiplayerEnabled", false);

            let isOnline = await multiplayerOnline
            let isEnabled = (await multiplayerEnabled)["result"]

            if (isOnline && isEnabled) {
                hostGame.onclick = hostGameClick
            } else {
                hostGame.onclick = hostGameDisabled
            }
        }
        checkMultiplayerStatus()
        setInterval(() => {
            checkMultiplayerStatus();
        }, 20000)

    }



    if (roomId !== null) {
        usernamePrompt.style.display = "block"
        let usernameInput = document.getElementById("input-username")
        let usernameButton = document.getElementById("username-confirm")

        usernameButton.onclick = function () {
            let username = document.getElementById("input-username").value
            if (username.length < 2) {
                showUserMessage("Username should be at least 2 characters long")
                return;
            } else {

                let onSuccess = function() {
                    usernameInput.removeEventListener("keyup", detectEnter);
                    usernamePrompt.style.display = "none"
                    off2()
                    joinRoom(username)
                }

                let onFail = function (){
                    showUserMessage("Multiplayer is undergoing maintenance. Try again later.")

                }
                enableSocket(onSuccess, onFail);
            }

        }
        setTimeout(() => {
            usernameInput.focus();
        }, 100);

        function detectEnter(event) {
            if (event.keyCode === 13) {
                usernameButton.click();
            }
        }
        usernameInput.addEventListener("keyup", detectEnter);

    }


    let visualizeButtonClick = function (elem) {
        elem.classList.add("smolbuttonx")
        if (darkMode) {
            elem.classList.add("smolbuttonxdark")
        }
        let currentType = quiz.getStyleName();
        if (currentType !== "") {
            elem.classList.add("smolbuttonx" + currentType)
            if (darkMode) {
                elem.classList.add("smolbuttonxdark" + currentType)
            }
        }
    }


    darkmodebg = new Image();
    darkmodebg.src = '/images/background-dark.svg';

    unknownDark = new Image();
    unknownDark.src = '/sprites/unknown-2.png';

    missingno = new Image();
    missingno.src = '/images/missingno.png';

    missingno = new Image();
    missingno.src = '/images/missingno2.png';

    missingno = new Image();
    missingno.src = '/images/missingno3.png';


    let loadArtists = function () {

        let setValues = function (jsonValue) {

            table = document.getElementById("creditstable")

            for (let i = 0; i < jsonValue.length; i++) {
                const element = jsonValue[i];
                const sprites = element.sprites;
                const artists = element.artists;
                const QCs = element.QCs;

                let spriteString = '';
                for (let j = 0; j < sprites.length; j++) {
                    spriteString += sprites[j] + '<br>';
                }

                let artistString = '';
                for (let j = 0; j < artists.length; j++) {
                    artistString += artists[j] + ', ';
                }
                artistString = artistString.substring(0, artistString.length - 2)
                if (QCs.length > 0) {
                    if (artists.length > 0) {
                        artistString += '<br>QC - ';
                    } else {
                        artistString += 'QC - ';
                    }
                    for (let j = 0; j < QCs.length; j++) {
                        artistString += QCs[j] + ', ';
                    }
                    artistString = artistString.substring(0, artistString.length - 2)
                }
                const row = `<tr><td>${spriteString}</td><td>${artistString}</td></tr>`;
                table.innerHTML += row;
            }

        }




        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", '/artists', true);

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status === 200) {
                    setValues(JSON.parse(this.response));
                } else {
                    console.log('error loading image list, retrying...');
                    setTimeout(function () {
                        loadArtists();
                    }, 2000);
                }

            }
        };
        xhttp.send();

    }



    function setCounter(count) {
        try{
            resetShadowHelp();
        }
        catch(e){

        }
        counterText.innerHTML = count;
    }

    function setTotal(count) {
        totalText.innerHTML = count;
    }

    function startTimer() {
        let prevTimestamp = Date.now();
        let total = 0
        timerObj = { "type": "timer", "t": total }
        socketUpdateTimer();
        roomUpdateTimer(timerObj)
    }

    let lastDiff;
    function updateTimer(msDiff) {
        if (msDiff < 0) {
            msDiff = 0;
        }
        lastDiff = msDiff;

        timerText.innerHTML = msToTime(msDiff);

    }

    function resetTimer() {
        delete timerObj["savedAt"]
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

    let currentTime = 0;
    function applyNewTimer(timerVal) {
        currentTime = timerVal
        quiz.reset();
        resetTimer();
        let initialTimerText = timerText.innerHTML
        if (timerText.innerHTML != initialTimerText) {
            if (timerText.innerHTML === "00:00:00") {
                showUserMessage("Timer set to stopwatch")
            } else {
                showUserMessage("Timer set to " + timerText.innerHTML)
            }
        }
    }


    function cancel() {
        document.getElementById("prompttimer").style.display = 'none';
    }

    let updateTimerFunc = function (timerVal) {
        if (!activeTimer) {
            applyNewTimer(timerVal)
        } else {
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


    loadArtists();

    let visualizeButtonUnclick = function (elem) {
        elem.classList.remove("smolbuttonx")
        elem.classList.remove("smolbuttonxdark")
        let currentType = quiz.getStyleName();
        if (currentType !== "") {
            if (currentType == "dark") {
                currentType = "evil"
            }
            elem.classList.remove("smolbuttonx" + currentType)
            elem.classList.remove("smolbuttonxdark" + currentType)
        }
    }

    let changeQuiz = function () {
        setTotal(quiz.getMaxScore());
        setCounter(quiz.getScore());
        socketChangeQuiz();
        changeFooterPosition();
    }
    let changeToGenQuiz = function (genNum) {
        quiz.setGenQuiz(genNum);
        changeQuiz();
    }
    let changeToTypeQuiz = function (type) {
        quiz.setTypeQuiz(type);
        changeQuiz();
    }

    for (let genKey in genQuizBoxes) {
        //calling functions, popup and changing button CSS
        document.getElementById("gen" + genKey).onclick = function () {
            let swapGen = function () {
                document.getElementById("genselection").onclick = off2;
                document.getElementById("typeselection").onclick = off2;
                promptGen.style.display = "none";
                changeToGenQuiz(genKey)
            }
            promptGenYes.onclick = function () {
                swapGen();
                off2();
            }
            promptGenNo.onclick = function () {
                promptGen.style.display = "none";
            }
            if (quiz.getScore() !== 0) {
                promptGen.style.display = 'inline';
            } else {
                swapGen();
                off2();
            }
        }
    }


    let allMissingLangButtons = []

    for (let i = 0; i < allLanguages.length; i++) {
        let key = allLanguages[i]
        let lang = document.createElement("div");
        lang.innerHTML += key
        lang.classList.add('smolbutton')
        lang.classList.add('langbutton')
        lang.id = 'missing-' + key

        lang.onclick = function () {
            let currentType = quiz.getStyleName();
            for (let i = 0; i < allMissingLangButtons.length; i++) {
                if (allMissingLangButtons[i] != lang) {
                    allMissingLangButtons[i].classList.remove('smolbuttonSwap')
                    allMissingLangButtons[i].classList.remove('smolbuttonSwap' + currentType)
                    allMissingLangButtons[i].classList.add('smolbutton')
                    allMissingLangButtons[i].classList.add('smolbutton' + currentType)

                    if (darkMode) {
                        allMissingLangButtons[i].classList.add('smolbuttondark')
                        allMissingLangButtons[i].classList.add('smolbuttondark' + currentType)
                    }
                }
                lang.classList.remove('smolbutton');
                lang.classList.remove('smolbutton' + currentType);
                lang.classList.remove('smolbuttondark');
                lang.classList.remove('smolbuttondark' + currentType);
                lang.classList.add('smolbuttonSwap');
                lang.classList.add('smolbuttonSwap' + currentType);
            }

            quiz.setLanguage(key);
        }

        missingOptionsDiv.appendChild(lang);
        allMissingLangButtons.push(lang);
    }



    function logMisspelling(val, suggestion) {
        try {
            let xhttp = new XMLHttpRequest();
            xhttp.open("POST", '/misspelling', true);
            xhttp.setRequestHeader("Content-Type", "application/json");
            xhttp.send(JSON.stringify({ misspelling: val, suggestion: suggestion }));
        } catch (err) {

        }
    }





    function startCountdown(minutes) {

        let countdownInMs = minutes * 60 * 1000;
        let startTimestamp = countdownInMs + Date.now();
        let prevTimestamp = Date.now()
        timerObj = { "type": "countdown", "t": startTimestamp }
        roomUpdateTimer(timerObj)
        socketUpdateTimer();
    }


    function parseInput(val, username) {

        let onCorrect = null
        if (isSocketHost || roomId !== null) {
            onCorrect = (pkmn) => {
                socketNamedPkmn(pkmn)
            }
        }
        let res = quiz.parseInput(val, username, onCorrect);
        let correct = res[0]
        let message = res[1]
        if (correct) {
            if (soundEnabled) {
                soundEffect.play();
            }
            setCounter(quiz.getScore());
            console.log('test2', activeTimer)
            if (!activeTimer) {
                console.log('test3')
                if (currentTime === 0) {
                    startTimer();
                } else {
                    startCountdown(currentTime)
                }
            }
            if (quiz.getMaxScore() === quiz.getScore()) {
                if (roomId === null) {
                    showCongrats();
                }

            }

            if (isSocketHost || roomId !== null || isTwitchOn) {
                updateRankings()
                updateFullLeaderboard()
            }
        }

        return [correct, message]
    }

    nameAll = function () {
        for (let id of quiz.currentIds) {
            if (id === "sandslash"){
                break
            }
            parseInput(quiz.pokemonIdDict[id].baseName, myUsername)
        }
    }

    inputField.oninput = function () {
        if (inputField.value.length > 0) {
            if (inputField.value[inputField.value.length - 1] === '?') {
                inputField.value = inputField.value.substring(0, inputField.value.length - 1);
                showHint();
                return;
            }else if (quiz.name !== "none" && inputField.value[inputField.value.length - 1] === ',') {
                inputField.value = inputField.value.substring(0, inputField.value.length - 1);
                shadowNextBtn.click();
                return;
            }

            res = parseInput(inputField.value, myUsername);

            let correct = res[0]
            let message = res[1]

            if (message !== null && message.includes("not the next")){
                if (soundEnabled){
                    soundEffectWrongOrder.play()

                }
            }

            if (message === "missingno") {
                inputField.value = '';
            }
            else if (correct) {
                inputField.value = '';
                hideHint()
            }
            else if ((!correct) && message !== null) {
                inputField.value = '';
                hideHint()
                showUserMessage(message);
            }
        }
    }



    function showCongrats() {


        socketCongrats();
        inputField.disabled = true;
        updateFullLeaderboard();

        clearInterval(activeTimer);
        timerObj = { "type": "none" }

        document.getElementById("overlay").style.display = "block";
        if (soundEnabled) {
            soundEffect2.play();
        }
        let timerScore = '';
        let pokemonCount = ''
        if (currentTime === 0) {
            timerScore = timerText.innerHTML;
            pokemonCount = ' every ';
        } else {
            if (lastDiff === 0) {
                timerScore = currentTime + ' minutes';
            } else {
                timerScore = msToTime(currentTime * 60 * 1000 - lastDiff)
            }
            pokemonCount = ' ' + quiz.getScore() + ' '
        }




        document.getElementById("gen-name").innerHTML = quiz.getEndText();
        document.getElementById("timer-score").innerHTML = timerScore;
        document.getElementById("currentcount").innerHTML = pokemonCount
        document.getElementById("shadow-count").innerHTML = quiz.revealedShadows.size
        if (quiz.orderMode){
            document.getElementById("order-congrats").innerHTML = " in Pokédex order!"
        }else{
            document.getElementById("order-congrats").innerHTML = "!"
        }
        if (quiz.revealedShadows.size > 0) {
            document.getElementById("trychallenge").style.display = "block";
        } else {
            document.getElementById("trychallenge").style.display = "none";
        }

        if (Object.keys(quiz.users).length > 1) {
            document.getElementById("ranking2").style.display = "block";
            //document.getElementById("accordion2").click();
        }
        document.getElementById("ranking").style.display = "none";

        quiz.animateCongrats()
    }

    function giveUp() {

        socketGiveUp();
        updateFullLeaderboard();
        inputField.disabled = true;

        if (Object.keys(quiz.users).length > 1) {
            document.getElementById("ranking2").style.display = "block";
            //document.getElementById("accordion2").click();
        }
        document.getElementById("ranking").style.display = "none";

        clearInterval(activeTimer);
        timerObj = { "type": "none" }

        quiz.giveUp();

        document.getElementById("missednames").style.display = "block";
        document.getElementById("accordion").click();

    }

    giveUpBtn.onclick = giveUp;

    function getSimilarityScores(input) {
        let similarityDict = {}
        input = standardizeName(input)
        let allPossibleNames = quiz.nameArr

        for (const langName of allPossibleNames) {
            let similarityScore = Levenshtein(standardizeName(langName), input)
            similarityDict[langName] = similarityScore
        }
        sortedVals = sortDictionaryByValue(similarityDict)
        return sortedVals.reverse()
    }

    function usePokeball() {
        quiz.usePokeball();
    }

    radioPokeball.onclick = usePokeball;

    radioSilhouette.onclick = function () {
        if (quiz.isSilhouettesEnabled() !== true) {
            promptSilh.style.display = "inline";
        }
    };

    promptSilhYes.onclick = function () {
        quiz.setSilhouettes();
        socketSetSilhouettes()
        promptSilh.style.display = "none";
        radioSilhouette.checked = true;
    }
    promptSilhNo.onclick = function () {
        promptSilh.style.display = "none";
        radioSilhouette.checked = false;
    }


    enableOrderBtn.onclick = function () {
        if (!quiz.orderMode){
            if("types" in quiz.filters){
                showUserMessage("Order mode does not work with type quizzes")
                
            }else{
                promptOrderEnable.style.display = "inline";
            }
        }
    };
    disableOrderBtn.onclick = function () {
        if (quiz.orderMode){
            promptOrderDisable.style.display = "inline";
        }
    };

    promptOrderEnableYes.onclick = function () {
        visualizeButtonUnclick(disableOrderBtn)
        visualizeButtonClick(enableOrderBtn)
        quiz.setOrderMode(true)
        //socketSetOrderMode(true)
        changeQuiz()
        promptOrderEnable.style.display = "none";
    }
    promptOrderEnableNo.onclick = function () {
        promptOrderEnable.style.display = "none";
    }

    promptOrderDisableYes.onclick = function () {
        visualizeButtonUnclick(enableOrderBtn)
        visualizeButtonClick(disableOrderBtn)
        quiz.setOrderMode(false)
        changeQuiz()
        //socketSetOrderMode(false)
        promptOrderDisable.style.display = "none";
        
    }
    promptOrderDisableNo.onclick = function () {
        promptOrderDisable.style.display = "none";
    }

    shadowNextBtn.onclick = function(){
        
        if (quiz.name !== "none" && !(quiz.paused) && (quiz.getMaxScore() !== quiz.getScore())){
            if ((socket === null || isSocketHost) ){
            
                if (quiz.orderMode){
                    let id = quiz.revealNextShadow()
                    if (id !== null){
                        socketRevealSingleShadow(id);
                    }
                }else{
                    let id = quiz.revealRandomShadow()
                    if (id !== null){
                        socketRevealSingleShadow(id);
                    }
                }
            }
        }
    }

    function resetShadowHelp(){

        if (shadowHelpInterval !== null){
            clearTimeout(shadowHelpInterval)
            clearTimeout(shadowHelpIntervalMessage)
    
            shadowHelpIntervalMessage = setTimeout(()=>{
                if (!(quiz.paused) && (quiz.getMaxScore() !== quiz.getScore() && quiz.getScore() > 0 && !quiz.isAllShadowsRevealed() && !quiz.giveUpState)){
                    socketHostMessage("Revealing a shadow in 3 seconds ...")
                    showUserMessage("Revealing a shadow in 3 seconds ...")
                }
            }, 17000)
    
            shadowHelpInterval = setTimeout(()=>{
                if (!(quiz.paused) && (quiz.getMaxScore() !== quiz.getScore() && quiz.getScore() > 0 && !quiz.isAllShadowsRevealed()  && !quiz.giveUpState)){
                    shadowNextBtn.click();
                }
                resetShadowHelp();
            }, 20000)
        }
    }


    shadowHelpRadio.onclick = function(){
        if (shadowHelpInterval !== null){
            visualizeButtonUnclick(shadowHelpRadio)
            clearTimeout(shadowHelpInterval)
            clearTimeout(shadowHelpIntervalMessage)
            showUserMessage("Disabled auto-reveal of shadows")    
            shadowHelpInterval = null
        }else{
            visualizeButtonClick(shadowHelpRadio)
            if (quiz.orderMode){
                showUserMessage("Activated auto-reveal of next shadow every 20 seconds")    
            }else{
                showUserMessage("Activated auto-reveal of random shadow every 20 seconds")    
            }
    
            shadowHelpIntervalMessage = setTimeout(()=>{
                if (!(quiz.paused) && (quiz.getMaxScore() !== quiz.getScore() && quiz.getScore() > 0 && !quiz.isAllShadowsRevealed() && !quiz.giveUpState)){
                    socketHostMessage("Revealing a shadow in 3 seconds ...")
                    showUserMessage("Revealing a shadow in 3 seconds ...")
                }
            }, 17000)
    
            shadowHelpInterval = setTimeout(()=>{
                if (!(quiz.paused) && (quiz.getMaxScore() !== quiz.getScore() && quiz.getScore() > 0 && !quiz.isAllShadowsRevealed() && !quiz.giveUpState)){
                    shadowNextBtn.click();
                }
                resetShadowHelp();
            }, 20000)
        }
    }


    let misspellings = allData["misspellings"]
    //tradeoff memory for perofrmance
    let efficientMisspellingsTable = {}
    for (let key in misspellings) {
        for (let i = 0; i < misspellings[key].length; i++) {
            efficientMisspellingsTable[misspellings[key][i]] = key
        }
    }


    function showHint() {
        if (isSpellingEnabled) {
            inputField.focus();
            spellingCheck.style.display = "none";
            spellingHint.style.display = "inline-block"
            let suggestion = getMostSimilarInput(standardizeName(inputField.value))
            spellingHint.innerHTML = suggestion
            if (inputField.value.length > 0) {
                logMisspelling(inputField.value, suggestion)
            }
        }
    }
    document.getElementById("hintplace").onclick = showHint
    function getMostSimilarInput(input) {
        if (input.length > 3) {
            let sortedList = getSimilarityScores(input)
            if (sortedList.length > 0) {
                let best = sortedList[0];
                let pkmn = best[0];
                let score = best[1];

                if (input in efficientMisspellingsTable) {
                    return efficientMisspellingsTable[input]
                }

                if (score == 1) {
                    return pkmn
                }
                else if (input.length === 5 && score <= 2) {
                    return pkmn;
                }
                else if (input.length === 6 && score <= 2) {
                    return pkmn;
                }
                else if (input.length === 7 && score <= 3) {
                    return pkmn;
                }
                else if (input.length >= 8 && score <= 4) {
                    return pkmn;
                }
            }
        }

        return "not found"
    }


    let updateFullLeaderboard = function () {
        let leaderboardDiv = document.getElementById("leaderboard2");

        while (leaderboardDiv.firstChild) {
            leaderboardDiv.firstChild.remove()
        }
        if (Object.keys(quiz.users).length > 1) {

            let sorted = sortDictionaryByValue(quiz.users);
            let currentTypeName = quiz.getStyleName();

            for (let i = 0; i < sorted.length; i++) {
                let scoreDiv = document.createElement('div');
                let placeDiv = document.createElement('div');
                let usernameDiv = document.createElement('div');
                let nrGuessedDiv = document.createElement('div');
                let ballImg = document.createElement("img");
                ballImg.classList.add('spriteb');
                ballImg.src = '/sprites/unknown-1.png';
                scoreDiv.classList.add('board')
                placeDiv.classList.add('place', 'inlinebox', 'inlinebox' + currentTypeName)
                usernameDiv.classList.add('twitchname', 'inlinebox', 'inlinebox' + currentTypeName)
                nrGuessedDiv.classList.add('number', 'inlinebox', 'inlinebox' + currentTypeName)
                if (darkMode) {
                    placeDiv.classList.add('inlineboxdark')
                    placeDiv.classList.add('inlineboxdark' + currentTypeName)
                    usernameDiv.classList.add('inlineboxdark')
                    usernameDiv.classList.add('inlineboxdark' + currentTypeName)
                    nrGuessedDiv.classList.add('inlineboxdark')
                    nrGuessedDiv.classList.add('inlineboxdark' + currentTypeName)
                }

                let textNode = document.createTextNode('#' + (i + 1));
                placeDiv.appendChild(textNode)
                let textNode2 = document.createTextNode(sorted[i][0]);
                if (sorted[i][0] === myUsername) {
                    usernameDiv.classList.add('quizmaster')
                }
                usernameDiv.appendChild(textNode2)
                let textNode3 = document.createTextNode(' ' + sorted[i][1]);
                nrGuessedDiv.append(ballImg, textNode3)
                scoreDiv.append(placeDiv, usernameDiv, nrGuessedDiv)
                leaderboardDiv.append(scoreDiv);
            }
            changeFooterPosition()
        }
    }

    document.getElementById("accordion2").onclick = function () {

        if (document.getElementById("leaderboard2").style.display == 'block') {
            document.getElementById("leaderboard2").style.display = 'none';
            document.getElementById("arrow2").classList.add('adown');
            document.getElementById("arrow2").classList.remove('aup');

        } else {
            document.getElementById("leaderboard2").style.display = 'block'
            document.getElementById("arrow2").classList.add('aup');
            document.getElementById("arrow2").classList.remove('adown');
            updateFullLeaderboard();


        }
        changeFooterPosition()
    }
    for (let i = 0; i < typeList.length; i++) {
        let currentIndex = i;
        document.getElementById('b-' + typeList[i]).onclick = function () {
            let swapGen = function () {
                document.getElementById("typeselection").onclick = off2;
                document.getElementById("genselection").onclick = off2;
                promptGen.style.display = "none";
                quiz.reset();
                changeToTypeQuiz(typeList[currentIndex])

            }

            promptGenYes.onclick = function () {
                swapGen();
                off2();

            }
            promptGenNo.onclick = function () {
                promptGen.style.display = "none";
            }
            if (quiz.getScore() !== 0) {
                promptGen.style.display = 'inline';
            } else {
                swapGen();
                off2();
            }

        }
    }


    let typePartyIntevalId = null;
    let enableTypeParty = function () {

        let currentPartyIndex = 0

        if (currentType !== "") {
            document.getElementById("body").classList.remove(currentType);
        }

        typePartyIntevalId = setInterval(() => {

            document.getElementById("body").classList.remove(typeList[currentPartyIndex]);
            currentPartyIndex += 1
            if (currentPartyIndex == typeList.length) {
                currentPartyIndex = 0
            }
            document.getElementById("body").classList.add(typeList[currentPartyIndex]);
            if (darkMode) {
                document.getElementById("body").classList.add("blenddark")
            }
            else {
                document.getElementById("body").classList.add("blend")
            }

        }, 150);

    }

    let disableTypeParty = function () {

        if (typePartyIntevalId !== null) {
            clearInterval(typePartyIntevalId);
        }
        for (let i = 0; i < typeList.length; i++) {
            document.getElementById("body").classList.remove(typeList[i])
        }

        if (currentType === "") {
            document.getElementById("body").classList.remove("blend")
            document.getElementById("body").classList.remove("blenddark")
        } else {
            if (darkMode) {
                document.getElementById("body").classList.add("blenddark")
            }
            else {
                document.getElementById("body").classList.add("blend")
            }
            document.getElementById("body").classList.add(currentType);
        }

    }


    document.getElementById("accordion2").click();
    //images to loop through
    let images = [
        [encodedImages['sprite']['bulbasaur'], encodedImages['sprite']['charmander'], encodedImages['sprite']['squirtle']],
        [encodedImages['sprite']['cyndaquil'], encodedImages['sprite']['totodile'], encodedImages['sprite']['chikorita']],
        [encodedImages['sprite']['mudkip'], encodedImages['sprite']['treecko'], encodedImages['sprite']['torchic']],
        [encodedImages['sprite']['turtwig'], encodedImages['sprite']['chimchar'], encodedImages['sprite']['piplup']],
        [encodedImages['sprite']['tepig'], encodedImages['sprite']['oshawott'], encodedImages['sprite']['snivy']],
        [encodedImages['sprite']['froakie'], encodedImages['sprite']['chespin'], encodedImages['sprite']['fennekin']],
        [encodedImages['sprite']['rowlet'], encodedImages['sprite']['litten'], encodedImages['sprite']['popplio']],
        [encodedImages['sprite']['scorbunny'], encodedImages['sprite']['sobble'], encodedImages['sprite']['grookey']],
        [encodedImages['sprite']['quaxly'], encodedImages['sprite']['sprigatito'], encodedImages['sprite']['fuecoco']],
        //[encodedImages['sprite']['oshawott'],encodedImages['sprite']['rowlet'], encodedImages['sprite']['cyndaquil']]
    ]

    //variable for current image index
    let currentImageIndex = 0


    let spriteCycling = true;

    let spriteCycles = allData["sprite_cycles"];

    function cycleSprites(updateCounter) {

        let updateFunc = (pkmn, data) => {
            let key = standardizeName(pkmn)

            let pathName;
            if (quiz.shinyEnabled) {
                pathName = 'shiny'
            } else {
                pathName = 'sprite'
            }

            let currentIndex = updateCounter % data[pkmn].length;

            currentIndex = spriteCycling ? currentIndex : 0;

            let currentSprite = standardizeName(data[pkmn][currentIndex]);

            quiz.spriteDictionary[standardizeName(key)].src = encodedImages[pathName][currentSprite];
            quiz.unguessedDict[standardizeName(key)].getElementsByTagName('img')[0].src = encodedImages[pathName][currentSprite]

            if (currentSprite in quiz.pokemonIdDict) {
                quiz.unguessedDictTexts[standardizeName(key)].nodeValue = quiz.pokemonIdDict[standardizeName(data[pkmn][currentIndex])].getFormattedName(quiz.currentLang)
            } else {
                quiz.unguessedDictTexts[standardizeName(key)].nodeValue = quiz.pokemonIdDict[standardizeName(pkmn)].getFormattedName(quiz.currentLang)
            }
        }


        for (let pkmn in spriteCycles) {
            updateFunc(pkmn, spriteCycles)
        }
        for (let pkmn in quiz.spriteCycles) {
            updateFunc(pkmn, quiz.spriteCycles)
        }
    }


    let TypeButtonElement = document.getElementById("type0");
    let originalClassListLength = TypeButtonElement.classList.length
    let cycleTypes = function (updateCounter) {
        let imgElement = document.getElementById("type-img");
        let buttonElement = document.getElementById("type0");

        let currentIndex = updateCounter % typeList.length;

        currentIndex = spriteCycling ? currentIndex : 0;

        let typeName = typeList[currentIndex]
        if (typeName === "dark") {
            typeName = "evil"
        }

        imgElement.src = "/images/types/" + typeList[currentIndex].toUpperCase() + ".svg"


        if (buttonElement.classList.length !== originalClassListLength) {
            buttonElement.classList.remove(buttonElement.classList[buttonElement.classList.length - 1])
        }

        buttonElement.classList.add("button" + typeName)
    }


    let rotateFunc = function () {

        for (let i = 0; i < images.length; i++) {

            //select specific <img>
            let imgElement = document.getElementById("gen" + [i + 1] + "img");
            //its src path gets changed to the current image index
            imgElement.src = images[i][currentImageIndex % images[0].length];
        }

        cycleTypes(currentImageIndex)
        cycleSprites(currentImageIndex)

        //move to the next image index
        currentImageIndex += 1

    }

    //starts a repeating function 
    let spriteIntervalId = setInterval(() => {
        rotateFunc()
    }, 2000); //500ms (can be changed ofc)

    rotateFunc();

    let stopCycling = function () {
        spriteCycling = false;
        rotateFunc();
    }
    let startCycling = function () {
        spriteCycling = true;
    }


    document.getElementById("cycle-on").onclick = () => {
        startCycling();
        visualizeButtonUnclick(document.getElementById("cycle-off"))
        visualizeButtonClick(document.getElementById("cycle-on"))

    };
    document.getElementById("cycle-off").onclick = () => {
        stopCycling();
        visualizeButtonUnclick(document.getElementById("cycle-on"))
        visualizeButtonClick(document.getElementById("cycle-off"))

    };

    window.addEventListener('beforeunload', beforeUnload);


    document.getElementById("twitch-on").onclick = function () {
        if (!isTwitchOn && document.getElementById("twitch-channel").value != "") {
            isTwitchOn = true;
            let channelName = document.getElementById("twitch-channel").value;
            console.log('enable', channelName);
            document.getElementById("twitch-channel").disabled = true;

            visualizeButtonUnclick(document.getElementById("twitch-off"))
            visualizeButtonClick(document.getElementById("twitch-on"))

            client = new tmi.Client({
                channels: [document.getElementById("twitch-channel").value]
            });
            client.on("connected", function (address, port) {
                showUserMessage("Connected to Twitch chat for " + channelName)
            });

            client.connect()



            client.on('message', (channel, tags, message, self) => {
                console.log('Twitch chat message - ' + `${tags['display-name']}: ${message}`);
                let twitchUsername = tags['display-name'].toLowerCase()
                let isVip = false;

                if ("badges" in tags && tags["badges"] != null) {
                    if ("vip" in tags["badges"]) {
                        if (tags["badges"]["vip"] == "1") {
                            isVip = true;
                        }
                    }
                    if ("moderator" in tags["badges"]) {
                        if (tags["badges"]["moderator"] == "1") {
                            isVip = true;
                        }
                    }
                    if ("broadcaster" in tags["badges"]) {
                        if (tags["badges"]["broadcaster"] == "1") {
                            isVip = true;
                        }
                    }
                }
                if (isVip || twitchUsername == 'adeptcharon' || twitchUsername == 'stapotv') {
                    if (standardizeName(message) === "scrolldown".toLowerCase()) {
                        window.scrollBy(0, 60);
                    } else if (standardizeName(message) === "scrollup".toLowerCase()) {
                        window.scrollBy(0, -60);
                    }
                    if (standardizeName(message) === "darkoff".toLowerCase()) {
                        if (Date.now() - swapLimit > lastDarkSwap) {
                            document.getElementById("darkoff").click()
                            lastDarkSwap = Date.now();
                        }
                    } else if (standardizeName(message) === "darkon".toLowerCase()) {
                        if (Date.now() - swapLimit > lastDarkSwap) {
                            document.getElementById("darkon").click()
                            lastDarkSwap = Date.now();
                        }
                    } else if (standardizeName(message) === "shinyon".toLowerCase()) {
                        if (Date.now() - swapLimit > lastShinySwap) {
                            shinyOn();
                            lastShinySwap = Date.now();
                        }
                    } else if (standardizeName(message) === "shinyoff".toLowerCase()) {
                        if (Date.now() - swapLimit > lastShinySwap) {
                            shinyOff();
                            lastShinySwap = Date.now();
                        }
                    }
                }

                if (channelName.toLowerCase() == 'ethan_from_chicago') {

                    if (twitchUsername == 'ethan_from_chicago') {

                        if (message == 'ethan') {
                            let delay = 5
                            for (const id of quiz.currentIds) {
                                if (quiz.named.has(id)) {
                                    continue
                                }
                                let pokemon = quiz.pokemonIdDict[id].baseName;
                                setTimeout(() => {
                                    twitchInput(twitchUsername, pokemon, true)
                                }, delay)
                                delay += 5
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

                if (twitchUsername === 'stapotv') {
                    if (message === "party on") {
                        enableTypeParty()
                    }
                    else if (message === "party off") {
                        disableTypeParty()
                    }
                }

                if (twitchUsername == 'ethan_from_chicago' || channelName.toLowerCase() == 'ethan_from_chicago') {
                    if (message === "ethan_from_chicago's favorite pokemon".toLowerCase()) {
                        twitchInput(twitchUsername, 'spheal', true)

                        image = new Image();
                        image.src = '/images/spheal.png';
                        image.addEventListener("load", function () {
                            imageRain(image, 400, 160);
                        }, false);
                    }
                }

                if (twitchUsername == 'pkmncast' || twitchUsername == 'adeptcharon') {
                    if (message === "pkmncast".toLowerCase()) {
                        twitchInput(twitchUsername, 'cramorant', true)

                        image = new Image();
                        image.src = '/images/cramorant.png';
                        image.addEventListener("load", function () {
                            imageRain(image, 50, 300);
                        }, false);

                    }

                    if (message === "wigglypuff".toLowerCase()) {
                        twitchInput(twitchUsername, 'wigglytuff', true)

                        image = new Image();
                        image.src = '/images/wigglypuff.png';
                        image.addEventListener("load", function () {
                            imageRain(image, 50, 300);
                        }, false);

                    }
                }

                if (twitchUsername == 'norainthefuture' || twitchUsername == 'adeptcharon') {
                    if (message === "nora".toLowerCase()) {
                        twitchInput(twitchUsername, 'mew', true)

                        image = new Image();
                        image.src = '/images/mew.png';
                        image.addEventListener("load", function () {
                            imageRain(image, 50, 300);
                        }, false);

                    }
                }

                if ((channelName.toLowerCase() == 'birdkeepertoby' || channelName.toLowerCase() == 'adeptcharon') && (twitchUsername == 'birdkeepertoby' || twitchUsername == 'adeptcharon')) {
                    if (message === "hoot".toLowerCase()) {
                        twitchInput(twitchUsername, 'hoothoot', true)

                        image = new Image();
                        image.src = '/images/hoothoot.png';
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

                if (channelName.toLowerCase() == 'littlelemonbun' && twitchUsername == 'littlelemonbun') {
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
                if (twitchUsername == 'littlelemonbun' || twitchUsername == 'adeptcharon' || (channelName.toLowerCase() == 'littlelemonbun' && isVip)) {
                    if (message === "lemonbun".toLowerCase()) {

                        image = new Image();
                        image.src = '/images/chikorita.png';
                        image.addEventListener("load", function () {
                            imageRain(image, 50, 300);
                        }, false);
                    }
                    if (message === "lemonmonke".toLowerCase()) {

                        image = new Image();
                        image.src = '/images/grookey.png';
                        image.addEventListener("load", function () {
                            imageRain(image, 50, 300);
                        }, false);
                    }
                    if (message === "lemonbulb".toLowerCase()) {

                        image = new Image();
                        image.src = '/images/bulbasaur.png';
                        image.addEventListener("load", function () {
                            imageRain(image, 50, 200);
                        }, false);
                    }
                    if (message === "lemonowl".toLowerCase()) {

                        image = new Image();
                        image.src = '/images/rowlet.png';
                        image.addEventListener("load", function () {
                            imageRain(image, 50, 300);
                        }, false);
                    }
                }

                if (twitchUsername == 'r2dabes' || twitchUsername == 'adeptcharon') {
                    if (message === "r2dabes".toLowerCase()) {
                        twitchInput(twitchUsername, 'flapple', true)

                        image = new Image();
                        image.src = '/images/flapple.png';
                        image.addEventListener("load", function () {
                            imageRain(image, 50, 300);
                        }, false);

                    }
                }

                if (twitchUsername == 'adeptcharon') {
                    if (message === "bestpkmn".toLowerCase()) {
                        twitchInput(twitchUsername, 'crabominable', true)

                        image = new Image();
                        image.src = '/images/crabominable.png';
                        image.addEventListener("load", function () {
                            imageRain(image, 50, 340);
                        }, false);

                    }
                }

                if (twitchUsername == 'fabulousfauna' || twitchUsername == 'adeptcharon') {
                    if (message === "fauna".toLowerCase()) {
                        twitchInput(twitchUsername, 'vulpix', true)

                        image = new Image();
                        image.src = '/images/vulpix.png';
                        image.addEventListener("load", function () {
                            imageRain(image, 50, 300);
                        }, false);

                    }

                    if (message === "fabulous".toLowerCase()) {
                        twitchInput(twitchUsername, 'ninetales', true)

                        image = new Image();
                        image.src = '/images/vulpix-alola.png';
                        image.addEventListener("load", function () {
                            imageRain(image, 50, 300);
                        }, false);

                    }
                }

                twitchInput(twitchUsername, message, true)
            });

        }
    }


    function updateRankings() {

        let sorted = sortDictionaryByValue(quiz.users);
        emptyLeaderboard();
        let leaderboardDiv = document.getElementById("leaderboard");
        let currentTypeName = quiz.getStyleName()
        for (let i = 0; i < sorted.length; i++) {
            let scoreDiv = document.createElement('div');
            scoreDiv.classList.add('inlinetext')
            scoreDiv.classList.add('inlinetext' + currentTypeName)
            scoreDiv.classList.add('rank')
            scoreDiv.classList.add(rankVals[i])
            let textNode = document.createTextNode('#' + (i + 1) + ' ' + sorted[i][0] + ' (' + sorted[i][1] + ')');
            scoreDiv.appendChild(textNode)
            leaderboardDiv.appendChild(scoreDiv);
            if (i >= 2) {
                break;
            }
        }
        if (sorted.length > 1) {
            document.getElementById("ranking").style.display = 'block';
        }
    }

    let twitchInput = function (twitchUsername, input, shouldCount) {

        let isCorrect = parseInput(input, twitchUsername);
    }

    document.getElementById("twitch-off").onclick = function () {
        if (isTwitchOn) {
            isTwitchOn = false;
            console.log('disable');
            document.getElementById("twitch-channel").disabled = false;
            visualizeButtonUnclick(document.getElementById("twitch-on"))
            visualizeButtonClick(document.getElementById("twitch-off"))
            client.disconnect();
            document.getElementById("ranking").style.display = 'none';
        }
    }

    function pauseOn() {
        //if (activeTimer){
        paused = true;
        quiz.paused = true;
        inputField.disabled = true;
        document.getElementById("pause-overlay").style.display = "block"
        //document.body.style.overflow = 'hidden';
        // }
    }

    function pauseOff() {
        paused = false;
        quiz.paused = false;
        inputField.disabled = false;
        document.getElementById("pause-overlay").style.display = "none"
        //document.body.style.overflow = 'auto';

    }


    function getQuizState() {

        let state = {}
        state["filters"] = quiz.filters
        state["quizName"] = quiz.name
        state["named"] = [...quiz.named]
        state["users"] = quiz.users
        state["paused"] = quiz.paused
        state["silhouettes"] = quiz.isSilhouettesEnabled()
        state["orderMode"] = quiz.orderMode
        state["revealedShadows"] =  [...quiz.revealedShadows]
        state["giveup"] = quiz.giveUpState
        state["timer"] = timerObj
        console.log('timerObj', timerObj)
        return state;
    }

     saveButton.onclick = () => {
        let state = getQuizState()
        state["timer"]["savedAt"] = Date.now()
        state["version"]  = 1.0
        
        let jsonContent = JSON.stringify(state)

        // Create a Blob containing the JSON data
        let base64Content = btoa(jsonContent);

        // Create a Blob containing the base64-encoded data
        let blob = new Blob([base64Content], { type: "text/plain" });
            
        // Create a URL for the Blob
        let url = URL.createObjectURL(blob);
    
        function getCurrentDateString(){
            let currentDate = new Date().toISOString().slice(0, 10); // get the current date in the ISO format (YYYY-MM-DD) and slice it to get only the date part
            currentDate = currentDate.replace(/-/g, '_'); // replace all dashes with underscores
            return currentDate;
        }

        // Create an anchor element and trigger a click event
        let a = document.createElement('a');
        a.href = url;
        a.download = 'pkmnquiz_state_'+getCurrentDateString()  +'.quiz';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        // Clean up by revoking the URL
        URL.revokeObjectURL(url);
    }

    let loadFileFunc = (file) => {
        const reader = new FileReader();
        reader.onload = function (event) {
            try {
                let base64Data = event.target.result; // Extract the base64 part of the data URI
                let jsonContent = atob(base64Data); // Decode base64 data
                let jsonData = JSON.parse(jsonContent); // Parse JSON content
                console.log('Loaded JSON data:', jsonData);
                setQuizState(jsonData, true);
                socketChangeQuiz();
                showUserMessage("Loaded [" + quiz.name + "] quiz.");

            } catch (eee) {
                console.error('Failed to load file:', eee);
                showUserMessage("Failed loading file")
            }
        };
        // Show loading
        reader.readAsText(file); // Use readAsDataURL to read the data as a data URL
    }
    
    
    
    

    loadButton.addEventListener('change', function(event) {
        document.getElementById("fileInput").click()
    });
    loadButton.onclick = () => {
        document.getElementById("fileInput").click()
    }
    document.getElementById("fileInput").addEventListener('change', function (e) {
        console.log(e.target.files)
        if (e.target.files.length > 0){
            let file = e.target.files[0];
            loadFileFunc(file)
            document.getElementById("fileInput").value = ''
        }
    });
    
    

    function roomUpdateTimer(_timer) {
        console.log('trying to reset')

        /*if (paused && activeTimer !== false && "savedAt" in _timer){
            return;
        }*/

        console.log('clearing timer', activeTimer)
        clearInterval(activeTimer)
        activeTimer = false
        if (_timer["type"] !== "none") {
            console.log('creating new timer')
            if (_timer["type"] === "countdown") {

                let prevTimestamp = Date.now()
                activeTimer = setInterval(function () {
                    console.log('timer updating1')
                    let currentTime = Date.now()
                    if (paused) {
                        _timer["t"] += currentTime - prevTimestamp
                    }

                    let msDiff = _timer["t"] - currentTime;

                    prevTimestamp = currentTime

                    updateTimer(msDiff);
                }, 100)

            } else {

                let prevTimestamp = Date.now();
                let total = _timer["t"] + (Date.now() - _timer["updatedAt"])

                activeTimer = setInterval(function () {
                    console.log('timer updating2')
                    
                    let msDiff = Date.now() - prevTimestamp;
                    prevTimestamp = Date.now();
                    if (!paused) {
                        total += msDiff
                    }
                    timerObj["t"] = total
                    timerObj["updatedAt"] = prevTimestamp
                    updateTimer(total);
                }, 100)
            }
        }
    }

    function setQuizState(state, isLoad = false) {

        state["named"] = new Set(state["named"])

        if ("orderMode" in state){
            quiz.orderMode = state["orderMode"]
            visualizeButtonClick(enableOrderBtn)
            visualizeButtonUnclick(disableOrderBtn)
        }else{
            quiz.orderMode = false;
            visualizeButtonClick(disableOrderBtn)
            visualizeButtonUnclick(enableOrderBtn)
        }

        quiz.setQuiz(state["quizName"], state["filters"])
        if (state["silhouettes"]) {
            quiz.setSilhouettes();
        }

        if ('revealedShadows' in state){
            for (let i = 0; i < state["revealedShadows"].length; i++){
                quiz.revealSingleShadow(state["revealedShadows"][i])
            }
        }


        //timer will start on first input

        for (let id of state["named"]) {
            quiz.addNamed(id)
        }
        quiz.users = state["users"]
        setCounter(quiz.getScore());
        if (isLoad){
            state["timer"]["t"] += Date.now() - state["timer"]["savedAt"]
            state["timer"]["updatedAt"] = Date.now()  + Date.now() - state["timer"]["savedAt"]
            //delete state["timer"]["savedAt"]
            timerObj = state["timer"]
        }

        if (state['giveup']){
            giveUp()
        }

        if (state["paused"]) {
            pauseOn()
        }

        roomUpdateTimer(state["timer"]);


    }




    document.getElementById("unpause").onclick = () => {
        socketSetPaused(false);
        pauseOff();
    }
    pauseBtn.onclick = () => {
        socketSetPaused(true);
        pauseOn();
    }
    changeFooterPosition();

    setCounter(0);
    resetTimer()


    function onLoadingComplete() {

        // Prevent the default behavior to open the file in the browser.
        document.addEventListener('dragover', function (e) {
            e.preventDefault();
            if (socket === null || isSocketHost){
                showUserMessage("Drop the .quiz file anywhere to load")
            }
        });
        // Handle the file drop event.
        document.addEventListener('drop', function (e) {
            e.preventDefault();
            if (socket === null || isSocketHost){
                
                let files = e.dataTransfer.files;
                if (files.length > 0 && files[0].name.endsWith('.quiz')){
                    let file = files[0]
                    loadFileFunc(file)
                }
            }
        });
    
        //document.getElementById("loadbox").style.display = "none";
        document.getElementById("loader").style.display = "none";
        document.getElementById("loadboxguest").style.display = "none";
        document.getElementById("playtext").style.opacity = "1";
        document.getElementById("inputbar").style.opacity = "1";
        document.getElementById("pokemon").disabled = false;
        document.getElementById("spinner").style.display = "none";
        document.getElementById("spinnerguest").style.display = "none";
        document.getElementById("username-area").style.display = "block"
        document.getElementById("missing-ENG").click()

        /*halloween
        if (roomId === null ){
            quiz.setTypeQuiz('ghost');
            changeQuiz();
            off2();
            document.getElementById("genselection").onclick = off2;
            document.getElementById("typeselection").onclick = off2;
        }*/

        changeFooterPosition();
    
    
        addTransitionCss();
        preloadSmallerImages();
    }
    document.getElementById('spooky').onclick = () =>{
        quiz.spooky = false;
        document.getElementById('spooky').style.display="none"
    }
    onLoadingComplete()
}
let visualizeButtonClick = function (elem) {
    elem.classList.add("smolbuttonx")
    if (darkMode) {
        elem.classList.add("smolbuttonxdark")
    }

    if (quiz.getStyleName() !== "") {
        let typeName = quiz.getStyleName()
        elem.classList.add("smolbuttonx" + typeName)
        if (darkMode) {
            elem.classList.add("smolbuttonxdark" + typeName)
        }
    }

}
let visualizeButtonUnclick = function (elem) {
    elem.classList.remove("smolbuttonx")
    elem.classList.remove("smolbuttonxdark")
    if (quiz.getStyleName() !== "") {
        let typeName = quiz.getStyleName()
        if (typeName == "dark") {
            typeName = "evil"
        }
        elem.classList.remove("smolbuttonx" + typeName)
        elem.classList.remove("smolbuttonxdark" + typeName)
    }
}


function addTransitionCss() {
    let elems = []
    elems.push(document.getElementById("body"))
    let classNames = ["box", "button", "smolbutton", "limelight", "greyer", "inlinebox", "spbutton", "twitchbar", "bgpattern", "bgpattern2"]
    for (const _c of classNames) {
        let _elems = document.getElementsByClassName(_c)
        for (let i = 0; i < _elems.length; i++) {
            elems.push(_elems[i])
        }
    }

    for (let i = 0; i < elems.length; i++) {
        elems[i].classList.add("transition-element")

    }
    let currentDate = new Date()
    if (currentDate.getHours() >= 18 || currentDate.getHours() <= 7) {
        setTimeout(() => {
            document.getElementById("darkon").click();
        }, 10)
    }
}


function preloadSmallerImages() {


    for (let i = 0; i < typeList.length; i++) {
        let typeName = typeList[i].toUpperCase()
        let img = new Image()
        img.src = "/images/types/" + typeName + ".svg";
    }


}




let currentMessageTimeout = null;
function showUserMessage(message) {

    if (currentMessageTimeout !== null) {
        clearTimeout(currentMessageTimeout)
    }
    let snackbar = document.getElementById("wrongquiz");
    snackbar.innerHTML = message
    snackbar.classList.remove("snackbarshow");
    snackbar.classList.add("snackbarshow");
    currentMessageTimeout = setTimeout(function () {
        snackbar.classList.remove("snackbarshow");
        snackbar.classList.add("snackbar");
    }, 3000);
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
function standardizeName(input) {
    //remove whitespaces
    input = input.replace(/\s/g, '');

    //remove dashes
    input = input.replace(/-/g, '');

    //put to lowercase
    input = input.toLowerCase();

    input = input.normalize('NFKC')

    //flabebe
    input = input.replace(/é/g, 'e');
    //other special characters
    input = input.replace(/[èêëěęėē]/g, 'e');
    input = input.replace(/[üùúûűũųůū]/g, 'u');
    input = input.replace(/[äàáâãåǎąăæā]/g, "a");
    input = input.replace(/[öòóôõőøœ]/g, 'o');
    input = input.replace(/[đďð]/g, 'd');
    input = input.replace(/[ĝģğ]/g, 'g');
    input = input.replace(/ĵ/g, 'j');
    input = input.replace(/ķ/g, 'k');
    input = input.replace(/ĥ/g, 'h');
    input = input.replace(/ß/g, 'ss');
    input = input.replace(/ŵ/g, 'w');
    input = input.replace(/[çćĉč]/g, 'c');
    input = input.replace(/[ïìíîıīį]/g, 'i');
    input = input.replace(/[ĺļłľŀ]/g, 'l');
    input = input.replace(/[ñńňņ]/g, 'n');
    input = input.replace(/[ŕř]/g, 'r');
    input = input.replace(/[śŝşšș]/g, 's');
    input = input.replace(/[ťţþț]/g, 't');
    input = input.replace(/[ýÿŷ]/g, 'y');
    input = input.replace(/[źžż乙]/g, 'z');



    //accept latin for full-width characters
    input = input.replace(/[ａ-ｚ０-９]/g, function (match) {
        return String.fromCharCode(match.charCodeAt(0) - 65248);
    });
    //accept latin for roman numerals
    input = input.replace(/Ⅰ/g, 'i');
    input = input.replace(/Ⅱ/g, 'ii');
    input = input.replace(/Ⅲ/g, 'iii');
    input = input.replace(/Ⅳ/g, 'iv');
    input = input.replace(/Ⅴ/g, 'v');
    input = input.replace(/Ⅵ/g, 'vi');
    input = input.replace(/Ⅶ/g, 'ivii');
    input = input.replace(/Ⅷ/g, 'viii');
    input = input.replace(/Ⅸ/g, 'ix');
    input = input.replace(/Ⅹ/g, 'x');
    input = input.replace(/Ⅺ/g, 'xi');
    input = input.replace(/Ⅻ/g, 'xii');
    input = input.replace(/Ⅼ/g, 'l');
    input = input.replace(/Ⅽ/g, 'c');
    input = input.replace(/Ⅾ/g, 'd');
    input = input.replace(/Ⅿ/g, 'm');


    //delete all special characters
    input = input.replace(/[^ぁ-んァ-ン가-힣a-z0-9-_ß０-９ａ-ｚー\u4e00-\u9fa5\uf91f\uf929Ⅰ-ↈ]/g, '');
    input = input.replace(/[艷]/g, '豔');
    return input;
}

function spellingHelp() {
    if (isSpellingEnabled) {
        spellingElement.style.display = "none";
        visualizeButtonUnclick(spellingButton)
        hideHint()
        isSpellingEnabled = false;
        inputField.focus()
    } else {
        spellingElement.style.display = "inline-block";
        visualizeButtonClick(spellingButton)
        isSpellingEnabled = true;
        showUserMessage("You can also type '?' to reveal");
        inputField.focus();
    }
}


function hideHint() {
    spellingCheck.style.display = "inline-block";
    spellingHint.style.display = "none"
    spellingHint.innerHTML = "";
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
    "inlineboxdarktype",
    "arrowtype",
]


let pokecolumns = [];
for (let i = 0; i < 5; i++) {
    pokecolumns.push(document.getElementById("pokecolumn" + (i + 1)));
}


let regionToSingle = function (regionElement) {
    regionElement.classList.remove('region');
    regionElement.classList.add('regionb');
}

let regionToAll = function (regionElement) {
    regionElement.classList.add('region');
    regionElement.classList.remove('regionb');
}

function resetQuiz() {
    quiz.reset();
}
resetBtn.onclick = resetQuiz;

let emptyLeaderboard = function () {
    let leaderboardDiv = document.getElementById("leaderboard");
    while (leaderboardDiv.firstChild) {
        leaderboardDiv.removeChild(leaderboardDiv.firstChild);
    }
}



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
    document.getElementById("starttype").style.display = "none";
    document.getElementById("genselection").style.display = "none";
    document.getElementById("typeselection").style.display = "none";
    document.getElementById("inputbox").classList.add('attentionshake');
    //clearInterval(spriteIntervalId);
    inputField.focus();
}

function off3() {
    document.getElementById("promptswitch").style.display = "none";
    document.getElementById("prompttimer").style.display = "none";
    document.getElementById("promptsilhouette").style.display = "none";
    document.getElementById("promptsilhouette").style.display = "none";
    document.getElementById("promptorder-enable").style.display = "none";
    document.getElementById("promptorder-disable").style.display = "none";
}

function genselectmenu() {
    document.getElementById("genselection").style.display = "block";
}

function typeselectmenu() {
    document.getElementById("typeselection").style.display = "block";
}
function typeselectmenuInitial() {
    document.getElementById("genselection").style.display = "none";
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
    if (quiz.getStyleName() !== "" || quiz.name !== "Full") {
        document.getElementById("gen0").click();
    }
}

function swapShiny() {
    if (document.getElementById("shiny").classList.contains('smolbuttonx')) {
        shinyOff()
    }
    else {
        shinyOn()
    }
}


function shinyOn() {
    visualizeButtonClick(document.getElementById("shiny"))
    quiz.shinyOn();
}

function shinyOff() {
    visualizeButtonUnclick(document.getElementById("shiny"))
    quiz.shinyOff();
}

document.getElementById("shiny").onclick = swapShiny;


recentSprite.src = '/sprites/unknown.png'
//This accounts for all unknown.png's on the page
recentSprite.addEventListener("load", function () {
    changeFooterPosition();
}, false)






let imageRain = function (image, imageCount, avgSize) {

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

    for (let i = 0; i < imageCount; i++) {

        let x = randomIntFromInterval(-200, document.documentElement.clientWidth + 200);
        let y = randomIntFromInterval(-2000, -450);
        let speed = randomIntFromInterval(6000, 12000);
        let size = randomIntFromInterval(Math.round(avgSize * 0.8), Math.round(avgSize * 1.2));
        let angle = randomIntFromInterval(0, 360);
        let angleIncrement = randomIntFromInterval(-2000, 2000);

        imageList.push([x, y, speed, size, angle, angleIncrement]);
    }

    let fps = 60;
    let animationDuration = 6;
    let nrFrames = fps * animationDuration;

    let delay = 1000 / fps;
    let waitFor = 0;
    for (let i = 0; i < nrFrames; i++) {
        let k = i;
        setTimeout(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); //clear the canvas
            for (let j = 0; j < imageList.length; j++) {
                imageList[j][1] += (imageList[j][2] / 1000)
                imageList[j][2] *= 1.005;
                ctx.save(); //saves the state of canvas
                ctx.translate(imageList[j][0], imageList[j][1])
                ctx.rotate(imageList[j][4] * (Math.PI / 180))
                imageList[j][4] += (imageList[j][5] / 1000);
                ctx.drawImage(image, -imageList[j][3] / 2, -imageList[j][3] / 2, imageList[j][3], imageList[j][3]);
                ctx.restore()
            }

        }, waitFor);
        waitFor += delay;

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


let refreshAnimationCanvas = function () {
    if (animationCanvasTimeout !== null) {
        clearInterval(animationCanvasTimeout);
    }
    if (animationCanvas === null) {

        animationCanvas = document.createElement('canvas');
        animationCanvas.style.position = 'absolute';
        animationCanvas.style.top = '0px';
        animationCanvas.style.left = '0px';
        animationCanvas.style['z-index'] = 5;
        animationCanvasWidth = document.documentElement.clientWidth;
        animationCanvas.width = animationCanvasWidth;
        animationCanvas.height = document.documentElement.clientHeight;
        document.body.appendChild(animationCanvas);

        animationCanvasInterval = setInterval(() => {
            let ctx = animationCanvas.getContext("2d");
            ctx.clearRect(0, 0, animationCanvas.width, animationCanvas.height);
            for (let j = 0; j < ongoingAnimations.length; j++) {
                if (ongoingAnimations[j][1] < (animationCanvas.height)) {
                    ongoingAnimations[j][1] += (ongoingAnimations[j][2] / 1000)
                    ongoingAnimations[j][2] *= 1.005;
                    ctx.save(); //saves the state of canvas
                    ctx.translate(ongoingAnimations[j][0], ongoingAnimations[j][1])
                    ctx.rotate(ongoingAnimations[j][3] * (Math.PI / 180))
                    ongoingAnimations[j][3] += (ongoingAnimations[j][4] / 1000);
                    ctx.drawImage(ongoingAnimations[j][5], -animationWidth / 2, -animationHeight / 2, animationWidth, animationHeight);
                    ctx.restore()
                }
            }

        }, 1000 / 60)
    }

    animationCanvasTimeout = setTimeout(() => {
        animationCanvas.remove()
        animationCanvas = null;
        animationCanvasTimeout = null;
        ongoingAnimations = [];
        if (animationCanvasInterval !== null) {
            clearInterval(animationCanvasInterval);
        }
    }, animationCanvasDuration);


}

let animateInput = function (id) {
    refreshAnimationCanvas();

    let x = randomIntFromInterval(animationWidth / 2, animationCanvasWidth - (animationWidth / 2));
    let y = randomIntFromInterval(-3500, -animationWidth * 1.5);
    let speed = randomIntFromInterval(7000, 9500);
    let angle = randomIntFromInterval(0, 360);
    let angleIncrement = randomIntFromInterval(-2000, 2000);
    ongoingAnimations.push([x, y, speed, angle, angleIncrement, quiz.spriteDictionary[id]]);

}



document.getElementById("accordion").onclick = function () {

    if (document.getElementById("panel").style.display == 'block') {
        document.getElementById("panel").style.display = 'none';
        document.getElementById("arrow").classList.add('adown');
        document.getElementById("arrow").classList.remove('aup');

        let childNodes = document.getElementById("panel").childNodes;

        for (let i = 0; i < childNodes.length; i++) {
            childNodes[i].style.display = 'block';
        }

    } else {
        document.getElementById("panel").style.display = 'block'
        document.getElementById("arrow").classList.add('aup');
        document.getElementById("arrow").classList.remove('adown');

        let childNodes = document.getElementById("panel").childNodes;

        for (let i = 0; i < childNodes.length; i++) {
            let childElements = childNodes[i].childNodes[0].childNodes;
            let hasContent = false;

            for (let j = 0; j < childElements.length; j++) {
                if (childElements[j].style.display != 'none') {

                    hasContent = true;
                    break;
                }
            }

            if (!hasContent) {
                childNodes[i].style.display = 'none';
            } else {
                childNodes[i].style.display = 'block';
            }
        }


    }
    changeFooterPosition()
}



let sortDictionaryByValue = function (dictionary) {
    let entries = Object.entries(dictionary);
    return sorted = entries.sort((a, b) => b[1] - a[1]);
}




document.getElementById("darkon").onclick = function () {

    if (!darkMode) {
        darkMode = !darkMode
        visualizeButtonUnclick(document.getElementById("darkoff"))
        visualizeButtonClick(document.getElementById("darkon"))
        document.getElementById("darkon").style.display = "none";
        document.getElementById("darkoff").style.display = "inline";

        document.getElementById("body").classList.add("bodydark");

        let boxes = document.getElementsByClassName("box")

        for (let i = 0; i < boxes.length; i++) {
            boxes[i].classList.add("boxdark")
        }

        let smolButtons = document.getElementsByClassName("smolbutton")
        for (let i = 0; i < smolButtons.length; i++) {
            smolButtons[i].classList.add("smolbuttondark")
        }

        let buttonsX = document.getElementsByClassName("smolbuttonx")

        for (let i = 0; i < buttonsX.length; i++) {
            buttonsX[i].classList.add("smolbuttonxdark")
        }

        let buttons = document.getElementsByClassName("button")
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.add("buttondark")
        }

        let limelights = document.getElementsByClassName("limelight")

        for (let i = 0; i < limelights.length; i++) {
            limelights[i].classList.add("limelightdark")
        }

        let greyers = document.getElementsByClassName("greyer")

        for (let i = 0; i < greyers.length; i++) {
            greyers[i].classList.add("greyerdark")
        }

        let boarders = document.getElementsByClassName("inlinebox")

        for (let i = 0; i < boarders.length; i++) {
            boarders[i].classList.add("inlineboxdark")
        }

        let shinybutton = document.getElementsByClassName("spbutton")
        for (let i = 0; i < shinybutton.length; i++) {
            shinybutton[i].classList.add("buttondark")
        }

        for (let i = 0; i < quiz.pokeballArray.length; i++) {
            quiz.pokeballArray[i].src = '/sprites/unknown-2.png';
        }
        recentSprite.src = '/sprites/unknown-2.png'

        if (quiz.getStyleName() !== "") {
            document.getElementById("body").classList.add("blenddark")
            document.getElementById("body").classList.remove("blend")


            for (let i = 0; i < typeClasses.length; i++) {
                let currentClass = typeClasses[i];
                if (!currentClass.includes('dark')) {
                    continue;
                }

                let typeName = quiz.getStyleName();
                let allElements = document.getElementsByClassName(currentClass.replace("type", ""));
                for (let j = 0; j < allElements.length; j++) {
                    allElements[j].classList.add(currentClass.replace("type", typeName))
                }

            }

        }

    }
}



document.getElementById("darkoff").onclick = function () {
    if (darkMode) {
        darkMode = !darkMode

        //has to be called before removing other shit
        if (quiz.getStyleName() !== "") {
            document.getElementById("body").classList.remove("blenddark")
            document.getElementById("body").classList.add("blend")


            for (let i = 0; i < typeClasses.length; i++) {
                let currentClass = typeClasses[i];
                if (!currentClass.includes('dark')) {
                    continue;
                }

                let typeName = quiz.getStyleName();
                let val = currentClass.replace("type", "");
                let allElements = document.getElementsByClassName(currentClass.replace("type", ""));
                for (let j = 0; j < allElements.length; j++) {
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

        for (let i = 0; i < boxes.length; i++) {
            boxes[i].classList.remove("boxdark")
        }

        let buttons = document.getElementsByClassName("button")
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("buttondark")
        }


        let smolButtons = document.getElementsByClassName("smolbutton")
        for (let i = 0; i < smolButtons.length; i++) {
            smolButtons[i].classList.remove("smolbuttondark")
        }

        let buttonsX = document.getElementsByClassName("smolbuttonx")

        for (let i = 0; i < buttonsX.length; i++) {
            buttonsX[i].classList.remove("smolbuttonxdark")
        }

        let limelights = document.getElementsByClassName("limelight")

        for (let i = 0; i < limelights.length; i++) {
            limelights[i].classList.remove("limelightdark")
        }

        let greyers = document.getElementsByClassName("greyer")

        for (let i = 0; i < greyers.length; i++) {
            greyers[i].classList.remove("greyerdark")
        }

        let boarders = document.getElementsByClassName("inlinebox")

        for (let i = 0; i < boarders.length; i++) {
            boarders[i].classList.remove("inlineboxdark")
        }

        let shinybutton = document.getElementsByClassName("spbutton")
        for (let i = 0; i < shinybutton.length; i++) {
            shinybutton[i].classList.remove("buttondark")
        }

        for (let i = 0; i < quiz.pokeballArray.length; i++) {
            quiz.pokeballArray[i].src = '/sprites/unknown.png';
        }
        recentSprite.src = '/sprites/unknown.png'
    }
}

function creditspopup() {
    var popup = document.getElementById("credits");
    popup.classList.toggle("show");
}

let enabledLanguages = []

let disableLanguage = function () { return; };

let enableLanguage = function (languageButton) {

    enabledLanguages.push(languageButton.id)
    visualizeButtonClick(languageButton);
    languageButton.onclick = function () {
        disableLanguage(languageButton)
    }
    quiz.updateLanguages(enabledLanguages)
}

disableLanguage = function (languageButton) {
    if (enabledLanguages.length > 1) {
        let index = enabledLanguages.indexOf(languageButton.id);
        if (index > -1) {
            enabledLanguages.splice(index, 1);
        }
        visualizeButtonUnclick(languageButton);
        languageButton.onclick = function () {
            enableLanguage(languageButton)
        }
        quiz.updateLanguages(enabledLanguages)
    }

}

for (let key of allLanguages) {

    let lang = document.createElement("div");
    lang.innerHTML += key
    lang.classList.add('smolbutton')
    lang.classList.add('langbutton')
    lang.id = key
    lang.onclick = function () {
        enableLanguage(lang)
    }
    if (key == 'ENG' || key == 'JPN' || key == 'KOR' || key == 'CHT' || key == 'CHS' || key == 'ESP' || key == 'ITA') {
        lang.click()
    }
    language_box.appendChild(lang);
}


document.addEventListener('keydown', function (event) {
  
    //TODO if enter is pressed, empty inputField
    if (event.key === "Enter" || event.code === "Enter" || event.keyCode === 13) {
        // Clear the input field
        inputField.value = '';
    }
    if (document.activeElement.tagName !== "INPUT") {
        // Focus on the main input field when any key is pressed
        inputField.focus();
    }
});

document.getElementById("sound-on").onclick = () => {
    soundEnabled = true
    visualizeButtonUnclick(document.getElementById("sound-off"))
    visualizeButtonClick(document.getElementById("sound-on"))

};
document.getElementById("sound-off").onclick = () => {
    soundEnabled = false
    visualizeButtonUnclick(document.getElementById("sound-on"))
    visualizeButtonClick(document.getElementById("sound-off"))
};


loadData();
