import io from 'socket.io-client';

export const CONNECTED_TO_SOCKET = 'CONNECTED_TO_SOCKET';
export const CHECKLIST_ADDITION = 'CHECKLIST_ADDITION';
export const CHECKLIST_SUBTRACTION = 'CHECKLIST_SUBTRACTION';

export const connectToSocket = () => dispatch => {
  var socket = io.connect(process.env.SOCKET_BASE_URL);

  const handleMessage = type => ({payload}) => {
    dispatch({type, payload});
  };

  socket.on('initial', handleMessage(CONNECTED_TO_SOCKET));
  socket.on('addition', handleMessage(CHECKLIST_ADDITION));
  socket.on('subtraction', handleMessage(CHECKLIST_SUBTRACTION));
};
