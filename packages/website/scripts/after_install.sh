#!/bin/bash
export APP_ROOT="/home/bitnami/$APPLICATION_NAME"
export APP_NAME=$APPLICATION_NAME
sudo rm $APP_ROOT/../log/$APP_NAME.log || true
sudo mkdir $APP_ROOT/../log/ || true
sudo cp -r $APP_ROOT/../static/. $APP_ROOT/ || true
cd $APP_ROOT/
sudo chown -R bitnami:bitnami .
sudo npm install
npm run-script build