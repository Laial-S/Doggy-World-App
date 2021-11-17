import React, { useEffect, useState } from "react";
import { filterByTemperament, filterCreatedOrApi, getTemperaments, orderByAZ, orderByWeight} from "../../actions/actions";
import '../filtrado/Filtros.css'
import { useSelector, useDispatch } from "react-redux";

export default function Filtros({setOrden}) {
    const dispatch = useDispatch()

    const allTemp = useSelector((state) => state.temperament)

    const [currentPage, setCurrentPage] = useState(1)
    
    const handleFilterTemperament = (e) => {
        e.preventDefault();
        dispatch(filterByTemperament(e.target.value))
        setCurrentPage(1)
    }

    const handleCreatedOrApi = (e) => {
        e.preventDefault();
        dispatch(filterCreatedOrApi(e.target.value))
        setCurrentPage(1)
    }

    const handleSort = (e) => {
        dispatch(orderByAZ(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }
    const handleSortWeight = (e) => {
        dispatch(orderByWeight(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }

    useEffect(() => {
        dispatch(getTemperaments())
    },  [])    
    return (
        <div >
            <div className='filtross'> 
                <span>FILTER BY: </span>
                <select className='option' onChange={(e) => handleFilterTemperament(e)}>
                    <option value="All">ALL TEMPERAMENTS</option>
                    {
                        allTemp.length&&allTemp.map((t) => (
                            <option value={t} key={t.id}>{t}</option>
                        ))
                    }
                </select>
                <select className='option' onChange={(e) => handleCreatedOrApi(e)}>
                    <option value="All">ALL</option>
                    <option value="created">CREATED</option>
                    <option value="api">EXISTENT</option>
                </select>
            </div>
                
            <div className='filtross2'>
                <span>ORDER BY </span>
                <select className='option' onChange={(e) => handleSort(e)}>
                    <option value="az">A - Z</option>
                    <option value="za">Z - A</option>
                </select>
                <select  className='option' onChange={(e) => handleSortWeight(e)}>    
                    <option value="weightASC">Weight ASC </option>
                    <option value="weightDSC">Weight DSC </option>
                </select>
            </div>    
               
        </div>
    )
}