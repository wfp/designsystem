#!/bin/bash
export APP_ROOT="/home/bitnami/$APPLICATION_NAME"
export APP_NAME=$APPLICATION_NAME
sudo chmod +x $APP_ROOT/scripts/application_start.sh 
sudo mv $APP_ROOT/../log/$APP_NAME.log $APP_ROOT/../log/$APP_NAME\_$(date +%Y%m%d_%H%M%S).log
sudo rm $APP_ROOT/../log/$APP_NAME.log
$APP_ROOT/../certbot-auto renew --standalone
sudo chown bitnami:bitnami $APP_ROOT
sudo chown bitnami:bitnami $APP_ROOT/../log
sudo pm2 stop $APP_NAME
cd $APP_ROOT
sudo pm2 delete $APP_NAME
sudo pm2 start --name $APP_NAME -o "$APP_ROOT/../log/"$APP_NAME".log" npm -- start
sudo frontail -p 9001 -n 100 -U user -P admin --ui-highlight -d /home/bitnami/log/*