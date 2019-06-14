import _ from 'lodash';
import {SOCKETS} from '../../constants';

export default (app, type, data) => {
  const sockets = app.get(SOCKETS) || [];

  _.forEach(sockets, socket => {
    socket.emit(type, {payload: data});
  });
};
