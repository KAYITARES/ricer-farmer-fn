import React from "react";
import Navbar from "../component/header";
import Footer from "../component/footer";
function SignUp(){
    return(
        <>
<Navbar/>
        <div className="sig-cont">
            <div className="headerr">
                <h1>registration form</h1>
            </div>
            <div className="containers">
{/* <div className="img-cont">
    <img src={happy} alt="" />
</div> */}

            <div className="forn-com">
                <form action="#" className="fome-ccc">
{/* <fieldset>
    <legend>rwangingo registration form</legend> */}

    <input type="text" className="names" placeholder="enter your full names"/><br /><br />
    <input type="text" className="id-nmbr" placeholder="enter your identification number"/><br /><br />
    <input type="text" className="live" placeholder="where you live"/><br /><br />
    <input type="text" className="self" placeholder="enter your phone number"/><br /><br />
    <input type="text" className="email" placeholder="enter your email"/><br /><br />
    <div className="doc">   
    <label htmlFor="">land report</label> 
    <input type="file" className="password" placeholder="touch your land document"/><br />
    <label htmlFor="">application letter</label>
    <input type="file" className="password" placeholder="touch your letter document"/><br />
    <label htmlFor="">id photocopy</label> 
    <input type="file" className="password" placeholder="touch your photocopy id"/><br />
    <label htmlFor="">passport photo</label> 
    <input type="file" className="password" placeholder="touch your passport photo"/>
    </div>

    <input type="password" className="confirm" placeholder="enter your password"/><br /><br />
    <input type="password" className="confirm" placeholder="confirm your password"/><br /><br />
  
    <button type="submit" className="btin">send</button>
{/* </fieldset> */}
<h3>Alread have an account?<a href="/sign" className="HEY"><u>Login here</u></a></h3>
<h6>copyright &copy; rwangingo rice farmers 2023</h6>
 </form>
            </div>
               
        
            </div>
         
             
        </div>
        <Footer/>
        </>
    )
}
export default SignUp;