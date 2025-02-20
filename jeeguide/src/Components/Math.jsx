import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import Tr from '../utilities/tablerow';

export default function Math(){

    const [isExpanded, setIsExpanded] = useState({
        Ch_1_11: false,
        Ch_2_11: false,
        Ch_3_11: false,
        Ch_4_11: false,
    });
    
    const toggleDropdown = (section) => {
        setIsExpanded({
        ...isExpanded,
        [section]: !isExpanded[section],
        });
    };


    return (
        <>
            {/* Heading */}
            <div className="text-5xl font-semibold text-center  text-yellow-500 -ml-6 mb-4">
                Maths
            </div>

            {/* Note*/}
            <div className="w-[75%] h-auto text-justify mx-auto mt-3 border-[1px] border-slate-500 p-2 rounded-xl shadow-md shadow-sky-200">
                Cover your JEE Mathematics syllabus as fast as possible. We have already done the research to find the shortest, most understandable and relevant
                video lectures for you from the internet. So you don't need to plan yourself that what lectures you need to watch for which chapters.
                The videos are chosen such that you can prepare the syllabus well and have strong command over the topics which are mostly asked in 
                JEE.  
            </div>

            {/* Class 11th */}
            <div className="w-[75%] h-auto text-justify mx-auto mt-16">
                <p className="text-3xl font-bold">Maths 11th</p>
                <hr className="bg-slate-100 h-[2px] border-0 rounded-2xl mt-2"/>
                
                {/* Chapters */}
                {/* chapter 1 */}
                <div className="w-full h-auto mx-auto mt-3 text-xl font-semibold  border-[1px] border-slate-500 p-2 rounded-xl shadow-sm shadow-sky-200">
                    <div className="flex justify-between items-center "> 
                        <span className="text-lg font-bold ml-2 text-white">Chapter-1: Sets and Relations &#40; 3hrs 12min &#41; </span>
                        <FontAwesomeIcon  onClick={() => toggleDropdown('Ch_1_11')} icon={isExpanded.Ch_1_11 ? faChevronUp : faChevronDown} className="text-slate-400 mr-2 cursor-pointer" />
                    </div>
                    {isExpanded.Ch_1_11 && (
                        <div className="w-full h-auto px-5 mx-auto text-justify my-2 text-sm text-white">
                            <div className=' w-full mx-auto mt-4 overflow-x-auto'> 
                            <table className='border-collapse w-full border border-slate-500 rounded-xl bg-slate-800'>
                                <thead>
                                    <tr>
                                        <th className='p-2 w-1 text-center border-r-[1px] border-slate-500'>Status</th>
                                        <th className='p-2 w-[130px] text-center border-r-[1px] border-slate-500'>Topic</th>
                                        <th className='p-2 w-1 text-center border-r-[1px] border-slate-500'>Video</th>
                                        <th className='p-2 w-1 text-center border-r-[1px] border-slate-500'>Class examples</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Use the TR component here for each row */}
                                    <Tr topic="Lecture 1" videoId="_ZS_GQTl4I4" />
                                    <Tr topic="Lecture 2" videoId="vbJro9KKgds" />
                                    <Tr topic="Lecture 3" videoId="jX7o4HFP0Os" />
                                    <Tr topic="Lecture 4" videoId="xdbxZH0dGfQ" />
                                    <Tr topic="Lecture 5" videoId="rNKvk0htfxQ" />
                                    <Tr topic="Lecture 6" videoId="MduGN-9-0SM" />
                                    <Tr topic="Lecture 7" videoId="IImKERxWo8w" />
                                    <Tr topic="Lecture 8" videoId="DboB9APy420" />
                                    <Tr topic="Lecture 9" videoId="NnzFyRoI44Q" />
                                    <Tr topic="Lecture 10" videoId="7b1saCfPFfg" />
                                    <Tr topic="Lecture 11" videoId="BTPA6P5XsGM" />
                                    <Tr topic="Lecture 12" videoId="oKbT207U4hY" />
                                    <Tr topic="Lecture 13" videoId="xfaB6K3JFfo" />
                                    <Tr topic="Lecture 14" videoId="Ily3bJA0LDM" />
                                    
                                    
                                    
                                </tbody>
                            </table>
                            </div>
                        </div>
                    )}
                    
                </div> 

            </div>
        </>
    );
}