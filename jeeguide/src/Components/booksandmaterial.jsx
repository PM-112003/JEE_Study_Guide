
export default function BooksAndMaterial(){

    return (
        <>
            {/* Heading */}
            <div className="text-5xl font-semibold text-center underline underline-offset-4">Books and materials for JEE</div>

            {/* intro */}
            <div className="w-[70%] h-auto text-justify mx-auto mt-10">
                The below are the only books that you'll need for your preparation for JEE.
            </div>

            {/* physics books */}
            <div className="w-[70%] h-auto text-justify mx-auto mt-10">
                <p className="text-3xl font-bold">&#35; Physics</p>
                <hr className="bg-slate-100 h-[2px] border-0 rounded-2xl mt-2"/>
                <ol className="list-disc w-[90%] h-auto mx-auto mt-3">
                    <li>First of all you have your own class notes</li>
                    <li>
                        For the starters you have <a href="#" className="text-blue-500 underline cursor-pointer">BM Sharma</a><br />
                        <ol className="list-decimal w-[90%] h-auto mx-auto ">
                            <li><a href="#" className="text-blue-500 underline cursor-pointer">Mechanics I</a></li>
                            <li><a href="#" className="text-blue-500 underline cursor-pointer">Mechanics II</a></li>
                            <li><a href="#" className="text-blue-500 underline cursor-pointer">Waves and Thermodynamics</a></li>
                            <li><a href="#" className="text-blue-500 underline cursor-pointer">Electrostatics and Current Electricity</a></li>
                            <li><a href="#" className="text-blue-500 underline cursor-pointer">Magnetism and Electromagnetic Induction</a></li>
                            <li><a href="#" className="text-blue-500 underline cursor-pointer">Optics and Modern Physics</a></li>
                        </ol>
                        <br />
                        These books provide you with ample amount of theory, examples to practice and tons of exercises at the back of every chapter.
                        Each of these chapters are aligned with the lectures given in the website, so you should be good to go. There are a lot of exercises
                        in these textbooks, so just do enough so that you feel confident in the chapter and tackling new problems!
                    </li>
                    <li>
                        You also need to do the <a href="#" className="text-blue-500 underline cursor-pointer">Previous year problems</a>
                    </li>
                    <br />
                    Now if you more ambitious and want to go beyond JEE advanced and here are our 2 best choices
                    <li>
                        <a href="#" className="text-blue-500 underline cursor-pointer">IE Irodov</a>
                    </li>
                    <li>
                        <a href="#" className="text-blue-500 underline cursor-pointer">Pearson's Pathfinder</a>
                    </li>
                    These problems in these books require really strong fundamentals and you may not be able to solve a lot of problems at first,
                    so make sure that you go the previous books mentioned (bm sharma and pyq's) first and once you are comfortable with them only then 
                    try to solve these books!

                </ol>
            </div>

            {/* Chemistry books */}
            <div className="w-[70%] h-auto text-justify mx-auto mt-16">
                <p className="text-3xl font-bold">&#35; Chemistry</p>
                <hr className="bg-slate-100 h-[2px] border-0 rounded-2xl mt-2"/>
                <ol className="list-disc w-[90%] h-auto mx-auto mt-3">
                    <li>Class Notes</li>
                    <li>
                        <a href="#" className="text-blue-500 underline cursor-pointer">Solomons</a> (reference for organic chemistry, a good to read)
                    </li>
                    <li>
                        <a href="#" className="text-blue-500 underline cursor-pointer">Master problems in organic chemistry by Vineet Khatri Sir</a>
                    </li>
                    These books give you a strong practice and thorough understanding of how organic reaction mechanisms work!
                    <li><a href="#" className="text-blue-500 underline cursor-pointer">Previous year problems</a></li>
                    <br />
                    To be honest you don't really need anything extra in chemistry other than these books, for inorganic there is no need for some extra books,
                    just the lecture notes, ncert and previous years will do the job!
                </ol>
            </div>

            {/* Maths books */}
            <div className="w-[70%] h-auto text-justify mx-auto mt-16">
                <p className="text-3xl font-bold">&#35; Maths</p>
                <hr className="bg-slate-100 h-[2px] border-0 rounded-2xl mt-2"/>
                <ol className="list-disc w-[90%] h-auto mx-auto mt-3">
                    <li>Class Notes</li>
                    <li>
                        <a href="#" className="text-blue-500 underline cursor-pointer">Previous Year Problems</a> 
                    </li>
                    <li>
                        <a href="#" className="text-blue-500 underline cursor-pointer">Black book by vikas gupta</a>
                        <br />
                        <a href="#" className="text-blue-500 underline cursor-pointer">Black book Solutions</a>
                        <br />
                        This book is a bit on the advanced side so make sure to do your class notes examples well before jumping to this book,
                        some problems' solutions are not given intentionally for you to struggle and come up with a solution yourself. We recommend this one 
                        because if you do not face challenging problems in maths, you'll never be able to score high unlike physics and chemistry 
                        <br />
                        Just follow the given order: Class notes --&gt; Vikas Gupta --&gt;Previous Year problems
                    </li>
                    <br />
                    Frankly you don't need anything else in maths, you don't need to solve a lot of problems from variety of books, just do the above
                    mentioned books multiple times and try to build intuition of solving rather than memorizing a lot of problems. The remaining practice will
                    be given by the weekly tests from a test series!
                </ol>

                <br />
                I don't recommend doing NCERT for maths unless you really want to, I feel it to be not worth putting the effort as most problems will 
                be cakewalk for you after you are done with your notes, black book and previous years
                <br />
            </div>

            <div className="w-[70%] h-auto text-justify mx-auto mt-16 border-[1px] border-slate-500 p-2 rounded-xl shadow-md shadow-white">
                Note : When doing previous year problems, start with latest ones first and move backwards in the years.
                Also note that doing problems that are too old may not be optimal, so try to do upto past 10-12 years of Problems
                and leave remaining for revision purposes
            </div>

            {/* Boards books */}
            <div className="w-[70%] h-auto text-justify mx-auto mt-16">
                <p className="text-3xl font-bold">&#35; Board books</p>
                <hr className="bg-slate-100 h-[2px] border-0 rounded-2xl mt-2"/>
                <ol className="list-disc w-[90%] h-auto mx-auto mt-3">
                    The following are the books you can do for your boards prep, just do them after completing a chapter at JEE level,
                    so that you don't stall in your school and board exams and know how to write answers well!

                    <li className="ml-5"><a href="#" className="text-blue-500 underline cursor-pointer">Maths 11th</a></li>
                    <li className="ml-5"><a href="#" className="text-blue-500 underline cursor-pointer">Maths 12th</a></li>
                    <li className="ml-5"><a href="#" className="text-blue-500 underline cursor-pointer">Physics 11th</a></li>
                    <li className="ml-5"><a href="#" className="text-blue-500 underline cursor-pointer">Physics 12th</a></li>
                    <li className="ml-5"><a href="#" className="text-blue-500 underline cursor-pointer">Chemistry 11th</a></li>
                    <li className="ml-5"><a href="#" className="text-blue-500 underline cursor-pointer">Chemistry 12th</a></li>
                </ol>
            </div>
            
            {/* Test series */}
            <div className="w-[70%] h-auto text-justify mx-auto mt-16">
                <p className="text-3xl font-bold">&#35; Test Series</p>
                <hr className="bg-slate-100 h-[2px] border-0 rounded-2xl mt-2"/>
                We just recommend you to take either allen or resonance yearlong test series, doing both is not something that I will recommend.
                Here also the game is about honestly giving tests every 2-3 weeks to assess your preparation. We will soon come up with our own Test
                series as well so stay tuned
            </div>

            
        </>
    );
}