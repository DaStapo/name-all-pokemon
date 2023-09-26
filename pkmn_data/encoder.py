import re
import unicodedata

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




from PIL import Image
import os
import base64
import io
spritePath = '../sprites/'
silhouettePath = '../silhouettes/'
shinyPath = '../shiny/'

def saveEncodedImg(targetDict, name, img):
    img_byte_array = io.BytesIO()
    img.save(img_byte_array, format='PNG')
    base64String = base64.b64encode(img_byte_array.getvalue()).decode('utf-8')
    targetDict[standardizeName(name)] = "data:image/png;base64," + base64String

encodedSprites = {}
encodedSilhouettes = {}
encodedShinies = {}

# Load and process sprite images
for filename in os.listdir(spritePath):
    if filename.endswith('.png'):
        img = Image.open(os.path.join(spritePath, filename))
        saveEncodedImg(encodedSprites, filename, img)

# Load and process silhouette images
for filename in os.listdir(silhouettePath):
    if filename.endswith('.png'):
        img = Image.open(os.path.join(silhouettePath, filename))
        saveEncodedImg(encodedSilhouettes, filename, img)

# Load and process shiny images
for filename in os.listdir(shinyPath):
    if filename.endswith('.png'):
        img = Image.open(os.path.join(shinyPath, filename))
        saveEncodedImg(encodedShinies, filename, img)

encodedImages = {}
encodedImages['sprite'] = encodedSprites
encodedImages['shiny'] = encodedShinies
encodedImages['silhouette'] = encodedSilhouettes

import json
print(encodedImages)
with open("encoded_images.json", "w+") as w:
    json.dump(encodedImages, w)
# Now encodedImages contains the dictionaries with base64 encoded images
