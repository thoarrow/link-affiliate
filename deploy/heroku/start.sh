#!/bin/bash -e

# # Prepare for start Web
# bash ./deploy/heroku/web/start-prepare.sh
# if [[ "${?}" -ne 0 ]]; then
#   exit 1
# fi

# # Start
# node dist/apps/api/main & yarn nx run client:serve:production

# exit 0


# Start
log "Starting..."
node dist/apps/api/main & next start dist/apps/client -p ${PORT}

log "Done"