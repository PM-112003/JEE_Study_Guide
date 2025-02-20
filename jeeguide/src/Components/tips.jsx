
export default function Tips(){

    const doubts_blog_URL = `/doubts_blog`;

    return (
        <>
            {/* Heading */}
            <div className="text-5xl font-semibold text-center  text-white -ml-6 mb-4">
                Guidance Blogs
            </div>

            {/* Note */}
            <div className="w-[75%] h-auto text-justify mx-auto mt-3 border-[1px] border-slate-500 p-2 rounded-xl shadow-md shadow-sky-400">
                This section contains the experience of my JEE journey and is made to help the students facing similiar issue, as a self-study student it's
                difficult to know what steps to take to overcome challenges.
                <br />
                I have compiled my experiences and learnings in this section of the website and I firmly believe this will help you!
                <br />
                <br />
                This section will constantly get updated with new blogs so stay tuned!
            </div>

            {/* blogs */}
            <div className="w-[75%] h-auto flex flex-wrap mx-auto mt-12 justify-between">
                {/* Blog 1 */}
                
                    <div className="w-[32%] h-80 p-1 mr-2 flex flex-col border-[1px] border-slate-600 rounded-xl shadow-sm shadow-sky-300 hover:shadow-sky-300 hover:shadow-lg hover:cursor-pointer">
                        <a href={doubts_blog_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col w-full h-full">
                        <img src="./Blog_imgs/doubts_blog.jpeg" alt="doubts imgs" className="w-full h-[70%] p-1 rounded-xl"/>
                        
                        <span className="p-1 md:text-xl text-[12px] font-bold mt-4">How to resolve your doubts correctly?</span>
                        </a>
                    </div>
                
                <div className="w-[32%] h-80 p-1 mr-2 flex flex-col border-[1px] border-slate-600 rounded-xl shadow-sm shadow-sky-300 hover:shadow-sky-300 hover:shadow-lg hover:cursor-pointer">
                    <img src="./Blog_imgs/Study_routine.jpeg" alt="doubts imgs" className="w-full h-[70%] p-1 rounded-xl"/>
                    <span className="p-1 md:text-xl text-[12px] font-bold mt-4 ">Basic study routine for JEE peeps &#40;Coming soon&#41;</span>
                </div>
                <div className="w-[32%] h-80 p-1 mr-2 flex flex-col border-[1px] border-slate-600 rounded-xl shadow-sm shadow-sky-300 hover:shadow-sky-300 hover:shadow-lg hover:cursor-pointer">
                    <img src="./Blog_imgs/Level_up.jpeg" alt="doubts imgs" className="w-full h-[70%] p-1 rounded-xl"/>
                    <span className="p-1 md:text-xl text-[12px] font-bold mt-4 ">Turn JEE prep in a game &#40;Coming soon&#41;</span>
                </div>
            </div>
        </>
    );
}