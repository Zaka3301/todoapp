import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, FlatList } from 'react-native';
import { useState , useRef} from 'react';
import Card from "./components/Card"
import AddItems from "./components/AddItems";

import Header from "./components/Header";


export default function App() {

  const parentRef = useRef(null); 
  const [TheData, TheDatasetter] = useState([

    {
      id  : 0, 
      title : "first one",
      details: "this is the detail for the first one",
      isDone: true

   },
   {
      id : 1, 
      title: "second one",
      details: "this is the detail for the second one",
      isDone: false 
   },
   {
      id: 2, 

      title: "third with no details",
      isDone: false
   }


  ])

  const newData = (item)=>{
    TheDatasetter([...TheData, item])
    console.log(TheData)
  }

  const toggleDone = (item)=> {
    console.log(item);
    var newList = []
    for (let x in TheData){
        console.log(x)
        if (TheData[x].id == item.id){
          newList = [...newList, item]
          console.log('the ids matched');
        }
        else{
          newList= [...newList, TheData[x]]
        }

    }

    TheDatasetter(newList)


  }



  return (
    <View style={styles.container}
      ref = {parentRef}
    >
      
      <StatusBar hidden />
      <Header/>
      <FlatList
       data = {TheData}
       renderItem={({item})=> <Card props=  {item} toggleDone= {toggleDone} />}
      />
      
      <AddItems  dataList = {TheData} addFunction= {newData}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212F3C',
  }
});
