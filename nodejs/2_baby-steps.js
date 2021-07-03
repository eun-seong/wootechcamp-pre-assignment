const array = process.argv.slice(2).reduce((acc, cur, i) => acc + parseInt(cur), 0);

console.log(array);
