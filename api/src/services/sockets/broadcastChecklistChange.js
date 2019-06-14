import _ from 'lodash';
import {SOCKETS} from '../../constants';

export default (app, type, data) => {
  const sockets = app.get(SOCKETS) || [];

  console.log('SOCKETS: ', sockets.length);

  _.forEach(sockets, socket => {
    socket.emit(type, {payload: data});
  });
};
