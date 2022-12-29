import { StyleSheet, Text, ScrollView, View, FlatList } from 'react-native';
import React, {useState, useEffect} from'react'

export default function Header(props){

    const[time, setTime] = useState(new Date);
    useEffect(() => {

        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000); 
        return ()=> clearInterval(interval); 
        
        
    }, [])

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const thedate = time.getDate();
    const month   = time.getMonth();
    const year    = time.getFullYear();

    return (
        <View style = {styles.header}>
            {/* <Text style = {styles.date}> {thedate}/{month}/{year} </Text> */}
            <Text style= {styles.clock}> {hours}:{minutes}: {seconds}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80, 
        padding: 16,
        backgroundColor: '#18222c',
        textAlign: 'center'
    },
    date: {
        fontSize: 12,
        color: 'white',
        textAlign: 'center',
        padding:3

    },
    clock: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'


    }
})
 