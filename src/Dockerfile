FROM node:alpine
WORKDIR "/app"

COPY package.json .
RUN npm install
#copy all files from current directory to docker

COPY . .


# start app
CMD ["npm", "start"]

#changes are here
