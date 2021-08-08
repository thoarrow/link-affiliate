#!/bin/bash -e

echo "*************************"
echo "* Prepare for start Web *"
echo "*************************"
echo

# Config port
WORKSPACE_PATH='./workspace.json'
LOCAL_PORT='3001'

echo "--> Config application port: ${PORT}"
sed -i "s/${LOCAL_PORT}/${PORT}/" "${WORKSPACE_PATH}"
if [[ "${?}" -ne 0 ]]; then
  echo "--> Error: Edit config ${WORKSPACE_PATH} not success (port)."
  exit 1
fi

exit 0
