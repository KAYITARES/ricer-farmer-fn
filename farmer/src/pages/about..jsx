import React from "react";
import ibage from '../assets/guhinga.png';
import naro from '../assets/umu.jpeg';
import nar from '../assets/umuc.jpeg';
import Card from "../component/cards";





const About=()=>{

   return(
    <>
 
    <div className="about">
        <div className="abouth">
            <h1>WHO WE ARE</h1>
            <p>Rwangingo rice farmer cooperative was established in 2015 after activities of preparing Rwangingo 
               marshland.
                Rwangimgo rice farmers cooperative was created with target of supplying rice on local market in order to reduce the problems of insufficient food on the local market</p>
        </div>
        <div className="cards-via">
         
          <h3>OUR ACTIVITIES</h3>
          
          <div className="cards">  
        <Card photo={ibage} title="CULTIVATION" more="Rwangingo rice farmers cooperatives caltivate rice which is major raw material processed in their factory to produce rice."/>
        <Card photo={naro} title="PRODUCTION" more="Grown rice is also processed and pakaged propery."/>
         <Card photo={nar} title="PRODUCT" more="After packing rice in different quantity like 5kg, 10 kg and 25kg and supply the to the"/>
         </div>
        </div>

    </div>
    </>
   );

}
export default About