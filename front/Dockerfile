#next13 uses node-sass 7 that works on node <18 (16 then)
FROM node:16-alpine3.16 as development 

RUN mkdir devApp

WORKDIR /devApp

COPY . .

RUN npm install

RUN npm run build

FROM node:18-alpine3.16 as prod_build

COPY --from=development devApp/.next .

ENTRYPOINT [ "npm","run","start" ]
