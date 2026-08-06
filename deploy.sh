#!/usr/bin/env sh

# abort on errors
set -e

# run checks
echo "Unit tests..."
npm test
echo "Linting..."
npm run lint
echo "Typechecking..."
npm run typecheck

# build
npm run generate

# navigate into the build output directory
cd .output/public

git init
git add -A
git commit -m 'deploy' --allow-empty
git branch -m "master"

# git push -f git@github.com:cmu-sei/cmu-sei.github.io.git master
git push -f https://github.com/cmu-sei/cmu-sei.github.io.git master

cd -
