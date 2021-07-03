const http = require('http');
const bl = require('bl');
const async = require('async');
let count = 0;
const resultStr = new Array(3);

const api = (i, url) => http.get(url, res => {
    res.pipe(bl((err, data) => {
        if (err) console.error(err);

        resultStr[i] = data.toString();
        if (++count === 3) printResult();
    }));
});

const printResult = () => {
    for (let res of resultStr) {
        console.log(res);
    }
}

for (let i = 0; i < 3; i++) {
    api(i, process.argv[i + 2]);
}
