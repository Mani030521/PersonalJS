const http = require('http').createServer()
const io = require('socket.io')(http);


io.on('connection',(client) => {
    client.on('subscribeToTimer',(interval) => {
        console.log(interval)
        client.emit('timer',(time) => {
            return time
        })
    })
})

const port = 5000;

io.listen(port);

console.log(`listening on port ${port}`)