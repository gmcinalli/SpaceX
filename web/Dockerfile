FROM node:18.3.0-alpine

ARG ENV=pro

ENV \
    ENV=$ENV \
    PATH=/app/node_modules/.bin:$PATH

WORKDIR /app

COPY package.json .
COPY package-lock.json .

COPY . .

RUN if [[ $ENV = 'pro' ]] ; \
    then \
        npm ci --omit=dev ; \
    else \
        npm ci ; \
    fi

EXPOSE 8000

ENTRYPOINT npm run $ENV
