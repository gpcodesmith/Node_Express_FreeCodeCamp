const {readFile,writeFile} = require('node:fs');

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.error('Error:',err);
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.error('Error:',err);
            return;
        }
        const second = result;
        writeFile('./content/result2.txt',`Here is the result: ${first}, ${second}`, (err) => {
            if(err){
                console.error('Error:',err);
                return;
            }
            console.log('File created successfully');
        });
    })
})