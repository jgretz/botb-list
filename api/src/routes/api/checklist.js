import _ from 'lodash';
import {connectToDatabase} from '../../util';
import {broadcastChecklistChange} from '../../services/sockets';

const execute = func => async (source, req, res) => {
  const {webUserId, beerId} = source;

  if (webUserId?.length !== 36 || !_.isNumber(parseInt(beerId, 10))) {
    res.status(500).send('Incorrect format');
    return;
  }

  try {
    const db = await connectToDatabase();

    await func(db, req, webUserId, beerId);
  } catch (err) {
    console.error(err); // eslint-disable-line
    res.status(500).send();
  }

  res.status(200).send();
};

const post = execute(async (db, req, webUserId, beerId) => {
  const item = await db.checklist.insert({
    webuserid: webUserId,
    beerid: parseInt(beerId, 10),
    checkdate: new Date().toUTCString(),
  });

  broadcastChecklistChange(req.app, 'addition', item);
});

const destroy = execute(async (db, req, webUserId, beerId) => {
  const items = await db.checklist.destroy({
    webuserid: webUserId,
    beerid: parseInt(beerId, 10),
  });

  if (items.length > 0) {
    broadcastChecklistChange(req.app, 'subtraction', items[0]);
  }
});

export default {
  post: async (req, res) => {
    post(req.body, req, res);
  },

  delete: async (req, res) => {
    destroy(req.query, req, res);
  },
};
