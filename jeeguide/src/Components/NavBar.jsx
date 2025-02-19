import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChalkboardTeacher, faUserCircle, faMoon, faSun, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

export default function NavBar({setOpenSidebar, opensidebar}) {

    const [openDropdown, setOpenDropdown] = useState(false);

    // Close dropdown when clicking outside
    useEffect(() => {
        const closeDropdown = (e) => {
            if (!e.target.closest(".user-dropdown")) {
                setOpenDropdown(false);
            }
        };

        document.addEventListener("click", closeDropdown);
        return () => document.removeEventListener("click", closeDropdown);
    }, []);

    return (
        <>

            <div className="relative w-full h-20 border-b-2 border-slate-700 flex items-center justify-between md:justify-end px-4">
                {/* Sidebar Toggle Icon */}
                <FontAwesomeIcon 
                    icon={faBars} 
                    onClick={() => setOpenSidebar(true)}  
                    className="md:hidden text-slate-400 text-4xl p-2 cursor-pointer" 
                />

                {/* User Profile Icon */}
                <div className="relative user-dropdown">
                    <FontAwesomeIcon 
                        icon={faUserCircle} 
                        className="text-slate-400 text-4xl p-2 cursor-pointer"
                        onClick={() => {
                            setOpenDropdown(!openDropdown);
                        }}
                    />

                    {/* Dropdown Menu --> to be modified based on user present in db or not*/}
                    {openDropdown && (
                        <div className="absolute right-0 top-14 w-48 bg-slate-800 border border-slate-700 shadow-lg rounded-md text-white z-50">
                            <ul className="flex flex-col">
                                <li 
                                    className="px-4 py-2 hover:bg-slate-700 cursor-pointer"
                                    onClick={() => alert("Go to Login/Sign In")}
                                >
                                    Login / Sign In
                                </li>
                                <li 
                                    className="px-4 py-2 hover:bg-slate-700 cursor-pointer"
                                    onClick={() => alert("Go to Profile")}
                                >
                                    See Profile
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            
        </>
    )
}