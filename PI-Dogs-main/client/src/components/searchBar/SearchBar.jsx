
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch} from "react-redux";
// import { searchBreed } from "../../actions/actions";

 function Searchbar() {
    // const [breed, setBreed] = useState([]);
    const [input, setInput] = useState('')

    const dispatch = useDispatch();
    useEffect(() => {
        // dispatch(searchBreed())
    }, [dispatch])
            
    const allBreeds = useSelector((state) => state.breed)
        useEffect(() => {
            // dispatch(searchBreed())
        }, [dispatch])

    function onInputChange(e) {
        e.preventDefault();
        setInput(e.target.value)
        handleSubmit(e.target.value)
    }

    function handleSubmit(name) {
        let resultadoBusqueda = allBreeds.filter((dogs) => {
            if(dogs.name.toLowerCase().includes(name.toLowerCase())) {
                return dogs 
            }
        })
        // allBreeds(resultadoBusqueda)
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
            onSubmit={allBreeds }
           />
        </div> 
    );  
}

export default Searchbar;