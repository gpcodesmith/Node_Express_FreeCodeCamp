const { readFile,writeFile } = require('fs').promises
// const util = require('util');

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

//asyn-await refactored
const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt','utf8');
        await writeFile('./content/result-mind-greater.txt', `This is Awesome: ${first} + ${second}`,{flag:'a'});
        console.log(first, second);
    } catch (err) {
        console.log(err);
    }
}

start();

//'utf8' is the encoding; otherwise we get the buffer back;