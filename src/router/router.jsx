import React from "react";
import { Signin } from "../pages/singnin/signin";
import { Signup } from "../pages/signup/signup";
import { Dashboard } from "../components/dashboard/dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";


export const Router=()=>{
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route exact path={'/'} element={<Signin/>}>
                <Route exact path={"/singup"}><Signup/></Route>
                <Route exact path={"/dashboard"}><Dashboard/></Route>
                </Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}