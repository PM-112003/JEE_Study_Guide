import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChalkboardTeacher, faUserCircle, faMoon, faSun, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { logout } from "../api.js";

export default function NavBar({setOpenSidebar, opensidebar}) {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
        await logout(); // Call logout API
        navigate("/"); // Redirect to SignIn page
        } catch (error) {
        console.error("Logout failed", error.response.data);
        }
    };
    
    return (
        <>

            <div className="relative w-full h-20 border-b-2 border-slate-700 flex items-center justify-between md:justify-end px-4">
                {/* Sidebar Toggle Icon */}
                <FontAwesomeIcon 
                    icon={faBars} 
                    onClick={() => setOpenSidebar(true)}  
                    className="md:hidden text-slate-400 text-4xl p-2 cursor-pointer" 
                />

                {/* Logout*/}
                <div className="text-xl cursor-pointer border-[1px] border-slate-500 py-1 px-2 rounded-xl shadow-sm shadow-sky-400 hover:shadow-md hover:shadow-sky-400"
                onClick={handleLogout}>
                    Logout
                </div>
            </div>
            
        </>
    )
}