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
import { BookDetails } from '../takenote2/takenote2';

export default function BookCard() {
  const [bookDetail, setBook]=React.useState(false)
  
  const handleOnclick=()=>{
    setBook(!bookDetail)
  }


  return (
    <div className='cardmain'> {bookDetail?<BookDetails prop={bookDetail}/>:""}
    <div className='maincard'>
    <div className='card' >
    <Card sx={{ maxWidth: 300, maxHeight:335, backgroundColor:'#f5f5f5'}} onClick={handleOnclick}>
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
    </div>
    </div>
  );
}