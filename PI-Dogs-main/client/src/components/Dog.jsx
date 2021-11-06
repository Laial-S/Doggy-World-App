
import { Link } from "react-router-dom";
import React from "react";
import './Dog.css'

export default function Dog({name, temperament, weight_max, weight_min, image}) {
    
    // console.log(dogs)
    return (
        <div className='cardBody'> 
      <Link to= {'/home'}>  
        <div className='contenedor'>
            <h3>{name}</h3>            
        </div> 
        <div className='DOGS'>
            <img className='perritos' src={image} alt='no encontro imagen'/>
            <div>
                <span>Temperament: {temperament}</span>
            </div>
            <div>
                <span>Weight MAX: {weight_max}</span>
                <span>Weight MIN: {weight_min}</span>
            </div>
        </div>   
       </Link> 
       </div>
    );
};