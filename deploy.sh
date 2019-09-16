#!/usr/bin/env sh

# abort on errors
set -e

# run lint
echo Linting...
npm run lint

# run unit tests
echo Running Unit Tests...
npm run test:unit

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:cmu-sei/cmu-sei.github.io.git master
git push -f git@github.com:sei-jdshimkoski/cmu-sei.github.io.git master

cd -