import axios from "axios"

export const GET_DOGS= 'GET_DOGS';
export const SEARCH_BREED= 'SEARCH_BREED';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
export const FILTER_BY_TEMPERAMENT = 'FILTER_BY_TEMPERAMENT';
export const GET_DOGS_DB = 'GET_DOGS_DB';
export const FILTER_CREATED_OR_API = 'FILTER_CREATED_OR_API';
export const ORDER_NAME = 'ORDER_NAME';
export const ORDER_WEIGHT = 'ORDER_WEIGHT';

export function getDogs() {
    // console.log('entro a la funcion')
    return async function(dispatch) {
        const dogs = await axios.get('http://localhost:3001/dogs')
        const data = dogs.data
        
        return dispatch({type: 'GET_DOGS', payload: data})
    }
}

export function searchBreed(breed) {
    return async function(dispatch) {
        const dogs = await axios.get(`http://localhost:3001/dogs?name=${breed}`)
        const data = dogs.data;
        return dispatch({type: 'SEARCH_BREED', payload: data})
    }
}

export function getTemperaments() {
    return async function(dispatch) {
        const allTemp = await axios.get('http://localhost:3001/temperament')
        const data = allTemp.data.result
        const tempFiltered = data.map((t) => t.name)
        // console.log(tempFiltered)
        return dispatch({type: 'GET_TEMPERAMENTS', payload: tempFiltered})
    }
}

export function filterByTemperament(payload) { // es el value que llega por el option del select
    // console.log(payload)
    return {
        type: 'FILTER_BY_TEMPERAMENT',
        payload,
    }
}

export function getDogsDB() {
    return async function(dispatch) {
        const allDoggies = await axios.get('http://localhost:3001/dogs')
        const data = allDoggies.data
        const dogsDB = data.filter((e) => typeof(e.id) !== 'number')
        console.log(dogsDB)
        return dispatch({type: 'GET_DOGS_DB', payload: dogsDB})
    }
}
export function filterCreatedOrApi(payload) {
    return {
        type: 'FILTER_CREATED_OR_API',
        payload
    } 
}

export function orderByAZ(payload) {
    return {
        type: 'ORDER_NAME',
        payload
    }
}

export function orderByWeight(payload) {
    return {
        type: 'ORDER_WEIGHT',
        payload
    }
}

export function createDog({name, image, temperament, weight_min, weight_max, height_min, height_max, life_span}) {
    return async function() {
        axios.post('http://localhost:3001/dog', {
            name: name,
            temperament: temperament,
            height_min: height_min,
            height_max: height_max,
            weight_min: weight_min,
            weight_max: weight_max,
            image: image,
            life_span: life_span
        })
    }
}