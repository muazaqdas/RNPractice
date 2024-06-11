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
    <Modal visible={props.visible} animationType='slide' style={styles.modal}>
    <View style={{flex:1,padding:30, alignItems:'center',backgroundColor:'#E7F1F2'}}>
        <View style={styles.inputContainer}>
            <TextInput value={inputGoal} style={styles.input} onChangeText={goalInputHandler} placeholder='What is your goal' />
            <View style={styles.buttonContainer}>
                <Button color={'#E7F1F2'} onPress={addGoal} title='Add Goal' />
                <Button color={'#E7F1F2'} onPress={props.onCancel} title='Cancel' />
            </View>
        </View>

        <View style={{backgroundColor:'#E7F1F2',borderBottomWidth:3,borderLeftWidth:3,borderColor:'#B4D5DA',width:100,height:50,position:'absolute', top:220, left:40, borderRadius:100}}></View>
        <View style={{backgroundColor:'#E7F1F2',borderBottomWidth:3,borderLeftWidth:3,borderColor:'#B4D5DA',width:50,height:100,position:'absolute', top:220, right:30, borderRadius:100}}></View>
        <View style={{backgroundColor:'#E7F1F2',width:200,height:200,position:'absolute', bottom:120, right:-60, borderRadius:100}}></View>

    </View>
    </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer:{
    width:'100%',
    height:450,
    borderRadius:22,
    backgroundColor:'teal',
    margin:'auto',
    justifyContent:'center',
    alignItems:'center',
    gap:12,
    paddingHorizontal:30,
    borderColor:'#B4D5DA',
    borderWidth:3,
  },
  input:{
    width:'100%',
    fontSize:20,
    color:'#B4D5DA',
    borderBottomWidth:2,
    borderBottomColor:'#E7F1F2',
  },
  buttonContainer:{
    flexDirection:'row',
    gap:20,
  }
})

export default GoalInput;
