from encodings import utf_8


with open("misspellings.txt", "r", encoding='utf-8') as r:
    lines = r.readlines()


misspellings_dict = {}
suggestion_dict = {}

for line in lines:
    split = line.split(':')
    if len(split) == 2:
        if split[0] not in misspellings_dict:
            misspellings_dict[split[0]] = 0
            suggestion_dict[split[0]]  = split[1]
        misspellings_dict[split[0]]+=1


result = {k: v for k, v in sorted(misspellings_dict.items(), key=lambda item: item[1], reverse=True)}


full_str = ''
for r in result:
    if result[r] > 1:
        full_str += str(result[r]) + " " + " "+ r + ":"+ suggestion_dict[r]

with open("output.txt", "w", encoding='utf-8') as w:
    w.write(full_str)




