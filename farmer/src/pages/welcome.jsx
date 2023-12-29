import React from "react";
import '../sass/main.scss';
import Home from "../component/home";
import Navbar from "../pages/header";
import About from "../component/aboutus"
import Card from "../component/card"
import AboutUs from "../component/aboutus";









function Welcome(){
return (
    <>
   <Navbar />
   <Home />
<AboutUs/>
<Card/>

    </>
    )
    }
export default Welcome