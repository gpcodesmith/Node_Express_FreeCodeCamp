const {readFileSync,writeFileSync} = require('node:fs');
//const fs = require('fs');

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log('First File Content:', first);
console.log('Second File Content:', second);

writeFileSync('./content/result.txt',`Here is the result: ${first}, ${second}`, {flag: 'a'});

//{flag: 'a'} it is used to append the result of the file;