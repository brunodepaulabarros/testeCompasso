import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import PokemonDetails from "./screens/PokemonDetails";
import PokemonList from "./screens/PokemonList";


const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="PokemonList"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="PokemonList"
          component={PokemonList}
        />
        <Stack.Screen
          name="PokemonDetails"
          component={PokemonDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
