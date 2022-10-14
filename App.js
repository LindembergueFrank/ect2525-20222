import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InicialScreen from './screens/InicialScreen';
import CadastroScreen from './screens/CadastroScreen';
import HomeScreen from './screens/HomeScreen';
import HomeScreen2 from './screens/HomeScreen2';
import HomeScreen3 from './screens/HomeScreen3';

const Stack = createNativeStackNavigator();

export default function App() {

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='InicialScreen' component={InicialScreen} options={{ headerShown: false}}/>
          <Stack.Screen name='CadastroScreen' component={CadastroScreen} options={{ title: 'Área de Cadastro' }}/>
          <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ title: 'Bem vindo!' }}/>
          <Stack.Screen name='HomeScreen2' component={HomeScreen2} options={{ title: 'Avaliar contéudos' }}/>
          <Stack.Screen name='HomeScreen3' component={HomeScreen3} options={{ title: 'Adicionar avaliação' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}