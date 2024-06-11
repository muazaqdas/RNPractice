// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';

export default function App() {

  const [goals, setGoals] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(true);

  function addGoalHandler(inputGoal){
    if(inputGoal!=='') {
      setGoals(currentGoal=> [...currentGoal, inputGoal]);
      endAddGoalHandler();
    }
  }
  function endAddGoalHandler(){
    setIsModalOpen((e)=> e = !isModalOpen)
  }
  function deleteItemHandler(id){
    // here the way delete funct is implemented, it deletes the clicked on as well as all the other items which are same as the clicked one
    setGoals((currentGoals) => {
      return currentGoals.filter((goal)=> goal != currentGoals[id]);
    } )
  }
  return (
    <SafeAreaView style={styles.appContainer}>
      <GoalInput addGoalHandler = {addGoalHandler} visible={isModalOpen} onCancel={endAddGoalHandler} />
      <GoalList goals = {goals} switchAddGoal={endAddGoalHandler} deleteItem={deleteItemHandler}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#E7F1F2',
    paddingTop:48,
    alignItems:'center',
  },
});
