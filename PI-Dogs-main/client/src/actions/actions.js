import axios from "axios"

export const GET_DOGS= 'GET_DOGS';
export const SEARCH_BREED= 'SEARCH_BREED';
export const FILTER_BY_TEMPERAMENT = 'FILTER_BY_TEMPERAMENT';
export const FILTER_CREATED_OR_API = 'FILTER_CREATED_OR_API';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS'

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
    console.log(payload)
    return {
        type: 'FILTER_BY_TEMPERAMENT',
        payload,
    }
}

export function filterCreatedOrApi(payload) {

    return {
        type: 'FILTER_CREATED_OR_API',
        payload
    } 
}
