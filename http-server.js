const http = require('http');

//Using Event Emitter API
const server =  http.createServer();


// emits request event
//subscribes to it/ listens for it/ responds to it;
server.on('request', (req, res) => {
    res.end('Welcome')
})

server.listen(5000);