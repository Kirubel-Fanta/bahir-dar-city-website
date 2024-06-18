import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard(props) {
  const { media } = props;
  return (
    <Card sx={{ maxWidth: 460, marginBottom: '2rem' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={media.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {media.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {media.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}