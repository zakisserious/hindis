from PIL import Image
import collections

img = Image.open(r'c:\Users\zakaria\Desktop\Hindis\public\images\logo.png')
img = img.convert('RGB')
pixels = list(img.getdata())
# Filter out white/transparent background if necessary
# Assuming 0,0 is background color
bg_color = pixels[0]
pixels = [p for p in pixels if p != bg_color and sum(p) < 700] # exclude white-ish
counter = collections.Counter(pixels)
most_common = counter.most_common(5)
for color, count in most_common:
    print(f'#{color[0]:02x}{color[1]:02x}{color[2]:02x}: {count}')
