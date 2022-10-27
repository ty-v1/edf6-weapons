FROM node:16-slim

WORKDIR /usr/src/app
COPY ["../../package.json", "./"]
COPY ["../../yarn.lock",  "./"]
COPY ../../ .

RUN apt update
RUN apt install -y libc6 openssl wget

RUN wget 'https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh'
RUN chmod 755 wait-for-it.sh

RUN yarn install
RUN npx prisma generate
RUN yarn run build
