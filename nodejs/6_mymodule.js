const fs = require('fs');
const path = require('path');

module.exports = (dirPath, filterExt, callback) => {
    fs.readdir(dirPath, (err, data) => {
        if (err) return callback(err);

        list = data.filter((e) => path.extname(e) === '.' + filterExt);
        callback(null, list);
    });
}

