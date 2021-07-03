const mymodule = require('./6_mymodule.js');

const print = (err, data) => {
    if (err) console.error('error!');
    else data.forEach(e => console.log(e));
}

mymodule(process.argv[2], process.argv[3], print);
