#!/usr/bin/env sh

# abort on errors
set -e

# run unit tests
echo Running Unit Tests...
npm test

# build
npm run generate

# navigate into the build output directory
cd .output/public

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f https://sei-jdshimkoski@github.com:cmu-sei/cmu-sei.github.io.git master

cd -