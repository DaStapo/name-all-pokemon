import requests
import json
from fuzzywuzzy import process


def getPokeAPIList():
    res = requests.get('https://pokeapi.co/api/v2/pokemon-form/?limit=5000').json()
    finalList = []
    for item in res["results"]:
        finalList.append(item["name"])
    return finalList

def getOurList():
    with open("pokemon.json", "r") as r:
        data = json.load(r)
    
    da_list = []
    for d in data:
         da_list.append(d["id"])
    return da_list


pokeapiList = getPokeAPIList();
ourList = getOurList();


final_matches = {}
for name in ourList:
    most_similar = process.extractOne(name, pokeapiList)[0]
    final_matches[name] = most_similar
    print(name, most_similar)

with open("pokeapi_ids.json", "w+") as w:
    json.dump(final_matches, w)