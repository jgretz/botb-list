import socket from 'socket.io';

import {onClientConnect, onClientDisconnect} from '../services/sockets';

export default () => (app, server) => {
  const io = socket(server);

  io.on('connection', socket => {
    onClientConnect(app, socket);
    socket.on('disconnect', onClientDisconnect(app, socket));
  });
};
