import {connectToDatabase} from '../../util';
import {SOCKETS} from '../../constants';

export default async (app, socket) => {
  // add socket to list
  const sockets = app.get(SOCKETS) || [];
  sockets.push(socket);
  app.set(SOCKETS, sockets);

  console.log('client connected');

  // send initial data
  const db = await connectToDatabase();
  const stats = await db.checklist.find();

  socket.emit('initial', {payload: stats});
};
