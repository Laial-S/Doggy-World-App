import React, { useState, useEffect } from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../navBar/NavBar";
import Dog from "../Dog";
import Paginado from "../paginado/Paginado";
import Filtros from "../filtrado/Filtros";
import '../home/Home.css'


import { getDogs} from "../../actions/actions";


function Home() {
    const dispatch = useDispatch();

    const dogs = useSelector((state) => state.dogs)
    // console.log(dogs)
    
    const [currentPage, setCurrentPage] = useState(1);
    const [dogsPerPage, setDogsPerPage] = useState(8);
    
    const [orden, setOrden ] = useState('');

    const indexLastDog = currentPage * dogsPerPage; // 8
    const indexFirstDog = indexLastDog - dogsPerPage; //0  
    
    const currentDogs = dogs?.slice(indexFirstDog, indexLastDog)//dogs en la pag actual

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getDogs())
    },  [])
    
   
    return (
        <div className='fondo'>
                <div className='fondoNav'>
                    <NavBar setCurrentPage={setCurrentPage}/>
                </div>
                <div className='filtros'>
                    <Filtros setOrden={setOrden}/>      
                </div>
                <div className='paginadoHome'>
                    <Paginado
                    dogsPerPage={dogsPerPage}
                    dogs={dogs?.length}
                    paginado={paginado}
                    />  
                </div>
                <div className='cardDog'>
                   {
                    currentDogs?.map((d) => {
                        return (
                            
                               <Dog
                                    name={d.name}
                                    temperaments={d.temperaments?.map((t) => t.name).join(', ')}
                                    weight_max={d.weight_max}
                                    weight_min={d.weight_min}
                                    image={d.image}
                                    key = {d.id}
                                    id = {d.id}
                                /> 
                            
                        )
                    })
                }  
                </div>
        </div>
    )
}
                
                    
            

export default Home;