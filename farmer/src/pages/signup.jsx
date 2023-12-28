import React from "react";
import Footer from "../component/footer";
function SignUp(){
    return(
        <>
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
    <input type="text" className="self" placeholder="do you find your self"/><br /><br />
    <input type="text" className="email" placeholder="enter your email"/><br /><br />
    <input type="password" className="password" placeholder="enter your password"/><br /><br />
    <input type="password" className="confirm" placeholder="confirm your password"/><br /><br />
    <button type="submit" className="btin">submit</button>
{/* </fieldset> */}
<h3>Alread have an account?<a href="#" className="HEY"><u>Login here</u></a></h3>
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