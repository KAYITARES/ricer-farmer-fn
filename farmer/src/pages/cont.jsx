import React from "react";
import emil from "../assets/image/helloo.png"

export default function Contact(){
    return(
        <>
        <div className="contact-cont">
     <div className="head">  
 <h2 className="hello">have some questions</h2>
 </div> 
<div className="fom-conto">
 <div className="par">
<img src={emil} alt="" />
</div>
 
 <div className="containes">
<fieldset className="field">
    <legend className="lgd">Rwangingo Rice Farmer Contact</legend>

        <form action="#" method="post" className="fom1">
           <div className="lbe-container">

            <div className="l1">
  {/* <label htmlFor="">Names:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <input type="text" className="Nm" placeholder="enter your full names" />
       </div>
       
       <div className="l2">
{/* <label htmlFor="">Email:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="email" className="email" placeholder="enter your email" /><br></br>
       </div>
       <div className="l3">
        {/* <label htmlFor="">ContactNumber:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
        <input type="number" className="conmbr" placeholder="enter your contact number"/><br></br>
       </div>

<div className="l4">
{/* <label htmlFor="">Message:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
&nbsp;

<input type="text" placeholder="write your message" className="textarea" />
<button type="submit" className="btn">Send</button>
</div>
</div>
        </form>
        </fieldset>
        </div>
        </div>
        </div>
        </>
    )
}