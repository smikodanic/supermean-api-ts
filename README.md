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
$ git clone git@github.com:smikodanic/supermean-api-ts.git <project_name>
$ cd <project_name>
$ rm -rf .git
$ git init
$ npm install
```

or simply download **install.sh** and run ```source install.sh```


## Development
Builds are done by webpack and depends on environment.
```bash
(open first terminal and run)
$ npm run build:development
or
$ npm run build:stage
or
$ npm run build:production

(open another terminal and run)
$ npm run serve
```

Test endpoints in Postman [http://127.0.0.1:9988/](http://localhost:9988/)



## Ports & Environments
- development: 9988
- production: 9987


## Built-in Endpoints
- **GET /api**  --API general info
- **POST /api/register**  --register new user
- **POST /api/login**  --user login which returns JWT token
- **GET /api/loggedinfo**  --logged user info
- **GET /api/customer/test**  --customer endpoint test
- **GET /api/admin/test**  --admin endpoint test
