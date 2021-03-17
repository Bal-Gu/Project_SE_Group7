# Set the base image to Ubuntu
FROM ubuntu:latest

# Install Node.js and other dependencies
RUN apt-get update && apt-get -y dist-upgrade && \
    apt-get -y install curl sudo gnupg2 && \
    curl -sL https://deb.nodesource.com/setup_15.x | sudo bash - && \
    apt-get -y install python build-essential nodejs

# Install nodemon
RUN npm install -g npm@7.6.3
RUN npm install -g nodemon

# Define working directory
WORKDIR /src
ADD . /src
RUN npm install

# Expose port
EXPOSE  8080

# Run app using nodemon
CMD ["nodemon", "/src/Code/index.js"]
