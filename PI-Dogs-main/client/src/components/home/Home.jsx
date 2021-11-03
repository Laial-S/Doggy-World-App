import { Route } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

import Searchbar from "../searchBar/SearchBar";
import Dogs from "../Dogs";
import Paginado from "../paginado/Paginado";
import Filtros from "../filtrado/Filtros";
import { getDogs } from "../../actions/actions";

function Home() {
    const allDogs = useSelector((state) => state.dogs)
        
        const [currentPage, setCurrentPage] = useState(1);
        const [dogsPerPage, setDogsPerPage] = useState(8);
        
        const indexLastDog = currentPage * dogsPerPage; // 8
        const indexFirstDog = indexLastDog - dogsPerPage; //0  
        
        const currentDogs = allDogs.slice(indexFirstDog, indexLastDog)//dogs en la pag actual

        const paginado = (pageNumber) => {
            setCurrentPage(pageNumber)
        }

    const handleClick = (e) => {
        e.preventDeafult();
        dispatchEvent(getDogs())
    }
    
    return (
        <div>
            <Route path='/dog'>
                <Link to= '/dog'>
                    <button>
                        crear personaje
                    </button>
                </Link>
            </Route>
            <h1>WELCOME TO DOGGY WORLD!♥</h1>
            <button onClick={e => {handleClick(e)}}>
                Recargar doggos
            </button>

            <Route path='/home'>
                <Searchbar/>
                <Filtros/>      
                <Paginado
                dogsPerPage={dogsPerPage}
                allDogs={allDogs.length}
                paginado={paginado}
                />
               <Dogs currentDogs={currentDogs}/>
            </Route>
        </div>
    )
}

export default Home;