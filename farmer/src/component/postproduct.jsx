import axios from 'axios';
import React, { useState } from 'react';

function PostProduct(){
     
    const [produData, setProdata]=useState({
        productname:"",
        quolity:"",
        price:"",
        proDate:"",
        expDate:"",
        descliption:"",
        quantityAvailable:"",
        images:""
    })
    const [error, setError] = useState(null);

    const HandleInputpost = (e) => {
        setProdata({
          ...produData,
          [e.target.name]: e.target.value,
        });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        if (!token) {
          // Handle the case where the token is not found in localStorage
          setError('Token not found in localStorage');
          alert(error)
          return;
        }
            
       const api="http://localhost:3504/groupe/product/post"

       try {
        const response = await axios.post(api, {
          productname: produData.productname,
          quolity: produData.quolity,
          price: produData.price,
          proDate: produData.proDate,
          expDate: produData.expDate,
          descliption: produData.descliption,
          quantityAvailable: produData.quantityAvailable,
          images: produData.images
        }, {
          headers: {
            "auth-token":token,
            'Content-Type': 'application/json'
          }
        });
  
        
        alert(response.data.message);
      } catch (error) {
        console.error('Error posting product:', error);
        // Handle error appropriately
        alert('Error posting product. Please try again.');
      }
    }



    return(
        <>
        
        <form onSubmit={handleSubmit} className='hiden'>
               <h3>Post product available to supply</h3>
                 <label htmlFor="productname">
                  <input type="productname" onChange={HandleInputpost} value={produData.productname} name='productname' placeholder='Enter product name'/>
                 </label>
                 <label htmlFor="quolity">
                  <input type="text" onChange={HandleInputpost} value={produData.quolity} name='quolity' placeholder='Enter quolity of product'/>
                 </label>
                 <label htmlFor="price">
                  <input type="number" onChange={HandleInputpost} value={produData.price} name='price' placeholder='Enter price of product'/>
                 </label>
                 <label htmlFor="proDate">
                  <input type="text" onChange={HandleInputpost} value={produData.proDate} name='proDate' placeholder='Enter production date'/>
                 </label>
                 <label htmlFor="expDate">
                  <input type="text" onChange={HandleInputpost} value={produData.expDate} name='expDate' placeholder='Enter expires date'/>
                 </label>
                 <label htmlFor="descliption">
                  <input type="text" onChange={HandleInputpost} value={produData.descliption} name='descliption' placeholder='Enter description'/>
                 </label>
                 <label htmlFor="quantityAvailable">
                  <input type="number" onChange={HandleInputpost} value={produData.quantityAvailable} name='quantityAvailable'placeholder='Enter quontinies of product available'/>
                 </label>
                 <label htmlFor="images">
                  <input type="text" onChange={HandleInputpost} value={produData.images} name='images' placeholder='Enter image of product'/>
                 </label>
                  <div className="buton">
                  <button type='submit' name='PostProduct'>Post product</button>
                  </div>
               </form>
            
        </>
    )
}
export default PostProduct