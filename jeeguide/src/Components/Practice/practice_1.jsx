import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Stopwatch from "../../utilities/stopwatch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as outlineStar } from "@fortawesome/free-regular-svg-icons";
import Question from "../../utilities/question"; // Import Question component


export default function Practice_1() {
    const { practice } = useParams();
    const [marked, setMarked] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0); // Track current question index

    useEffect(() => {
        if (practice) {
            document.title = practice.replace(/-/g, ' ');
        }
        return () => {
            document.title = 'Home';
        };
    }, [practice]);

    // ✅ Array of questions
    const questions = [
        {
            text: "What is Newton's Second Law of Motion?",
            image: "", // Change to actual image URL
            solution: "Newton's second law states that Force = Mass × Acceleration (F = ma)."
        },
        {
            text: "What is the formula for gravitational force?",
            image: "",
            solution: "Gravitational force is given by F = G (m1 * m2) / r²."
        },
        {
            text: "Explain the concept of work done in physics.",
            image: "",
            solution: "Work is defined as the force applied to an object multiplied by the displacement in the direction of the force (W = F × d)."
        }
    ];

    const totalQuestions = questions.length;

    return (
        <div className="h-screen w-full bg-slate-950 overflow-auto">
            {/* Navbar */}
            <div className="w-full bg-slate-900 h-16 border-b-2 border-slate-700 text-white flex justify-between items-center">
                
                {/* Stopwatch */}
                <div>
                    <Stopwatch />
                </div>

                {/* Prev and next buttons */}
                <div className="flex items-center space-x-3">
                    {currentIndex > 0 && (
                        <button 
                            className="p-2 bg-sky-800 text-white rounded-lg" 
                            onClick={() => setCurrentIndex((prev) => prev - 1)}
                        >
                            Prev
                        </button>
                    )}
                    {currentIndex < totalQuestions - 1 && (
                        <button 
                            className="p-2 bg-sky-800 text-white rounded-lg" 
                            onClick={() => setCurrentIndex((prev) => prev + 1)}
                        >
                            Next
                        </button>
                    )}
                </div>

                {/* Star mark */}
                <div 
                    className="cursor-pointer text-yellow-400 text-2xl p-2" 
                    onClick={() => setMarked(!marked)}
                >
                    <FontAwesomeIcon icon={marked ? solidStar : outlineStar} />
                </div>
            </div>
            
            <br />

            {/* ✅ Render Current Question */}
            <div className="w-[85%] mx-auto">
                <Question index={currentIndex} question={questions[currentIndex]} />
            </div>
        </div>
    );
}
