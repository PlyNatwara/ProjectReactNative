import React,{useState} from 'react';
import { StyleSheet, SafeAreaView, TextInput, Text, View } from 'react-native'

const TextInputReview = () => {
    const [inputValue, setInputValue] = useState('');
    return (
        <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
        <Text style={styles.text} >{inputValue}</Text>
          <TextInput
            placeholder='Text'
            style={styles.textInputStyle}
            onChangeText={inputValue => {
              setInputValue(inputValue);
            }}
          />
          
        </View>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 20,
      backgroundColor: '#ffffff',
      justifyContent: 'center',
    },
    input: {
      width: 250,
      height: 44,
      padding: 10,
      marginTop: 20,
      marginBottom: 10,
      backgroundColor: '#e8e8e8',
    },
    text: {
        color: 'blue',
    }
  });

export default TextInputReview

