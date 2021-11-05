import React, { useEffect } from "react";
import { filterByTemperament, filterCreatedOrApi, getTemperaments} from "../../actions/actions";

import { useSelector, useDispatch } from "react-redux";

export default function Filtros() {
    const dispatch = useDispatch()

    const allTemp = useSelector((state) => state.temperament)
    // console.log(allTemp)
    
    const handleFilterTemperament = (e) => {
        e.preventDefault();
        dispatch(filterByTemperament(e.target.value))
    }

    useEffect(() => {
        dispatch(getTemperaments())
    },  [dispatch])    

    return (
        <div>
            <div> 
                <span>FILTER BY </span>
                <select onChange={handleFilterTemperament}>
                    <option value="All">ALL TEMPERAMENTS</option>
                    {
                        allTemp.length&&allTemp.map((t) => (
                            <option value={t} key={t.id}>{t}</option>
                        ))
                    }
                </select>
                <select>
                    <option value="all">ALL</option>
                    <option value="created">CREATED</option>
                    <option value="api">EXISTENT</option>
                </select>
            </div>
                
            <div>
                <span>ORDER BY </span>
                <select>
                    <option value="az">A - Z</option>
                    <option value="za">Z - A</option>
                    <option value="weight">Weight</option>
                </select>
            </div>    
               
        </div>
    )
}