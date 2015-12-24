var express = require('express');
var wechatapi = require('wechat-api');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
   // 签名成功
    // if (wechatapi.checkSignature(req)) {
    //     res.send(200, req.query.echostr);
    // } else {
    //     res.send(200, 'fail');
    // }
    // res.send(200,'Welcome to MEAN!!!');
    res.render('layout', { title: 'Express' });
});

module.exports = router;
