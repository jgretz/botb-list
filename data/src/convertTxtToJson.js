/* eslint-disable no-console */
import _ from 'lodash';
import fs from 'fs';
import {promisify} from 'util';

// constants
const RAW_INPUT_PATH = `${__dirname}/../raw/beerlist.txt`;
const BEERS_PATH = `${__dirname}/../json/beers.json`;
const CATEGORIES_PATH = `${__dirname}/../json/categories.json`;
const BREWERIES_PATH = `${__dirname}/../json/breweries.json`;

// 'global' functions
const asyncReadFile = promisify(fs.readFile);
const asyncWriteFile = promisify(fs.writeFile);

const hasData = x => x.length;

// logic
const parseTextIntoLines = async () => {
  const rawLines = await asyncReadFile(RAW_INPUT_PATH, {encoding: 'utf8'});

  return rawLines
    .split('\n')
    .map(_.trim)
    .map(s => _.trim(s, '\r'))
    .filter(hasData)
    .map(line =>
      line
        .split('  ')
        .map(_.trim)
        .filter(hasData),
    );
};

const parseCategory = line => line[0];
const parseBrewery = line => line[0];
const parseBeer = ({category, brewery}, [name, type, abv]) => ({
  category,
  brewery,
  name,
  type,
  abv,
});

const linesToObjects = lines => {
  const cache = {};

  return lines.reduce(
    (acc, line) => {
      switch (line.length) {
        case 1:
          cache.category = parseCategory(line);

          acc.categories.push(cache.category);
          break;

        case 4:
          cache.brewery = parseBrewery(line);

          acc.breweries.push(cache.brewery);
          acc.beers.push(parseBeer(cache, _.tail(line)));
          break;

        default:
          acc.beers.push(parseBeer(cache, line));
          break;
      }

      return acc;
    },
    {
      beers: [],
      categories: [],
      breweries: [],
    },
  );
};

const assignBeersIds = data => ({
  ...data,
  beers: data.beers.map((b, i) => ({id: i, ...b})),
});

const writeData = async data => {
  await asyncWriteFile(BEERS_PATH, JSON.stringify(data.beers));
  await asyncWriteFile(CATEGORIES_PATH, JSON.stringify(data.categories));
  await asyncWriteFile(BREWERIES_PATH, JSON.stringify(data.breweries));

  console.log('Done');
};

// app flow
const main = async () => {
  const lines = await parseTextIntoLines();

  lines |> linesToObjects |> assignBeersIds |> writeData;
};
main();
