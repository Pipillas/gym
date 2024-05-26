require('./database/database.js');
const { Server } = require('socket.io');
const socketFunctions = require('./socketFunctions.js');

const io = new Server(3000, {
    cors: '*'
});

io.on('connection', (socket) => socketFunctions(io, socket));