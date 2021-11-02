import { GET_DOGS } from "../actions/actions"


const initialState = {
    dogs : [],
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DOGS: 
        console.log(action.payload)
            return {
                ...state,
                dogs: action.payload
            }
        default :
            return state
        
    }
}

export default reducer;