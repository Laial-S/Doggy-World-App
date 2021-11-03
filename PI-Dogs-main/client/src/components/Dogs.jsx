
import Dog from "./Dog";
import React, { useEffect } from "react";
import { useSelector, useDispatch, connect} from "react-redux";
import './Dogs.css'
import { getDogs } from "../actions/actions";



export default function Dogs({currentDogs}) {            
    const dispatch = useDispatch();
            
    const allDogs = useSelector((state) => state.dogs)
        useEffect(() => {
            dispatch(getDogs())
        },  [dispatch])

       
    return (
        <div className= 'dogs'>
            {
                currentDogs?.map((d) => 
                <Dog dogs={{...d}}/>
                )
            }
        </div>
    )
}



