// dependancies
const https = require('https');

// Adapted from information in the ExpressJS documentation about `res` being a writable pipe
module.exports = (req, res, next) => https.get(
  'https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json',
  response => response.pipe(res)
)
  .on('error', next);
