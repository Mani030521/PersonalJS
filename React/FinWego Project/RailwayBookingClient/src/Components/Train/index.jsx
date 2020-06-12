import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core';
import useReduce from '../../Hooks/useReduce';
import TrainImage from '../../Rail.jpg';
import '../../CSS/Train.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Train() {
  const classes = useStyles();
  const [, state] = useReduce('Train');
  const { isPending, trainDuplicateData, noTrain } = state;

  return (
    <div className="TrainCard">
      <div className="w3-row w3-border">
        {!isPending && !noTrain
          ? trainDuplicateData.map((trainData) => (
            <div className="CardMain w3-container w3-third zoom">
              <Card style={{ width: '300px', height: 'auto' }} className={classes.root}>
                <CardActionArea>
                  <img style={{ width: '300px' }} src={TrainImage} alt="TrainImage" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {trainData.Train_Name}
                    </Typography>
                    <div style={{ display: 'inline-block' }}>
                      From:
                      <Typography color="primary" variant="h6" component="h4">
                        {trainData.Train_Source.Train_Source_station}
                        (
                        {trainData.Train_Source.Train_Source_Time}
                        )
                      </Typography>
                      To:
                      <Typography
                        color="secondary"
                        variant="h6"
                        component="h4"
                      >
                        {
                            trainData.Train_Destination
                              .Train_Destination_station
                          }
                        (
                        {trainData.Train_Destination.Train_Destination_Time}
                        )
                      </Typography>
                      <Typography color="primary" variant="h6" component="h4">
                        Price:
                        {trainData.Price || 0}
                      </Typography>
                    </div>
                  </CardContent>
                </CardActionArea>
                <hr />
                <div className="TrainButton">
                  <Button
                    variant="contained"
                    color="secondary"
                  >
                    Book
                  </Button>
                </div>
              </Card>
            </div>
          )) : noTrain && (
            <div className="NoTrain">
              <h2>
                No Trains are available
              </h2>
            </div>
          )}
      </div>
    </div>
  );
}
