#!/usr/bin/env bash
# exit on error
set -o errexit

# Install Ruby gems
bundle install

# Build React client and copy assets into Rails public directory
cd client
yarn install
yarn build
cp -r build/* ../public/
cd ..

# Run database migrations and seed data
bundle exec rake db:migrate
bundle exec rake db:seed
