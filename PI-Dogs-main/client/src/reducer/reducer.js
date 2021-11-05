import { GET_DOGS, SEARCH_BREED, FILTER_BY_TEMPERAMENT, FILTER_CREATED_OR_API, GET_TEMPERAMENTS } from "../actions/actions"


const initialState = {
    dogs : [],
    allDogs : [],
    temperament : []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DOGS: 
        // console.log('hice el pedido  ' + action.payload) 
            return {
                ...state,
                dogs: action.payload,
                allDogs: action.payload
            };
        case SEARCH_BREED:
            return {
                ...state,
                breed: action.payload
            };
        case GET_TEMPERAMENTS: 
            return {
                ...state,
                temperament: action.payload
            };
        case FILTER_BY_TEMPERAMENT: 
            const allTemperaments = state.allDogs
            const temperamentsFiltered = action.payload === 'All'? //si el value es All 
            allTemperaments : //devuelvo todos los temperamentos, sino
            allTemperaments.filter((d) => d.temperament&&d.temperament.find((t) => t.name === action.payload))//hago un forEach, preguntando si cada uno de los perrs
            // tiene temperamento, si tiene que se fije en cada uno en la propiedad name si ese valor es igual al value del option del select
            console.log(allTemperaments)
            return {
                ...state,
                dogs: temperamentsFiltered
            }
        case FILTER_CREATED_OR_API: 
            return {
                ...state,
            }
        default :
            return state
        
    }
}

export default reducer;