#!/bin/bash

echo "Fixing permissions..."
sudo chown -R ec2-user:ec2-user /home/ec2-user/app

cd /home/ec2-user/app

if ! command -v node &> /dev/null
then
  curl -sL https://rpm.nodesource.com/setup_18.x | sudo bash -
  sudo yum install -y nodejs
fi

npm install
nohup node server.js > output.log 2>&1 &