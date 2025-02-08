import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function Question({ question, index }) {
    const [isExpanded, setIsExpanded] = useState({
        ques: false,
        sol: false
    });

    const toggleDropdown = (section) => {
        setIsExpanded((prevState) => ({
            ...prevState,
            [section]: !prevState[section]
        }));
    };

    return (
        <>
            {/* ✅ Question Box */}
            <div className="w-full h-auto mx-auto mt-3 mb-5 text-xl font-semibold border-[1px] border-slate-500 p-3 rounded-xl shadow-sm shadow-sky-400">
                {/* Question Header */}
                <div className="flex justify-between items-center">
                    <span className="text-lg font-bold ml-2 text-white">Question : {index+1}</span>
                    <FontAwesomeIcon 
                        onClick={() => toggleDropdown("ques")} 
                        icon={isExpanded.ques ? faChevronUp : faChevronDown} 
                        className="text-slate-400 mr-2 cursor-pointer" 
                    />
                </div>

                {/* ✅ Display Question when expanded */}
                {isExpanded.ques && (
                    <div className="w-full h-auto px-5 mx-auto text-justify my-2 text-sm text-white">
                        {question.text}
                    </div>
                )}

                {/* ✅ Show Image if available */}
                {question.image && (
                    <div className="w-full mt-3 flex justify-center">
                        <img 
                            src={question.image} 
                            alt="Question Illustration" 
                            className="max-w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                )}
            </div>

            {/* ✅ Solution Box */}
            <div className="w-full h-auto mx-auto mt-3 mb-5 text-xl font-semibold border-[1px] border-slate-500 p-3 rounded-xl shadow-sm shadow-sky-400">
                {/* Solution Header */}
                <div className="flex justify-between items-center">
                    <span className="text-lg font-bold ml-2 text-white">Solution : {index+1}</span>
                    <FontAwesomeIcon 
                        onClick={() => toggleDropdown("sol")} 
                        icon={isExpanded.sol ? faChevronUp : faChevronDown} 
                        className="text-slate-400 mr-2 cursor-pointer" 
                    />
                </div>

                {/* ✅ Display Solution when expanded */}
                {isExpanded.sol && (
                    <div className="w-full h-auto px-5 mx-auto text-justify my-2 text-sm text-white">
                        {question.solution}
                    </div>
                )}
            </div>
        </>
    );
}
