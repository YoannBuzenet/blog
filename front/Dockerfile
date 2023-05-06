FROM node:18-alpine3.16 as development

COPY . .

RUN npm install

RUN npm run build

FROM node:18-alpine3.16 as prod_build

COPY --from=development ./build .

ENTRYPOINT [ "npm","run","start" ]
