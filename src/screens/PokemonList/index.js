import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import LoadCard from '../../components/LoadCard';
import PokemonBaner from '../../components/PokemonBaner';
import { pokemonRequest } from "../../services/redux/actions/pokemonRequestAction";
import { getListOfPokemons, getPokemonById } from '../../services/requests/PokemonRequest';
import {
    Container,
    ContainerHeader
} from './styles';

const PokemonList = () => {

    const [pokemonList, setPokemonList] = useState([]);
    const [loadingPagination, setLoadingPagination] = useState(true);

    const pokemonRequestUrl = useSelector(state => state.pokemonRequestReducer)
    const dispatch = useDispatch();

    const addUrlNext = (data) => {
        dispatch(pokemonRequest(data))
    }

    useEffect(() => {
        loadApp()
    }, [])

    const loadApp = async () => {
        response = await getListOfPokemons()
        var pokeList = [];
        for (var i = 0; i < response.data.results.length; i++) {
            var _response = await getPokemonById(response.data.results[i].url)
            pokeList.push(_response.data)
        }
        addUrlNext(response.data)
        setPokemonList(pokeList)
    }

    const loadNewPage = async () => {
        setLoadingPagination(true)
        response = await getListOfPokemons(pokemonRequestUrl.urlNext)
        var pokeList = [];
        for (var i = 0; i < response.data.results.length; i++) {
            var _response = await getPokemonById(response.data.results[i].url)
            pokeList.push(_response.data)
        }
        setPokemonList(pokemonList.concat(pokeList))
        addUrlNext(response.data)
        setLoadingPagination(false)
    }

    const renderFooter = () => {
        return (
            <View >
                {loadingPagination && <ActivityIndicator size="large" color="green" />}
            </View>
        );
    };

    return (
        <Container >
            <ContainerHeader >
                <Text style={{ fontSize: 26, fontWeight: "700" }}>Pokedex</Text>
                <Image
                    style={{
                        height: 180,
                        width: 180, position: "absolute",
                        right: -40, top: -40,
                    }}
                    source={require('../../assets/images/pokeball.png')}
                />
            </ContainerHeader>
            {pokemonList.length === 0 ?
                <View>
                    <LoadCard />
                    <LoadCard />
                    <LoadCard />
                    <LoadCard />
                </View>
                :
                <View style={{ backgroundColor: "#fff", flex: 1 }}>
                    <FlatList
                        data={pokemonList}
                        keyExtractor={item => item.name}
                        showsVerticalScrollIndicator={false}
                        onEndReached={() => loadNewPage()}
                        onEndReachedThreshold={0.1}
                        style={{ flex: 1 }}
                        ListFooterComponent={() => renderFooter()}
                        renderItem={({ item }) =>
                            <PokemonBaner pokemonInfo={item} />
                        }
                    />
                </View>
            }
        </Container >
    )
}

export default PokemonList;