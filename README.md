## About

This is a Github repo that uses the techniques described in [this detailed tutorial](https://reeni.com/nestjs-caching-redis) on caching in NestJS with Redis.

## Set up locally

Install dependencies:

```
yarn
```

Create your own env file:

```
cp .env.example .env
```


Spin up local environment (hot reloading included):

```
# for nest app
yarn start:dev

# for redis cache
docker compose up
```
