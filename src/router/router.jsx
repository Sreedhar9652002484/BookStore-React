import React from "react";
import { Signin } from "../pages/singnin/signin";
import { Signup } from "../pages/signup/signup";
import { Dashboard } from "../components/dashboard/dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgetPassword from "../pages/forgetpassword/forgetpassword";
import { BookDetails } from "../components/takenote/takenote2/takenote2";
import { NavbarLayout } from "../components/navbar/navbarlayout";
import { Cart } from "../components/takenote/takenote3/takenote3";
import { OrderSuccessful } from "../components/takenote/takenote6/takenote6";


export const Router=()=>{
    return(
        <div>
            <BrowserRouter>
            <NavbarLayout>
            <Routes>
                <Route exact path={'/'} element={<Signin/>}></Route>
                <Route exact path={'/signup'} element={<Signup/>}></Route>
                <Route exact path={'/forgetpassword'} element={<ForgetPassword/>}></Route>
                <Route exact path={'/dashboard'} element={<Dashboard/>}></Route>
                <Route exact path={'/bookdetails'} element={<BookDetails/>}></Route>
                <Route path={'/ordersuccessful'} element={<OrderSuccessful/>}></Route>
                <Route path={'/cart'} element={<Cart/>}></Route>
            </Routes>
            </NavbarLayout>
            </BrowserRouter>
        </div>
    )
}