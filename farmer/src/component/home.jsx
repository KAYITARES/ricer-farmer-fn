import React from "react";
import Navbar from "./header";
import Footer from "./footer";
 function Home(){
    return(
        <>
      <Navbar/>
        <div className="home-cont">
          <div className="heljo">
            <div className="bac-con">
                <h4 className="fred">WELCOME ON RWANGINGO RICE FARMER WEBSITE</h4><br />
                {/* <p>  hello we are <span>rwangingo rice farmer</span> <br />
                we are so happy because our farmer helps <br />
                our family to remove in poor </p> */}
            </div>
             <div className="hey">
           <p className="linkY">on more information click here </p>
           <a href="/homemore">View more</a>
        </div>
        </div>
        </div>
        <Footer/>
        </>
    )
}
export default Home;