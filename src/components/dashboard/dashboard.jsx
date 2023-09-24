import { useEffect, useState } from "react"
import Navbar from "../navbar/navbar"
import { GetAllBooks } from "../../services/bookservice";
import BookCard from "../bookstorecomp/BookCard/bookcard";
import { Cart } from "../bookstorecomp/Cart/cart";
import { BookDetails } from "../bookstorecomp/BookDetails/bookdetails";
import { AddToBag } from "../bookstorecomp/addtobag/addtobag";


export const Dashboard = () => {

    const [getallBooks, setGetAll] = useState([]);
    const[selectBook, setSelected]=useState(null);

    const fetchBooks = async () => {
        const response = await GetAllBooks();
        setGetAll(response.data.result);
        //    console.log(getallBooks)
    }
    useEffect(() => {
        fetchBooks();
    }, [])

    const showAllBooks = () => {
        return getallBooks.map((book) => (
            
            <div key={book._id}  >
            <BookCard 
                getallbooks={book}
                onSelectBook={() => selectedBook(book)}              
                />  
                {console.log(book)}
            </div >)
       )
        }
        useEffect(() => {
            // This useEffect will run whenever selectBook changes.
            console.log("selectBook has been updated:", selectBook);
          }, [selectBook]);
        
        const selectedBook=(book)=>{
            setSelected(book);
            console.log("Selected Book (new state):", book);

            console.log("selectBook (state after update):", selectBook);

    }
return (
    <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
    <div style={{ width:'70vw',display:'flex',flexWrap:'wrap',gap:'1.5vw', rowGap:'5vh'}}>
        {showAllBooks()}
        {selectBook &&<BookDetails getallbooks={selectBook}/>}
    </div>

    </div>
)
}