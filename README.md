# SuperMEAN - API - Typescript
SuperMEAN-API-Typescript is fast and lightweight API framework for NodeJS, ExpressJS and MongoDB by using **typescript** and **webpack**.


## Characteristics
- typescript
- webpack
- nodejs, expressjs, mongodb
- mongoose
- passportJS - JWT authhentication is integrated in API rutes
- protect API endpoint with JWT authentication
- protect API enpoints from unauthorized access (user roles)
- two user roles: admin & customer
- built in endpoints: user registration, user login, customer test endpoint, admin test endpoint
- built in CORS HTTP headers
- built in client IP getter
- error handling (error logger, console output, uncaught errors)


## Installation
```bash
$ git clone git@github.com:smikodanic/supermean-api-ts.git
$ cd supermean-api-ts
$ rm -rf .git
$ npm install
```


## Development
Builds are done by webpack.
```bash
$ npm run dev
or
$ npm run dev-verbose (for more detailed error messages)

(open another terminal and run)
$ nodemon ./dist/server.js
```
Test endpoints in Postman [http://127.0.0.1:9988/](http://localhost:9988/)


## Run Webpack Server (alternative to nodemon)
```bash
$ npm run serve
```


## Ports & Environments
- development: 9988
- production: 9987


## Built-in Endpoints
- **GET /api**  --API general info
- **POST /api/register**  --register new user
- **POST /api/login**  --user login
- **GET /api/loggedinfo**  --logged user info
- **GET /api/customer/test**  --customer endpoint test
- **GET /api/admin/test**  --admin endpoint test
