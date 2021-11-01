import axios from "axios";
import Dog from "./Dog";
import React, { useEffect, useState } from "react";
import './Dogs.css'


export default function Dogs() {
    
    // const dogRequest = async () => {
    //     try {
    //         const perros = await axios.get('http://localhost:3001/dogs')
    //         const dataDogs = perros.data
    //         console.log(dataDogs)
    //     } catch(e) {console.log('SOY ESTE ERROR GIGANTE ' + e)};
    // }
    // dogRequest();
    
    // // console.log(dogs)
    const [dogs, setDogs] = useState([])

    useEffect(async () => {
        axios.get('http://localhost:3001/dogs')
        .then(dogs => {
            setDogs(dogs.data)
        })
        console.log(dogs)
         
    }, [])

    return (
        <div className= 'dogs'>
            {
                dogs?.map((d) => 
                    <Dog dogs={{...d}}/>
                        // <div>
                        //     <h1>
                        //         {d.name}
                        //     </h1>
                        //     <h2>
                        //         {d.temperament}
                        //     </h2>
                        //     <p>
                        //         {d.weight}
                        //     </p>
                        //     <img src={d.image} alt='img no encontrada'/>
                        // </div>
                )
            }
            
        </div>
    )
}