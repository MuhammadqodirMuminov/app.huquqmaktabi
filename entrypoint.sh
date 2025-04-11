#!/bin/sh
# Check if the mounted volume is empty, if so, copy files
echo "Copying files from /prev-app to /app/public/assets"
cp -rn /prev-app/* /app/public/assets

echo "Copying files from /app/public/assets to /prev-app"
cp /app/public/assets/* /prev-app

exec /entrypoint.sh "$@"
