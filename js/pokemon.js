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