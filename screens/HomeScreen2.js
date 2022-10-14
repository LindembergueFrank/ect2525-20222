import React, { useEffect, useState } from "react";
import {StyleSheet, View, Image, Text, TouchableOpacity, FlatList, ScrollView, Button} from 'react-native';

export default function HomeScreen2({ navigation }) {

   //const[homeScreen2, setHomeScreen2] = useState([]); 

   const filmes = [
      {
         id: 1,
         scr: require('../img/capa1.jpg'),
         titulo: 'One Piece: Red',
         ano: '2022',
         gen: 'Animação',
      },
      {
         id: 2,
         scr: require('../img/capa2.jpg'),
         titulo: 'A origem',
         ano: '2010',
         gen: 'Ficção Científica',
      },
      {
         id: 3,
         scr: require('../img/capa3.jpg'),
         titulo: 'Interestelar',
         ano: '2014',
         gen: 'Ficção científica',
      },
      {
         id: 4,
         scr: require('../img/capa4.jpg'),
         titulo: 'Vingadores: Ultimato',
         ano: '2019',
         gen: 'Super-herói',
      },
      {
         id: 5,
         scr: require('../img/capa5.jpg'),
         titulo: 'Invocação do mal',
         ano: '2013',
         gen: 'Terror',
      },
      {
         id: 6,
         scr: require('../img/capa6.jpg'),
         titulo: 'Divertida mente',
         ano: '2015',
         gen: 'Animação',
      },
      {
         id: 7,
         scr: require('../img/capa7.jpg'),
         titulo: 'Van Helsing',
         ano: '2004',
         gen: 'Fantasia',
      },
      {
         id: 8,
         scr: require('../img/capa8.jpg'),
         titulo: 'Anjos da Noite',
         ano: '2004',
         gen: 'Ação',
      },
   ];

   /*useEffect(function() {
      async function getFilmes() {
         const response = await fetch('link para ligar ao server');
         const homeScreen2Serv = await response.json(); //resposta "convertida para json"
         setHomeScreen2(homeScreen2Serv) 
      }

      getFilmes();
   }, []);*/

   function renderItem({ item }) {
      return <View style={styles.container}>

         <View style={styles.cabecario}>
             <Image source={item.src}
             style={styles.capa} />
             <Text style={styles.titulo}>{item.titulo}</Text>
             <Text style={styles.titulo}>Lançamento: {item.ano}</Text>
             <Text style={styles.titulo}>Gênero: {item.gen}</Text>

               <ScrollView>
                  <Button style={styles.botao} title="1" onPress={() => alert('Avaliação cadastrada!')} />
                  <Button style={styles.botao} title="2" onPress={() => alert('Avaliação cadastrada!')} />
                  <Button style={styles.botao} title="3" onPress={() => alert('Avaliação cadastrada!')} />
                  <Button style={styles.botao} title="4" onPress={() => alert('Avaliação cadastrada!')} />
                  <Button style={styles.botao} title="5" onPress={() => alert('Avaliação cadastrada!')} />
               </ScrollView>

         </View> 

     </View>
   }

    return (
      <View>

         <FlatList
            data={filmes}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
         />
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
    alignItems: 'center',
    margin: 20,
    width: 300,
    height: 400,
    padding: 20,
    borderRadius: 5,
 },
 capa: {
    width: 150,
    height: 200,
 },
 titulo: {
    margin: 3,
    marginTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
 },
});
