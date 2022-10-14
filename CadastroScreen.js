import { StatusBar } from "expo-status-bar";
import Icon from 'react-native-vector-icons/FontAwesome';
import React from "react";
import { StyleSheet, Image, TouchableOpacity, Button ,View, Text, TextInput, Alert } from 'react-native';

 export default function CadastroScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.box}>
        <Image style={styles.logo} source={require('../img/op.png')} />
        <Text style={styles.txt}>Vamos criar sua conta!</Text>
      </View>
        
      <StatusBar style="auto"/>
      <View style={styles.cadastro}>
      
        <TextInput style={styles.input} placeholder='Nome Completo' />
        <TextInput style={styles.input} placeholder='E-mail'/>
        <TextInput style={styles.input} placeholder='Confirmar E-mail'/>
        <TextInput style={styles.input} secureTextEntry={true} placeholder='Senha'/>
        <TextInput style={styles.input} secureTextEntry={true} placeholder='Confirmar Senha'/>

        <View style={styles.box}>
          <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('InicialScreen', Alert.alert('Parabéns, sua conta foi criada! Faça o login para aproveitar nosso app.'))} >
            <Text style={styles.BTtext}>Criar Conta</Text>
          </TouchableOpacity>
        </View>
      </View>



    </View>
  );
 }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26899E',
    justifyContent: 'center',
  },
  box: {
    alignItems: 'center',
  },
  cadastro: {
    backgroundColor: '#65CDD3',
    justifyContent: 'center',
    margin: 10,
    height: 400,
    padding: 20,
    borderColor: 'black',
    borderWidth: 0.5,
  },
  input: {
    marginTop: 8,
    padding: 8,
    height: 45,
    borderWidth: 1,
    backgroundColor: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    borderRadius: 3,
  },
  txt: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  logo: {
    height: 100,
    width: 130,
  },
  botao: {
    marginTop: 10,
    padding: 8,
    height: 50,
    width: 350,
    backgroundColor: '#1CA4B7',
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BTtext: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});