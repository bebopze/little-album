var express = require("express");
var app = express();

// var router = require("./controller/router.js");
// var router = require("./controller/router");
var router = require("./controller");

// 模板引擎
app.set("view engine", "ejs");
// app.engine("ejs", require('ejs').__express);
// app.engine('ejs', require('ejs').renderFile);

// 静态资源路由
app.use(express.static("./public"));
app.use(express.static("./uploads"));

// 首页路由
app.get("/", router.showIndex);

app.get("/:albumName", router.showAlbum);

// 404
// app.use("*", router.err);
app.use(function (req, res) {
    res.render("404", {
        // "baseUrl": req.pathname
        "baseUrl": req.baseUrl
    });
});


app.listen(3001);