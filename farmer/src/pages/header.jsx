import React from "react";
import logo from "../assets/image/logo.png";
import '../sass/pages/header.scss';

 function Navbar(){
    return(
<>
<div className="nav-cont">
    <div className="container">
    <div className="cont1">
        <img src={logo} alt="" />
       <h2>RRF</h2>
    </div>
    <div className="links">
        <ul>
            <li><a href="#">home</a></li>
            <li><a href="#">who we are</a></li>
            <li><a href="#">contact us</a></li>
            <li><a href="#">impact</a></li>
            <li><a href="/product">product</a></li>
            <li><a href="#">sign up</a></li>
            <li><a href="/login">login</a></li>
        </ul>
    </div>
    </div>
</div>
</>

    )

}
export default Navbar