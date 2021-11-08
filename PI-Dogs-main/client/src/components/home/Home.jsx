import React, { useState, useEffect } from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Searchbar from "../searchBar/SearchBar";
import Dog from "../Dog";
import PostDog from "../dogCreation/PostDog";
import Paginado from "../paginado/Paginado";
import Filtros from "../filtrado/Filtros";


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
    
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getDogs())
        setCurrentPage(1)
    }
    return (
        <div>
            <h1>WELCOME TO DOGGY WORLD!♥</h1>
            <Link to='/createDog'>
                <button>
                    CREATE YOUR DOG
                </button>
                
            </Link>
            
            <button onClick={e => {handleClick(e)}}>
                RELOAD DOGGOS
            </button>

            <Route path='/home'>
                <Searchbar/>
                <Filtros setOrden={setOrden}/>      
                <Paginado
                dogsPerPage={dogsPerPage}
                dogs={dogs?.length}
                paginado={paginado}
                />
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
            </Route>
        </div>
    )
}

export default Home;