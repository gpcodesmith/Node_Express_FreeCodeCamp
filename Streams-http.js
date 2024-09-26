var http = require('http')
var fs = require('fs')

http
    .createServer(function (req, res) {
        // const text = fs.readFileSync('./content/big.txt', 'utf8')
        // res.end(text)
        const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
        fileStream.on('open', () => {
            fileStream.pipe(res)
        })
        fileStream.on('error', (err) => {
            res.end(err)
        })
    })
    .listen(5000)


/*
http.createServer(function (req, res) {
    const text = fs.readFileSync('./content/big.txt', 'utf8');
    res.end(text);
}).listen(5000);
*/
//This Comment sends the whole file to the server which is very large and slow the website;