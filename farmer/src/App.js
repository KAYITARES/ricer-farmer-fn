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

import Homemore from './pages/homemore';


<<<<<<< HEAD
=======
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import Welcome from './pages/welcome';
import Product from './pages/product';
import Single from './pages/Singleproduct';
import Login from './pages/login';




>>>>>>> 7db8983 (product)
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/HOME" element={<Home/>}></Route>
    <Route path='/' element={<Welcome/>}></Route>
<<<<<<< HEAD
<<<<<<< HEAD
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/signup' element={<SignUp/>}></Route>
    <Route path='/aboutus' element={<Aboutus/>}></Route>
    <Route path='/moreabout' element={<Moreabout/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/homemore' element={<Homemore/>}></Route>
    <Route path='/footer' element={<Footer/>}></Route>

=======
    <Route path='product' element={<Products/>}></Route>
>>>>>>> 7db8983 (product)
=======
    <Route path='/product' element={<Product/>}></Route>
    <Route path='/Singleproduct' element={<Single/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
   
>>>>>>> f507938 (product)
  </Routes>
</Router>

  
  );
}
export default app;