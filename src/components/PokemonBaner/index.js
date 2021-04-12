import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Image, SafeAreaView, Text, TouchableWithoutFeedback, View } from 'react-native';
import { TextMask } from 'react-native-masked-text';
import { getColorOfType } from "../../services/utils/colorsOfTypes";
import PokemonType from '../PokemonType';
import { Container } from './styles';

const PokemonBaner = ({ pokemonInfo }) => {

    const navigation = useNavigation();
    
    return (
        <SafeAreaView style={{ flex: 1 }} >
            <TouchableWithoutFeedback
                onPress={() => navigation.navigate("PokemonDetails", { PokemonInfo: pokemonInfo })}
            >
                <Container containerColor={getColorOfType(pokemonInfo.types[0].type.name)}>
                    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={{ color: "#fff", textTransform: "capitalize", fontSize: 20, fontWeight: "700" }}>{pokemonInfo.name}</Text>
                        <TextMask
                            style={{ color: "#fff", marginHorizontal: 5, fontSize: 22, fontWeight: "700" }}
                            value={pokemonInfo.id.toString()}
                            type={"custom"}
                            options={{
                                mask: '#****'
                            }}
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: "center",
                        justifyContent: "space-between",
                        flex: 1
                    }}>
                        <PokemonType pokemonInfo={pokemonInfo} />
                        <View style={{
                            flex: 1,
                            overflow: 'hidden',
                            alignItems: 'center',
                            position: 'relative',
                            borderRadius: 15
                        }}>
                            <Image
                                style={{
                                    height: 130, width: 130,
                                    opacity: 0.6,
                                    left: 30,
                                    top: 30,

                                }}
                                source={require('../../assets/images/pokeball.png')}
                            />
                            <Image
                                style={{
                                    resizeMode: 'cover',
                                    zIndex: 1,
                                    height: 100,
                                    width: 100,
                                    position: "absolute",
                                    top: 30
                                }}
                                source={{
                                    uri: pokemonInfo.sprites.front_default
                                }}
                            />
                        </View>
                    </View>
                </Container>
            </TouchableWithoutFeedback>
        </SafeAreaView >
    );
}

export default PokemonBaner;