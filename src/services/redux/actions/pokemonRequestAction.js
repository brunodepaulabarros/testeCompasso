import {
    POKEMON_REQUEST
} from './actionTypes'

export const pokemonRequest = (data) => ({
    type: POKEMON_REQUEST,
    payload: data
})
