import requests
import pickle

resultDict = {}
i = 1
while True:
    r = requests.get("https://pokeapi.co/api/v2/pokemon/" + str(i))
    jsonRes = r.json()
    if "name" not in jsonRes:
        break
    resultDict[jsonRes["name"]] = r
    print(jsonRes["name"], i)
    i+=1
with open("pokemonDB.p", "wb") as w:
    pickle.dump(resultDict, w)





