# You okay?
If you find yourself in a disaster situation like the zombie apocalypse or a pandemic, you can check on all your friends and family automatically.

# Summary
If you've ever wondered about the safety of your friends and family during a catastrophic event, this automated service will regularly check up on them for you and alert you if they don't respond within a set timeframe.

# Problem
People, especially those who are alone, during a catastrophic event might need assistance and no one knows it.

# Solution
We send a link periodically that your loved one can click on and say they are ok. If they don't click on the link within a set timeframe someone will be alerted.

# How to Get Started
It's as easy as adding their phone numbers to our database and the service automatically sends a text message if they're ok and all they need to do is click a link.

### Development

1. clone repo
2. go to root folder of repo and from the command line type
  ```sh
    npm install
  ```
3. Start up the dev server (uses nodemon) form the command line with
  ```sh
  npm run server:start
  ```

### Deployment
- If you made any changes to the repo you'll first have to build the container using the npm script in package.json called `npm build`. Replace `manuelag19` in  `docker build -t manuelag19/youokay . && docker push manuelag19/youokay` with your own dockerhub username.

To deploy to an EC2 instance on AWS have a pem file in your computer, a safe place is `$(HOME)/.ssh`.
Modify `.example.env` with the right data and rename `.env`

- From your LOCAL computer
```sh
# Makes the environment variables you just defined in `.env` available in your current shell
export $(cat .env)
```

```sh
# Only include the 1 at the end if this is the first time you've run this script on this instance (installs things like docker, docker-compose, etc...)
bash deploy.sh $pathToPEM $instance 1 && bash compose.sh $pathToPEM $instance
```

- (if needed) Enter yes at the prompt.

- The app is now running on the instance in a container at port 4444. The mongo database is available in its own container at port 27017.

### If you made any changes to the code but not the docker-compose or .env files and need to restart
- Stop (and clean up after yourself!)
```sh
bash compose.sh $pathToPEM $instance 1
```
- To restart the app:
```sh
bash compose.sh $pathToPEM $instance
```
### If you made any changes to the docker-compose or .env files
- Redeploy without installing docker
```sh
# copy over the new files and docker-compose up
bash deploy.sh $pathToPEM $instance && bash compose.sh $pathToPEM $instance
```