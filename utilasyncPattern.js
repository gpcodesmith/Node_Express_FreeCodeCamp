const { readFile,writeFile } = require('fs');
const util = require('util');

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

//asyn-await refactored
const start = async () => {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf8');
        const second = await readFilePromise('./content/second.txt','utf8');
        await writeFilePromise('./content/result-mind-greater.txt', `This is Awesome: ${first} + ${second}`);
        console.log(first, second);
    } catch (err) {
        console.log(err);
    }
}

start();

//'utf8' is the encoding; otherwise we get the buffer back;