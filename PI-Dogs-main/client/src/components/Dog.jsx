import React from "react";
import { Link } from "react-router-dom";

export default function Dog({id, image, name, temperament, weight}) {
    return (
        <div> 
      <Link to= {`/dog/${id}`}>  
        <div className='cardDog'>
            <h3 className='name'>{name}</h3>            
        </div> 
        <div className='cardBody'>
            <div className='img'>{image}</div>
            <div className='info'>
                <span>Temperament: {temperament}</span>
            </div>
            <div className='info'>
                <span>Weight: {weight}</span>
            </div>
        </div>   
       </Link> 
       </div>
    );
};