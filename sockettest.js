/**
 * sockettest
 */

/* Node modules */

/* Third-party modules */
const io = require('socket.io-client');

/* Files */

const socketHost = process.env.HOST;

console.log({
  socketHost,
});

const socket = io(socketHost);

socket
  .on('connect', (req) => {
    console.log({
      event: 'connect',
      req,
    });

    setInterval(() => {
      // console.log('emit');
      // socket.emit('send', {
      //   send: 'data',
      // });
    }, 1000);
  })
  .on('event', (...args) => {
    console.log({
      event: 'event',
      args,
    });
  })
  .on('disconnect', (req) => {
    console.log({
      event: 'disconnect',
      req,
    });
  });

console.log('Connected to %s', socketHost);
