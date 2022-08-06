FROM node:lts-alpine

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# resolve conflict with vue-loader
RUN npm install vue-loader@15.9.8

# fix vulberabilities
RUN npm audit fix --force

# build app for production with minification
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]