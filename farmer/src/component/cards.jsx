import React from 'react';
// import kigoli from "../assets/image/kigoli.png"

import productions from "../assets/costant/production.json"
// console.log(productions)



const Cards=()=>{

    return (
        <>
         {productions.reverse().map((Rice)=>(
          <div className="card-container">
           
              <div className='card-fex'>
                <div className="image">
                  <img src={Rice.images[0]} alt="" />
                </div>
                
                <div className="card-text">
                <h1>{Rice.productname}</h1>
                <p>Price: <span>{Rice.price}</span>Rwf/kg</p>
                <span>{Rice.descliption}</span>
                   <div className="buto">
                    <button><a href="/Singleproduct">Buy now</a></button>
                   </div>
                 </div>
              </div>
   
          </div>

          ))}
        </>
    )

}
export default Cards