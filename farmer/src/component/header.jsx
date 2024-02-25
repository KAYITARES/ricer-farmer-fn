import React from "react";
import logo from "../assets/image/logo.png";
import { Link } from 'react-router-dom'

import MenuIcon from '@mui/icons-material/Menu';
function Navbar(){
    return(
        <>
           <div className="nav-container">
                 <div className="logo">
                    <h1>R R Farmer</h1>
                 </div>
                <ul className="links">
                    <Link to="/" className="link">Wellcome</Link>
                    <Link to="/" className="link">About-us</Link>
                    <Link to="/" className="link">Product</Link>
                    <Link to="/" className="link">Impact</Link>
                    <Link to="/" className="link">Contact-us</Link>
                    <Link to="/" className="link">Login</Link>
                    <div className="menu-icon">
                        <MenuIcon className="icon"/>
                    </div>
                </ul>
           </div>
        </>

    )

}
export default Navbar