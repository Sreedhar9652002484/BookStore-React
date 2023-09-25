import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from '../../../assests/bhagavadbook.jpeg'
import cssstyle from '../BookCard/bookcard.css'
import { grey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

export default function BookCard({getallbooks,onSelectBook}) {
  
  const navigate=useNavigate()
  
  const handleOnclick=()=>{

    onSelectBook(getallbooks);
    
    //console.log(getallbooks);
    // navigate('/bookdetails')
   
  }
  // console.log("getallbooks", getallbooks.bookName)

  return (
    <div className='cardmain'>    

    <div className='maincard'>
    <div className='card' >
    <Card sx={{ width:'100%',maxHeight:'43vh', backgroundColor:'#f5f5f5'}} onClick={handleOnclick}>
      <CardMedia 
        sx={{ height: 10}}
    
      />
      <img id='img1' src={img} alt="" />
      <div className='namediv'>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <span id='title'>{getallbooks.bookName}</span>
          <p id='spantext'>{getallbooks.author}</p>
         <div className='quantity'><p id='star'>4.5 <span> &#9733;</span></p><span>({getallbooks.quantity})</span></div>
          <p id='price'>Rs.{getallbooks.discountPrice} < span id='rate'>Rs.{getallbooks.price}</span></p>
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