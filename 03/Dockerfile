FROM node:latest

WORKDIR /app

COPY package*.json /app/

RUN npm i

COPY . /app/

EXPOSE ${PORT:-3000}

CMD ["npm", "start"]