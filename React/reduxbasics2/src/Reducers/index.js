import * as actionTypes from '../actions/action-types'

const initialState = {
    counter: 0,
    results: []
}

export default function initialReducer(state = initialState, action){
    const { type, payload } = action
    switch(type){
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }

        case actionTypes.DECREMENT:
                return {
                    ...state,
                    counter: state.counter - 1
                }

        case actionTypes.ADD_10: 
                return {
                    ...state,
                    counter: state.counter + 10
                }

        case actionTypes.SUBTRACT_15:
                return {
                    ...state,
                    counter: state.counter - 15
                }
        
        case actionTypes.STORE_RESULT:
                return {
                    ...state,
                    results: state.results.concat({id: new Date(), value: payload})
                }

        default:
            return state
    }
}