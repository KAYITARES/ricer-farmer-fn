import React from "react"
import '../sass/main.scss'
import Navbar from "./header"
import kigoli from "../assets/image/kigoli.png"
import whatapp from "../assets/image/whatapp.png"
import { HomeOutlined } from '@ant-design/icons';
import { SafetyCertificateOutlined } from '@ant-design/icons';
import { BarsOutlined } from '@ant-design/icons';

function Single(){

    return (
        <>
        <Navbar/>
        <div className="pro-contanner">
           <div className="product">
           <div className="image">
                <img src={kigoli} alt="" />
            </div>
            <div className="dicrition">
                <h1>Kigoli:Best rice</h1>
                <p>by <span>rwangingo.com</span></p>
                <p>Price: <span>25,000 RWF</span></p>
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
               
            </div>
            
           </div>
           <div className="conact">
                <button>Need help? Chat with us</button>
                <img src={whatapp} alt="" />
            </div>
           
        </div>
        <div className="nav">
            <li><HomeOutlined /><a href="product">Home</a></li>
            <li><BarsOutlined /><a href="#">My carts</a></li>
            <li><SafetyCertificateOutlined /><a href="#">Shop</a></li>
            <li><BarsOutlined /><a href="#">My orders</a></li>
        </div>
        </>
    )
}
export default Single