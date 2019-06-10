import React from 'react';
import {Card, 
  Button, 
  CardActionArea, 
  CardActions, 
  CardContent, 
  CardMedia, 
  Typography} 
from '@material-ui/core';
import './Cards.css';
// import from '../../assets/cards/';

function Cards(props) {
  return (
    <Card className="card">
      <CardActionArea>
        <CardMedia
          className={props.type}
          title={props.title}
        />
        <CardContent className={props.type}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {props.action}
        </Button>
      </CardActions>
    </Card>
  );
}

export default Cards;