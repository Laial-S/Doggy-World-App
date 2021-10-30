import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Dog from "../Dog";
import { Route } from "react-router";
import Dogs from "../Dogs";
import axios from "axios";

function Home() {
    const [breed, setBreed] = useState([]);
    const dogRequest = async () => {
        try {
            const dogs = await axios.get('http://localhost:3001/dogs')
            const data = dogs.data
            console.log(dogs.data)
            const dataMapeada = data.map((dog) => {
                const dogs = {
                    name: dog[0].name,
                    temperament: dog[0].temperament,
                    weight: dog[0].weight
                }
            })
            console.log(dataMapeada)
            //   setBreed(oldDogs => [...oldDogs, dogs])
        } catch(e) {console.log('SOY ESTE ERROR GIGANTE     ' + e)};
    }
    dogRequest();
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
            <Dogs />
            <div>
                <span>FILTER BY</span>
                <button>Temperament</button>
                <button>Breed</button>
                <span>ORDER BY</span>
                <button>A-Z</button>
                <button>Z-A</button>
                <button>Weight</button>
            </div>
            <div>
                PAGINADO TDV NO SE COMO HACERLO
            </div>
        </div>
    )
}

export default Home;