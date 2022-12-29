import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, FlatList } from 'react-native';
import { useState } from 'react';
import Card from "./components/Card"
import data from "./data"
import Header from "./components/Header";
import AddItems from "./components/AddItems";
import AddTaskModal from './components/AddTaskModal';
export default function App() {

  const [TheData, TheDatasetter] = useState([

    {
      id  : Math.random, 
      title : "first one",
      details: "this is the detail for the first one",
      isDone: true

   },
   {
      id : Math.random, 
      title: "second one",
      details: "this is the detail for the second one",
      isDone: false 
   },
   {
      id: Math.random, 

      title: "third with no details",
      isDone: false
   }


  ])

  const newData = (item)=>{
    TheDatasetter([...TheData, item])
    console.log(TheData)
  }

  const Cards = ({todo}) => {
    return (
      <Card
        {...todo}
      />

    )
  }

  return (
    <View style={styles.container}>
      
      <StatusBar hidden />
      <Header/>
      <FlatList
       data = {TheData}
       renderItem={({item})=> <Cards todo = {item}/>}
      />
      
      <AddItems dataList = {TheData} addFunction= {newData}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212F3C',
  }
});
