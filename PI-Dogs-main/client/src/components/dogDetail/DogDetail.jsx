import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { dogDetail } from "../../actions/actions";
import Dog from "../Dog";



export default function DogDetail() {
    const dispatch = useDispatch();
    const dog = useSelector((state) => state.dogDetail)
    // console.log(dog)
    useEffect(() => {
        dispatch(dogDetail())
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