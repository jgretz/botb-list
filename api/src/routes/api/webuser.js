import {connectToDatabase} from '../../util';

export default {
  post: async (req, res) => {
    const {webUserId} = req.body;
    if (webUserId?.length !== 36) {
      res.status(500).send('Incorrect format');
      return;
    }

    try {
      const db = await connectToDatabase();

      await db.webuser.insert({
        id: webUserId,
      });
    } catch (err) {
      console.error(err); // eslint-disable-line
      res.status(500).send();
    }

    res.status(200).send();
  },
};
