import { useState,useEffect } from "react";
import axios from "axios";
// import product from "../assets/costant/production.json";




function Cards() {

  const [product,setProduct]=useState(null)

    useEffect(()=>{

      const fetchData = async ()=>{
        try {

          const response = await axios.get("http://localhost:3504/groupe/product/get")
            setProduct(response.data)
          
        } catch (error) {
          console.log(error)
        }  
     }
     fetchData([])
    },[])
  return (
    <>
      {product ? (product.reverse().map((rice) => (
        <div className="card-container" key={rice.id}>
        
          <div className='card-fex'>
            <div className="image">
              <img src={rice.images[0]} alt="" />
            </div>
            <div className="card-text">
              <h1>{rice.productname}</h1>
              <p>Price: <span>{rice.price}</span>Rwf/kg</p>
              <span>{rice.descliption}</span>
              <div className="buto">
                <button onClick={() => window.location.href=`/Singleproduct?id=${rice._id}`}>Buy now</button>
              </div>
            </div>
          </div>
          
        </div>
        ))):(
          <div className="spinner"></div>
        )}
      
    </>
  );
}

export default Cards;
