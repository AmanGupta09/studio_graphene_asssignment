import React, { useEffect, useState } from "react";
import "./Card.css";
import cloth from "../../assets/images/cloth.png";

const Card=({title,description,price,image})=>{
  return(
    <div style={{marginTop:"48px",marginBottom:"16px"}}>
     <div >
     <img className="cardimg" src={image} alt="truck" />
     </div>

     <div className="cardtext">
        <div className="text1" >
          {title}
        </div>

        <div className="text2" >
        {description}
        </div>
        <div className="text3">
           {`${price} $`}
        </div>
     </div>
    </div>
  )
}

export default Card