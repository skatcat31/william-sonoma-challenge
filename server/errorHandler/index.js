/**
 * ExpressJS compliant Error Handler for the simple server
 *
 * If we don't have all four arguments it does not get registered as an error handler
 *
 * Adapted from ExpressJS documentation
 * @param {Error} error ExpressJS Error Object
 * @param {Request} req ExpressJS Request Object
 * @param {Response} res ExpressJS Response Object
 * @param {Function} next ExpressJS Next Object
 */
module.exports = (error, req, res, next) => { // eslint-disable-line no-unused-vars
  console.error(`${new Date()}:${req.baseUrl}:${error.message}`); // eslint-disable-line no-console
  return req.xhr
    ? res.json({
      status: 500,
      error: 'Server Side Error',
      code: 500,
      message: 'Server Side Error'
    })
    : res.sendStatus(500);
};
