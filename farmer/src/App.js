
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/home"
import Welcome from './pages/welcome';
import Contact from './pages/cont';
import SignUp from './pages/signup';
import Footer from './component/footer';
import "../src/sass/main.scss"
import Aboutus from './pages/aboutus';
import Moreabout from './pages/aboutmore';
import Homemore from './pages/homemore';
import Product from './pages/product';
import Single from './pages/Singleproduct';
import Login from './pages/login';
import Products from "./pages/product";


import Impact from './pages/impact';
import Kuvuruga from './pages/kuvuruga';
import Guteraa from './pages/guteraa';
import Kubagara from './pages/kubagara';
import Weze from './pages/weze';
import Kwanika from './pages/kwanika';
import Kubika from './pages/kubika';




function App() {
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
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/homemore' element={<Homemore/>}></Route>
    <Route path='/footer' element={<Footer/>}></Route>
    <Route path='product' element={<Products/>}></Route>
    <Route path='/welcome' element={<Welcome/>}></Route>
    <Route path='/product' element={<Product/>}></Route>
    <Route path='/Singleproduct' element={<Single/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/impact' element={<Impact/>}></Route>
    <Route path='/kuvuruga' element={<Kuvuruga/>}></Route>
    <Route path='/gutera' element={<Guteraa/>}></Route>
    <Route path='/kubagara' element={<Kubagara/>}></Route>
    <Route path='/weze' element={<Weze/>}></Route>
    <Route path='/kwanika' element={<Kwanika/>}></Route>
    <Route path='/kubika' element={<Kubika/>}></Route>
   
  </Routes>
</Router>

  
  );
}
export default App;