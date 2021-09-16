var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/edit/', function(req, res, next) {
    res.send('users_fe', { title: "User page", message: "Bang" });
});

module.exports = router;