#!/bin/bash -e

# Prepare for build API
bash ./deploy/heroku/api/build-prepare.sh
if [[ "${?}" -ne 0 ]]; then
  exit 1
fi

# # Prepare for build Web
# bash ./deploy/heroku/web/build-prepare.sh
# if [[ "${?}" -ne 0 ]]; then
#   exit 1
# fi

# Build
npx nx run-many --all --target=build --configuration=production --parallel

exit 0
