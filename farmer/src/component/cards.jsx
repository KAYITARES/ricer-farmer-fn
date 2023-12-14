import React from "react";
import Button from '@mui/material/Button';

const handleClick = () => {
  console.log('Button clicked!');

};
function Card(props){
  return (
    <div className="card">
        <img src={props.photo} alt="ifoto" />
       <div className="more">
       <h4>{props.title}</h4>
        <p>{props.more}</p>
       </div>
        <div className='btn-cnt'>
        <Button variant="contained" color="primary" onClick={handleClick}>
      Read more
    </Button>
        </div>
    </div>
  )
}

export default Card


