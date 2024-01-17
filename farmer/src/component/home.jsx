import React from "react";  
import bgimage from '../assets/Bg-color.jpg'
 

const Home = () => {
    return(
        <>
        <div style={{
        background: `url(${bgimage})center /cover no-repeat`,
        height:'100vh',
       }}>
        <div className="home-container">
        <div className="heading">
            <h1>COOPERATIVE OF RWANGINGO RICE FARMERS</h1>
        </div>
        <div className="pragr">
            <p>Hello; We are a rice cooperative farmer, visit our website to learn more about what we do and what we can do for you. Thank you</p>

        </div>
        <div className="btn">
            <button>view more</button>
        </div>
    </div>
    </div>
        </>

);
};


export default Home
