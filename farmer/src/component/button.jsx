import React from 'react';

const Button = () => {
  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
    cursor: 'pointer',
    
  };

  const handleClick = () => {

  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      View more
    </button>
  );
}

export default Button;