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
        setSelected(null)
    }
    const { cartIsOpen } = useContext(CartContext)
    console.log('dahh', cartIsOpen)
    console.log("selectBook (state after update):", Book);
    return (

        <div>
            {cartIsOpen ? <Cart /> :
                <div >
                    {home ?
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ width: '70vw', display: 'flex', flexWrap: 'wrap', gap: '1.5vw', rowGap: '5vh' }}>
                                {Book ? <BookDetails getselectedbook={Book} homeLink={handleHome} /> : showAllBooks()}
                            </div>
                        </div>
                        : " "}
                </div>

            }
        </div>
    )

}