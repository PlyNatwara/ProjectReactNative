import React from 'react'
import {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'

const FirstPage = ({navigation}) => {
    const [name, setname] = useState('')
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>React Native Pass Value From One Screen</Text>
            <Text style={styles.textStyle}>Please Insert Your Name to Pass It to Second Screen</Text>
            <TextInput
            placeholder='Enter Your Name'
            style={styles.inputStyle}
            onChangeText = {(name)=>{setname(name)}}
            />
            <Button
            title="Go Next"
            onPress={() => navigation.navigate('Second',{Name: name})}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 20,
    },
    heading: {
      fontSize: 25,
      textAlign: 'center',
      marginVertical: 10,
    },
   
    textStyle: {
      textAlign: 'center',
      fontSize: 16,
      marginVertical: 10,
    },
    inputStyle: {
      width: '80%',
      height: 44,
      padding: 10,
      marginVertical: 10,
      backgroundColor: '#DBDBD6',
    },
  });
  

export default FirstPage

