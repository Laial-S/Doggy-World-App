import React from "react";
import Dog from "./Dog";


export default function Dogs({dogs}) {
    return (
        <div className= 'dogs'>
            {dogs?.map(d => <Dog
                id={d.id}
                image={d.image}
                name={d.name}
                temperament={d.temperament}
                weight={d.weight}
            />)}
        </div>
    )
}