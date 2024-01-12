import React from "react";
import Navbar from "../component/header";
import Footer from "../component/footer";

 function Aboutus(){
   
    return(
        <>
      <Navbar/>
        <div className="about-cont">
          <div className="heo">
            <div className="back-con">
                <h3 className="ball">organic <br /><span>& nutural</span>  </h3><br />
                <p>  hello we are <span>rwangingo rice farmer</span> <br />
                we are so happy because our farmer helps <br />
                our family to remove in poor </p>
               
            </div>
             <div className="hey"> 
           <p className="linkl">on more information click here <a href="/moreabout" className="linkg">View more</a></p>
        </div>
        </div>
        </div>
        <Footer/>
        </>
    )
}
export default Aboutus;