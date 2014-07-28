var express = require('express');
var app = express();

app.configure(function() {
    // 設定靜態檔案所在目錄
    app.use(express.static(__dirname + '/public'));

    // 啟用 body 解析器
    app.use(express.bodyParser());

    // 啟用路由機制
    app.use(app.router);
});

app.post('/mydir/hello', function(req, res) {
    console.log(req.query.name);
    console.log(req.query.country);
    console.log(req.body.name);
    console.log(req.body.country);

    res.end();
});

app.listen(12345);

