import React from 'react';
import {useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput, View, Button, } from 'react-native';

const TextInputPractice1 = () => {
    const [Name,setName] = useState('')
    const [Email,setEmail] = useState('')
    const isEmpty =()=>{
    if(!Name.trim()){
        alert('Please Enter Your Name')
        return
    }
    if(!Email.trim()){
        alert('Please Enter Your Email')
        return
    }
    alert('Success')
}
  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
        <TextInput
            placeholder='Enter Name'
            style={styles.textInputStyle}
            onChangeText = {(Name)=>{setName(Name)}}
          />
        <TextInput
            placeholder='Enter Email'
            style={styles.textInputStyle}
            onChangeText = {(Email)=>{setEmail(Email)}}
          />
        <View style={{marginTop: 15}}>
        <Button
            title ="Submit"
            color = "#D3D3D3"
            onPress = {isEmpty}
        />
        </View>
        </View>
    </SafeAreaView>
  );
};

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
});

export default TextInputPractice1;
