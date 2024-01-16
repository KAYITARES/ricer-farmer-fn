import React from "react";
const Card = (props) => {
    console.log(props);
    return (
        <div className="card-container">
            <img src={props.photo} alt="" />
            <h3>{props.name}</h3>
           
        </div>
    );
};
export default Card;
