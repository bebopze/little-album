var express = require("express");
var app = express();
var router = require("./controller/router");


// 设置模板引擎
app.set("view engine", "ejs");

// 路由中间件
// app.use(espress.static("/", "./public"));
app.use("/static", express.static("./public", {}));

// router.showIndex等同于一个（回调）函数体，参数不用再传了  事件触发时,会自定执行 ——函数体()——>  xxx()
app.get("/index", router.showIndex);

// 等同下面写法
app.use("/hehe", function (req, res) {

    console.log(req.originalUrl + "  " + req.baseUrl + "  " + req.path);

    // 写法一：
    // res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    // res.write("write写法----");
    // res.end("end");

    // 写法二： 包装了写法一
    res.send("send写法");
});

app.get("/showAlbum", router.showAlbum);

app.listen(3001);

