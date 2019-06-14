import _ from 'lodash';
import {connectToDatabase} from '../../util';

const execute = func => async (source, res) => {
  const {webUserId, beerId} = source;

  if (webUserId?.length !== 36 || !_.isNumber(parseInt(beerId, 10))) {
    res.status(500).send('Incorrect format');
    return;
  }

  try {
    const db = await connectToDatabase();

    await func(db, webUserId, beerId);
  } catch (err) {
    console.error(err); // eslint-disable-line
    res.status(500).send();
  }

  res.status(200).send();
};

const post = execute((db, webUserId, beerId) =>
  db.checklist.insert({
    webuserid: webUserId,
    beerid: parseInt(beerId, 10),
    checkdate: new Date().toUTCString(),
  })
);

const destroy = execute((db, webUserId, beerId) =>
  db.checklist.destroy({
    webuserid: webUserId,
    beerid: parseInt(beerId, 10),
  })
);

export default {
  post: async (req, res) => {
    post(req.body, res);
  },

  delete: async (req, res) => {
    destroy(req.query, res);
  },
};
