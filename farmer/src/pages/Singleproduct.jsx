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
import  { useState ,useEffect} from 'react';
import { Button, Modal } from 'antd';

function Single(){


    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const socket = new WebSocket('ws://localhost:3001');
  
    useEffect(() => {
      socket.onmessage = (event) => {
        setMessages((prevMessages) => [...prevMessages, event.data]);
      };
    },[]);
  
    const sendMessage = () => {
      socket.send(input);
      setInput('');
    };





    
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [isopen, setisopen] =useState(false)
        const [show, close]=useState(false)
        const [plus,setplus]=useState(1)
        let price=plus*1200
        if(plus>=25){
            price=plus*1100
        }else if(plus>=50){
                   price=plus*1000
        }

        const increament=()=>{
            setplus (plus+1)
        }
        const decreament=()=>{
            setplus(plus-1)
            
        }
      
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
        const closeopen=()=>{
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
            <div className="app">
                <h1>Chat to us</h1>
                <p>If you want help chat to us using to writting your question and send it</p>
                <div className="message-container">
            {messages.map((message, index) => (
              <div key={index}>{message}</div>
            ))}
          </div>
          <div className="input-container">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
            <button onClick={closeopen}>cancel</button>
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
                <div className="favolite">
                    <li><LikeOutlined /><p>23</p></li>
                    <li><DislikeOutlined /><p>2</p></li>
                    <li><CommentOutlined onClick={showcomment}/><p>40</p></li>
                </div>
            </div>
            <div className="dicrition">
                <h1>Kigoli:Best rice</h1>
                <p>by <span>rwangingo.com</span></p>
                <p>Price: <span>{price}</span>Rwf</p>
                <p>Kigoli Rice /kg</p>
                <p>Umuceri mwiza uryoshye kandi utubuka</p>
            </div>
            <div className="shopping">
                <div className="values">
                   <p>Weigth:<span>{plus}</span>Kg</p>
                </div>
                <div className="optionss">
                    <button onClick={decreament}>-</button>
                    <button onClick={increament}>+</button>
                </div>
                
                <div className="cart">
                <button>Add to cart</button>
                </div>
                <div className="buy">
                <Button type="primary" onClick={showModal} className="informat">Buy now</Button>
                </div>
               
            </div>
            
           </div>
           <div className="conact">
                
                <div className="watapp">
                    <button onClick={handopen}> <MessageOutlined onClick={handopen}/>Chat</button>
                </div>
                
            </div>
           
        </div>
        <div className="nav">
            <li><HomeOutlined /><a href="product">Home</a></li>
            <li><BarsOutlined /><a href="/oder">My carts</a></li>
            <li onClick={showModal}><SafetyCertificateOutlined onClick={showModal}/> Shop</li>
            <li><BarsOutlined /><a href="/oder">My orders</a></li>
        </div>
        </>
    )
}
export default Single