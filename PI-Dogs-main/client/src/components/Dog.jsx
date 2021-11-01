import React from "react";
import { Link } from "react-router-dom";
import './Dog.css'

export default function Dog({dogs}) {
    console.log(dogs)
    return (
        <div className='cardBody'> 
      <Link to= {'/home'}>  
        <div>
            <h3>{dogs.name}</h3>            
        </div> 
        <div className='contenedor'>
            <img src={dogs.image} alt='no encontro imagen'/>
            <div>
                <span>Temperament: {dogs.temperament}</span>
            </div>
            <div>
                <span>Weight MAX: {dogs.weight_max}</span>
                <span>Weight MIN: {dogs.weight_min}</span>
            </div>
        </div>   
       </Link> 
       </div>
    );
};