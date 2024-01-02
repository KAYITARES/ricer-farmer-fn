import React from "react";
import Navbar from "../component/header";
 function Aboutus(){
   
    return(
        <>
      <Navbar/>
        <div className="about-cont">
            <div className="back-con">
                <h3>organic <br /><span>& nutural</span>  </h3><br />
                <p>  hello we are <span>rwangingo rice farmer</span> <br />
                we are so happy because our farmer helps <br />
                our family to remove in poor </p>
               
            </div>
           <p className="linkl">on more information click here <a href="/moreabout">View more</a></p>
        </div>
        </>
    )
}
export default Aboutus;