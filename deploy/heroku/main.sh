#!/bin/bash -e

echo "  _________                                  _________.__                     "
echo " /   _____/ __ __ ______    ____  _______   /   _____/|  |__    ____  ______  "
echo " \_____  \ |  |  \\____ \ _/ __ \ \_  __ \  \_____  \ |  |  \  /  _ \ \____ \ "
echo " /        \|  |  /|  |_> >\  ___/  |  | \/  /        \|   Y  \(  <_> )|  |_> >"
echo "/_______  /|____/ |   __/  \___  > |__|    /_______  /|___|  / \____/ |   __/ "
echo "        \/        |__|         \/                  \/      \/         |__|    "
echo

ACTION="${1}"
BUILD_ACTION="build"
START_ACTION="start"

if [[ "${ACTION}" = "${BUILD_ACTION}" ]]; then
  bash ./deploy/heroku/build.sh
elif [[ "${ACTION}" = "${START_ACTION}" ]]; then
  bash ./deploy/heroku/start.sh
else
  echo "--> Error: Invalid action."
  exit 1
fi

exit 0
