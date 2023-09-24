import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthRoute=({children})=>{
   
    if (!localStorage.getItem("token")) {
        return children;
    }

    return <Navigate to="/dashboard" />;
}
