
import axios from 'axios';
import React, { useState } from 'react';


 
 function Anouncement(){

   const [data,setdata]= useState({
      title:"",
      announcement:""
   })
    
   const HandleInputpost = (e) => {
      setdata({
        ...data,
        [e.target.name]: e.target.value,
      });
    };
   
    const [error, setError] = useState(null);

      const submit= async (e) =>{
            e.preventDefault()

            const token = localStorage.getItem('token');
        if (!token) {
          // Handle the case where the token is not found in localStorage
          setError('Token not found in localStorage');
          alert(error)
          return;
        }
             
            const api="http://localhost:3504/groupe/announcement"

            try {
              const response = await axios.post(api,{
               title:data.title,
               announcement:data.announcement
            },  {
               headers: {
                 "auth-token":token,
                 'Content-Type': 'application/json'
               }
             });
              alert(response.data.message)
            } catch (error) {
            }
      }

    return (
        <form action="" onSubmit={submit}>
          <h1>post anouncement to member</h1>
            <label htmlFor="title">
                <input type="text" name='title' onChange={HandleInputpost} value={data.title} placeholder='type information title'/>
            </label>

             <label htmlFor="announcement">
                <textarea name="announcement" onChange={HandleInputpost} value={data.announcement} cols="30" rows="5" placeholder='type information'></textarea>
             </label>

             <div className="button">
                <button type='submit' name='Anouncement'>Post</button>
             </div>
        </form>
    )

 }
 export default Anouncement