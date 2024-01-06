import json

with open("legendary_categories.txt") as w:
    lines = w.readlines()

tag_dict = {}

current_tag = ""
for line in lines:
    line = line.replace("\n", "")
    if len(line) <1:
        continue
    if line.startswith("#"):
        current_tag = line.replace("#", "").replace(" ", "").lower()
        continue
    
    tag_dict[line] = current_tag


print(tag_dict)

with open("pokemon.json") as w:
    pkmn_data = json.load(w)

for pkmn in pkmn_data:
    if pkmn["id"] not in tag_dict:
        pkmn["legendary"] = "no"
    else:
        pkmn["legendary"] = tag_dict[pkmn["id"]]


with open("pokemon.json", "w+") as w:
    json.dump(pkmn_data, w)