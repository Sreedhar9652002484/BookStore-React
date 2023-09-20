import React from "react";
import { Signin } from "../pages/singnin/signin";
import { Signup } from "../pages/signup/signup";
import { Dashboard } from "../components/dashboard/dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgetPassword from "../pages/forgetpassword/forgetpassword";


export const Router=()=>{
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route exact path={'/'} element={<Signin/>}></Route>
                <Route exact path={'/signup'} element={<Signup/>}></Route>
                <Route exact path={'/forgetpassword'} element={<ForgetPassword/>}></Route>
                <Route exact path={'/dashboard'} element={<Dashboard/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}