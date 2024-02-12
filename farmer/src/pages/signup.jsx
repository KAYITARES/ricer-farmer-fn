import React, {useState} from "react";
import Navbar from "../component/header";
import Footer from "../component/footer";
import axios from "axios";



function SignUp(){

    const [data,setdata]=useState({
        names:"",email:"",phone:"",district:"",sector:"",sell:"",village:"",password:"",confrimpassword:""
    })
     
    const HandleInputLogin = (e) => {
        setdata({
          ...data,
          [e.target.name]: e.target.value,
        });
    };
    
    
     const submit = async (e) =>{
          e.preventDefault()

          const api="http://localhost:3504/groupe/users"

          try {
            const response = await axios.post(api,{
                names:data.names,email:data.email,phone:data.phone,district:data.district,sector:data.sector,
                sell:data.sell,village:data.village,password:data.password,confrimpassword:data.confrimpassword
            }, {
                headers:{
                    'Content-Type': 'application/json'
                }
            }
            )
            alert(response.data.message)
            
          } catch (error) {
            alert(error)
          }
          
    }


    return(
        <>
        <Navbar/>
        <div className="sig-cont">
            <div className="headerr">
                <h1>Sign-up</h1>
            </div>
            <div className="containers">
                <div className="forn-com">
                    <form action="" onSubmit={submit} className="fome-ccc">
                    <label htmlFor="names">
                        <input type="text" name="names" onChange={HandleInputLogin} value={data.names} placeholder="please type your names"/>
                    </label>

                    <label htmlFor="email">
                        <input type="text" name="email" onChange={HandleInputLogin} value={data.email} placeholder="please type your email"/>
                    </label>

                    <label htmlFor="phone">
                        <input type="number" name="phone" onChange={HandleInputLogin} value={data.phone} placeholder="please type your phone number"/>
                    </label>

                    <label htmlFor="district">
                        <input type="text" name="district" onChange={HandleInputLogin} value={data.district} placeholder="please type your district you live"/>
                    </label>

                    <label htmlFor="sector">
                        <input type="text" name="sector" onChange={HandleInputLogin} value={data.sector} placeholder="please type your sector you live"/>
                    </label>

                    <label htmlFor="sell">
                        <input type="text" name="sell" onChange={HandleInputLogin} value={data.sell} placeholder="please type your sell you live"/>
                    </label>

                    <label htmlFor="village">
                        <input type="text" name="village" onChange={HandleInputLogin} value={data.village} placeholder="please type your village you live"/>
                    </label>

                    <label htmlFor="password">
                        <input type="text" name="password" onChange={HandleInputLogin} value={data.password} placeholder="please type your password"/>
                    </label>

                    <label htmlFor="confrimpassword">
                        <input type="text" name="confrimpassword" onChange={HandleInputLogin} value={data.confrimpassword} placeholder="please type your confrim password"/>
                    </label>
                    <div className="button">
                        <button type="submit" name="SignUp">Sign-Up</button>
                    </div>
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