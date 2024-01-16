<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./pages/welcome";
import Home from "./component/home"
=======

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Welcome from './pages/welcome';
>>>>>>> 470b932 (very)
import Contact from './pages/cont';
import SignUp from './pages/signup';
import Footer from './component/footer';
<<<<<<< HEAD

function app() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/HOME" element={<Home/>}></Route>
=======
import Logo from './component/logo';
import "../src/sass/main.scss"
function App() {
  return (
 
<Router>
  <Routes>
>>>>>>> e5c5880 (fre)
    <Route path='/' element={<Welcome/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/signup' element={<SignUp/>}></Route>
    <Route path='/footer' element={<Footer/>}></Route>
    <Route path='/logo' element={<Logo/>}></Route>
  </Routes>
</Router>

  
  );
}
export default app;