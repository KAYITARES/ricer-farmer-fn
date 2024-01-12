import React from "react";
import Navbar from "../component/header";
import Footer from "../component/footer";
export default function Kwanika(){
    return(
        <>
        <Navbar/>
        <div className="kwanika-con">
            <h1 className="twanike">how to dry our rice</h1>
            <p className="kwanika">Certainly! Here's a paragraph describing the process of drying rice:

"The drying stage is a pivotal chapter in the lifecycle of rice cultivation,
 where meticulous care transforms the harvested crop into a storable and market-ready product. 
 Once the rice grains are successfully harvested, they undergo a carefully orchestrated drying process. 
 Traditionally, farmers spread the freshly harvested rice in thin layers across large drying platforms, 
 harnessing the power of the sun and gentle breezes to naturally remove excess moisture
 . In more modern settings, mechanical dryers may be employed to regulate temperature and humidity levels, 
 ensuring a consistent and controlled drying environment. The objective is to achieve an optimal moisture content,
  preventing mold growth and enhancing the rice's storage quality. This delicate balance of nature and technology 
  marks the transition from the vibrancy of the harvest to the preparation of a resilient and market-ready rice
   product, ready to meet the demands of consumers worldwide."
</p>
        </div>
        <Footer/>
        </>
    )
}