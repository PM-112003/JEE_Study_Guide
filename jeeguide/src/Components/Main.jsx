import HowToUse from "./HowToUse";
import BooksAndMaterial from "./booksandmaterial";
import Physics from "./Physics";
import Sidebar from "./Sidebar";

export default function Main({activeSection}){

    return (
        <>
            <div className="w-full h-full mt-2 overflow-y-auto mb-5 scroll-m-0 ">
                {activeSection === "howtouse" && <HowToUse />}
                {activeSection === "books" && <BooksAndMaterial />}
                {activeSection === "physics" && <Physics />}
            </div>
        </>
    );
}