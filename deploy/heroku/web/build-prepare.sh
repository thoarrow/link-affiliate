#!/bin/bash -e

echo "*************************"
echo "* Prepare for build Web *"
echo "*************************"
echo

ENV_FILE_PATH="./apps/client/.env"

# Config NEXTAUTH_URL server
LOCAL_URL="http:\/\/localhost:3001"
DEV_URL="https:\/\/super-linkaff-pr-${HEROKU_PR_NUMBER}.herokuapp.com"
PROD_URL="https:\/\/super-linkaff.herokuapp.com"

if [[ "${HEROKU_PR_NUMBER}" != "" ]]; then
  NEXTAUTH_URL="${DEV_URL}"
else
  NEXTAUTH_URL="${PROD_URL}"
fi

echo "--> Config NEXTAUTH_URL server: ${NEXTAUTH_URL}"
sed -i "s|${LOCAL_URL}|${NEXTAUTH_URL}|" "${ENV_FILE_PATH}"
if [[ "${?}" -ne 0 ]]; then
  echo "--> Error: Edit config ${ENV_FILE_PATH} not success (NEXTAUTH_URL)."
  exit 1
fi

# Config mode
DEV_MODE='development'
PROD_MODE='production'
PREVIEW_MODE='preview'

if [[ "${HEROKU_PR_NUMBER}" != "" ]]; then
  SELECT_MODE="${PREVIEW_MODE}"
else
  SELECT_MODE="${PROD_MODE}"
fi

echo "--> Config application mode: ${SELECT_MODE}"
sed -i "s/${DEV_MODE}/${SELECT_MODE}/" "${ENV_FILE_PATH}"
if [[ "${?}" -ne 0 ]]; then
  echo "--> Error: Edit config ${ENV_FILE_PATH} not success (MODE)."
  exit 1
fi

# Config JWT secret
JWT_SECRET=$(date +%s%N${RANDOM}${RANDOM} | sha256sum | head -c32)

echo "--> Config JWT secret: ${JWT_SECRET}"
sed -i "s/secret/${JWT_SECRET}/" "${ENV_FILE_PATH}"
if [[ "${?}" -ne 0 ]]; then
  echo "--> Error: Edit config ${ENV_FILE_PATH} not success (JWT_SECRET)."
  exit 1
fi

exit 0
