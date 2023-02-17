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
git commit -m 'deploy' --allow-empty

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:cmu-sei/cmu-sei.github.io.git master

cd -