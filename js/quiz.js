
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
    cyclingEnabled = true;

    filters = {}

    paused = false;

    orderModeSet = new Set()
    baseNameIdDict = {}
    orderMode = false;
    chaosMode = false;

    revealedShadows = new Set()

    giveUpState = false;
    spooky = false;

    name = "none"

    forcedStyle = null;

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
            if (pkmn.box === "unreleased"){
                continue
            }
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
        this.forcedStyle = null;
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
        
        if (this.shinyEnabled){
            this.spriteDictionary["ditto"].src = this.encodedImages['shiny']["ditto"]
            this.unguessedDict["ditto"].getElementsByTagName('img')[0].src = this.encodedImages['shiny']["ditto"]
        }else{
            this.spriteDictionary["ditto"].src = this.encodedImages["sprite"]["ditto"]
            this.unguessedDict["ditto"].getElementsByTagName('img')[0].src = this.encodedImages["sprite"]["ditto"]      
        }
        
        this.onReset();
    }


    setOrderMode(val){
        this.orderMode = val
        this.setQuiz(this.name, this.filters)
    }
    
    setChaosMode(val){
        
        this.chaosMode = val
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
        this.emptyBoxes()
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
        if ("legendary" in filters) {
            currentPokemonList = currentPokemonList.filter(pokemon =>
                {return pokemon.isLegendary()}
            );
            if (this.orderMode){
                visualizeButtonClick(document.getElementById("order-off"))
                visualizeButtonUnclick(document.getElementById("order-on"))
                this.orderMode = false;
                showUserMessage("Order mode disabled")
            }
        }




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

        if (this.orderMode || "legendary" in this.filters || this.chaosMode){
            let tempList = []
            let currentPokemonListIds = currentPokemonList.map(pokemon => pokemon.id);

            let baseSet = new Set()
            for (let i = 0; i< currentPokemonList.length; i++ ){

                if (this.orderMode){
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

                }else{
                    let id = currentPokemonList[i].id;
                    let basePkmnId = this.baseNameIdDict[currentPokemonList[i].baseName]
                    if (basePkmnId === "zapdos"){
                        let b = currentPokemonListIds.includes(basePkmnId)
                        let c = this.orderModeSet.has(id)
                        let g = 0
                    }
                    if (this.orderModeSet.has(id) || !(currentPokemonListIds.includes(basePkmnId))){
                        tempList.push(currentPokemonList[i])
                    }else{
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

            }
            currentPokemonList = tempList
            
            if ("darumaka" in currentCycles){
                console.log(currentCycles["darumaka"])
                currentCycles["darumaka"] = ["darumaka", "darumaka", "darumakagalar", "darumakagalar"]
            }
            if ("meowth" in currentCycles && currentCycles["meowth"].includes("meowthalola")&& currentCycles["meowth"].includes("meowthgalar")){
                currentCycles["meowth"] = ["meowth", "meowthalola", "meowthgalar"]
            }
            if ("persian" in currentCycles && currentCycles["persian"].includes("persianalola")){
                console.log(currentCycles["persian"])
                currentCycles["persian"] = ["persian", "persianalola", "persian"]
            }
        }

        this.spriteCycles = currentCycles;

        this.currentBaseNames = new Set()
        this.currentIds = new Set()
        this.currentBoxes = {}
        this.currentPokemonList = currentPokemonList

        if (this.chaosMode || this.orderMode){
            for (let i = 0; i<currentPokemonList.length; i++){
                currentPokemonList[i].currentBox = "big"
            }
        }else if ("legendary" in filters){
            for (let i = 0; i<currentPokemonList.length; i++){
                currentPokemonList[i].currentBox = currentPokemonList[i].legendary
            }
        }else{
            for (let i = 0; i<currentPokemonList.length; i++){
                currentPokemonList[i].currentBox = currentPokemonList[i].box
            }
        }


        for (let i = 0; i<currentPokemonList.length; i++){
            this.currentBaseNames.add(currentPokemonList[i].baseName)
            //essentially sprites
            this.currentIds.add(currentPokemonList[i].id)
            if (!(currentPokemonList[i].currentBox in this.currentBoxes)){
                this.currentBoxes[currentPokemonList[i].currentBox] = []
            }
            this.currentBoxes[currentPokemonList[i].currentBox].push(currentPokemonList[i])
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


        if ("types" in filters || "legendary" in filters){

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
        //this.setupMissedContent();
        //this.setLanguage("ENG");
        this.resetCurrentSprites()
        this.reset();
        

    }

    changeTypeStyle (toType){

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



        if (toType !== null){

            document.getElementById("body").classList.add(toType);
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
                    allElements[j].classList.add(currentClass.replace("type", toType))
                }
        
            }
        
        
            let bbuttonElements = document.getElementsByClassName("button");
            for (let i = 0; i < bbuttonElements.length; i++){
                bbuttonElements[i].classList.add("button"+toType)
            }

            let imgName = toType.toUpperCase();
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
        this.forcedStyle = toType.toLowerCase();
    }



    emptyBoxes(){
        for (let i = 0; i < this.boxConstruction.length; i++){
            let box = this.boxConstruction[i][0]
            let children = this.boxConstruction[i][1]
            let pokemon = this.boxConstruction[i][2]
            for (let j = 0; j < children.length; j++){
                this.boxDict[pokemon.currentBox].removeChild(children[j])
            }
        }   
    }

    moveBoxes(){


        for (let i = 0; i < this.boxConstruction.length; i++){
            let box = this.boxConstruction[i][0]
            let children = this.boxConstruction[i][1]
            let pokemon = this.boxConstruction[i][2]
            for (let j = 0; j < children.length; j++){
                boxDict[pokemon.currentBox].appendChild(children[j])
            }
        }

        /*
        let isCurrentlyBig = document.getElementById("pokemon-box-big").children.length > 2
        
        let neededBig = this.orderMode || this.chaosMode// && ("boxes" in this.filters && this.filters["boxes"].length > 5)

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
        */
        document.getElementById("regionbig").innerText = ""

        /*if (this.orderMode){
            if ("boxes" in this.filters && neededBig){
                if (this.filters["boxes"].length > 5){
                    document.getElementById("regionbig").innerText = ""
                }else{
                    let fullText = ''
                    for (let i =0; i < this.filters["boxes"].length; i++){
                        let regionName = this.filters["boxes"][i] ;
                        regionName = regionName.charAt(0).toUpperCase() + regionName.slice(1)
                        fullText += regionName+ ", "
                    }
                    document.getElementById("regionbig").innerText = fullText.substring(0, fullText.length-2)

                }
            }
        }*/


    }

    getStyleName(){
        if (this.forcedStyle !== null){
            return this.forcedStyle;
        }
        else if ("types" in this.filters){
            if (this.filters["types"][0] === "dark"){
                return "evil"
            }
            return this.filters["types"][0]
        }else if ("legendary" in this.filters){
            return "special"
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
                    this.changeTypeStyle(this.currentPokemonList[highestNamed+1].primaryType)
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

    resetDitto(){
        if (this.shinyEnabled){
            this.spriteDictionary["ditto"].src = this.encodedImages['shiny']["ditto"]
            this.unguessedDict["ditto"].getElementsByTagName('img')[0].src = this.encodedImages['shiny']["ditto"]
        }else{
            this.spriteDictionary["ditto"].src = this.encodedImages["sprite"]["ditto"]
            this.unguessedDict["ditto"].getElementsByTagName('img')[0].src = this.encodedImages["sprite"]["ditto"]      
        }
    }

    addNamed(baseName){

        let relatedPokemon = this.pokemonBaseNameDict[baseName]

        let relevantPokemon = []
        for (let i = 0; i< relatedPokemon.length; i++){
            if (this.currentIds.has(relatedPokemon[i].id)){
                relevantPokemon.push(relatedPokemon[i])
            }
        }
        if (this.cyclingEnabled){
            if (this.named.has("ditto")){
                this.spriteDictionary["ditto"].src = this.spriteDictionary[relevantPokemon[0].id].src
                this.unguessedDict["ditto"].getElementsByTagName('img')[0].src = this.spriteDictionary[relevantPokemon[0].id].src
            }
        }else{
            this.resetDitto();
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
            
            this.boxConstruction.push([box, [this.spriteDictionary[pokemon.id], unguessed], pokemon])
        }
    }

    setupMissedContent(){
        let contentDict = {}
        let panel = document.getElementById("panel")
        panel.innerHTML = ""
        //while (panel.firstChild) {
        //    panel.firstChild.remove()
        //}

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
            contentDict[pokemon.currentBox].appendChild(_elem)
        }
    
    }

    getLeaderboardData(){

    }

    showSprite(id){
        this.spriteDictionary[id].style.display = "inline";
        this.unguessedDictionary[id].style.display = "none";
        let currentBox = this.pokemonIdDict[id].currentBox;
        let pkmn = this.pokemonIdDict[id]

        if (this.chaosMode){
            let children = document.getElementById("pokemon-box-big").children

            let spotIndex = -1;
            let targetIndex = -1;

            for (let i = 1; i< children.length; i++){
                if (spotIndex === -1 && children[i].tagName.toUpperCase() === "DIV"){
                    if( children[i].children[1].style.display === "inline" ||children[i].children[0].style.display === "inline"  ){
                        spotIndex = i
                        if (targetIndex !== -1){
                            break
                        }
                    }
                }
                else if (targetIndex === -1 && children[i] === this.spriteDictionary[id]){
                    targetIndex = i
                    if (spotIndex !== -1){
                        break
                    }
                }

            }

            swapChildren(document.getElementById("pokemon-box-big"), spotIndex, targetIndex);
            if (spotIndex > targetIndex){
                document.getElementById("pokemon-box-big").insertBefore(children[targetIndex+1], children[spotIndex+1]);

            }


        }


            if(!(this.boxCounters[currentBox].includes(pkmn))){
                this.boxCounters[currentBox].push(pkmn)
                if (this.boxCounters[currentBox].length === this.currentBoxes[currentBox].length){
                    let boxElem = this.spriteDictionary[id].parentElement;
                    boxElem.classList.add('outline')
                    boxElem.classList.add('outline'+this.getStyleName())
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

        this.resetDitto()

        
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

function swapChildren(parentElement, childIndex1, childIndex2) {
    const child1 = parentElement.children[childIndex1];
    const child2 = parentElement.children[childIndex2];

    // Insert child2 before child1
    parentElement.insertBefore(child2, child1);

    // Since child1 is now moved, the index of where child2 was originally is changed.
    // So we need to find the new correct place to insert child1.
    const newChild2Index = (childIndex1 < childIndex2) ? childIndex2 : childIndex2 + 1;
    parentElement.insertBefore(child1, parentElement.children[newChild2Index]);
}