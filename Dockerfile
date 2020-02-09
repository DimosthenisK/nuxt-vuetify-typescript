FROM node:latest

COPY package.json /app/
COPY yarn.lock /app/

RUN cd /app/

RUN cd /app && yarn

RUN npm i -g nuxt
RUN npm i -g @nuxt/typescript
RUN npm i -g nuxt-ts

COPY . /app/

EXPOSE 3333

ENV HOST 0.0.0.0

RUN cd /app && /app/node_modules/.bin/nuxt-ts build
CMD cd /app && /app/node_modules/.bin/nuxt-ts start