import React from "react";
import '../sass/main.scss';
import Impact from "../component/impact";
import Home from "../component/home";
import Navbar from "../pages/header";
import AboutUs from "../component/aboutus";
import Card from "../component/card"


function Welcome(){
return (
    <>
   <Impact/>
    <Navbar/>
   <Home/>

   <Home />
<AboutUs/>
<Card/>

    </>
    )
    }
export default Welcome