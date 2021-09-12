

with open('pokemon_species_names.csv', encoding="utf8") as r:
    data = r.readlines()

language_map = {
    '1':'ja',
    '3':'ko',
    '5':'fr',
    '6':'de',
    '9':'en'
}

language_lists = {}
for key in language_map:
    language_lists[key] = []


for line in data:
    cols = line.split(',')
    
    lang_id = str(cols[1])
    if lang_id in language_map:
        language_lists[lang_id].append(cols[2].replace('♀', 'f').replace('♂', 'm'))


for lang in language_lists:

    print()
    text  = language_map[lang] + '_pokemonList = ' +  str(language_lists[lang])
    print(text)
    with open('list_' + str(language_map[lang]) + '.txt', 'w+', encoding="utf8") as w:
        w.write(text)



