import Axios from 'axios';

export const Api = Axios.create({
    baseURL: "https://pokeapi.co/api/v2"
});