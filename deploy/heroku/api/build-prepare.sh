#!/bin/bash -e

echo "*************************"
echo "* Prepare for build API *"
echo "*************************"
echo

CONFIG_DIR="./libs/api-root/core/configuration/src/assets/production"
APP_CONFIG="${CONFIG_DIR}/app.yaml"
AUTH_CONFIG="${CONFIG_DIR}/auth.yaml"
AWS_CONFIG="${CONFIG_DIR}/aws.yaml"
PLATFORM_CONFIG="${CONFIG_DIR}/platform.yaml"

# Config mode
DEV_MODE='development'
PROD_MODE='production'
PREVIEW_MODE='preview'

# Set mode
if [[ "${HEROKU_PR_NUMBER}" != "" ]]; then
  SELECT_MODE="${PREVIEW_MODE}"
else
  SELECT_MODE="${PROD_MODE}"
fi

echo "--> Config application mode: ${SELECT_MODE}"
sed -i "s|${DEV_MODE}|${PROD_MODE}|" "${APP_CONFIG}"
if [[ "${?}" -ne 0 ]]; then
  echo "--> Error: Edit config ${APP_CONFIG} not success (mode)."
  exit 1
fi

# Config CORS rules and Web host
DEV_CORS_ORIGIN="http:\/\/localhost:3001"
PREVIEW_CORS_ORIGIN="https:\/\/supershopvn-pr-${HEROKU_PR_NUMBER}.herokuapp.com"
PROD_CORS_ORIGIN="https:\/\/supershopvn.herokuapp.com"

if [[ "${HEROKU_PR_NUMBER}" != "" ]]; then
  SELECT_CORS_ORIGIN="${PREVIEW_CORS_ORIGIN}"
else
  SELECT_CORS_ORIGIN="${PROD_CORS_ORIGIN}"
fi

echo "--> Config CORS rules and Web host: ${SELECT_CORS_ORIGIN}"
sed -i "s|${DEV_CORS_ORIGIN}|${SELECT_CORS_ORIGIN}|" "${APP_CONFIG}"
if [[ "${?}" -ne 0 ]]; then
  echo "--> Error: Edit config ${APP_CONFIG} not success (allowCors and Web host)."
  exit 1
fi

# Config JWT secret
JWT_SECRET=$(date +%s%N${RANDOM}${RANDOM} | sha256sum | head -c32)

echo "--> Config JWT secret"
sed -i "s/secret/${JWT_SECRET}/" "${AUTH_CONFIG}"
if [[ "${?}" -ne 0 ]]; then
  echo "--> Error: Edit config ${AUTH_CONFIG} not success (jwtSecret)."
  exit 1
fi

# Config prisma schema
PRISMA_SCHEMA_PATH="./prisma/schema.prisma"
DEV_DATABASE_URL="mysql:\/\/root:spsroot@localhost:3306\/supershop"

echo "--> Config database URL in prisma schema"
sed -i "s|${DEV_DATABASE_URL}|${JAWSDB_URL}|" "${PRISMA_SCHEMA_PATH}"
if [[ "${?}" -ne 0 ]]; then
  echo "--> Error: Edit config ${PRISMA_SCHEMA_PATH} not success (url)."
  exit 1
fi

# Config AWS
echo "--> Config AWS access key"
sed -i "s/accessKeyValue/${AWS_ACCESS_KEY}/" "${AWS_CONFIG}"
if [[ "${?}" -ne 0 ]]; then
  exit 1
fi

echo "--> Config AWS secret access key"
sed -i "s|secretAccessKeyValue|${AWS_SECRET_ACCESS_KEY}|" "${AWS_CONFIG}"
if [[ "${?}" -ne 0 ]]; then
  exit 1
fi

echo "--> Config AWS S3 bucket"
sed -i "s/s3BucketValue/${AWS_S3_BUCKET}/" "${AWS_CONFIG}"
if [[ "${?}" -ne 0 ]]; then
  exit 1
fi

# Config platform
echo "--> Config Shopee partner ID"
sed -i "s/shopeePartnerId/${SHOPEE_PARTNER_ID}}/" "${PLATFORM_CONFIG}"
if [[ "${?}" -ne 0 ]]; then
  exit 1
fi

echo "--> Config Shopee partner key"
sed -i "s/shopeePartnerKey/${SHOPEE_PARTNER_KEY}}/" "${PLATFORM_CONFIG}"
if [[ "${?}" -ne 0 ]]; then
  exit 1
fi

# Generate prisma types
echo "--> Generate prisma types"
yarn prisma generate
if [[ "${?}" -ne 0 ]]; then
  exit 1
fi

# Deploy database
echo "--> Deploy database"
if [[ "${HEROKU_PR_NUMBER}" != "" ]]; then
  yarn prisma migrate reset --force --skip-generate
else
  yarn prisma migrate deploy
  yarn prisma db seed --preview-feature
fi
if [[ "${?}" -ne 0 ]]; then
    exit 1
fi

exit 0
