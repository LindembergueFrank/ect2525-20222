import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert} from 'react-native';

export default function InicialScreen({ navigation }) {

    return (
      <View style={styles.container}>

        <StatusBar style="auto" />
        <Image style={styles.logo} source={require('../img/op.png')} />
        <Text style={styles.txtLogo}>One Post</Text>
        <Text style={styles.BTtext}>Bem vindo ao nosso app!</Text>

        <TextInput style={styles.input} placeholder='E-mail'/>
        <TextInput style={styles.input} secureTextEntry={true} placeholder='Senha'/>

        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('HomeScreen')} >
          <Text style={styles.BTtext}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('CadastroScreen')} >
          <Text style={styles.BTtext}>Cadastre-se</Text>
        </TouchableOpacity>

      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26899E',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  logo: {
    height: 250,
    width: 250,
  },
  txtLogo: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    marginTop: 6,
    padding: 8,
    width: 250,
    backgroundColor: 'white',
    fontSize: 19,
    fontWeight: 'bold',
    borderWidth: 1,
    borderRadius: 5,
  },
  botao: {
    marginTop: 6,
    padding: 8,
    height: 50,
    width: 250,
    backgroundColor: '#1CA4B7',
    borderRadius: 4,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BTtext: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },
});
