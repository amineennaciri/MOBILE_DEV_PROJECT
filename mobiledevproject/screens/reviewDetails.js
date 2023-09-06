import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { globalStyles } from '../styles/global';


export default function reviewDetails( { navigation } ){
  const pressHandler = () =>{
    navigation.goBack();
  }
  return (
    <View style={globalStyles.container}>
      <Text>
        {navigation.getParam('title')}
      </Text>
      <Text>
        {navigation.getParam('rating')}
      </Text>
      <Text>
        {navigation.getParam('key')}
      </Text>
      {/* <Button title='back to home screen' onPress={pressHandler}/> */}
    </View>
  )
}