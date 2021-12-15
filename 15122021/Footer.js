import React, {useState, useEffect} from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Footer = () => {

    const users = [
        {id:1, name: 'Hiromu'},
        {id:2, name: 'Akita'}
    ]

    const [count, setCount] = useState(0);
    //Always Update When Render
    useEffect(()=>{
        console.log('use Effect 1')
    })
    //Backend
    useEffect(()=>{
        console.log('use Effect 2')
    },[])
    //จะทำเมื่อตัวแปรใน [] มีการเปลี่ยนแปลง
    useEffect(()=>{
        console.log('use Effect 3')
    },[count])


    return (
        <View>
            <Text style = {styles.title}>Thai-Nichi Institute of Technology {count}</Text>
            {
                users.map((user, index)=>{
                    return <Text key={users.id}>{index+1}.{user.name}</Text>
                })
            }

            <Button 
                title='Submit'
                onPress={ ()=>{
                   //setCount(5) //update ค่า count
                   setCount(count+1)
                }}
            />
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        color: 'green'
    }
})
