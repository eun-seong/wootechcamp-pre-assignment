const fs = require('fs');

const func = (err, data) => {
    let lines = data.toString().split('\n').length - 1;
    console.log(lines);
}

fs.readFile(process.argv[2], func);

