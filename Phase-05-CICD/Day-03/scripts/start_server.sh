#!/bin/bash
cd /home/ec2-user/app
nohup node server.js > output.log 2>&1 &
