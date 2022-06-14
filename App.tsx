import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import EpisodeScreen from './src/screens/Episode';
import CharacterScreen from './src/screens/Character';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Rick and Morty' }} />
          <Stack.Screen name="EpisodeScreen" component={EpisodeScreen} options={{ title: 'Episode Information' }} />
          <Stack.Screen name="CharacterScreen" component={CharacterScreen} options={{ title: 'Character Information' }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
