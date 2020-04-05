#!/bin/bash
# This script sets up a docker-compose installation of the service on EC2

pathToPEM=$1
instance=$2
install=${3:-0} # defaults to 0

# Create the app directory if it doesn't exist
ssh -i $pathToPEM ec2-user@$instance 'mkdir -p app'

# Moves these files onto that instance
scp -i $pathToPEM ./docker-compose.yml .env ec2-user@$instance:~/app

# This section should only be run once per instance
if test $install -eq 1
then
  # Moves the install script onto the instance
  scp -i $pathToPEM ./ec2-install.sh ec2-user@$instance:~

  # Runs the file ec2-install.sh (that you just moved to the instance), on that instance
  ssh -i $pathToPEM ec2-user@$instance bash ec2-install.sh
fi