import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:5000');

export const subscribeToTimer = (cb) => {
    socket.emit('subscribeToTimer', 1000);
    socket.on('timer', );
}