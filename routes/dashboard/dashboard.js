/**
 * Created by gefan on 2016/1/18.
 */
var express = require('express');
var webHelper = require('../../lib/webHelper');
var config = require('../../config');

var router = express.Router();

router.get('/', function (req, res, next) {
    res.redirect('/dashboard/p');
});



module.exports = router;