import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
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
import SignUp from './Components/Authorization/SignUp';
import PrivateRoute from './utilities/PrivateRoute';
import axios from "axios";

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/content",
      element: <PrivateRoute><Fullpage></Fullpage></PrivateRoute>
    },
    {
      path: "/",
      element: <><SignIn></SignIn></>
    },
    {
      path: "/signup",
      element: <><SignUp></SignUp></>
    },
    {
      path: "/video/:videoId/:topic",
      element: <><YoutubePlay></YoutubePlay></>
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
