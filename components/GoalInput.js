import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const GoalInput = (props) => {
    const [inputGoal, setInputGoal] = useState('');
    
    function goalInputHandler(entry){
        setInputGoal(entry);
      }
    function addGoal(){
        props.addGoalHandler(inputGoal);
        setInputGoal('');
    }
    return (
    <Modal visible={props.visible} animationType='slide' style={{flex:2}}>
        <View style={styles.inputContainer}>
            <TextInput value={inputGoal} style={styles.input} onChangeText={goalInputHandler} placeholder='What is your goal' />
            <View style={styles.buttonContainer}>
                <Button onPress={addGoal} title='Add Goal' />
                <Button onPress={props.onCancel} title='Cancel' />
            </View>
        </View>
    </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    gap:12,
    paddingHorizontal:30,
  },
  input:{
    width:'100%',
    borderBottomWidth:2,
    borderBottomColor:'#cccc',
  },
  buttonContainer:{
    flexDirection:'row',
    gap:20,
  }
})

export default GoalInput;
