import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, FlatList, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';

export default function home({ navigation }){
  const pressHandler = () => {
    navigation.navigate('ReviewDetails')
  }

  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta catch em all (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not so "final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ])

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({item}) =>(
          <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetails', item)}>
            <Text style={globalStyles.titleText}>
              {item.title}
            </Text>
          </TouchableOpacity>          
        )}
      />
      {/* <Button title='go to review dets' onPress={ pressHandler }/> */}
    </View>
  )
}