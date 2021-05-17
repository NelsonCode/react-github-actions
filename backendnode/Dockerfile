FROM node:14

RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 8000

CMD [ "npm", "run",  "serve" ]