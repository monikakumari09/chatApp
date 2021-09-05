
const io  = require('socket.io')(8000)

const users = {};
console.log("new user")


io.on('connection', socket => {
    console.log("connection established")
    socket.on('new-user-joined', name => {
        console.log("new user", name)
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    })
    socket.on('send', message => {
        socket.broadcast.emit('receive', {message: message, name: user[socket.io]});
    })

})