## About

This is a Github repo support for [this detailed tutorial](https://reeni.me/blogs/Redis---The-best-solution-for-caching-data-in-server-f40aea33cbd349a19dd17798f30e1682) on caching in NestJS with Redis.

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
