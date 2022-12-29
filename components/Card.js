import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, ScrollView, View, FlatList, Touchable, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';




const enables = true; 
export default function Card(props){

    
const [enable, setEnable]   = useState(false)
// const [isDone, setDone]     = useState(false)

const expand = ()=>{
    
    setEnable(!enable);

}



    return ( 
        <TouchableOpacity onPress={expand}>

        <View style = { styles.card }>

            <Text> {props.title} </Text>
            
            {/* { x &&  */}
            { enable && props.details && <Text > {props.details }</Text>}
            {/* } */}  
            <TouchableOpacity style= {styles.checkButton} >

            {
                props.isDone ? 
                <Icon name = 'radio-button-checked' size = {30} />
                : 
                <Icon name = 'radio-button-unchecked' size = {30}/>
            }
            </TouchableOpacity>
        </View>
        
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#212F3C',
    },
    card: {
    
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 2,
      elevation: 1,
      backgroundColor: '#fff',
      borderRadius: 2,
      padding: 16,
      margin: 5,
      marginHorizontal:20, 
      justifyContent: 'space-between',
      flexDirection : 'row', 
    },
    checkButton: {
        height: 30, 
        width: 30,
        elevation: 30,
        borderRadius: 25,

    

        shadowOffset:{width: 0, height: 1},
         
    }
  });