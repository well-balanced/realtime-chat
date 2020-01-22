const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.emit('some event', { 
    someProperty: 'some value', 
    otherProperty: 'other value'
})


io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    })
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});