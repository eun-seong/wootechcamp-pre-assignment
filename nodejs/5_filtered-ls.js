const fs = require('fs');
const path = require('path');

const filterFile = (err, data) => {
    data.filter(e => {
        if (path.extname(e) === '.' + process.argv[3])
            console.log(e);
    })
}

fs.readdir(process.argv[2], filterFile);
