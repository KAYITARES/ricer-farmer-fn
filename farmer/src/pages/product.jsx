import React from "react"
import '../sass/main.scss'
import Navbar from "./header"
import kigoli from "../assets/image/kigoli.png"
import whatapp from "../assets/image/whatapp.png"


function Products(){

    return (
        <>
        <Navbar/>
        <div className="pro-contanner">
           <div className="product">
           <div className="image">
                <img src={kigoli} alt="" />
            </div>
            <div className="dicrition">
                <h1>Kigoli Rice</h1>
                <p>by <span>rwangingo.com</span></p>
                <p>25,000 RWF</p>
                <p>Kigoli Rice /25kg</p>
                <p>Umuceri mwiza uryoshye kandi utubuka</p>
            </div>
            <div className="shopping">
                <select name="price" id="igiciro">
                    <option value="">1kg-1,000Rwf</option>
                    <option value="">5kg-5,000Rwf</option>
                    <option value="">10kg-10,000Rwf</option>
                    <option value="">25kg-25,000Rwf</option>
                </select>
                
                <div className="cart">
                <button>Add to cart</button>
                </div>
                <div className="buy">
                <button>Buy it now</button>
                </div>
                <div className="conact">
                <button>Need help? Chat with us</button>
                <img src={whatapp} alt="" />
            </div>
            </div>
           </div>
           
        </div>
        </>
    )
}
export default Products