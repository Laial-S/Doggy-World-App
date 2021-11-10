import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { dogDetail } from "../../actions/actions";
import { Link, useHistory } from "react-router-dom";
import Dog from "../Dog";
import './DogDetail.css'

export default function DogDetail() {
    const dispatch = useDispatch();
    const history = useHistory();
    const dog = useSelector((state) => state.dogDetail)
    // console.log(dog)
    const {id} = useParams()
    useEffect(() => {
        dispatch(dogDetail(id))
    },  [])

    const deleteDetail = (e) => {
        e.preventDefault();
        dispatch(dogDetail())
        history.push("/home");
    }
    
    const {name, temperament, height, weight, life_span, image} =  dog;

    return (
        <div className='fondoDetail'>
            
            <button className= 'boton' onClick={deleteDetail}>HOME</button>
            
            <div className='containerDetail'>
                    <div className='name'> <p>{name}</p> </div>

                    <div className='temperament'><p>TEMPERAMENT: {temperament}</p></div>
                    
                    <div className='height'><p>HEIGHT: {height}</p></div>
                    
                    <div className='weight'><p>WEIGHT: {weight}</p></div>
                    
                    <div className='life_span'><p>LIFE SPAN: {life_span}</p></div>
                    
                    <div className='contenedorIMGD'><img className='doggoIMG' src={image}/></div>
            </div>
        </div>

    )
}