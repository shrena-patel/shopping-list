import { ADD_ITEM } from '../actions/shopping'
import { DEL_ITEM } from '../actions/shopping'

const initialState = ['Bananas', 'Bread']

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'ADD_ITEM':
            return [...state, action.item]

        case 'DEL_ITEM':
            return state.filter((item) => item !== action.item)

        default:
            return state
    }
}

export default reducer