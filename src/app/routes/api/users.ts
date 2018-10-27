/**
 * /api/users/...
 */
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { users as users_model } from '../../models';
import config from '../../config';


class Users {

  /*
   * POST /api/users/register
{
  "first_name": "Marko",
  "last_name": "Marković",
  "address": "Radića 23",
  "city": "Osijek",
  "country": "Croatia",
  "phone": "+385-93-2111-222",
  "email": "test@uniapi.com",
  "website": "www.uniapi.org",
  "username": "marko",
  "password": "test123",
  "role": "admin"
}
   * Register slots user (admin, operator or cashier). Usually use this endpint for initial admin registration.
   */
  register = (req: Request, res: Response, next: NextFunction) => {
    const userDoc = req.body;

    /*** insert user into 'users' collection ***/
    users_model.register(userDoc)
      .then(insUser => {
          res.json({
              success: true,
              count: 1,
              message: 'User is created.',
              data: insUser
          });
      })
      . catch (err => {
          err.category = 'api';
          next(err);
      });
  }



  /*
   * POST /api/users/login
{
  "username": "marko",
  "password": "test123"
}
   * After successful login with username:password a JWT token is sent as response.
   */
  login = (req: Request, res: Response, next: NextFunction) => {
    const username = req.body.username;
    const password = req.body.password;

    users_model.login(username, password)
      .then(userDoc => {

        // generate token by JWT
        const jwt_payload = {id: userDoc._id, username: userDoc.username};
        const jwtToken = jwt.sign(jwt_payload, config.api_secret);

        // update jwt_token which will be used for node-cron & socket.io authentication
        return users_model.editOne({_id: userDoc._id}, {jwt_token: jwtToken})
          .then(() => {
              const jdata = {
                success: true,
                message: 'Login was successful. JWT is generated and you can use it in API request header. Authorization: JWT ' + jwtToken,
                browser_storage: {
                  username: userDoc.username,
                  authorization_header: 'JWT ' + jwtToken
                }
              };
              res.json(jdata);
          });

        })
        . catch(err => {
            err.category = 'api';
            next(err);
        });
  }



  /**
   * GET /api/users/loggedinfo
   * Authorization: JWT xyz...
   * Get logged user data (without password). User must be logged.
   */
  loggedinfo = (req: Request, res: Response, next: NextFunction) => {
      const username = req.user.username; // comes from /server/app/middlewares/auth/passportstrategy_jwt.js
      const queryObj = {username};

      users_model.getOne(queryObj)
        .then(userDoc => {
          res.json(userDoc);
        })
        .catch(err => {
          err.category = 'api';
          next(err);
        });
  }



}

const users = new Users();
export { Users, users };
