import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function YoutubePlay(){

    const { videoId, topic } = useParams();

    useEffect(() => {
        document.title = topic.replace(/-/g, ' '); // Replace dashes with spaces for better formatting
        return () => {
            document.title = 'Home';
        };
    }, [topic]);

    return (
        <>
            <div className="flex justify-center  min-h-screen bg-slate-950 px-4">
                <div className="w-full max-w-4xl h-[50%] mt-10 sm:w-[95%] md:w-[80%] lg:w-[60%] aspect-video p-3 border-2 border-slate-500 rounded-lg relative">
                    <div className="w-full h-full pb-[56.25%] relative"> 
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}?controls=1&modestbranding=1&rel=0&showinfo=0`}
                            title="YouTube Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                            allowFullScreen
                            className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                        ></iframe>
                    </div>
                </div>
            </div>


        </>
    )
}