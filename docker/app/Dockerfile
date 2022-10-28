FROM node:16-slim

WORKDIR /usr/src/app
COPY ["../../package.json", "./"]
COPY ["../../yarn.lock",  "./"]
COPY ../../ .

RUN rm .env
RUN rm .env.prd

RUN apt-get update
RUN apt-get install -y libc6 openssl

RUN yarn install
RUN npx prisma generate
RUN yarn run build
