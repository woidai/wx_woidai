var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('layout', { title: '小程序Demo' });
});



module.exports = router;
