import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./pages/welcome";
import Home from "./component/home"
import Contact from './pages/cont';
import SignUp from './pages/signup';
import Footer from './component/footer';
import "../src/sass/main.scss"
import Aboutus from './pages/aboutus';
import Moreabout from './pages/aboutmore';


function app() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/HOME" element={<Home/>}></Route>
    <Route path='/' element={<Welcome/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/signup' element={<SignUp/>}></Route>
    <Route path='/aboutus' element={<Aboutus/>}></Route>
    <Route path='/moreabout' element={<Moreabout/>}></Route>
  </Routes>
</Router>

  
  );
}
export default app;