FROM node:18-alpine

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY src src

RUN npm install

CMD ["npm", "start"]