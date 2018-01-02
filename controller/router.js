// exports.showIndex = function (req, res, next) {
//
//     // 写法一：
//     // res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
//     // res.write("write写法----");
//     // res.end("end");
//
//     // 写法二： 包装了写法一
//     res.send("我是首页");
//     next();

// }

var file = require("../models/file");

exports.showIndex = function (req, res, next) {

    file.getAllAlbums(function (err, allAlbums) {

        if (err) {
            // console.log(err);
            // res.send(err);
            // res.render("404");
            // next();
            return;
        }

        res.render("index",
            {
                albums: allAlbums
            }
        );


    })
}

// 相册
exports.showAlbum = function (req, res, next) {

    // res.send("相册名" + req.params.albumName);


    var albumName = req.params.albumName;

    file.getAllImagesByAlbumName(albumName, function (err, imagesArr) {

        if (err) {
            console.log(err);
            next();
            return;
        }

        res.render("album", {
            "albumName": albumName,
            "imagesArr": imagesArr
        });
    });

}

// exports.err = function (req, res) {
//     res.render("404");
// }