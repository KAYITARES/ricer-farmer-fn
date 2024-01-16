import React from "react"
import '../sass/main.scss'
import Navbar from "./header"
import kigoli from "../assets/image/kigoli.png"
import { HomeOutlined } from '@ant-design/icons';
import { SafetyCertificateOutlined } from '@ant-design/icons';
import { BarsOutlined } from '@ant-design/icons';
import { DislikeOutlined } from '@ant-design/icons';
import { CommentOutlined } from '@ant-design/icons';
import { LikeOutlined } from '@ant-design/icons';
import { MessageOutlined } from '@ant-design/icons';
import { SendOutlined } from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';
import  { useState } from 'react';
import { Button, Modal } from 'antd';

function Single(){

    
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [isopen, setisopen] =useState(false)
        const [show, close]=useState(false)
      
        const showModal = () => {
          setIsModalOpen(true);
        };
      
        const handleOk = () => {
          setIsModalOpen(true);
        
        };
      
        const handleCancel = () => {
          setIsModalOpen(false);
        };

        const handopen=()=>{
            setisopen(true)
        }
        const sendopem=()=>{
            setisopen(false)
        }

        const showcomment=()=>{
            close(true)
        }

        const closecomment=()=>{
            close(false)
        }

    return (
        <>
        <Navbar/>
        
        {show &&(
            <div className="comment">
            <div className="bach">
            <CloseOutlined onClick={closecomment}/>
            </div>
            <div className="onecomment">
                <h1>Names of commenter</h1>
                <p>Ndabamenyesha ko mugomba kurya muvuga ibikwiye nukuri iyi product ninziza</p>
                <div className="likee">
                    <li>Likes:<span>21</span></li>
                    <li>Dislikes:<span>2</span></li>
                </div>
            </div>
            <div className="sentcomment">
                <textarea name="" id="" cols="" rows="2" placeholder="type here!"></textarea>
                <SendOutlined className="icon"/>
            </div>
        </div>
        )}

        {isopen && (
            <div className="contact-card">
            
                 <h1>Chat with us</h1>
                  <p> Hi, message us with any questions. We're happy to help!</p>
                  <textarea name="" id="" cols="" rows="5" placeholder="Message"></textarea>

                  <div className="but">
                        <button onClick={sendopem}>Cancel</button>
                        <button type="submit">Send</button>
                   </div>
        
            </div>
        )}

        <Modal title="Fill your information address " open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
               <form action="">
                   <input type="text" name="names" id="names" placeholder="Your names"/>
                   <input type="text" name="email" id="email" placeholder="email"/>
                   <input type="Number" name="phone" id="phone" placeholder="phone"/>
                   <input type="text" name="location" id="location" placeholder="location address"/>
               </form>
         </Modal>


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
                <Button type="primary" onClick={showModal} className="informat">Buy now</Button>
                </div>
               
            </div>
            
           </div>
           <div className="conact">
                <div className="favolite">
                    <li><LikeOutlined /><p>23</p></li>
                    <li><DislikeOutlined /><p>2</p></li>
                    <li><CommentOutlined onClick={showcomment}/><p>40</p></li>
                </div>
                <div className="watapp">
                    <button onClick={handopen}> <MessageOutlined />Chat</button>
                </div>
                
            </div>
           
        </div>
        <div className="nav">
            <li><HomeOutlined /><a href="product">Home</a></li>
            <li><BarsOutlined /><a href="#">My carts</a></li>
            <li><SafetyCertificateOutlined onClick={showModal}/><a href="#" onClick={showModal}>Shop</a></li>
            <li><BarsOutlined /><a href="#">My orders</a></li>
        </div>
        </>
    )
}
export default Single