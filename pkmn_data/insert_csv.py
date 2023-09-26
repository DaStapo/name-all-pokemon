import json
import re
import unicodedata
import csv

def standardizeName(input):


    input = input.replace('.png', '')
    input = input.replace('.jpeg', '')

    # Remove whitespaces
    input = input.replace(' ', '')

    # Remove dashes
    input = input.replace('-', '')

    # Convert to lowercase
    input = input.lower()

    # Normalize Unicode characters
    input = unicodedata.normalize('NFKC', input)

    # Accept Latin for Roman numerals
    input = input.replace('Ⅰ', 'i')
    input = input.replace('Ⅱ', 'ii')
    input = input.replace('Ⅲ', 'iii')
    input = input.replace('Ⅳ', 'iv')
    input = input.replace('Ⅴ', 'v')
    input = input.replace('Ⅵ', 'vi')
    input = input.replace('Ⅶ', 'vii')
    input = input.replace('Ⅷ', 'viii')
    input = input.replace('Ⅸ', 'ix')
    input = input.replace('Ⅹ', 'x')
    input = input.replace('Ⅺ', 'xi')
    input = input.replace('Ⅻ', 'xii')
    input = input.replace('Ⅼ', 'l')
    input = input.replace('Ⅽ', 'c')
    input = input.replace('Ⅾ', 'd')
    input = input.replace('Ⅿ', 'm')

    # Delete all special characters using a regular expression
    input = re.sub(r'[^ぁ-んァ-ン가-힣a-z0-9-_ß０-９ａ-ｚー\u4e00-\u9fa5\uf91f\uf929Ⅰ-ↈ]', '', input)

    return input

with open('data.csv', 'r') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    for row in csv_reader:
        pkmn_data = row
        translation_data = {}
        
        for key in ["ENG", "FRE", "GER", "ESP", "ITA", "KOR", "JPN", "CHT", "CHS"]:
            translation_data[key] = pkmn_data[key]
            del pkmn_data[key]

        pkmn_data["box"] = str(pkmn_data["box"])
        print(json.dumps(pkmn_data, indent=4, ensure_ascii=False))
        print(json.dumps(translation_data, indent=4, ensure_ascii=False))
        print("Press ENTER to confirm")
        input()
        with open("pokemon.json", "r") as r:
            pokemon = json.load(r)
        
        pokemon.append(pkmn_data)

        with open("pokemon.json", "w") as w:
            json.dump(pokemon, w, ensure_ascii=False)

        with open("translations.json", "r") as r:
            translations = json.load(r)
        
        translations[pkmn_data["id"]] = translation_data

        with open("translations.json", "w") as w:
            json.dump(translations, w, ensure_ascii=False)


            