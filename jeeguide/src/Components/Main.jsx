import HowToUse from "./HowToUse";
import BooksAndMaterial from "./booksandmaterial";
import Physics from "./Physics";
import Sidebar from "./Sidebar";
import Chemistry from "./Chemistry";
import Math from "./Math";
import Tips from "./tips";


export default function Main({activeSection}){

    return (
        <>
            <div className="w-full h-full mt-2 overflow-y-auto mb-5 scroll-m-0 ">
                {activeSection === "howtouse" && <HowToUse />}
                {activeSection === "books" && <BooksAndMaterial />}
                {activeSection === "physics" && <Physics />}
                {activeSection === "chemistry" && <Chemistry />}
                {activeSection === "maths" && <Math />}
                {activeSection === "tips" && <Tips />}

            </div>
        </>
    );
}