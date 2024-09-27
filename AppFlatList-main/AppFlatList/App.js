import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetalhePessoaScreen from './components/DetalhePessoaScreen';
import ListaPessoasScreen from './components/ListaPessoasScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ListaPessoa'>
        <Stack.Screen name="ListaPessoa" component={ListaPessoasScreen} />
        <Stack.Screen name="DetalhePessoa" component={DetalhePessoaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;