import React from "react";

export default function Filtros() {
    return (
        <div>
            <div> 
                <span>FILTER BY </span>
                <select>
                    <option value="temperament">TEMPERAMENT</option>
                    <option value="breed">BREED</option>
                </select>
                <select>
                    <option value="all">ALL</option>
                    <option value="created">CREATED</option>
                    <option value="api">EXISTENT</option>
                </select>
            </div>
                
            <div>
                <span>ORDER BY </span>
                <select>
                    <option value="az">A - Z</option>
                    <option value="za">Z - A</option>
                    <option value="weight">Weight</option>
                </select>
            </div>    
               
        </div>
    )
}