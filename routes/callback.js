var express = require('express');
var axios = require('axios');
var qs = require('qs');
var config = require('./../config');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {

    try{
    var url_accesstoken = 'https://api-sandbox.fintecture.com/oauth/accesstoken';

    var header_authorization = 'Basic ' + (new Buffer(config.app_id + ':' + config.app_secret).toString('base64'));
    console.log("blabla");
    console.log (qs.stringify({"grant_type":"authorization_code","code":req.query.code}));
    var accesstoken = await axios({
        method: 'POST',
        url: url_accesstoken,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': header_authorization
        },
        data: qs.stringify({"grant_type":"authorization_code","code":req.query.code})
    });
    
    if (accesstoken.data)
        res.render('index', {accesstoken: accesstoken.data.access_token});
    else 
        throw Error();
    }
    catch(err) {
        res.render('index', {accesstoken: "error retrieving access token"});
    }

});

module.exports = router;
