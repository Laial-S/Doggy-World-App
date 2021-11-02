import axios from "axios";
import React from "react";
import { useState } from "react";

 function Searchbar({onSearch}) {
    const [breed, setBreed] = useState([]);
    const [input, setInput] = useState('')

    async function onSearch(breed) {
        await axios.get(`http://localhost:3001/dogs?name=${breed}`)
        .then(breed => {
            setBreed(breed.data)
        })
        console.log(breed.data)
    }

    function onInputChange(e) {
        setInput(e.target.value)
        console.log(e.target.value)
        // e.preventDefault();
    }

    return (
        <div>
           <input
            type='text'
            placeholder='Write breed'
            value={input}
            onChange={onInputChange}
           />
           <input
            type='submit'
            value='Search'
           />
        </div> 
    );  
}

export default Searchbar;