#!/bin/bash

if [ -d "de-t-co/assets" ]; then rm -r de-t-co/assets; fi

mkdir -p de-t-co/assets

convert de-t-co.svg -flatten -resize 128x128 de-t-co/assets/icon128.png
convert de-t-co.svg -flatten -resize 48x48 de-t-co/assets/icon48.png
convert de-t-co.svg -flatten -resize 16x16 de-t-co/assets/icon16.png

if [ -e "de-t-co.zip" ]; then rm de-t-co.zip; fi
cd de-t-co
zip ../de-t-co.zip src/* assets/* manifest.json
