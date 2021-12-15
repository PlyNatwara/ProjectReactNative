import React from 'react';
import {StyleSheet, Text, View, Alert, SafeAreaView, Button} from 'react-native';

const AlertExample = () => {

    const simpleAlertHandler =()=>{
        alert('Hello, Simple Alert')
    }

    const twoOptionHandler =()=>{
        Alert.alert(
            //title
            'Hello',
            //body
            'I\'m two option alert. Do u want to cancel ?',
            [
                {
                    text: 'Yes',
                    onPress: ()=>console.log('Yes Pressed')
                },
                {
                    text: 'No',
                    onPress: ()=>console.log('No Pressed')
                }
            ],
            {cancelable:false}
        )
    }

    const threeOptionHandler =()=>{
        Alert.alert(
            //title
            'Hello',
            //body
            'I\'m three option alert. Do u want to cancel ?',
            [
                {
                    text: 'maybe',
                    onPress: ()=>console.log('Maybe Pressed')
                },
                {
                    text: 'Yes',
                    onPress: ()=>console.log('Yes Pressed')
                },
                {
                    text: 'No',
                    onPress: ()=>console.log('No Pressed')
                },
            ],
            {cancelable:false}
        )

    }

  return (
    <SafeAreaView style={{flex:1}}>
        <View style = {styles.container}>
            <Button
            title='Simple Alert'
            onPress={simpleAlertHandler}
            />

            <Button
            title='Alert with Two Options'
            onPress={twoOptionHandler}
            />

            <Button
            title='Alert With Three Options'
            onPress={threeOptionHandler}
            />

        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});

export default AlertExample;
