import React from "react";
import '../paginado/Paginado.css'


export default function Paginado({dogsPerPage, dogs, paginado}) {
        const pageNumbers = [];
        
        for(let i = 1; i <= Math.ceil(dogs/dogsPerPage); i++) {
            pageNumbers.push(i)
        }

    return (
       <nav className='PORDIOSAYUDA'>
           <ul className='paginado'>
               {pageNumbers&&pageNumbers.map((number) => (
                   <li className='number' key={number}>
                       <a className='pageLink' onClick={() => paginado(number)}>{number}</a>
                   </li>
               ))}
           </ul>
       </nav> 
    )
}

