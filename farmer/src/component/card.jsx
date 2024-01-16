import React from "react";
<<<<<<< HEAD

const Card=(props)=>{
   
return(
        <>
        <div className="card">

            <p>{props.name}</p>

        </div>
        </>
    )
}

export default Card
=======
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
>>>>>>> 26833a0 (add)
