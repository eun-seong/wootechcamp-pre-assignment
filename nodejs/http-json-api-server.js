const http = require('http');
const url = require('url');

const parsetime = (time) => {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

const unixtime = (time) => {
    return { unixtime: time.getTime() }
}

const server = http.createServer((req, res) => {
    const reqURL = url.parse(req.url, true);
    const date = new Date(reqURL.query.iso);

    if (/^\/api\/parsetime/.test(req.url)) {
        res.end(JSON.stringify(parsetime(date)));
    }
    if (/^\/api\/unixtime/.test(req.url)) {
        res.end(JSON.stringify(unixtime(date)));
    }
});

server.listen(Number(process.argv[2]));
