import axios from "axios"

export const GET_DOGS= 'GET_DOGS';
export const SEARCH_BREED= 'SEARCH_BREED';

export function getDogs() {
    console.log('entro a la funcion')
    return async function(dispatch) {
        const dogs = await axios('http://localhost:3001/dogs')
        console.log('hice el pedido ' + dogs)
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

