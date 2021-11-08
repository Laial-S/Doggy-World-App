import React, { useEffect, useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import { searchBreed } from "../../actions/actions";

 function Searchbar() {
    // const [breed, setBreed] = useState([]);
    const [input, setInput] = useState('')
    const allBreeds = useSelector((state) => state.dogs)
    console.log(allBreeds)
    const dispatch = useDispatch();

    function onInputChange(e) {
        e.preventDefault();
        setInput(e.target.value)
        dispatch(searchBreed(input))
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
            // onSubmit={handleSubmit}
           />
        </div> 
    );  
}

export default Searchbar;