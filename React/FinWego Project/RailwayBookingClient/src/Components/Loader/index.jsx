import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import useReduce from '../../Hooks/useReduce';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function Loader() {
  const classes = useStyles();
  const [, state] = useReduce();
  const { user, Train } = state;
  const { isPending } = user;
  const { isPending: isTrainPending } = Train;

  return (
    <Backdrop className={classes.backdrop} open={isTrainPending || isPending}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
