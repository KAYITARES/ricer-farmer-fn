import React from "react";
import logo from "../assets/image/logo.png";

import MenuIcon from '@mui/icons-material/Menu';


 function Navbar(){
    return(
<>
<div className="nav-cont">
    <div className="container">
    <div className="cont1">
        <img src={logo} alt="" />
       <h2>RRF</h2>
    </div>
    
        <ul className="links">
            <li><a href="/home">home</a></li>
            <li><a href="/aboutus">aboutUs</a></li>
            <li><a href="/contact">contact us</a></li>
            <li><a href="/impact">impact</a></li>
            <li><a href="/product">product</a></li>
            <li><a href="/signup">sign up</a></li>
            <li><a href="/login">login</a></li>
       
        </ul>
        <div className="menu-icon">
            <MenuIcon className="icon"/>
        </div>
   
    </div>
</div>

</>

    )

}
export default Navbar