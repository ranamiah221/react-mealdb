import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Meals from './components/Meals/Meals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
    {
      path:'/about',
      element:<About></About>
    },
    {
      path:'/meals',
      loader:()=>fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a'),
      element:<Meals></Meals>
    }
  ]
  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
