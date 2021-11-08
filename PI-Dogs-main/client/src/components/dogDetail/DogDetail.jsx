import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { dogDetail } from "../../actions/actions";
import Dog from "../Dog";

export default function DogDetail() {
    const dispatch = useDispatch();
    const dog = useSelector((state) => state.dogDetail)
    // console.log(dog)
    const {id} = useParams()
    useEffect(() => {
        dispatch(dogDetail(id))
    },  [])
    
    const {name, temperament, height, weight, life_span, image} =  dog;

    return (
        <div>
            <div>
                    <p>NAME: {name}</p>
                    <p>TEMPERAMENT: {temperament}</p>
                    <p>height: {height}</p>
                    <p>weight: {weight}</p>
                    <p>life span: {life_span}</p>
                    <img src={image}/>
            </div>
        </div>

    )
}