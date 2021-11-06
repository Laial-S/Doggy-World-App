import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router";
import { getTemperaments } from "../../actions/actions";

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
    // const handleInput = (e) => {
    //     e.preventDefault();
    //     setInput({
    //         ...input,
    //         [e.target.name] : e.target.value
    //     })
    // }


    return (
        <form>
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
                onChange= {(e) => {
                    const res = e.target.value;
                    setInput({
                      ...input,
                      weight_min: res,
                    })
                }}
                />
            </div>
            <div>
                <label htmlFor="Weight max...">Maximum weight: </label>
                <input
                type='number'
                placeholder="Dog's maximum weight..."
                onChange= {(e) => {
                    const res = e.target.value;
                    setInput({
                      ...input,
                      weight_max: res,
                    })
                }}
                />
            </div>
            <div>
                <label htmlFor="Height min...">Minimum height: </label>
                <input
                type='number'
                placeholder="Dog's minimum height..."
                onChange= {(e) => {
                    const res = e.target.value;
                    setInput({
                      ...input,
                      height_min: res,
                    })
                }}
                />
            </div>
            <div>
                <label htmlFor="Height max...">Maximum height: </label>
                <input
                type='number'
                placeholder="Dog's Maximum height..."
                onChange= {(e) => {
                    const res = e.target.value;
                    setInput({
                      ...input,
                      height_max: res,
                    })
                }}
                />
            </div>
            <div>
                <label htmlFor="Life span...">Life span: </label>
                <input
                type='number'
                placeholder="Dog's life span :(..."
                onChange= {(e) => {
                    const res = e.target.value;
                    setInput({
                      ...input,
                      life_span: res,
                    })
                }}
                />
            </div>
            <div>
                <label htmlFor="Image...">Image: </label>
                <input
                type='url'
                placeholder="Dog's image..."
                attern="https://.*"
                onChange= {(e) => {
                    const res = e.target.value;
                    setInput({
                      ...input,
                      img: res,
                    })
                }}
                />
            </div>
            <div>
                <label htmlFor="Temperament...">{temperament.map((t) => t)}</label>
                <input
                type='checkbox'
                onChange= {(e) => {
                    const res = e.target.value;
                    setInput({
                      ...input,
                      img: res,
                    })
                }}
                />
            </div>
        </form>  
    )
} 