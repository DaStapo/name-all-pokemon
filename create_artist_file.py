with open("artist_credits_-_08-2023.csv", "r") as r:
    lines = r.readlines()


artists = {}


for line in lines[1:]:
    splitted = line.split(';')
    if len(splitted) != 7:
        print(line, len(splitted))
        continue
    id, sprite, a1, a2, qc1, qc2, qc3 = line.split(';')

    for artist in [a1, a2,qc1, qc2, qc3]:
        if artist is None or artist == "" or artist =="\n":
            continue
        if artist not in artists:
            artists[artist] = {
                "artist":[],
                "QC":[]
            }

    for artist in [a1, a2]:
        if artist in artists:
            artists[artist]["artist"].append(sprite)

    for artist in [qc1, qc2, qc3 ]:
        if artist in artists:
            artists[artist]["QC"].append(sprite)


sprite_dict = {}
for key in artists:
    for sub_key in ["artist", "QC"]:
        for sprite in artists[key][sub_key]:
            if sprite not in sprite_dict:
                sprite_dict[sprite] = {
                    "artist":[],
                    "QC":[]
                }
            sprite_dict[sprite][sub_key].append(key)

final_list = []

already_checked_sets = {}

for key in sprite_dict:
    current_artist_set = set(sprite_dict[key]["artist"])
    current_QC_set = set(sprite_dict[key]["QC"])

    current_combo = str(current_artist_set) + str(current_QC_set) 

    if current_combo in already_checked_sets:
        continue
    already_checked_sets[current_combo] = True

    sprites = []
    for key2 in sprite_dict:
        current_artist_set2 = set(sprite_dict[key2]["artist"])
        current_QC_set2 = set(sprite_dict[key2]["QC"])  

        current_combo2 = str(current_artist_set2) + str(current_QC_set2) 
        if current_combo2 == current_combo:
            sprites.append(key2)

        
    final_list.append({"sprites":sprites, "artists":sprite_dict[key]["artist"], "QCs":sprite_dict[key]["QC"]})

sorted_list  = sorted(final_list, key=lambda x: len(x["sprites"]), reverse=True)

import json
with open("artists.json", "w") as w:
    json.dump(sorted_list, w)