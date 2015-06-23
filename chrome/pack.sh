#!/bin/bash

rm -r de-t-co/assets

mkdir -p de-t-co/assets

convert de-t-co.svg -flatten -resize 128x128 de-t-co/assets/icon128.png
convert de-t-co.svg -flatten -resize 48x48 de-t-co/assets/icon48.png
convert de-t-co.svg -flatten -resize 16x16 de-t-co/assets/icon16.png

rm de-t-co.zip
cd de-t-co
zip ../de-t-co.zip src/* assets/* manifest.json
