import NavBar from "./NavBar";
import Main from "./Main";

export default function MainContent({activeSection, setOpenSidebar, opensidebar}){
    

    return (
        <>
            <div className={`flex flex-col text-white w-full`} >
                <NavBar setOpenSidebar={setOpenSidebar} opensidebar={opensidebar}></NavBar>
                <Main activeSection={activeSection}></Main>
            </div>
        </>
    );
}