import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router";
import { getDogs, getTemperaments, createDog } from "../../actions/actions";

export default function PostDog() {
    const [input, setInput] = useState({
        name : '',
        image : '',
        temperament : [],
        height_min : '',
        height_max : '',
        weight_min : '',
        weight_max : '',
        life_span : '',
    })

    const dispatch = useDispatch();
    
    const temperament = useSelector((state) => state.temperament)
    useEffect(() => {
        dispatch(getTemperaments())
    },  [])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input)
        dispatch(createDog(input))
    }
    // const handleInput = (e) => {
    //     e.preventDefault();
    //     setInput({
    //         ...input,
    //         [e.target.name] : e.target.value
    //     })
    // }

    return (
        <div>
            <Link to='/home'>
                <button onClick={(e) => getDogs(e)}>HOME</button>
            </Link>
            
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <label htmlFor="Name...">Name: </label>
                        <input
                        type='text'
                        placeholder="Dog's name..."
                        onChange= {(e) => {
                            const res = e.target.value;
                            setInput({
                            ...input,
                            name: res,
                            })
                        }}
                        />
                    </div>
                    <div>
                        <label htmlFor="Weight min...">Minimum weight: </label>
                        <input
                        type='number'
                        placeholder="Dog's minumum weight..."
                        value={input.weight_min}
                        onChange= {(e) => {
                            const res = e.target.value;
                            res >= 0 && res <= 100 ? 
                            setInput({
                            ...input,
                            weight_min: res,
                            }) :
                            alert('Write weight between 0 - 100')
                        }}
                        />
                    </div>
                    <div>
                        <label htmlFor="Weight max...">Maximum weight: </label>
                        <input
                        type='number'
                        placeholder="Dog's maximum weight..."
                        value={input.weight_max}
                        onChange= {(e) => {
                            const res = e.target.value;
                            res >= 0 && res <= 100 ?
                            setInput({
                            ...input,
                            weight_max: res,
                            }) :
                            alert('Write weight between 0 - 100')
                        }}
                        />
                    </div>
                    <div>
                        <label htmlFor="Height min...">Minimum height: </label>
                        <input
                        type='number'
                        placeholder="Dog's minimum height..."
                        value={input.height_min}
                        onChange= {(e) => {
                            const res = e.target.value;
                            res >= 0 && res <= 100 ?
                            setInput({
                            ...input,
                            height_min: res,
                            }) :
                            alert('Write height between 0 - 100')
                        }}
                        />
                    </div>
                    <div>
                        <label htmlFor="Height max...">Maximum height: </label>
                        <input
                        type='number'
                        placeholder="Dog's Maximum height..."
                        value={input.height_max}
                        onChange= {(e) => {
                            const res = e.target.value;
                            res >= 0 && res <= 100 ?
                            setInput({
                            ...input,
                            height_max: res,
                            }) :
                            alert('Write height between 0 - 100')
                        }}
                        />
                    </div>
                    <div>
                        <label htmlFor="Life span...">Life span: </label>
                        <input
                        type='number'
                        placeholder="Dog's life span :(..."
                        value={input.life_span}
                        onChange= {(e) => {
                            const res = e.target.value;
                            res >= 0 && res <= 20 ?
                            setInput({
                            ...input,
                            life_span: res,
                            }) :
                            alert('Dogs cannot live longer than 20 years, please write a number between 0 - 20')
                        }}
                        />
                    </div>
                    <div>
                        <label htmlFor="Image...">Image: </label>
                        <input
                        type='url'
                        placeholder="Dog's image..."
                        attern="https://.*"
                        value={input.image}
                        onChange= {(e) => {
                            const res = e.target.value;
                            setInput({
                            ...input,
                            image: res,
                            })
                        }}
                        />
                    </div>
                    <div>
                        {temperament.map((t) => (
                            <label>
                                <div>
                                    {t + ':'}
                                <input
                                    type='checkbox'
                                    id={t.name}
                                    value={t.name}
                                    onChange= {() => {
                                        const res = t;
                                        setInput({
                                        ...input,
                                        temperament: [...input.temperament, res]
                                        })  
                                    }}
                                    />     
                                </div>
                            </label> 
                        ))} 
                    </div>
                    <input type="submit" value='ADD DOG'/>
                </form>
        </div>
          
    )
} 