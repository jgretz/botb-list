import React, {Fragment} from 'react';
import {compose, withState, withCallback} from '@truefit/bach';
import {renderIf} from '@truefit/bach-recompose';
import {withStyles} from '@truefit/bach-material-ui';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import DetailsCount from './detailsCount';
import DetailsRecent from './detailsRecent';
import DetailsAZ from './detailsAZ.js';

const DETAIL_TYPE = {
  COUNT: 0,
  RECENT: 1,
  AZ: 2,
};

const Empty = () => null;

const Content = compose(
  renderIf(({detailType}) => detailType === DETAIL_TYPE.COUNT, DetailsCount),
  renderIf(({detailType}) => detailType === DETAIL_TYPE.RECENT, DetailsRecent),
  renderIf(({detailType}) => detailType === DETAIL_TYPE.AZ, DetailsAZ),
)(Empty);

const Details = ({classes, detailType, handleTypeSelect}) => (
  <Fragment>
    <Typography variant="h4" className={classes.title}>
      Details
    </Typography>
    <ButtonGroup
      variant="contained"
      size="small"
      aria-label="sorting type for details"
      className={classes.buttonGroup}
    >
      <Button
        onClick={handleTypeSelect(DETAIL_TYPE.COUNT)}
        className={[classes.button, classes.buttonCount]}
      >
        Count
      </Button>
      <Button
        onClick={handleTypeSelect(DETAIL_TYPE.RECENT)}
        className={[classes.button, classes.buttonRecent]}
      >
        Recent
      </Button>
      <Button
        onClick={handleTypeSelect(DETAIL_TYPE.AZ)}
        className={[classes.button, classes.buttonAZ]}
      >
        A-Z
      </Button>
    </ButtonGroup>
    <Content detailType={detailType} />
  </Fragment>
);

const colorForDetailType = (match, theme) => ({detailType}) =>
  match === detailType ? theme.palette.primary.main : '#000';

export default compose(
  withState('detailType', 'setDetailType', DETAIL_TYPE.COUNT),
  withCallback('handleTypeSelect', ({setDetailType}) => detailType => () => {
    setDetailType(detailType);
  }),

  withStyles(theme => ({
    title: {
      marginTop: 24,
    },

    buttonGroup: {
      marginTop: 12,
      marginBottom: 12,
      width: '100%',
    },

    button: {
      width: '33.3%',
    },

    buttonCount: {
      color: colorForDetailType(DETAIL_TYPE.COUNT, theme),
    },
    buttonRecent: {
      color: colorForDetailType(DETAIL_TYPE.RECENT, theme),
    },
    buttonAZ: {
      color: colorForDetailType(DETAIL_TYPE.AZ, theme),
    },
  })),
)(Details);
