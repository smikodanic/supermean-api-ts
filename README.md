# SuperMEAN - API - typescript
SuperMEAN-API-typescript is framework for fast API development in NodeJS, ExpressJS and MongoDB by using **typescript** and **webpack**.

More information on [www.supermean.org](http://www.supermean.org) .



## Installation
```bash
$ npm install
```

## Development
```bash
$ npm run serve
```


## Production
```bash
$ npm run build
or
$ npm run build-verbose (for more detailed error messages)

(open another terminal and run)
$ nodemon ./dist/server.js
```
Test endpoints in Postman [http://127.0.0.1:9988/](http://localhost:9988/)


## Ports & Environments
- development: 9988
- production: 9987


## Endpoints
- GET /api
- POST /api/tests/postgresql/createtable
