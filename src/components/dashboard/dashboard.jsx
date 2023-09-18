import ForgetPassword from "../../pages/forgetpassword/forgetpassword"
import Navbar from "../navbar/navbar"
import BookCard from "../takenote/takenote1/takenote"
import { BookDetails, TakeNote2 } from "../takenote/takenote2/takenote2"
import { Cart } from "../takenote/takenote3/takenote3"


export const Dashboard =()=>{



const notes =()=>{

}


    return(
        <div>
            <Navbar/>
            {/* <BookCard/> */}
            {/* <ForgetPassword/> */}
            <BookDetails/>
            {/* <Cart/> */}

        </div>

    )

}