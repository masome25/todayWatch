import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { fench } from "../services/fench";



export const UserContext = createContext({ user: {}, session: "" });

export default function UserProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

 

  useEffect(() => {
    if (session) {
 
    
      if (location.pathname === "/login") {
        navigate("/profile", { replace: true });
      }
    }
  }, [session]);


}