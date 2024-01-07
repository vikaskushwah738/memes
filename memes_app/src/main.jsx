import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorPage from './components/pages/error/error.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from "react-router-dom";
import LayOut from './LayOut.jsx';
import Home from './components/pages/home/Home.jsx';
import About from './components/pages/about/About.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Edit from './components/pages/home/edit.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<LayOut />} errorElement={<ErrorPage/>}>
      <Route path='' element={<Home />}/>
      <Route path='/about' element={<About />}/>
       <Route path='/edit' element={<Edit />}/>
    </Route>

  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
