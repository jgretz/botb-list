import massive from 'massive';

let database = null;

const prodConnect = () => massive(process.env.DATABASE_URL);

export default async () => {
  if (!database) {
    const connect =
      process.env.NODE_ENV === 'production'
        ? prodConnect
        : require('../private/connect').default;

    database = await connect();
  }

  return database;
};
