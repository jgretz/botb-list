import React from 'react';
import {compose} from '@truefit/bach';
import {withStyles} from '@truefit/bach-material-ui';

import {background} from '../../../styles/themes';

import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const Footer = ({classes}) => (
  <div className={classes.footer}>
    <Container>
      <Link
        href="http://beersoftheburgh.com/"
        target="_blank"
        className={classes.link}
      >
        Beers of The Burgh
      </Link>
    </Container>
  </div>
);

export default compose(
  withStyles(() => ({
    footer: {
      backgroundColor: background,

      width: 'hw',
      height: 60,

      padding: 20,
    },

    link: {
      fontWeight: 'bold',
    },
  })),
)(Footer);
