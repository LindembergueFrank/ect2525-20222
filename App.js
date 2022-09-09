//Importação de dependências necesssárias (Importar antes de utilizar)
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

//Função do arquivo (Arquivo: App.js, Função: App)
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Programação para Dispositivos Móveis</Text>
      <Text>ECT2525</Text>
      <Image source={require('./assets/luffy.jpg')} style={styles.onepiece}/>
    </View>
  );
}

//Container responsável pela estilização
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  onepiece: {
    width: 300,
    height: 300,
  }
});
