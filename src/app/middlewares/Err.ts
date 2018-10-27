/**
 * Middleware for error manipulation.
 */
import config from '../config';
import chalk from 'chalk';


class Err {

  static obj() {
    return new this();
  }

  /**
   * Convert error to JSON and send formatted error to client.
   * @param  Error err - non formatted error
   * @return Object     - JSON formatted error message
   */
  private send2client(err, res) {
    const status = err.status || 500;
    res.status(status);

    const jdata = {
      status,
      message: err.message,
      stack: err.stack
    };
    res.json(jdata);
  }


  /**
   * Insert error to 'log_errors' collection
   * @param  Error   errDoc - error document object
   * @param  Function next
   * @return null
   */
  private send2mongo(err, req, next) {
    // full url
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

    const errDoc = {
      status: err.status || 500,
      level: err.level || 'error',
      category: err.category || 'general',
      message: err.message,
      stack: err.stack,
      verb: req.method,
      url: fullUrl,
      ip: req.client.ip,
      time: Date.now(),
      err_orig: err || {} // original error
    };


    // log_errors_model.insertLog(errDoc)
    //     .catch(function (err) {
    //         err.category = 'log_errors';
    //         next(err);
    //     });
  }



  sender = (err, req, res, next) => {
    // output to console (only in development environment)
    if (config.env.name !== 'production') {
      console.log(chalk.red(err.stack));
      console.log(chalk.magenta(JSON.stringify(err, null, 4)));
    }

    /*** OUTPUT ***/
    this.send2client(err, res);
    // this.send2mongo(err, req, next);
  }


  /* report error 404 on bad /api/... URLs*/
  badAPIurl = (req, res, next) => {
    if (req.url.indexOf('/api') !== -1) {
      const jdata = {
        status: 404,
        message: 'Error 404: Url ' + req.url + ' not found'
      };
      res.status(404).json(jdata);
    } else {
      next();
    }
  }


  // catch all uncaught exceptions
  uncaught() {
    process.on('uncaughtException', (err: any) => {
      console.error(chalk.red(err)); // output to console
    });
  }

}

export default Err;
