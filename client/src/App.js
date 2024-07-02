import React from "react"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import SigIn from './pages/SignIn'
import SignOut from './pages/SignOut'
import Header from "./components/Header"
import SignUp from "./pages/SignUp.js"

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/sign-in" element={<SigIn/>}></Route>
        <Route path="/sign-out" element={<SignOut/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}