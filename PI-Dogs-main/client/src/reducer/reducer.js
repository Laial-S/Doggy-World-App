import { GET_DOGS, SEARCH_BREED} from "../actions/actions"


const initialState = {
    dogs : [],
    breed : [],
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DOGS: 
        console.log(action.payload)
            return {
                ...state,
                dogs: action.payload
            };
        case SEARCH_BREED:
            return {
                ...state,
                breed: action.payload
            };
        default :
            return state
        
    }
}

export default reducer;