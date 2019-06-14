import {SOCKETS} from '../../constants';

export default (app, socket) => () => {
  const sockets = app.get(SOCKETS) || [];
  app.set(SOCKETS, sockets.splice(sockets.findIndex(s => s === socket), 1));

  console.log('client disconnected');
};
