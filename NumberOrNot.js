import React from 'react';
import {useState} from 'react';
import {Text, Button, SafeAreaView, StyleSheet, TextInput, View} from 'react-native';



const App = () => {
  const [inputValue,setInputValue] = useState('')
  const checkValueIsNumberOrNot = () =>{
    if(isNaN(inputValue)){
      alert('It\'s not a Number.');
    }else{
      alert('It\'s a Number');
    }
  }
  return(
    <SafeAreaView style={{flex:1}}>
      <View style = {styles.container}>
        <TextInput
        placeholder = "Enter Text"
        style = {styles.textInputStyle}
        onChangeText = {(inputValue)=>{setInputValue(inputValue)}}
        />
        <Button
        title = "Check Value is Number or not"
        onPress = {checkValueIsNumberOrNot}
        />
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60
  },
  textInputStyle: {
    textAlign: 'center',
    height: 50,
    width: '70%',
    marginBottom: 10,
  }
});

export default App;