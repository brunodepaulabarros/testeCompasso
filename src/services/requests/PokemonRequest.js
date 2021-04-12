import { Api } from "../Api";
import Axios from 'axios';

export const getListOfPokemons = async (urlNext) => {
    var response = null
    urlNext ? /* Tratamento relacionado a paginação */
        await Axios.get(urlNext)
            .then((_response) => {
                response = _response
            }).catch((ex) => {
                console.log(ex.message)
            })
        :
        await Api.get("/pokemon/")
            .then((_response) => {
                response = _response
            }).catch((ex) => {
                console.log(ex.message)
            })
    return response
}

export const getPokemonById = async (url) => {
    var response
    await Axios.get(url)
        .then((_response) => {
            response = _response
        }).catch((ex) => {
            console.log(ex.message)
        })
    return response
}