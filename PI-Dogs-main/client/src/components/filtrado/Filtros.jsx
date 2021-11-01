import React from "react";

export default function Filtros() {
    return (
        <div>
            <div> 
                <span>FILTER BY</span>
                
                <button>Temperament</button>
                
                <button>Breed</button>
            </div>
                
            <div>
                <span>ORDER BY</span>
                <button>A-Z</button>
                <button>Z-A</button>
                <button>Weight</button> 
            </div>    
               
        </div>
    )
}