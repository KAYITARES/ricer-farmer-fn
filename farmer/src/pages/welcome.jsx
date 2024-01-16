import React from "react";
import '../sass/main.scss';
import Impact from "../component/impact";
import Home from "../component/home";
import AboutUs from "../component/aboutus";
import Card from "../component/card";
import Navbar from "./header";



function Welcome(){
return (
    <>
<Card/>
   <Home/>
   <Navbar />
<AboutUs />
<Impact/>


    </>
    )
    }
export default Welcome