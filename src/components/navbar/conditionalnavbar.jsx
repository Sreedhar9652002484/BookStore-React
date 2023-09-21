import { useLocation } from "react-router-dom"
import Navbar from "./navbar";

export const ConditionalNabar=()=>{
    const location=useLocation();
    const excludepaths=['/signup','/','/forgetpassword'];
    if(excludepaths.includes(location.pathname)){
        return null;
    }
    return <Navbar/>
}