import React from "react";
import logo from "../assets/image/logo.png";
import '../sass/pages/header.scss';
import MenuIcon from '@mui/icons-material/Menu';
import Footer from "../component/footer";

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
            <li><a href="#">home</a></li>
            <li><a href="#">who we are</a></li>
            <li><a href="/contact">contact us</a></li>
            <li><a href="#">impact</a></li>
            <li><a href="#">product</a></li>
            <li><a href="/signup">sign up</a></li>
            <li><a href="#">login</a></li>
       
        </ul>
        <div className="menu-icon">
            <MenuIcon className="icon"/>
        </div>
   
    </div>
</div>
<Footer/>
</>

    )

}
export default Navbar