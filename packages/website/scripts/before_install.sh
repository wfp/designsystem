#!/bin/bash
# Install node.js and Forever.js
export APP_ROOT="/home/bitnami/$APPLICATION_NAME"
export APP_NAME=$APPLICATION_NAME
sudo rm -r $APP_ROOT
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update
sudo apt-get install nodejs -y
sudo apt install yarn -y
sudo apt autoremove -y
sudo npm install pm2 -g || true
sudo npm install frontail -g || true