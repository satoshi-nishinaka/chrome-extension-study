#!/bin/bash
git checkout dist
rm -fr ShortCutExtension ShortCutExtension.zip
npm install
npm run build
cp -r dist ShortCutExtension
rm ShortCutExtension/git.keep
zip -r ShortCutExtension.zip ShortCutExtension