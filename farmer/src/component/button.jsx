import React from 'react';
import Button from '@mui/material/Button';

function MyButton(){
  return (

    <Button variant="contained" color="primary" onClick={() => console.log('Button clicked')}>
      
    </Button>
  )
};

export default MyButton
