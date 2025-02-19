import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import Tr from '../utilities/tablerow';

export default function Chemistry(){

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
            <div className="text-5xl font-semibold text-center  text-red-500 -ml-6 mb-4">
                Chemistry
            </div>

            {/* Note*/}
            <div className="w-[75%] h-auto text-justify mx-auto mt-3 border-[1px] border-slate-500 p-2 rounded-xl shadow-md shadow-sky-200">
                Cover your JEE chemistry syllabus as fast as possible. We have already done the research to find the shortest, most understandable and relevant
                video lectures for you from the internet. So you don't need to plan yourself that what lectures you need to watch for which chapters.
                The videos are chosen such that you can prepare the syllabus well and have strong command over the topics which are mostly asked in 
                JEE.  
            </div>

            {/* Class 11th */}
            <div className="w-[75%] h-auto text-justify mx-auto mt-16">
                <p className="text-3xl font-bold">Chemistry 11th</p>
                <hr className="bg-slate-100 h-[2px] border-0 rounded-2xl mt-2"/>
                
                {/* Chapters */}
                {/* chapter 1 */}
                <div className="w-full h-auto mx-auto mt-3 text-xl font-semibold  border-[1px] border-slate-500 p-2 rounded-xl shadow-sm shadow-sky-200">
                    <div className="flex justify-between items-center "> 
                        <span className="text-lg font-bold ml-2 text-white">Chapter-1: Mole Concept and Stoichiometry</span>
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
                                        <th className='p-2 w-1 text-center border-r-[1px] border-slate-500'>Practice</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Use the TR component here for each row */}
                                    <Tr topic="Introduction to Mole Concept" videoId="EYma-QE9y4g" />
                                    <Tr topic="CALCULATION OF MOLE" videoId="66MpW8SJCSc" />
                                    <Tr topic="AVERAGE MOLAR MASS" videoId="213kermjRNs" />
                                    <Tr topic="EMPIRICAL FORMULA " videoId="4rvZirPij4U" />
                                    <Tr topic="CHEMICAL STOICHIOMETRY" videoId="ZxSv13Ab0Ns" />
                                    <Tr topic="VAPOUR DENSITY" videoId="1nsWacID2Q4" />
                                    <Tr topic="LIMITING REAGENT" videoId="T1fGYw05DcQ" />
                                    <Tr topic="POAC " videoId="szKw6wAxe7A" />
                                    <Tr topic="CONCENTRATION TERMS" videoId="Q2aKm-UqNOQ" />
                                    <Tr topic="QUESTIONS ON CONCENTRATION TERMS" videoId="2uQw2OT_Bkw" />
                                    <Tr topic="MIXING OF SOLUTIONS" videoId="0IolZF5ZhWM" />
                                    <Tr topic="PROBLEMS ON MIXTURES" videoId="3F-9UfHxntY" />
                                    
                                    
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