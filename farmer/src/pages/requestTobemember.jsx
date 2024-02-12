import axios from "axios";
import Navbar from "../component/header";
import React, { useState } from "react";

function ReqTobemember() {
  const [data, setdata] = useState({
    firstname: "",
    lastname: "",
    identification: "",
    phonenumber: "",
    district: "",
    sector: "",
    sell: "",
    village: "",
    email: "",
    password: "",
    confrimpassword: "",
    picture: "",
    landReport: "",
    idPhotocopy: "",
    letter: "",
  });

  const HandleInputLogin = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    const api = "http://localhost:3504/groupe/user";

    try {
      const response = await axios.post(
        api,
        {
          firstname: data.firstname,
          identification: data.identification,
          phonenumber: data.phonenumber,
          district: data.district,
          sector: data.sector,
          sell: data.sell,
          village: data.village,
          email: data.email,
          password: data.password,
          confrimpassword: data.confrimpassword,
          idPhotocopy: data.idPhotocopy,
          landReport: data.landReport,
          picture: data.picture,
          letter: data.letter,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer your_access_token', // Replace 'your_access_token' with the actual token
          },
        }
      );

      alert(response.data.message);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Unauthorized error handling
        alert('Unauthorized. Please check your credentials.');
      } else {
        alert('An error occurred. Please try again later.');
      }

      console.log(error);
    }
  };

    return(
        <>
        <Navbar/>
           <div className="request-container">
                <h1>Fill this form if you want to be member</h1>
                  
                  <form action="" onSubmit={submit}>

                    <div className="groupe">
                        <label htmlFor="firstname">Enter your first name</label>
                        <input type="text" name="firstname" onChange={HandleInputLogin} value={data.firstname}/>
                    </div>
                    <div className="groupe">
                        <label htmlFor="lastname">Enter your last name</label>
                        <input type="text" name="lastname" onChange={HandleInputLogin} value={data.lastname}/>
                    </div>
                    <div className="groupe">
                        <label htmlFor="identification">Enter your identification</label>
                        <input type="number" name="identification" onChange={HandleInputLogin} value={data.identification}/>
                    </div>
                    <div className="groupe">
                        <label htmlFor="phonenumber">Enter your phone number</label>
                        <input type="number"  name="phonenumber" onChange={HandleInputLogin} value={data.phonenumber}/>
                    </div>
                    <div className="groupe">
                        <label htmlFor="district">Enter your district yuo live</label>
                        <input type="text" name="district" onChange={HandleInputLogin} value={data.district}/>
                    </div>
                    <div className="groupe">
                        <label htmlFor="sector">Enter your sector you live</label>
                        <input type="text" name="sector" onChange={HandleInputLogin} value={data.sector}/>
                    </div>
                    <div className="groupe">
                        <label htmlFor="sell">Enter your sell you live</label>
                        <input type="text" name="sell" onChange={HandleInputLogin} value={data.sell}/>
                    </div>
                    <div className="groupe">
                        <label htmlFor="village">Enter your village you live</label>
                        <input type="text" name="village" onChange={HandleInputLogin} value={data.village}/>
                    </div>
                    <div className="groupe">
                        <label htmlFor="email">Enter your  email</label>
                        <input type="email" name="email" onChange={HandleInputLogin} value={data.email}/>
                    </div>
                    <div className="groupe">
                        <label htmlFor="password">Enter your password</label>
                        <input type="text" name="password" onChange={HandleInputLogin} value={data.password}/>
                    </div>
                    <div className="groupe">
                        <label htmlFor="confrimpassword">Confrim your password</label>
                        <input type="text" name="confrimpassword" onChange={HandleInputLogin} value={data.confrimpassword}/>
                    </div>
                    <div className="groupe">
                        <label htmlFor="picture">Enter your picture</label>
                        <input type="text" name="picture" onChange={HandleInputLogin} value={data.picture}/>
                    </div>
                    <div className="groupe">
                        <label htmlFor="landReport">Enter your land report</label>
                        <input type="text" name="landReport" onChange={HandleInputLogin} value={data.landReport}/>
                    </div>
                    <div className="groupe">
                        <label htmlFor="idPhotocopy">Enter your id card photo copy</label>
                        <input type="text" name="idPhotocopy" onChange={HandleInputLogin} value={data.idPhotocopy}/>
                    </div>
                    <div className="groupe">
                        <label htmlFor="letter">Write a letter for request to be member</label>
                        <textarea name="letter" cols="30" rows="5" onChange={HandleInputLogin} value={data.letter}></textarea>
                    </div>
                    <div className="button">
                        <button type="submit" name="ReqTobemember">Send request</button>
                    </div>
                    

                  </form>
           </div>
        
        </>
    )

}
export default ReqTobemember