FROM node:18-alpine3.16

COPY . .

RUN npm install

RUN npm install --arch=arm64 --platform=linuxmusl sharp

ENTRYPOINT [ "npm","run","start" ]