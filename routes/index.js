var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { message: 'Welcome to DPCB Shop', title: 'Can you SEE Product' });
});

module.exports = router;