var express = require('express');
var router = express.Router();
var config = require('./../config')

/* GET home page. */
router.get('/', function(req, res, next) {
  
  let url_auth = `https://api-sandbox.fintecture.com/oauth/token/authorize?response_type=code&app_id=${config.app_id}&redirect_uri=${config.redirect_uri}`;

  res.redirect(url_auth);

});

module.exports = router;
