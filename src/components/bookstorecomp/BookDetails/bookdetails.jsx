import { Avatar, Button, Icon, IconButton, TextField, Typography } from '@mui/material'
import image from '../../../assests/bhagavadbook.jpeg'
import csss from './bookdetails.css'
import { Link } from 'react-router-dom'
import { createContext, useContext, useEffect, useState } from 'react'
import { AddToBag } from '../addtobag/addtobag'
import { Cart } from '../Cart/cart'
import { NavbarContext } from '../../navbar/navbar'
import { AddToCart } from '../../../services/userservices'
import { BookContext } from '../context/bookcontext'


export const BookDetails = ({ getselectedbook, homeLink, addToCart,children }) => {
    const [addtobag, setAddtoBag] = useState(false)

    console.log("-----selected-----")
    console.log(getselectedbook)

    const selectedbook = {
        bookName: getselectedbook.bookName,
        author: getselectedbook.author,
        price: getselectedbook.price,
        discountPrice: getselectedbook.discountPrice
    }

    const {handleCartData}=useContext(BookContext)
    const handleAddtoBag = async () => {
        setAddtoBag(true)
        const product_id = getselectedbook._id
        let response = await AddToCart(product_id)
        console.log("cart response", response)
        handleCartData(selectedbook);
        console.log("-------------", selectedbook)
        addToCart()
    }
    return (
        <div>
            <div className='homelink'>
                <Link onClick={homeLink}>Home / </Link>
                <Link >Book(01)</Link>
            </div>
            <div className='flex'>
                <div className='maincontainer'>


                    <div>
                        <div className='book1' >
                            <img id='book1' src={image} alt="" />
                        </div>
                        <div className='book1' >
                            <img id='book1' src={image} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className='geeta' >
                            <img id='geeta' src={image} alt="" />
                        </div>
                        <div className='button2'> {addtobag ? <AddToBag /> :
                            <Button id='add' onClick={handleAddtoBag}  >ADD TO BAG</Button>}
                            <Button id='wishlist'><span id="heart">&#x2665; </span> WISHLIST</Button>
                        </div>
                    </div>
                    <div className='typography'>
                        <Typography gutterBottom variant="h5" component="div">
                            <span id='title1'>{getselectedbook.bookName}</span>
                            <p id='spantext1'>{getselectedbook.author}</p>
                            <p id='star1'>4.5 <span> &#9733;</span></p>
                            <p id='price1'>Rs.{getselectedbook.discountPrice}<span id='rate'>Rs.{getselectedbook.price}</span></p>
                            <hr id='line' />
                            <div className='bookdetails'>
                                <p id='bookdetail'><span id='dot'>&#x2022;</span> Book Detail</p>
                                <p id='bookpara'>{getselectedbook.description}</p>
                            </div>
                            <hr id='line' />
                            <p>Customer Feedback</p>
                            <div className='rating'>
                                <p id='overall'>Overall rating</p>
                                <span id='star2'>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
                                <input id='review' placeholder="Write your review"  ></input>

                                <div className='buttondiv'><button id='reviewbutton'>Submit</button></div>

                            </div>
                            <div className='avatar'>
                                <IconButton id='iconavatar'><Avatar >NS</Avatar></IconButton>

                                <div><p style={{ fontSize: '1.2rem' }}>Nagalli Sreedhar</p></div>
                            </div>
                            <div className='star3'><span >&#9733;&#9733;&#9733;&#9733; <span id='grey'>&#9734;</span></span>
                                <p style={{ fontSize: '1rem', color: 'gray', marginTop: '0' }}>The book is superb and very good. The packing is excellent. The pages are of good quality
                                    <br></br> and the bothsides hard cover is also good. But only thing is the binding is ok fine and we <br></br> have to tackle carefully. But fine its alright, it depends on how one takes it. Printing is superb.</p>

                            </div>
                            <div className='avatar'>
                                <IconButton id='iconavatar'><Avatar >BV</Avatar></IconButton>

                                <div><p style={{ fontSize: '1.2rem' }}>Boya Vamshi</p></div>
                            </div>
                            <div className='star3'><span >&#9733;&#9733;&#9733;&#9733; <span>&#9733;</span></span>
                                <p style={{ fontSize: '1rem', color: 'gray', marginTop: '0' }}>The book is superb and very good. The packing is excellent. The pages are of good quality
                                    <br></br> and the bothsides hard cover is also good. But only thing is the binding is ok fine and we <br></br> have to tackle carefully. But fine its alright, it depends on how one takes it. Printing is superb.</p>
                            </div>
                        </Typography>
                    </div>
                </div>
                {/* <BookContext.Provider value={addtobag ? selectedbook : null} >
                    {children}
                </BookContext.Provider> */}
            </div>
        </div>
    )
}