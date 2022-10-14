import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
    <View style={styles.container}>
        <View style={styles.cabecario}>
            <Image style={styles.img} source={require('../img/op.png')}/>

            <Text style={styles.txt}>
                Bem vindo ao "One Post", aplicativo voltado para avaliar contéudos cinematográficos.
            </Text>

            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('HomeScreen2')} >
                <Text style={styles.BTtext}>Avaliar contéudos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('HomeScreen3')} >
                <Text style={styles.BTtext}>Adicionar contéudo</Text>
            </TouchableOpacity>

        </View> 
    </View>
    );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#65CDD3',
   flexDirection: 'column',
 },
 cabecario: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 25,
    height: 500,
    padding: 20,
    borderRadius: 5,
 },
 txt: {
    fontWeight: 'bold',
    fontSize: 15,
 },
 botao: {
    marginTop: 30,
    padding: 8,
    height: 50,
    width: 200,
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
  img: {
    height: 250,
    width: 250,
  },
});
