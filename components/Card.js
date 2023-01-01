import { StatusBar } from 'expo-status-bar';
import {Dimensions} from 'react-native';
import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { StyleSheet, Modal, Text, ScrollView, View, FlatList, Touchable, TouchableOpacity, Vibration, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';





export default function Card({props, toggleDone}){


const [selected, setSelect] = useState ( false);    
const [enable, setEnable]   = useState(false)
const [editing, setedit] = useState(false)





const viewRef = useRef(null);
const [cardDimentions, setDimentions] = useState(null)
// const [newTitle, setNewTitle] = useState('')
// const [newDetails, setNewDetails] = useState('')


// useLayoutEffect(

//     ()=> {
//         viewRef.current.measureLayout((x,y,width,height)=>{
//             setDimentions({x, y, width,height})
//         })
//     }, [viewRef]


// )

// useEffect(()=>{
//     measure(viewRef, (frame)=> {
//         setDimentions(frame);
//     });
// }, []


// )





const startEdit = () => 
{ 
    setedit(true);
}

const stopEdit = ()=>
{
    setedit(false);

}
const expand = ()=>{
    
    setEnable(!enable);

}

const longPressfucntion = ()=> { 

    viewRef.current?.measure((x,y,width,height, pageX, pageY)=> {setDimentions({x :x, y:y, height:height, width:width, pageX: pageX, pageY: pageY})})

    setSelect(!selected); 
    
    Vibration.vibrate(200,0);
    
    console.log(cardDimentions);
}

const doneFunc = ()=> 
{
    newItem = {
        id : props.id,
        title : props.title,
        details: props.details,
        isDone: (!(props.isDone))
        // ...props, isDone : (!props.isDone)
    }
    console.log(props);
    console.log(newItem);
    toggleDone(newItem);

}

const unselector = () => {
    if (selected == true){
        
        setSelect(!selected)
        
    }
    console.log ("random touch detected")
}





    return ( 
        
        
        <TouchableOpacity onPress={expand} onLongPress ={longPressfucntion}> 

        <View style = { styles.card }

            ref = {viewRef}
            // onLayout = {(event)=> { setDimentions(event.nativeEvent.layout)
            //     console.log(" this is the dimentions of the event" )
            //     console.log(event.nativeEvent.layout )
            // }}
            
            // {(event)=> {var newLayout = event.nativeEvent.layout; 
            // setDimentions(newLayout)}}
        >

            <Text> {props.title} </Text>
            
            
            { enable && props.details && <Text > {props.details }</Text>}
            
            <Modal
                animationType ='fade'
                transparent = {true}
                visible = {selected}
                onRequestClose = {unselector}
            >
                <TouchableOpacity
                    style= {styles.background}
                    activeOpacity = {1}
                    onPressOut = {unselector}
                >
                    

                    <View style = {[styles.forModal, 
                    {
                        
                        top : cardDimentions? cardDimentions.pageY: 400 ,
                        left : cardDimentions? cardDimentions.pageX: 0 ,
                        width: cardDimentions? cardDimentions.width : 200, 
                        height: cardDimentions? cardDimentions.height : 70, 
                        backgroundColor: 'red',
                            
                        
                    }
                    ]}
                    > 

                    
                        <TouchableOpacity style = {styles.checkButton} onPress = {startEdit}> 
                            <Icon name =  'edit'  size = {25}/> 
                        </TouchableOpacity>
                        
                        <TouchableOpacity style = {styles.checkButton}>
                            <Icon name = 'delete' size = {25} />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>
            
            
            <TouchableOpacity style= {styles.checkButton}  onPress= {doneFunc}>

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


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
         
    },
    Bigscreen: {
        height: windowHeight,
        width : windowWidth,
        backgroundColor: 'white'
    },
    background: {
        height: windowHeight,
        width: windowWidth, 
        x : 0,
        y: 0, 
    }


  });
