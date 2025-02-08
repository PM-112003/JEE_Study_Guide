import Sidebar from "./Sidebar"
import MainContent from "./MainContent"
import { useEffect, useState } from 'react';


export default function Fullpage(){

    const [activeSection, setActiveSection] = useState("howtouse"); // Default state
    const [opensidebar, setOpenSidebar] = useState(true);

    useEffect(() => {
        document.title = 'Home'; // Default title for the main page
    }, []);

    return (
        <div className="bg-slate-950 h-screen flex w-screen">
             {/* Sidebar: Hidden on small screens, visible on md and above */}
            <div className={`${opensidebar?"z-50":""} md:inline-block`}>
                <Sidebar setActiveSection={setActiveSection} opensidebar={opensidebar} setOpenSidebar={setOpenSidebar}/>
            </div>

            {/* Main Content: Takes full width on small screens, leaves space for sidebar on md+ */}
            
                <MainContent activeSection={activeSection}  setOpenSidebar={setOpenSidebar} opensidebar={opensidebar} />
            
        </div>
    )
}