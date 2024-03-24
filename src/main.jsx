import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Layout/Root/Root';
import Home from './Pages/Home/Home';
import Donation from './Pages/Donation/Donation';
import Statistics from './Pages/Statistics/Statistics';
import CategoryDetails from './Pages/CategoryDetails/CategoryDetails';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    errorElement:<div>Error</div>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/donation',
        element:<Donation></Donation>,
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>,
      },
      {
        path:'/categorydetails/:id',
        element:<CategoryDetails></CategoryDetails>,
        loader: () => fetch('data.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
