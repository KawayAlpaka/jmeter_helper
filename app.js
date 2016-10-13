var https = require('https');
var http = require('http');
var fs = require('fs');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require("body-parser");
var app = express();

var routerApi = require('./app/router/router');


app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.json({limit: '1mb'}));  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
    extended: true
}));

app.use('/api', routerApi,function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send({
        state:"error"
    });
});


// http 版本
var httpServer = http.createServer(app).listen(4040, function () {
    var host = httpServer.address().address;
    var port = httpServer.address().port;
    console.log('jmeter helper listening at http://%s:%s', host, port);
});


