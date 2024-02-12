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
              <p className="short">
              Passionate rice farmers dedicated to nurturing the land and cultivating the staple grain that sustains communities.
               With a deep-rooted commitment to sustainable agriculture, we navigate the complexities of the rice
               cultivation process with skill and care. From selecting premium seeds to tending to the fields with precision,
               our journey is woven into every grain harvested. We embrace traditional wisdom and innovative techniques,
               working in harmony with nature to ensure a bountiful harvest. Join us in celebrating the artistry of rice farming,
                where each paddy tells a story of hard work, resilience, and the shared love for this essential
                grain that nourishes the world.
              </p>
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