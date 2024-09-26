const {createReadStream} = require('fs');

const stream = createReadStream('..../content/big.txt');//we have to pass the path in the stram;

stream.on('data', (result)=>{
    console.log(result)
})

//default 64kb
//last buffer - remainder
//highWaterMark - control size
//const stream = createReadStream('./content/big.txt',{highWaterMark:90000});
//const stream = createReadStream('./content/big.txt',{encoding:'utf8'});

stream.on('error',(err)=>{
    console.log(err);
});