const {readFile} = require('fs');

console.log('started a first task');

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log('error');
        return
    }
    console.log(result);
    console.log('completed first task');
})
console.log('stating next task');
