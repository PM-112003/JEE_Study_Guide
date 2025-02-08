import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import Tr from '../utilities/tablerow';

export default function Physics(){

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
            <div className="text-5xl font-semibold text-center  text-blue-500 -ml-6 mb-4">
                Physics
            </div>

            {/* Note*/}
            <div className="w-[75%] h-auto text-justify mx-auto mt-3 border-[1px] border-slate-500 p-2 rounded-xl shadow-md shadow-sky-200">
                Cover your JEE physics syllabus as fast as possible. We have already done the research to find the shortest, most understandable and relevant
                video lectures for you from the internet. So you don't need to plan yourself that what lectures you need to watch for which chapters.
                The videos are chosen such that you can prepare the syllabus well and have strong command over the topics which are mostly asked in 
                JEE. 
            </div>

            {/* Class 11th */}
            <div className="w-[75%] h-auto text-justify mx-auto mt-16">
                <p className="text-3xl font-bold">Physics 11th</p>
                <hr className="bg-slate-100 h-[2px] border-0 rounded-2xl mt-2"/>
                
                {/* Chapters */}

                {/* chapter 1 */}
                <div className="w-full h-auto mx-auto mt-3 text-xl font-semibold  border-[1px] border-slate-500 p-2 rounded-xl shadow-sm shadow-sky-200">
                    <div className="flex justify-between items-center "> 
                        <span className="text-lg font-bold ml-2 text-white">Chapter-1: Mathematical tools</span>
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
                                    {/* Differentiation */}
                                    
                                    <Tr topic="Intro to Calculus" videoId="MUZ81D-iBXU" practice="practice_1" />
                                    <Tr topic="Intro to Functions" videoId="cOl2HPOhvlk" pdfUrl="/Class_egs/sample.pdf"/>
                                    <Tr topic="Intro to Differentiation" videoId="nwWzwS5Zf1Y"></Tr>
                                    <Tr topic="Differentiation of Algebraic Functions" videoId="RNgnYBmQLl4"></Tr>
                                    <Tr topic="Differentiation of Trigonometric Functions" videoId="Por7Y-703Vc"></Tr>
                                    <Tr topic="Product Rule for Differentiation" videoId="LpUe-N94l58"></Tr>
                                    <Tr topic="Quotient Rule for Differentiation" videoId="i9b70_zz_s8"></Tr>
                                    <Tr topic="Properties of Logarithmic Functions " videoId="BynHCwunAuQ"></Tr>
                                    <Tr topic="Logarithmic & Exponential Functions" videoId="z334CxZajsI"></Tr>
                                    <Tr topic="Chain Rule for Differentiation" videoId="aYH3DZ8ls3s"></Tr>
                                    <Tr topic="Examples on Direct Applications of Chain Rule" videoId="cJvrqNTsTA4"></Tr>
                                    <Tr topic="Differentiation with Respect to a New Variable" videoId="ansk9uZwRBU"></Tr>
                                    <Tr topic="Differentiation of Implicit Functions" videoId="JFUXHQGlJf0"></Tr>
                                    <Tr topic="Graph and Slope of a Function" videoId="4IJrhhN_BMI"></Tr>
                                    <Tr topic="Application of Differentiation in Maxima-Minima" videoId="nQ-v_9mJxW8"></Tr>
                                    <Tr topic="Examples on Maxima-Minima" videoId="qJNwxB_NmmU"></Tr>

                                    {/* Integration */}
                                    <Tr topic="Introduction to Integration" videoId="8Yg0mVHxW1o"></Tr>
                                    <Tr topic="Indefinite Integration" videoId="pw6RMXufp9A"></Tr>
                                    <Tr topic="Integration by Substitution" videoId="QbI7ugFFTIg"></Tr>
                                    <Tr topic="More Examples on Integration" videoId="aG-b0QZqZZw"></Tr>
                                    <Tr topic="Definite Integration" videoId="EMGbvwTOI4s"></Tr>
                                    <Tr topic="Area Under a Curve" videoId="xnVHzNPocS0"></Tr>
                                    <Tr topic="Area of a Circle" videoId="oNmhiFe57os"></Tr>
                                    <Tr topic="Area of a Sphere" videoId="9byb9Vi1wn4"></Tr>
                                    <Tr topic="Volume of a Sphere" videoId="8lqqXVVPzT0"></Tr>
                                    <Tr topic="Volume of a Cone" videoId="usiEVOuWzt8"></Tr>
                                    <Tr topic="Volume of Solids of Revolution" videoId="S7rTc7SN0Nk"></Tr>

                                    {/* Vectors */}
                                    <Tr topic="Introduction to Physical Quantities" videoId="bqIkZcqDYmc"></Tr>
                                    <Tr topic="Vector Representation Methods" videoId="Ix6ZJk6f4Gk"></Tr>
                                    <Tr topic="Position Vector" videoId="gC-DaA6M-Nc"></Tr>
                                    <Tr topic="Vector Addition" videoId="JKz72oEAIHk"></Tr>
                                    <Tr topic="Some Trigonometric Laws for Vectors" videoId="Ze5OLlyR6sI"></Tr>
                                    <Tr topic="Triangle Rule for Vector Addition" videoId="CKQFHn53sGM"></Tr>
                                    <Tr topic="Subtraction of Vector" videoId="jbIvlSG6nds"></Tr>
                                    <Tr topic="Components of Vector" videoId="QIKvGR1JWq4"></Tr>
                                    <Tr topic="Parallelogram Rule of Vector Addition" videoId="Frs0Mw7-PDY"></Tr>
                                    <Tr topic="Unit Vector" videoId="ebAsq1FCkZI"></Tr>
                                    <Tr topic="Examples on Vectors" videoId="oN4S7YLgAYI"></Tr>
                                    <Tr topic="Product of Vectors" videoId="vTQWBMMhbCA"></Tr>
                                    <Tr topic="Scalar Product of Vectors" videoId="2JXge6as0l0"></Tr>
                                    <Tr topic="Vector Product of Vectors" videoId="ZFPMahg1QIg"></Tr>
                                    
                                </tbody>
                            </table>
                            </div>
                        </div>
                    )}
                    
                </div>

                {/* Chapter 2 */}
                <div className="w-full h-auto mx-auto mt-3 text-xl font-semibold  border-[1px] border-slate-500 p-2 rounded-xl shadow-sm shadow-sky-200">
                    <div className="flex justify-between items-center "> 
                        <span className="text-lg font-bold ml-2 text-white">Chapter-2: Motion in 1-D</span>
                        <FontAwesomeIcon  onClick={() => toggleDropdown('Ch_2_11')} icon={isExpanded.Ch_2_11 ? faChevronUp : faChevronDown} className="text-slate-400 mr-2 cursor-pointer" />
                    </div>
                    {isExpanded.Ch_2_11 && (
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
                                    <Tr topic="Lecture-1" videoId="CBvaO-uDvs8"></Tr>
                                    <Tr topic="Lecture-2" videoId="0nkEq67Jpoc"></Tr>
                                    <Tr topic="Lecture-3" videoId="SkTx3A4sc80"></Tr>
                                    <Tr topic="Lecture-4" videoId="oYs4cbrRrTo"></Tr>
                                    <Tr topic="Lecture-5" videoId="GklhPx7vHqs"></Tr>
                                    <Tr topic="Lecture-6" videoId="JOCJiyjK-3Y"></Tr>
                                    <Tr topic="Lecture-7" videoId="8Ajsl6taSPw"></Tr>
                                    <Tr topic="Lecture-8" videoId="FIEIkvKL7UI"></Tr>
                                    
                                </tbody>
                            </table>
                            </div>
                        </div>
                    )}
                    
                </div>

                {/* Chapter 3 */}
                <div className="w-full h-auto mx-auto mt-3 text-xl font-semibold  border-[1px] border-slate-500 p-2 rounded-xl shadow-sm shadow-sky-200">
                    <div className="flex justify-between items-center "> 
                        <span className="text-lg font-bold ml-2 text-white">Chapter-3: Projectile motion</span>
                        <FontAwesomeIcon  onClick={() => toggleDropdown('Ch_3_11')} icon={isExpanded.Ch_3_11 ? faChevronUp : faChevronDown} className="text-slate-400 mr-2 cursor-pointer" />
                    </div>
                    {isExpanded.Ch_3_11 && (
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
                                    <Tr topic="Lecture-1" videoId="CBvaO-uDvs8"></Tr>
                                    <Tr topic="Lecture-2" videoId="0nkEq67Jpoc"></Tr>
                                    <Tr topic="Lecture-3" videoId="SkTx3A4sc80"></Tr>
                                    <Tr topic="Lecture-4" videoId="oYs4cbrRrTo"></Tr>
                                    <Tr topic="Lecture-5" videoId="GklhPx7vHqs"></Tr>
                                    <Tr topic="Lecture-6" videoId="JOCJiyjK-3Y"></Tr>
                                    <Tr topic="Lecture-7" videoId="8Ajsl6taSPw"></Tr>
                                    <Tr topic="Lecture-8" videoId="FIEIkvKL7UI"></Tr>
                                    
                                </tbody>
                            </table>
                            </div>
                        </div>
                    )}
                    
                </div>
            </div>

        </>
    )
}