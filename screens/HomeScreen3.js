import {StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native';
import { TextInput } from "react-native-gesture-handler";

export default function HomeScreen3({ navigation }) {

    return (
      <View style={styles.container}>
        <View style={styles.cabecario}>

            <TextInput style={styles.input} placeholder='Título'/>
            <TextInput style={styles.input} placeholder='Ano de lançamento'/>
            <TextInput style={styles.input} placeholder='Gênero' />

            <View style={styles.box}>
              <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('HomeScreen', Alert.alert('Sua avaliação foi adicionada com sucesso!'))} >
                  <Text style={styles.BTtext}>Adicionar contéudo</Text>
              </TouchableOpacity>
            </View>
        </View>  
      </View>   
    )
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#65CDD3',
   alignItems: 'center',
 },
 cabecario: {
    backgroundColor: 'white',
    flexDirection: 'column',
    margin: 20,
    width: 300,
    height: 400,
    padding: 20,
    borderRadius: 5,
 },
 box: {
  alignItems: 'center',
 },
 botao: {
    marginTop: 15,
    padding: 8,
    height: 50,
    width: 200,
    backgroundColor: '#1CA4B7',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
 },
 input: {
    marginTop: 8,
    padding: 8,
    height: 45,
    borderWidth: 1,
    backgroundColor: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    borderRadius: 1,
  },
  BTtext: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },

});