FROM node:12.14-alpine3.10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 1997

CMD ["node", "app.js"]