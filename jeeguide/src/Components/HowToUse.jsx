import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function HowToUse(){

    const [isExpanded, setIsExpanded] = useState({
        whoIsItFor: false,
        howToFollowLectures: false,
        regardingBooksAndMaterial: false,
        guidanceBlogs: false,
    });
    
    const toggleDropdown = (section) => {
        setIsExpanded({
        ...isExpanded,
        [section]: !isExpanded[section],
        });
    };

    return (

        <>
            {/* The heading */}
            <div className="text-4xl font-semibold text-center mx-2 underline underline-offset-4">How to use this Website?</div>

            {/* Basic intro */}
            <div className="w-[70%] h-auto text-justify mx-auto mt-10">
                Welcome to JEE study guide, In this section you will learn how to fully utilize our website to crack your IIT-JEE 
                and other exams and get into your dream college all on your own. We provide you with the high quality video lectures, 
                practice tests, books and material to use and regular tips to enhance your preparation!

                <br /><br />
                See the below articles to know properly on how to get started!
            </div>

            {/* Who is it for */}
            <div onClick={() => toggleDropdown('whoIsItFor')} className="w-[70%] h-auto mx-auto p-1 cursor-pointer mt-10 rounded-xl bg-slate-900 border-[1px] border-slate-500 flex flex-col shadow-md shadow-sky-300"> 
                <div className="flex justify-between items-center"> 
                    <span className="text-lg font-bold ml-2 text-white">Who is it for?</span>
                    <FontAwesomeIcon icon={isExpanded.whoIsItFor ? faChevronUp : faChevronDown} className="text-slate-400 mr-2" />
                </div>
                {isExpanded.whoIsItFor && (
                    <div className="w-[90%] h-auto px-5 mx-auto text-justify my-2 text-sm">
                        As a self-study student I have known that everything that we need to study is available but in an unstructured format.
                        Our website has gathered and structured all the quality resources you need to prepare for your exams. This website is mainly
                        for the following kinds of students :- <br /> <br />
                        <ul className='list-disc ml-6'>
                            <li>Students who are self-studying and don't have the money to invest in a coaching but have the aim to crack JEE</li>
                            <li>Students who are in a coaching but are not satisfied with the teaching quality in their institute</li>
                        </ul>
                    </div>
                )}
            </div>
                

            {/* How to follow lectures */}
            <div onClick={() => toggleDropdown('howToFollowLectures')} className="w-[70%] h-auto mx-auto p-1 cursor-pointer mt-10 rounded-xl bg-slate-900 border-[1px] border-slate-500 flex flex-col shadow-md shadow-sky-300">
                <div className="flex justify-between items-center"> 
                    <span className="text-lg font-bold ml-2 text-white">How to follow the lectures</span>
                    <FontAwesomeIcon icon={isExpanded.howToFollowLectures ? faChevronUp : faChevronDown}  className="text-slate-400 mr-2" />
                </div>
                {isExpanded.howToFollowLectures && (
                    <div className="w-[90%] h-auto px-5 mx-auto text-justify my-2 text-sm">
                        It's a simple procedure:-
                        <ol className='list-decimal'>
                            <li>Watch the lecture, no need to write the class example questions , we will provide the example problems of class
                                as pdf that you can download
                            </li>
                            <li> Then read the textbooks, solve examples and gain thorough understanding of concepts(optional) </li>
                            <li>Do practice problems given after each video to apply what you learnt</li>
                        </ol>
                        <br />
                        Please make sure to follow chapterwise, some chapters are inherently linked to others so its best that you go in the way mentioned!
                    </div>
                )}
            </div>

            {/* Regarding Books and material */}
            <div onClick={() => toggleDropdown('regardingBooksAndMaterial')}  className="w-[70%] h-auto mx-auto p-1 cursor-pointer mt-10 rounded-xl bg-slate-900 border-[1px] border-slate-500 flex flex-col shadow-md shadow-sky-300">
                <div className='flex justify-between items-center'>
                    <span className="text-lg font-bold ml-2 text-white">Regarding Books and material</span>
                    <FontAwesomeIcon icon={isExpanded.howToFollowLectures ? faChevronUp : faChevronDown}  className="text-slate-400 mr-2" />
                </div>
                {isExpanded.regardingBooksAndMaterial && (
                    <div className="w-[90%] h-auto px-5 mx-auto text-justify my-2 text-sm">
                        The books and material section covers all the books that you'll need for your preparation. You don't need to spend time
                        here and there to look for books, all the links have been given!
                    </div>
                )}
            </div>

            {/* Guidance Blogs */}
            {/* Regarding Books and material */}
            <div onClick={() => toggleDropdown('guidanceBlogs')}  className="w-[70%] h-auto mx-auto p-1 cursor-pointer mt-10 rounded-xl bg-slate-900 border-[1px] border-slate-500 flex flex-col shadow-md shadow-sky-300">
                <div className='flex justify-between items-center'>
                    <span className="text-lg font-bold ml-2 text-white">The guidance/tips Blogs</span>
                    <FontAwesomeIcon icon={isExpanded.guidanceBlogs ? faChevronUp : faChevronDown}  className="text-slate-400 mr-2" />
                </div>
                {isExpanded.guidanceBlogs && (
                    <div className="w-[90%] h-auto px-5 mx-auto text-justify my-2 text-sm">
                        This section will contain different blogs about the tips and strategies you can apply to enhance your preparation and learning. 
                    </div>
                )}
            </div>
        </>
    );
}