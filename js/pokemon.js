class Pokemon {

    id
    box
    currentBox
    primaryType
    secondaryType
    legendary

    constructor(dataJson){
        this.data = dataJson;
        this.id = dataJson["id"]
        this.baseName = dataJson["baseName"]
        this.primaryType = dataJson["primaryType"]
        this.secondaryType = dataJson["secondaryType"]
        this.legendary = dataJson["legendary"]
        this.box = dataJson["box"]
        this.currentBox = this.box
    }

    setExtraData(dataJson){
        this.extraData = dataJson;
    }

    isType(type){
        return this.primaryType === type || this.secondaryType === type;
    }

    isLegendary(){
        return this.legendary !== "no"
    }

    setFormattedNames(formattedDict){
        this.formattedDict = formattedDict;
    }

    getFormattedName(lang){
        return this.formattedDict[lang];
    }
}