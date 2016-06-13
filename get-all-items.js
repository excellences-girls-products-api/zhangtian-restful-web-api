var express = require('express');
var router = express();
var fs = require("fs");

var getFileNmae = require('./file-name');

router.get('/products', function (req, res) {
    fs.readFile(getFileNmae(), 'utf8', function (err, data) {

        if (data === '' || data === {}) {
            res.status(200).json([]);

        }
        else {
            data = JSON.parse(data);

            res.status(200).json(data.items);
        }
    });
});

module.exports = router;