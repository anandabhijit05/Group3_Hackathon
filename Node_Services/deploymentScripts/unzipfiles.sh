#!/bin/sh

source /home/ec2-user/.bash_profile
echo "------------------------------------------"
echo "Executing BeforeInstall hook. In unzip.sh "
echo "------------------------------------------"
cd /home/ec2-user/Node_Services
echo whoami
echo "-------------------------"
echo "Run npm install"
echo "-------------------------"
npm install
echo "-------------------------"
echo "Completed npm install"
echo "-------------------------"
