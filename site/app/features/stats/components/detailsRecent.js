import React from 'react';
import {compose} from '@truefit/bach';
import {withSelector} from '@truefit/bach-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {beersByDateSelector} from '../selectors';

const DetailsCount = ({details}) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Brewery</TableCell>
        <TableCell>Beer</TableCell>
        <TableCell>When</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {details.map(({id, brewery, beer, date}) => (
        <TableRow key={id}>
          <TableCell>{brewery}</TableCell>
          <TableCell>{beer}</TableCell>
          <TableCell>{date.format('h:mm')}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default compose(withSelector('details', beersByDateSelector))(
  DetailsCount,
);
