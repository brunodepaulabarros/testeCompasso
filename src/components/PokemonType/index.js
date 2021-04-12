import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { changeColor } from '../../services/utils/changeColorHexadecimal';
import { getColorOfType } from '../../services/utils/colorsOfTypes';

// import { Container } from './styles';

const PokemonType = ({ pokemonInfo }) => {
    return (
        <View>
            <FlatList
                data={pokemonInfo.types}
                keyExtractor={item => item.type.url}
                renderItem={({ item }) =>
                    <View style={{
                        backgroundColor: changeColor(getColorOfType(item.type.name), -20),
                        marginBottom: 5, borderRadius: 15, paddingHorizontal: 10,
                        alignItems: "center",
                    }}>
                        <Text style={{ color: "#fff", textTransform: "capitalize" }}>{item.type.name}</Text>
                    </View>
                }
            />
        </View>
    );
}

export default PokemonType;