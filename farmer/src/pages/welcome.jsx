import React from "react";
import '../sass/main.scss';
import Navbar from "../component/header";
import Home from "../component/home";
import About from "../component/aboutus";
import Card from "../component/card";
import Import from "./impact";

const  Welcome=()=>{
return (
    <>
   <Navbar />
   <Home />
<About/>
<Card/>
<Import/>
    </>
    )
    }
export default Welcome;