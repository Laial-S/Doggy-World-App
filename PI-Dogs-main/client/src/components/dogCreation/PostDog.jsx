import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router";
import { getDogs, getTemperaments, createDog } from "../../actions/actions";
import './PostDog.css'

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
    const [errors, setErrors] = useState({})

    const dispatch = useDispatch();
    const temperament = useSelector((state) => state.temperament)
    useEffect(() => {
        dispatch(getTemperaments())
    },  [])

    function handleInput(e) {
        e.preventDefault();
        setErrors(
          validate({
          ...input,
          [e.target.name]: e.target.value,
          })
        )
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        })
      }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(input)
        Object.keys(errors).length ? alert('completar todos los campos') : 
        dispatch(createDog(input)) &&
        alert('DOGGO CREATED')
        
    }
    const handleSelect = (e) => {
        setInput({
            ...input,
            temperament: [...input.temperament, e.target.value]
        })
        console.log(input)
    }

    return (
        <div className='formCointeiner'>
            <Link to='/home'>
                <button className = 'boton' onClick={(e) => getDogs(e)}>HOME</button>
            </Link>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className='inputsCointainer'>
                        <div className='inputContainer'>
                            <label className='inputName' htmlFor="name">Name: </label>
                            <input
                            className='inputForm'
                            type='text'
                            placeholder="Dog's name..."
                            name='name'
                            id='name'
                            value={input.name}
                            onChange= {handleInput}/>
                            {errors.name && (<p>{errors.name}</p>)}
                        </div>
                        <div className='inputContainer'>
                            <label className='inputName' htmlFor="weight_min">Minimum weight: </label>
                            <input
                            className='inputForm'
                            type='number'
                            placeholder="Dog's minumum weight..."
                            name='weight_min'
                            id='weight_min'
                            value={input.weight_min}
                            onChange= {handleInput}/>
                            {errors.weight_min && (<p>{errors.weight_min}</p>)}
                        </div>
                        <div className='inputContainer'>
                            <label  className='inputName' htmlFor="weight_max">Maximum weight: </label>
                            <input
                            className='inputForm'
                            type='number'
                            placeholder="Dog's maximum weight..."
                            name='weight_max'
                            id='weight_max'
                            value={input.weight_max}
                            onChange= {handleInput}/>
                            {errors.weight_max && (<p>{errors.weight_max}</p>)}
                        </div>
                        <div className='inputContainer'>
                            <label className='inputName' htmlFor="height_min">Minimum height: </label>
                            <input
                            className='inputForm'
                            type='number'
                            placeholder="Dog's minimum height..."
                            value={input.height_min}
                            name='height_min'
                            id='height_min'
                            onChange= {handleInput}/>
                            {errors.height_min && (<p>{errors.height_min}</p>)}
                        </div>
                        <div className='inputContainer'>
                            <label className='inputName' htmlFor="height_max">Maximum height: </label>
                            <input
                            className='inputForm'
                            type='number'
                            placeholder="Dog's Maximum height..."
                            value={input.height_max}
                            name='height_max'
                            id='height_max'
                            onChange= {handleInput}/>
                            {errors.height_max && (<p>{errors.height_max}</p>)}
                        </div>
                        <div className='inputContainer'>
                            <label className='inputName' htmlFor="life_span">Life span: </label>
                            <input
                            className='inputForm'
                            type='number'
                            placeholder="Dog's life span :(..."
                            value={input.life_span}
                            name='life_span'
                            id='life_span'
                            onChange= { handleInput
                                // (e) => {
                                // const res = e.target.value;
                                // res >= 0 && res <= 20 ?
                                // setInput({
                                // ...input,
                                // life_span: res,
                                // }) :
                                // alert('Dogs cannot live longer than 20 years, please write a number between 0 - 20')
                            // }
                        }
                            />
                             {errors.life_span && (<p>{errors.life_span}</p>)}
                        </div>
                        <div className='inputContainer'>
                            <label className='inputName' htmlFor="Image...">Image: </label>
                            <input
                            className='inputForm'
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
                    </div>
                    
                    <div>
                        <select className='selectForm' onChange={(e) => handleSelect(e)}>
                            <option selected="false" disabled >TEMPERAMENTS</option>
                            {
                                temperament.map((t, index) => (    
                                    <option 
                                    key = {index}
                                    value={t}>
                                    {t}
                                    </option>   
                                ))
                            }
                        </select> 
                    </div>
                    <div>
                        {
                            input.temperament.length > 0 && input.temperament.map((t) => {  
                                return <p>{t}</p>
    
                            })
                        }
                    </div>
                    {/* <ul className='laUL'>
                       {
                        input.temperament.map((t) => {
                            <li className='liLI'>{t}</li>
                        })
                       } 
                    </ul> */}
                    <input type="submit" disabled={false} className='boton' value='ADD DOG'/>
                </form>    
        </div>   
    )
} 

export function validate(input, disabled) {
    let errors = {}

    if(!input.name) {
      errors.name = 'Name is required'
    } else if (parseInt(input.name)) {
      errors.name = 'Name is invalid, write a text'
    }
    if(!input.weight_min) {
      errors.weight_min = 'Minimum weight is required'
    } else if (input.weight_min <= 0 || input.weight_min >= 100) {
        errors.weight_min = 'Write a number beetwen 0 - 100'
        alert('Write a number beetwen 0 - 100')
    }
    if(!input.weight_max) {
        errors.weight_max = 'Maximum weight is required'
      } else if (input.weight_max <= 0 || input.weight_max < input.weight_min || input.weight_max > 100) {
          errors.weight_max = 'Write a number beetwen 0 - 100'
          alert('Write a weight greater than the minimum, and lesser than 100')
      }
      if(!input.height_min) {
        errors.height_min = 'Minimum height is required'
      } else if (input.height_min <= 0 || input.height_min >= 100) {
          errors.height_min = 'Write a number beetwen 0 - 100'
          alert('Write a number beetwen 0 - 100')
      }
      if(!input.height_max) {
        errors.height_max = 'Minimum height is required'
      } else if (input.height_max <= 0 || input.height_max < input.height_min || input.height_max > 100) {
          errors.height_max = 'Write a number beetwen 0 - 100'
          alert('Write a height greater than the minimum, and lesser than 100')
      }
      if(!input.life_span) {
        errors.life_span = 'Life span is required'
      } else if (input.life_span <= 0 || input.life_span > 20) {
          errors.life_span = 'Write a number beetwen 0 - 20'
          alert('Dogs cannot live longer than 20 years, please write a number between 0 - 20')
      }
      if(errors.length < 0) {disabled = false} else {disabled = true} 
  return errors;
}