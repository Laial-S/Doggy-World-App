
import { NavLink } from "react-router-dom";
import React from "react";
import './Dog.css'

export default function Dog({name, temperaments, weight_max, weight_min, image, id}) {
    return (
     <div className='contenedor'>
        <NavLink className='link' to= {`/dog/${id}`}>
            {/* <div> */} 
                <h3 className='title'>{name}</h3>            
                 
               
                <img className='imgPerro' src={image} alt='no encontro imagen'/>

                <div>
                    <span>Temperament: {temperaments}</span>
                </div>
                
                <div>
                    <span>Weight MAX: {weight_max}</span>
                    <span>Weight MIN: {weight_min}</span>
                </div>
            {/* </div>    */}
         </NavLink>
     </div>
    );
};