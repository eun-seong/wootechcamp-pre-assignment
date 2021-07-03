const net = require('net');
const server = net.createServer(socket => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const dates = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const dateFormat = `${year}-${month.toString().padStart(2, '0')}-${dates.toString().padStart(2, '0')} ${hours}:${minutes}\n`;
    socket.write(dateFormat);

    socket.end();
});

server.listen(parseInt(process.argv[2]));
