import { combineReducers, createStore } from 'redux';
import pokemonRequestReducer from "./reducers/pokemonRequestReducer";

const reducers = combineReducers({
    pokemonRequestReducer,
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig;