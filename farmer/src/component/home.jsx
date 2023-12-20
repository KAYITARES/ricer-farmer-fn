import React, { useState, useEffect } from 'react';
import '../sass/component/home.scss';
import im1 from '../assets/Bg-color.jpg';
import im2 from '../assets/1290x0.webp';
import im3 from '../assets/Scope-and-Importance-of-Rice..jpg';
import Button from './button';



const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [im1,im2,im3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="sliding-background" style={{ backgroundImage: `url(${images[currentImage]})` }}>
      <div className="home-container">
        <div className="heading">
          <h1 style={{ color: 'white' }}>COOPERATIVE OF RWANGINGO RICE FARMERS</h1>
        <Button/>
                </div>
      </div>
    </div>
  );
};

export default Home;
