import React from "react";
import '../sass/main.scss';
import Impact from "../component/impact";
import Navbar from "./header";
import Home from "../component/home";

function Welcome(){
return (
    <>
   <Impact/>
    <Navbar/>
   <Home/>
    </>
    )
    }
export default Welcome