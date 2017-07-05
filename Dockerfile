########################################
# Docker                               #
#                                      #
# A NodeJS container that enables the  #
# application to run                   #
########################################

FROM node:8-alpine

LABEL maintainer "Simon Emms"

# Set the work directory and add the project files to it
WORKDIR /opt/app
ADD . /opt/app

# Environment variables
ENV SERVER_PORT=9999

# Install the dependencies

# Expose the ports
EXPOSE 9999 5858

# Set the user as host's current user
USER node

# Run run run
CMD npm start
