import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Tr({topic, videoId, pdfUrl, practice}){
    const videoURL = `/video/${videoId}/${topic}`;
    const practiceURL = practice ? `/practice/${practice}` : "#";
    


    return (
        <>
            <tr className='border-t-[1px] border-slate-500 rounded-xl'>
                <td className='p-2 w-1 text-center border-r-[1px] border-slate-500'>
                    <input type="checkbox" className="w-4 h-4 border-gray-300 rounded cursor-pointer" />
                </td>
                <td className='p-2 w-[130px] text-center border-r-[1px] border-slate-500'> {topic}</td>
                <td className='p-2 w-1 text-center border-r-[1px] border-slate-500'>
                    <a href={videoURL} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} className="text-red-400 mr-2 text-lg ml-2 cursor-pointer" />
                    </a>
                </td>
                <td className='p-2 w-1 text-center border-r-[1px] border-slate-500 cursor-pointer'>
                    {pdfUrl ? (
                            <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className='text-sky-400 underline underline-offset-2'>
                                Egs
                            </a>
                        ) : null}
                </td>
                {/* <td className='p-2 w-1 text-center border-r-[1px] border-slate-500 cursor-pointer'>
                    {practice ? (
                            <a href={practiceURL} target="_blank" rel="noopener noreferrer" className='text-sky-400 underline underline-offset-2'>
                                Practice
                            </a>
                        ) : null}
                </td> */}
            </tr>
        </>
    )
}