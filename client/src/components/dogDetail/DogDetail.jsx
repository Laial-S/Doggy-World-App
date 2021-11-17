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
    // console.log('DOG NAME ESTADO ' + dog[0]?.name)
    const {id} = useParams()
    useEffect(() => {
        dispatch(dogDetail(id))
    },  [])
    const deleteDetail = (e) => {
        e.preventDefault();
        dispatch(dogDetail())
        history.push("/home");
    }
    const temp = dog[0]?.temperaments?.map((t) => t.name).join(', ');
    // console.log('TEMPERAMENTO MAPEADO' + JSON.stringify(temp))
    
    return (
        <div className='fondoDetail'>
            
            <button className= 'boton' onClick={(e) => deleteDetail(e)}>HOME</button>
            
            <div className='containerDetail'>
                    <div className='name'> <p>{ dog[0]?.name}</p> </div>

                    <div className='temperament'><p>TEMPERAMENT: {temp ? temp : "This dog doesn't have any temperament"}</p></div>
                    
                    <div className='height'><p>HEIGHT: min { dog[0]?.height_min} - max { dog[0]?.height_max}</p></div>
                    
                    <div className='weight'><p>WEIGHT: min { dog[0]?.weight_min} - max { dog[0]?.weight_max}</p></div>
                    
                    <div className='life_span'><p>LIFE SPAN: { dog[0]?.life_span}</p></div>
                    
                    <div className='contenedorIMGD'><img className='doggoIMG' src={dog[0]?.image}/></div>
            </div>
        </div>

    )
}