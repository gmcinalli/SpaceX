# SpaceX

## How to run

#### Using Node

First, install `node` and `npm` following [these instructions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

Then, start the `rest` service:

```shell
cd rest
export ENV=pro
npm ci --omit=dev
npm run pro
```

To start the `web` service:

```shell
cd web
npm ci --omit=dev
npm run pro
```

Now open your browser and go to [http://localhost:3000](http://localhost:3000).

#### Docker

If you prefer to use **Docker** (recommended) of course you can!

First, install `docker` and `docker-compose` following these instructions:

* [Docker](https://docs.docker.com/engine/install/)
* [Docker Compose](https://docs.docker.com/compose/install/)

Then simply:

```shell
docker-compose up
```
