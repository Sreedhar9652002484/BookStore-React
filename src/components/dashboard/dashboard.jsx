import { useEffect, useState } from "react"
import Navbar from "../navbar/navbar"
import { GetAllBooks } from "../../services/bookservice";
import BookCard from "../bookstorecomp/BookCard/bookcard";
import { Cart } from "../bookstorecomp/Cart/cart";
import { BookDetails } from "../bookstorecomp/BookDetails/bookdetails";
import { AddToBag } from "../bookstorecomp/addtobag/addtobag";
import { Navigate } from "react-router-dom";


export const Dashboard = () => {
    const [getallBooks, setGetAll] = useState([]);
    const [Book, setSelected] = useState()
    const fetchBooks = async () => {
        const response = await GetAllBooks();
        setGetAll(response.data.result);
         console.log(getallBooks)
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
                {console.log("boookkk",  book)}
            </div >)
        )
    }
    console.log("selectBook (state after update):", Book);
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '70vw', display: 'flex', flexWrap: 'wrap', gap: '1.5vw', rowGap: '5vh' }}>
                
                {Book?<BookDetails getselectedbook={Book}/>:showAllBooks()}

            </div>

        </div>
    )
}