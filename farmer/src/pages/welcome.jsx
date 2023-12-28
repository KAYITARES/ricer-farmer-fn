import React from "react";
import '../sass/main.scss';
import Home from "../component/home";
import Navbar from "../pages/header";
import About from "../component/aboutus"
import Card from "../component/card"









function Welcome(){
return (
    <>
   <Navbar />
   <Home />
<About/>
<Card/>

    </>
    )
    }
export default Welcome