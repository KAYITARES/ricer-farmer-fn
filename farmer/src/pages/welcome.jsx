import React from "react";
import "../sass/main.scss";
// import Navbar from "../component/header";
import Home from "../component/home";
import About from "../component/aboutus";
import Card from "../component/card";
import Impact from "../pages/impact";


function Welcome(){
return (
    <>

   <Home />
<About/>
<Card/>
<Impact/>
    </>
    )
    }
export default Welcome;