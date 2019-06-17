import _ from 'lodash';
import {connectToDatabase} from '../../util';
import {beers} from '../../constants';

export default async (req, res) => {
  const db = await connectToDatabase();
  const stats = await db.checklist.find();

  const denormalData = stats.map(s => {
    const beer = _.find(
      beers,
      b => parseInt(b.id, 10) === parseInt(s.beerid, 10)
    );

    return {
      ...s,
      brewery: beer.brewery,
      beer: beer.name,
    };
  });

  res.json({
    stats: denormalData,
    beers,
  });
};
