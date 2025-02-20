// This blog is about doubts guidance
import { useEffect } from "react";

export default function Doubts_Blog() {
    const topic = "Doubts resolution guide";

    useEffect(() => {
        document.title = topic.replace(/-/g, " "); // Format the title

        return () => {
            document.title = "Home"; // Reset title when component unmounts
        };
    }, [topic]);

    return (
        <>
            <div className="relative h-screen w-screen bg-slate-950 overflow-y-auto flex flex-col">

                <div className="w-[80%] h-auto mx-auto text-white mb-10">
                    {/* Heading */}
                    <div className="text-center text-white md:text-5xl sm:text-3xl text-2xl flex flex-col justify-center font-bold mx-auto md:w-[90%] w-[90%] ">
                        <span className="w-full">How to resolve your doubts correctly?</span>
                        <img src="./Blog_imgs/doubts_blog.jpeg" alt="" className="md:w-[600px] sm:w-[500px] sm:h-[250px] w-[300px] h-[200px] mx-auto mt-5 md:h-[300px] rounded-xl" />
                    </div>

                    {/* Content */}
                    <div className="md:w-[70%] sm:w-[90%] w-[95%] mx-auto mt-6">
                        <div class="bg-sky-900 text-white flex place-items-center w-auto h-5 md:h-8 md:w-[25%] sm:w-[30%] sm:text-[12px] sm:h-8 mx-auto text-center px-6 py-3 rounded-lg md:text-lg text-[10px] font-semibold cursor-pointer transition duration-300 hover:bg-sky-700 ">
                            <span className="mx-auto">
                             Go to Comments
                            </span>
                        </div>
                        <br />
                        <div className="text-justify">
                            Clearing doubts during JEE preparation was a real pain for me back in my days, but today with the abundance of resources that
                            students have, for most of your doubts, students don't even need a coaching institute doubt corner to get their doubts cleared
                            <div className="mt-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo saepe ipsa cum sunt nam ea, e
                                xercitationem unde ullam maxime nihil debitis excepturi, consequuntur quia dolore temporibus rerum digni
                                ssimos molestias quasi officia dolorem similique numquam odio magnam?
                                 Placeat pariatur doloribus eius nam quasi vero nostrum, aliquam, id eaque, quaerat dicta sed.
                            </div>
                            <div className="mt-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo saepe ipsa cum sunt nam ea, e
                                xercitationem unde ullam maxime nihil debitis excepturi, consequuntur quia dolore temporibus rerum digni
                                ssimos molestias quasi officia dolorem similique numquam odio magnam?
                                 Placeat pariatur doloribus eius nam quasi vero nostrum, aliquam, id eaque, quaerat dicta sed.
                            </div>
                            <div className="mt-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo saepe ipsa cum sunt nam ea, e
                                xercitationem unde ullam maxime nihil debitis excepturi, consequuntur quia dolore temporibus rerum digni
                                ssimos molestias quasi officia dolorem similique numquam odio magnam?
                                 Placeat pariatur doloribus eius nam quasi vero nostrum, aliquam, id eaque, quaerat dicta sed.
                            </div>
                            <div className="mt-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo saepe ipsa cum sunt nam ea, e
                                xercitationem unde ullam maxime nihil debitis excepturi, consequuntur quia dolore temporibus rerum digni
                                ssimos molestias quasi officia dolorem similique numquam odio magnam?
                                 Placeat pariatur doloribus eius nam quasi vero nostrum, aliquam, id eaque, quaerat dicta sed.
                            </div>
                            <div className="mt-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo saepe ipsa cum sunt nam ea, e
                                xercitationem unde ullam maxime nihil debitis excepturi, consequuntur quia dolore temporibus rerum digni
                                ssimos molestias quasi officia dolorem similique numquam odio magnam?
                                 Placeat pariatur doloribus eius nam quasi vero nostrum, aliquam, id eaque, quaerat dicta sed.
                            </div>
                            <div className="mt-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo saepe ipsa cum sunt nam ea, e
                                xercitationem unde ullam maxime nihil debitis excepturi, consequuntur quia dolore temporibus rerum digni
                                ssimos molestias quasi officia dolorem similique numquam odio magnam?
                                 Placeat pariatur doloribus eius nam quasi vero nostrum, aliquam, id eaque, quaerat dicta sed.
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}