import {Avatar, Button, Icon, IconButton,TextField, Typography } from '@mui/material'
import image from '../../../assests/bhagavadbook.jpeg'
import csss from'../takenote2/takenote2.css'
import { Link } from 'react-router-dom'
export const BookDetails = (prop) => {
    return (

        <><div className='homelink'>
        <Link onClick={prop} to='/dashboard'>Home / </Link>
        <Link >Book(01)</Link>
    </div>
    <div className='flex'>
        <div className='maincontainer'>
    
            <div>
              <div className='book1' >
                <img  id='book1' src={image} alt="" />
            </div>
            <div className='book1' >
                <img  id='book1' src={image} alt="" />
            </div>
            </div>
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
                    <div className='bookdetails'>
                    <p id='bookdetail'><span id='dot'>&#x2022;</span> Book Detail</p>
                    <p id='bookpara'>The Bhagavad-gita is universally renowned as the jewel of India's spiritual wisdom. Spoken by Lord Krishna, the Supreme Personality of Godhead to His intimate disciple Arjuna, the Gita's seven hundred concise verses provide a definitive guide to the science of self realization. No other philosophical or religious work reveals, in such a lucid and profound way, the nature of consciousness, the self, the universe and the Supreme.</p>
                    </div>
                    <hr id='line'/>
                    <p>Customer Feedback</p>
                    <div className='rating'>
                        <p id='overall'>Overall rating</p>
                        <span  id='star2'>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
                        <input id='review' placeholder="Write your review"  ></input>

                        <div className='buttondiv'><button id='reviewbutton'>Submit</button></div>
                        
                    </div>
                    <div className='avatar'>
                    <IconButton id='iconavatar'><Avatar >NS</Avatar></IconButton>
                   
                    <div><p style={{fontSize:'1.2rem'}}>Nagalli Sreedhar</p></div>
                    </div>
                    <div className='star3'><span >&#9733;&#9733;&#9733;&#9733; <span id='grey'>&#9734;</span></span>  
                    <p style={{fontSize:'1rem', color:'gray',marginTop:'0'}}>The book is superb and very good. The packing is excellent. The pages are of good quality
                    <br></br> and the bothsides hard cover is also good. But only thing is the binding is ok fine and we <br></br> have to tackle carefully. But fine its alright, it depends on how one takes it. Printing is superb.</p>
                   
                    </div>
                    <div className='avatar'>
                    <IconButton id='iconavatar'><Avatar >BV</Avatar></IconButton>
                   
                    <div><p style={{fontSize:'1.2rem'}}>Boya Vamshi</p></div>
                    </div>
                    <div className='star3'><span >&#9733;&#9733;&#9733;&#9733; <span>&#9733;</span></span>  
                    <p style={{fontSize:'1rem', color:'gray',marginTop:'0'}}>The book is superb and very good. The packing is excellent. The pages are of good quality
                    <br></br> and the bothsides hard cover is also good. But only thing is the binding is ok fine and we <br></br> have to tackle carefully. But fine its alright, it depends on how one takes it. Printing is superb.</p>
                   </div>
                </Typography>
            </div>  
            </div> 
        </div>
        
        </> 
    )
}