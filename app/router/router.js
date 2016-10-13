var express = require('express');
var commonController = require('../controller/common');
var jixiechengAppController = require('../controller/jixiecheng_app');
var router = express.Router();

var defaultResFormatFn = function (req, res, next) {
    res.resFormat = {
        data: {},
        logicState: 0,
        msg: "success",
        // state 0:正常,600:未登录,601:缺少管理员权限
        state: 0
    };
    next();
};

var crossDomain = function (req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With ,mSession, aaa');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS, PATCH, HEAD');
    if (req.method == 'OPTIONS') {
        res.sendStatus(200);//让options请求快速返回/
    } else {
        next();
    }
};

router.use(defaultResFormatFn,crossDomain);

router.post('/common/getMySelf', commonController.getMySelf);

router.post('/jixiecheng_app/getSkuId', jixiechengAppController.getSkuId);

module.exports = router;