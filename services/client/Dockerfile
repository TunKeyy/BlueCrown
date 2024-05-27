FROM node:alpine

WORKDIR /src/client
COPY . .

RUN npm install

WORKDIR /src/client
CMD [ "npm", "start" ]