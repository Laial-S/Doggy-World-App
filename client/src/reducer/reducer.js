import { GET_DOGS,
     SEARCH_BREED,
     FILTER_BY_TEMPERAMENT,
     GET_DOGS_DB,
     FILTER_CREATED_OR_API,
     GET_TEMPERAMENTS,
     ORDER_NAME,
     ORDER_WEIGHT,
     DOG_DETAIL,
     CLEAR_DETAIL} from "../actions/actions"


const initialState = {
    dogs : [],
    allDogs : [],
    temperament : [],
    DBdogs : [],
    dogDetail  : [],
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
            console.log('entre reducer')
            return {
                ...state,
                dogs: action.payload
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
            allTemperaments.filter((d) => d.temperaments&&d.temperaments.find((t) => t.name === action.payload))//hago un forEach, preguntando si cada uno de los perrs
            // tiene temperamento, si tiene que se fije en cada uno en la propiedad name si ese valor es igual al value del option del select
            return {
                ...state,
                dogs: temperamentsFiltered
            }
        case GET_DOGS_DB: 
            return {
                ...state,
                DBdogs : action.payload
            }
        case FILTER_CREATED_OR_API: 
            const allDogs = state.allDogs
            const bdFiltered = action.payload === 'created'?
            allDogs.filter((d) => d.createdInDb) :
            allDogs.filter((d) => !d.createdInDb)
            return {
                ...state,
                dogs: action.payload === 'All' ? allDogs : bdFiltered
            }
        case ORDER_NAME: 
        const sortedArray = action.payload === 'az' ?
            state.dogs.sort((a, b) => {
                if(a.name > b.name) {
                    return 1
                } else if(b.name > a.name) {
                    return -1
                }
                return 0
            }) : 
            state.dogs.sort((a, b) => {
                if(a.name > b.name) {
                    return -1
                } else if(b.name > a.name) {
                    return 1
                }
                return 0
            }) 
            return {
                ...state,
                dogs: sortedArray
            }
        case ORDER_WEIGHT: 
            const weightArr = action.payload === 'weightASC' ?
            state.dogs.sort((a, b) => {
                if(a.weight_max > b.weight_max) {
                    return 1
                } else if(b.weight_max > a.weight_max) {
                    return -1
                } else {
                    return 0
                }
            }) :
            state.dogs.sort((a, b) => {
                if(a.weight_max > b.weight_max) {
                    return -1
                } else if(b.weight_max > a.weight_max) {
                    return 1
                } else {
                    return 0
                }
            })
            return {
                ...state,
                dogs: weightArr
            }
        case DOG_DETAIL: 
        // console.log('REDUCER DETAIL' + JSON.stringify(action.payload));
            return {
                ...state,
                dogDetail : action.payload
            }
        case CLEAR_DETAIL:
            return {
                ...state,
                dogDetail : []
            }
        default :
            return state
        
    }
}

export default reducer;