var fs = require("fs");


exports.getAllAlbums = function (callback) {

    // 文件夹
    fs.readdir("./uploads", function (err, files) {

        if (err) {

            // callback(err, null);
            callback("没有找到uploads文件夹", null);
        }


        var allAlbums = [];
        console.log(files);

        (function iterator(i) {
            if (i == files.length) {
                //  遍历结束
                callback(null, allAlbums);
                return;
            }
            fs.stat("./uploads/" + files[i], function (err, stats) {
                if (err) {
                    callback("没有找到文件" + files[i], null);
                }

                if (stats.isDirectory()) {
                    allAlbums.push(files[i]);
                }
                iterator(i + 1);
            });

        })(0);


    })

    // return ["虫师", "cowboy", "小新", "江湖", "MM"];
}

exports.getAllImagesByAlbumName = function (albumName, callback) {

    fs.readdir("./uploads/" + albumName, function (err, files) {
        if (err) {
            callback("找不到文件夹" + "./uploads" + albumName, null);
            return;
        }

        var imagesArr = [];
        console.log(files);

        (function iterator(i) {

            fs.stat("./uploads/" + albumName + "/" + files[i], function (err, stat) {
                    if (i == files.length) {
                        callback(null, imagesArr);
                        return;
                    }

                    if (err) {
                        callback("没有找到该文件" + files[i], null);
                        return;
                    }


                    if (stat.isFile()) {
                        imagesArr.push(files[i]);
                    }

                    iterator(i + 1);
                }
            )

        })(0);

    })
}
