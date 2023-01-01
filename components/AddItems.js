    import { StatusBar } from 'expo-status-bar';
    import { useState } from 'react';
    import { StyleSheet, Text, ScrollView, View, FlatList, TouchableOpacity, Alert, TextInput } from 'react-native';
    import Icon from 'react-native-vector-icons/MaterialIcons';

    export default function AddItems({ dataList, addFunction}){


        const [ toggle, setToggle] = useState(false)
        const [ title, setTitle ] = useState('')
        const [ detail, setDetail] = useState('')

        

        const inputBox = () => {

            console.log('transition')
            setToggle(!toggle);
            // Alert.alert('Title', <TextInput></TextInput>)
        }

        const AddToList = () => {
        

            const newItem = {
                id: dataList.length,
                title: title,
                details: detail,
                isDone: false
                
            }

            addFunction(newItem);
            // console.log(dataList)
            setToggle(!toggle);

            
        }

        return (
            
            <View style = {styles.footer}>
            {!toggle && <TouchableOpacity onPress={inputBox}>
                
            <View style = {styles.addButton}>

                <Icon name="add" color = "white" size= {30}/>
                
            </View>
            </TouchableOpacity>}
            {toggle && 
            <View style = {styles.modal}>
                <TextInput
                    placeholder='add a new task to the list'
                    value={title}
                    onChange = {event => setTitle(event.nativeEvent.text)}

                /> 
                <TextInput
                    placeholder= 'details'
                    value ={ detail}
                    onChange = {event => setDetail(event.nativeEvent.text)}
                    placeholderTextColor = 'white'
                    
                />
                <TouchableOpacity
                    style = {styles.buttons}
                    onPress={inputBox}>
                        <Text>
                        Cancel
                    </Text> 
                </TouchableOpacity>

                <TouchableOpacity
                    style = {styles.buttons}
                    onPress={AddToList}>
                        <Text>
                        Done
                    </Text> 
                </TouchableOpacity>


                
            </View>
            }
            </View>
        )
        }

    const styles = StyleSheet.create(
        {
            footer:{
                position: "absolute",
                bottom: 0, 
                width: "100%",
                hight: "100%",
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 0, 
                justifyContent: "center",
                alignItems: "center", 

                
            },

            addButton: {
                height: 50, 
                width: 50,
                elevation: 40,
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                backgroundColor: '#18222c',
                shadowOffset:{width: 0, height: 1},
                margin: 3, 
            },
            modal: {

                height: 300,
                width: "100%",
                position: 'absolute', 
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#18222c',
                bottom: 0



            }
            , 
            buttons: {
                backgroundColor: 'white',
                height : 30, 
                width :  100,
                padding: 5,
                margin: 20, 
                alignItems: 'center', //makes the "cancel" and "done" texts aligned in the center of the box
            }
                
            

        }
    )