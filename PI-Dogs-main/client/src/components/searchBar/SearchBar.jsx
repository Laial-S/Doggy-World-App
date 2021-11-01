import React from "react";
import { useState } from "react";

export default function Searchbar() {
    const [breed, setBreed] = useState('');
    return (
        <div>
           <input
            type='text'
            placeholder='Write breed'
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
           />
           <input
            type='submit'
            value='Search'
           />
        </div> 
    );  
}