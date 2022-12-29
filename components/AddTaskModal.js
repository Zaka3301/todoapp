import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, LayoutAnimation, Platform, UIManager } from 'react-native';

const AddTaskModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  const toggleModal = () => {
    LayoutAnimation.configureNext({
        duration: 3000,
        update: {
          type: LayoutAnimation.Types.easeInEaseOut,
        },
      });
    setIsModalVisible(!isModalVisible);




  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal}>
        <Text>Add Task</Text>
      </TouchableOpacity>
      {isModalVisible && (
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.input}
            placeholder="Task Title"
            value={taskTitle}
            onChangeText={text => setTaskTitle(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Task Description"
            value={taskDescription}
            onChangeText={text => setTaskDescription(text)}
          />
          <TouchableOpacity onPress={toggleModal}>
            <Text>Done</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default AddTaskModal;