exports.showIndex = function (req, res, next) {

    // 写法一：
    // res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    // res.write("write写法----");
    // res.end("end");

    // 写法二： 包装了写法一
    res.send("我是首页");
    next();
}

exports.showAlbum = function (req, res) {
    res.send("我是相册页面");
}