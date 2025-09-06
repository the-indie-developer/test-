import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import About from './components/home/About.jsx'
import Impact from './components/home/Impact.jsx'
import Programs from './components/home/Programs.jsx'
import MainPage from './components/home/MainPage'
import Contact from './components/home/Contact.jsx'
import Team from './components/home/Team.jsx'
import Login from './components/auth/Login.jsx'
import Signup from './components/auth/Signup.jsx'

import Donation from './components/utils/Donation.jsx'
import DetailedAbout from './components/utils/DetailedAbout.jsx'


const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainPage/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/impact',
    element: <Impact/>
  },
  {
    path: '/programs',
    element: <Programs/>
  },
  {
    path: '/team',
    element: <Team/>
  },
  {
    path: '/contact',
    element: <Contact/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path: '/donate',
    element: <Donation/>
  },
  {
    path: '/d-about/:slug',
    element: <DetailedAbout/>
  },

])

const App = () => {
  return (
   <RouterProvider router={routes}>
  <div className="app"></div>
   </RouterProvider>
  )
}

export default App