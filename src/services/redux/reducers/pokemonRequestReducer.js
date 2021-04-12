import { POKEMON_REQUEST } from '../actions/actionTypes'

const initialState = {
    urlNext: "",
}

const pokemonRequestReducer = (state = initialState, action) => {
    switch (action.type) {
        case POKEMON_REQUEST:
            return {
                ...state,
                urlNext: action.payload.next
            }
        default:
            return state
    }
}

export default pokemonRequestReducer;