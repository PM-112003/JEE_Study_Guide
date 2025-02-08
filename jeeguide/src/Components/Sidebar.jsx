import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChalkboardTeacher, faChevronUp, faChevronDown, faLightbulb, faFlask, faCalculator,faBookOpen, faXmark} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState } from "react";

export default function Sidebar({setActiveSection, opensidebar, setOpenSidebar}){
    const [isOpen, setIsOpen] = useState(false);

    // state variables for navigation to different pages 

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* The toggle sidebar : fixed and translate */}
            <div className={`fixed top-0 left-0 h-screen bg-slate-950 text-white 
                        w-64 md:w-72 p-4 border-r-2 border-slate-700 
                        transform transition-transform duration-100 ease-in-out 
                        ${opensidebar ? "translate-x-0" : "-translate-x-full"} 
                        md:translate-x-0 md:relative md:block  shadow-lg`}>

                {/* Cross mark */}
                <span className="position: relative -top-[10px]  left-[220px] cursor-pointer md:hidden">
                    <FontAwesomeIcon icon={faXmark} className="text-slate-400 hover:text-orange-500 " onClick={()=>setOpenSidebar(false)}/>
                </span>
                {/* Heading */}
                <p className="text-2xl font-bold  text-sky-400 text-center mb-3">
                    JEE study guide
                </p>
                <hr className="bg-slate-700 h-[2px] border-0 rounded-2xl"/>

                {/* Lectures */}
                <p className="mt-5 text-xl flex items-center justify-between cursor-pointer" onClick={toggleDropdown}>
                    <FontAwesomeIcon icon={faChalkboardTeacher} className="text-slate-400" />
                    <span className="px-2 text-lg font-bold ">Lectures</span>
                    <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className="text-slate-400 text-sm"/>
                    
                </p>

                {/* Dropdown Menu */}
                {isOpen && (
                    <div className="font-semibold mt-2 w-48">
                        <ul className="px-10">
                            <li className="cursor-pointer mb-2 flex items-center">
                                <FontAwesomeIcon icon={faLightbulb} className="text-slate-400 " />
                                <span className="ml-6 p-1 rounded-md text-blue-500  hover:bg-blue-500 hover:bg-opacity-50 transition duration-300 ease-in-out" onClick={() => setActiveSection('physics')}>Physics</span>
                            </li>
                            <li className="cursor-pointer mb-2 flex items-center">
                                <FontAwesomeIcon icon={faFlask} className="text-slate-400" />
                                <span className="ml-6 p-1 rounded-md text-red-500  hover:bg-red-500 hover:bg-opacity-50 transition duration-300 ease-in-out " onClick={() => setActiveSection('chemistry')}>Chemistry</span>
                            </li>
                            <li className="cursor-pointer mb-2 flex items-center">
                                <FontAwesomeIcon icon={faCalculator} className="text-slate-400" />
                                <span className="ml-6 p-1 rounded-md text-yellow-500  hover:bg-yellow-500 hover:bg-opacity-50 transition duration-300 ease-in-out " onClick={() => setActiveSection('maths')}>Math</span>
                            </li>
                        </ul>
                    </div>
                )}

                {/* Material */}
                <p className="mt-5 text-xl flex items-center cursor-pointer" >
                    <FontAwesomeIcon icon={faBookOpen} className="text-slate-400" />
                    <span className="px-2 text-lg font-bold ml-3" onClick={() => setActiveSection('books')}>Books & Material</span>
                </p>

                {/* Tips/Guidance Blogs */}

                <p className="mt-5 text-xl flex items-center cursor-pointer" >
                    <FontAwesomeIcon icon={faLightbulb} className="text-slate-400" />
                    <span className="px-2 text-lg font-bold ml-5" onClick={() => setActiveSection('tips')}>Tips/Guidance Blogs</span>
                </p>
                <br />
                <hr className="bg-slate-700 h-[3px] border-0 rounded-2xl"/>

                {/* How to use this website */}
                <p className="mt-5 text-xl flex items-center cursor-pointer" >
                    <FontAwesomeIcon icon={faLightbulb} className="text-slate-400" />
                    <span className="px-2 text-[16px] font-bold ml-3" onClick={() => setActiveSection('howtouse')}>How to use this website?</span>
                </p>

                {/* About me */}
                <div className="md:w-60 text-center flex flex-col items-center position: absolute bottom-1">
                    <p>Made with &#9829; by Parikshit</p>
                    <p className="mt-3">
                        <FontAwesomeIcon icon={faInstagram} className="text-slate-400 text-xl cursor-pointer opacity-70 hover:opacity-100 transition duration-300 ease-in-out" />
                        <FontAwesomeIcon icon={faLinkedinIn} className="text-slate-400 ml-3 text-xl cursor-pointer opacity-70 hover:opacity-100 transition duration-300 ease-in-out" />
                        <FontAwesomeIcon icon={faGithub} className="text-slate-400 ml-3 text-xl cursor-pointer opacity-70 hover:opacity-100 transition duration-300 ease-in-out" />
                    </p>
                </div>
                
            </div>
            
            

        </>
    )
}