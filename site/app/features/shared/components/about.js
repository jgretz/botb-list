import React from 'react';
import {compose} from '@truefit/bach';
import {withStyles} from '@truefit/bach-material-ui';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const Info = ({classes}) => (
  <Container className={classes.container}>
    <Typography variant="h5" className={classes.title}>
      Beers of the Burgh
    </Typography>
    <Typography variant="h6" color="textSecondary" className={classes.subtitle}>
      Beer List
    </Typography>
    <Typography variant="body1" className={classes.content}>
      Hi, my name is{' '}
      <a
        href="https://www.twitter.com/joshgretz"
        target="_blank"
        className={classes.contentLink}
      >
        Josh Gretz
      </a>{' '}
      and I have attended pretty much every{' '}
      <a href="http://www.beersoftheburgh.com" className={classes.contentLink}>
        Beers of the Burgh
      </a>{' '}
      since the beginning.
    </Typography>
    <Typography variant="body1" className={classes.content}>
      I have always wanted to keep track of what I drink over the event, but
      that goal becomes increasingly difficult as the afternoon goes on and I
      normally give up about two hours in.
    </Typography>
    <Typography variant="body1" className={classes.content}>
      This year, the organizers were kind enough to compile a list of most of
      the beers the breweries will be bringing and shared that as a{' '}
      <a
        href="http://beersoftheburgh.com/beerlist.pdf"
        className={classes.contentLink}
      >
        PDF
      </a>
      . As a developer, I saw my chance to take that document and create an easy
      to use website that I could use throughout the event - thus this site was
      born. It was built quickly, but I think it provides a decent experience
      and I hope you do too.
    </Typography>
    <Typography variant="body1" className={classes.content}>
      This site saves your data locally on your device. It also anonymously
      sends the list of beers you drank to my server so I can have fun by
      looking at the aggregate data. To be clear, it does nothing to identify
      who you are. By using this site, you agree to the above use.
    </Typography>
  </Container>
);

export default compose(
  withStyles(theme => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',

      marginTop: 24,
    },

    title: {
      textAlign: 'center',
      fontWeight: 'bold',
    },
    subtitle: {
      textAlign: 'center',
      marginBottom: 24,
    },

    content: {
      marginBottom: 12,
    },

    contentLink: {
      textDecoration: 'none',
      color: theme.palette.secondary.main,
    },
  })),
)(Info);
