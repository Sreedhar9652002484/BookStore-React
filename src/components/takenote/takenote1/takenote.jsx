import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from '../../../assests/bhagavadbook.jpeg'
import cssstyle from '../takenote1/takenote.css'
import { grey } from '@mui/material/colors';

export default function BookCard() {
  return (
    <div className='card'>
    <Card sx={{ maxWidth: 280, maxHeight:335, backgroundColor:'#f5f5f5'}}>
      <CardMedia
        sx={{ height: 10}}
        // image="D:\ReactProject\BookStore\BookStore-React\bookstore\src\assests\BookLogo.png"
    
      />
      <img id='img1' src={img} alt="" />
      <div className='namediv'>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <span id='title'>Bhagavadh Geeta</span>
          <p id='spantext'>by Bhakthi Vedant Swami Prabhupada</p>
          <p id='star'>4.5 <span> &#9733;</span></p>
          <p id='price'>Rs.499 < span id='rate'>Rs.699</span></p>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      </CardContent>
      </div>
      
    </Card>
    </div>
  );
}