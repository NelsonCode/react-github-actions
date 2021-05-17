FROM alpine
RUN apk add --update nodejs nodejs-npm
RUN npm i -g serve
WORKDIR /app
COPY package*.json /app/
ENV REACT_APP_REST=/api
RUN npm install
COPY . /app/
RUN npm run build
CMD [ "serve", "-s", "build"]