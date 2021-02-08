#!/bin/bash
rm -fr ShortCutExtension ShortCutExtension.zip dist
npm install
npm run build
cp -R dist ShortCutExtension
zip -r ShortCutExtension.zip ShortCutExtension