import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { TextMask } from 'react-native-masked-text';
import PokemonType from '../../components/PokemonType';
import { getColorOfType } from "../../services/utils/colorsOfTypes";
import { Container } from './styles';

const PokemonDetails = ({ route, navigation }) => {
    const { PokemonInfo } = route.params;

    return (
        <Container containerColor={getColorOfType(PokemonInfo.types[0].type.name)}>
            <View style={{ flex: 1 }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 15
                }}>
                    <Text style={{ color: "#fff", textTransform: "capitalize", fontSize: 25, fontWeight: "700" }}>{PokemonInfo.name}</Text>
                    <TextMask
                        style={{ color: "#fff", marginHorizontal: 5, fontSize: 22, fontWeight: "700" }}
                        value={PokemonInfo.id.toString()}
                        type={"custom"}
                        options={{
                            mask: '#****'
                        }}
                    />
                </View>
                <View style={{ marginHorizontal: 15, flexDirection: "row",justifyContent:"space-between" }}>
                    <PokemonType pokemonInfo={PokemonInfo} />
                    <View style={{ alignItems: "center" }}>
                        <Image
                            style={{
                                height: 180, width: 180,
                                opacity: 0.6,
                                left: 20,
                                top: 30,
                                position: 'absolute'
                            }}
                            source={require('../../assets/images/pokeball.png')}
                        />
                        <Image
                            style={{
                                resizeMode: 'cover',
                                zIndex: 1,
                                height: 150,
                                width: 150,
                            }}
                            source={{
                                uri: PokemonInfo.sprites.front_default
                            }}
                        />
                    </View>
                </View>
            </View>
            <View style={{ flex: 2, borderTopStartRadius: 50, borderTopEndRadius: 50, backgroundColor: "#ddd" }}>
                <View style={{
                    marginHorizontal: 50,
                    marginTop: 10,
                    borderBottomWidth: 5,
                    width: 130,
                    borderColor: getColorOfType(PokemonInfo.types[0].type.name),
                    padding: 5,
                    alignItems: "center"
                }}>
                    <Text style={{ fontSize: 20, fontWeight: '400' }}>Base Stats</Text>
                </View>
                <FlatList
                    data={PokemonInfo.stats}
                    keyExtractor={item => item.stat.name}
                    renderItem={({ item }) =>
                        <View style={{ flexDirection: "row", margin: 5, justifyContent: "center" }}>
                            <View style={{ width: 160, marginVertical: 5 }}>
                                <Text style={{ color: "#565656", fontSize: 20, fontWeight: '400', textTransform: "capitalize" }}> {item.stat.name}</Text>
                            </View>
                            <View style={{ marginVertical: 5 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', textTransform: "capitalize" }}>{item.base_stat}</Text>
                            </View>
                        </View>
                    }
                />
            </View>
        </Container >
    );
}

export default PokemonDetails;