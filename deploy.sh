#!/usr/bin/env sh

# abort on errors
set -e

# run checks
echo Running unit tests...
npm test
npm run lint

# build
npm run generate

# navigate into the build output directory
cd .output/public

git init
git add -A
git commit -m 'deploy' --allow-empty
git branch -m "master"

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:cmu-sei/cmu-sei.github.io.git master

cd -
