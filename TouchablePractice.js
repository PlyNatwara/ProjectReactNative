import React from 'react';
import {useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';

const TouchablePractice = () => {
    const [Email,setEmail] = useState('')
    const [Pass,setPass] = useState('')
    const Credentials =()=>{
        alert('Email : ' + Email + '\nPassword : '+Pass)
    }
    return (
        <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
        <TextInput
            placeholder='Email'
            style={styles.textInputStyle}
            onChangeText = {(Email)=>{setEmail(Email)}}
          />
        <TextInput
            placeholder='Password'
            style={styles.textInputStyle}
            onChangeText = {(Pass)=>{setPass(Pass)}}
          />
        <View style={styles.Submit}>
        <TouchableOpacity
        activeOpacity={0.5}
        onPress = {Credentials}
        >
        <Text>Submit</Text>
        </TouchableOpacity>
        </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 35,
    },
    textInputStyle: {
      width: '100%',
      height: 40,
      paddingHorizontal: 5,
      borderWidth: 0.5,
      marginTop: 15,
    },
    Submit: {
      backgroundColor: "#841584",
      marginTop: 15,
      padding: 7,
    }
  });

export default TouchablePractice
