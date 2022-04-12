#!/bin/bash
cd /home/ubuntu/remember-trip-side/server
export DATABASE_PASSWORD=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_PASSWORD --query Parameters[0].Value | sed 's/"//g')

authbind --deep pm2 start app.js
