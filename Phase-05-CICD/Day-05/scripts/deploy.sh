#!/bin/bash
set -e
APP_DIR=/opt/techwithdiwana
sudo mkdir -p $APP_DIR
sudo rsync -av --delete app/ $APP_DIR/
cd $APP_DIR
npm install --omit=dev
pkill -f "node server.js" || true
nohup node server.js > app.log 2>&1 &
