import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw } from "lucide-react"; // Lucide icons

export default function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => setTime((prev) => prev + 1), 1000);
        } else {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [isRunning]);

    const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600).toString().padStart(2, "0");
        const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
        const secs = (seconds % 60).toString().padStart(2, "0");
        return `${hrs}:${mins}:${secs}`;
    };

    return (
        <div className="ml-3 flex items-center space-x-4 bg-slate-900 text-white p-3 rounded-xl shadow-md">
            <span className="text-lg font-mono">{formatTime(time)}</span>
            <button onClick={() => setIsRunning(!isRunning)} className="p-2 rounded-md bg-gray-700 hover:bg-gray-600 transition">
                {isRunning ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <button onClick={() => { setTime(0); setIsRunning(false); }} className="p-2 rounded-md bg-gray-700 hover:bg-gray-600 transition">
                <RotateCcw size={20} />
            </button>
        </div>
    );
}