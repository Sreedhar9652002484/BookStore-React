import React from "react";
import { Signin } from "../pages/singnin/signin";
import { Signup } from "../pages/signup/signup";
import { Dashboard } from "../components/dashboard/dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgetPassword from "../pages/forgetpassword/forgetpassword";
import { BookDetails } from '../components/bookstorecomp/BookDetails/bookdetails.jsx';
import { NavbarLayout } from "../components/navbar/navbarlayout";
import { Cart } from "../components/bookstorecomp/Cart/cart.jsx";
import { OrderSuccessful } from "../components/bookstorecomp/OrderSuccessful/ordersuccessful";
import { ProtectedRoute } from "./protectedroute";
import { AuthRoute } from "./authroute";


export const Router=()=>{
    return(
        <div>
            <BrowserRouter>
            <NavbarLayout>
            <Routes>
                <Route exact path={'/'} element={<AuthRoute><Signin/></AuthRoute>}></Route>
                <Route exact path={'/signup'} element={<AuthRoute><Signup/></AuthRoute>}></Route>
                <Route exact path={'/forgetpassword'} element={<ForgetPassword/>}></Route>
                <Route exact path={'/dashboard'} element={<ProtectedRoute><Dashboard/></ProtectedRoute>}></Route>
                {/* <Route exact path={'/bookdetails'} element={<BookDetails/>}></Route>
                <Route path={'/ordersuccessful'} element={<OrderSuccessful/>}></Route>
                <Route path={'/cart'} element={<Cart/>}></Route> */}
            </Routes>
            </NavbarLayout>
            </BrowserRouter>
        </div>
    )
}