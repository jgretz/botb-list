import {connectToDatabase} from '../../util';

export default async (req, res) => {
  const status = {serverOk: true};

  try {
    const db = await connectToDatabase();
    const tables = await db.listTables();

    status.databaseOk = true;
    status.databaseTables = tables;
  } catch (err) {
    status.databaseOk = false;
    status.databaseError = err.toString();
  }

  res.json(status);
};
