import { useContext, useEffect, useState } from "react"
import Navbar, { NavbarContext } from "../navbar/navbar"
import { GetAllBooks } from "../../services/bookservice";
import BookCard from "../bookstorecomp/BookCard/bookcard";
import { Cart } from "../bookstorecomp/Cart/cart";
import { BookDetails } from "../bookstorecomp/BookDetails/bookdetails";
import { AddToBag } from "../bookstorecomp/addtobag/addtobag";
import { Navigate } from "react-router-dom";
import { CartContext } from "../bookstorecomp/context/cartcontext";
import { BookContext } from "../bookstorecomp/context/bookcontext";


export const Dashboard = () => {
    const [getallBooks, setGetAll] = useState([]);
    const [Book, setSelected] = useState()

    const fetchBooks = async () => {
        const response = await GetAllBooks();
        setGetAll(response.data.result);
        console.log("getall", response.data.result)
    }
    useEffect(() => {
        fetchBooks();
        showCartBooks();
    }, [])

    const showAllBooks = () => {
        return getallBooks.map((book) => (

            <div key={book._id}  >
                <BookCard
                    getallbooks={book}
                    onSelectBook={setSelected}
                />
                {console.log("boookkk", book)}
            </div >)
        )
    }
    const [home, setHome] = useState(true)
    const handleHome = () => {
        // setHome(true);
        setSelected(null)
    }

    const { cartIsOpen } = useContext(CartContext)
    console.log('dahh', cartIsOpen)

    const { cartData } = useContext(BookContext)
    const [cart, setCart] = useState([]);
    const [iscartClicked, setClicked] = useState(false)

    const addToCart = () => {
        setClicked(true);
        if (iscartClicked) {
            setCart([...cart, cartData])
        }
        else {
            return null
        }
    };
    const showCartBooks = () => {
        if (cart != null) {
            return (cart?.map((cartBook) => (
                <div key={cartBook._id}>
                    <Cart />
                    {console.log("carttt@@@@@@@@@@@@@@@@@@@@@@@@@@", cartBook)}
                </div>
            )
            ))
        } else {
            <h1>Your Cart Is Empty</h1>
        }
    }

    console.log("cart", cart);

    console.log("selectBook (state after update):", Book);
    return (

        <div>
            {cartIsOpen ? showCartBooks() :
                <div >
                    {home ?
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ width: '70vw', display: 'flex', flexWrap: 'wrap', gap: '1.5vw', rowGap: '5vh' }}>

                                {Book ? <BookDetails getselectedbook={Book} homeLink={handleHome} addToCart={addToCart} /> : showAllBooks()}

                            </div>
                        </div>
                        : " "}
                </div>

            }
        </div>
    )

}