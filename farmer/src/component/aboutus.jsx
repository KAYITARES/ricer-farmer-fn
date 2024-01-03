
import React from 'react';
import Card from '../component/card'


const AboutUs = () => {
  return (
    <div className='about-comtainer'>
      <div className="about">

      <div className="heading">
      <h2>Our cooperative</h2>
      </div>
      </div>
  
  <div className="aboutuse">
      <div className="part2">
      <div className="links">
        <h4>ABOUT US</h4>
        <ul>
            <li><a href="#">our Mission</a></li>
            <li><a href="#">aur organisation</a></li>
            <li><a href="#">Board of direction</a></li>
            <li><a href="#">Exctive Team</a></li>
            <li><a href="#">Recognitor</a></li>
            <li><a href="#">careers</a></li>
        </ul>
    
    </div>
      </div>
      <div className="pragrap">
        <p>CDAIS came just at the right time”, explains Damien Maniriho, manager of 
          the local Rural Service Support Programmer“We had just finished rehabilitation 
          of the Rwangingo marshlands</p>
          <div className="card-cont">
        
          <Card/>
          <Card/>
          <Card/>
          </div>

      </div>
      </div>
    </div>
  );
};

export default AboutUs;
