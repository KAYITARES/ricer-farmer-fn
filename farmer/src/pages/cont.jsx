import React from "react";


export default function Contact(){
    return(
        <>
        <div className="contact-cont">
        
 <h2>Contact Us</h2>
<div className="fom-conto">
 <div className="par">
{/* <p>Hello every one, we are <span>Rwangingo Rice Farmers</span>
We are so happy because our cooperative its works in 
coperation and we work hard,
So if you want to sends us your message and you can 
advice us please fill this form </p> */}

</div>
 
 <div className="containes">
<fieldset className="field">
    <legend className="lgd">Rwangingo Rice Farmer Contact</legend>

        <form action="#" method="post" className="fom1">
           <div className="lbe-container">

            <div className="l1">
  <label htmlFor="">Names:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <input type="text" className="Nm" placeholder="enter your full names" />
       </div>
       
       <div className="l2">
<label htmlFor="">Email:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="email" className="email" placeholder="enter your email" /><br></br>
       </div>
       <div className="l3">
        <label htmlFor="">ContactNumber:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="number" className="conmbr" placeholder="enter your contact number"/><br></br>
       </div>

<div className="l4">
<label htmlFor="">Message:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;

<textarea id="longText" name="longText" rows="2" cols="30"></textarea>
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