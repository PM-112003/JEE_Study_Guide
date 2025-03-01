import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Fullpage from './Components/Fullpage';
import YoutubePlay from './Components/YoutubePlay';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Practice_1 from './Components/Practice/practice_1';
import Blog_1 from './Components/Blogs/Blog_1';
import { SignalIcon } from 'lucide-react';
import SignIn from './Components/Authorization/SignIn';

function App() {

  const router = createBrowserRouter([
    {
      path: "/content",
      element: <><Fullpage></Fullpage></>
    },
    {
      path: "/",
      element: <><SignIn></SignIn></>
    },
    {
      path: "/video/:videoId/:topic",
      element: <><YoutubePlay></YoutubePlay></>
    },
    
    // The practice routes
    {
      path: "/practice/:practice",
      element: <> <Practice_1></Practice_1> </>
    },

    //blogs paths
    {
      path: "/doubts_blog",
      element: <><Blog_1></Blog_1></>
    }
    
  ])

  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Welcome to JEE guide!</h1> */}
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
