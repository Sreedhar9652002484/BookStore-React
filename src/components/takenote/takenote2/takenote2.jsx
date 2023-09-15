import { Button, Typography } from '@mui/material'
import image from '../../../assests/bhagavadbook.jpeg'
import csss from'../takenote2/takenote2.css'
export const TakeNote2 = () => {
    return (
       
        <div className='maincontainer'>
             
            <div>
            <div className='geeta' >
                <img  id='geeta' src={image} alt="" />
            </div>
            <div className='button2'>
            <Button id='add'>ADD TO BAG</Button>
            <Button id='wishlist'><span id="heart">&#x2665; </span> WISHLIST</Button>
            </div>
            </div>
                
            <div className='typography'>
                <Typography gutterBottom variant="h5" component="div">
                    <span id='title1'>Bhagavadh Geeta</span>
                    <p id='spantext1'>by Bhakthi Vedant Swami Prabhupada</p>
                    <p id='star1'>4.5 <span> &#9733;</span></p>
                    <p id='price1'>Rs.499 < span id='rate'>Rs.699</span></p>
                    <hr id='line'/>
                </Typography>
               
    
            </div>
            
        </div>
        
        
    )
}