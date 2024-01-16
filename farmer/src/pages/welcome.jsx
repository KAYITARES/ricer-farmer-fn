import React from "react";
import '../sass/main.scss';
import Impact from "../component/impact";
import Home from "../component/home";
import AboutUs from "../component/aboutus";
import Card from "../component/card"



function Welcome(){
return (
    <>

   <Home/>
   <Navbar />
<AboutUs />
<Impact/>
<Card/>

    </>
    )
    }
export default Welcome