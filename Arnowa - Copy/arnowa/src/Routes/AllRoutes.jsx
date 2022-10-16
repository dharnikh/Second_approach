import {Routes,Route} from "react-router-dom"


import Home from "./Home"

import React from 'react'
import Login from "./Login"
// import PrivateRoute from "../Components/PrivateRoute"
// import Navbar from "../Components/Navbar"

export default function AllRoutes() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<h1>Welcome</h1>
          }></Route>
            <Route path="/home" element={<Home/>}></Route>
           
            <Route path="/login" element={<Login/>}></Route>



        </Routes>
      
    </div>
  )
}
