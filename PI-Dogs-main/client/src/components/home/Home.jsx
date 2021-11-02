
import { Route } from "react-router";

import Searchbar from "../searchBar/SearchBar";
import Dogs from "../Dogs";

import Filtros from "../filtrado/Filtros";

function Home() {
    
    return (
        <div>
            <Route path='/home'>
                <Searchbar/>
            
                <Dogs/>
                <Filtros/>      
                PAGINADO TDV NO SE COMO HACERLO
            </Route>
        </div>
    )
}

export default Home;