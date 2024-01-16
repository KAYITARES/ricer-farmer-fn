import React, { useState } from 'react';


const Button = () => {
    
    const [buttonText, setButtonText] = useState('View more');
  
    
    const handleClick = () => {
      setButtonText('View more');
      
    };
  
    return (
      <button style={{width:'200px',height:'80px', }}onClick={handleClick}>
        {buttonText}
      </button>
    );
  };
  

export default Button