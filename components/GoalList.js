import React from 'react';
import { StyleSheet, View,Text, FlatList, Pressable, Button } from 'react-native';

const GoalItem = ({itemData,deleteItem})=>(
    <View style={styles.listItemContainer}>
        <Pressable 
            style={({pressed})=>pressed && styles.pressedItem}
            android_ripple={{color: 'black', borderless: true}}
            onPress={deleteItem.bind(this, itemData.index)}>
            <Text style={styles.listItems}>{itemData.item}</Text>
        </Pressable>
    </View>
)

const GoalList = (props) => {
    return (
    <View style={styles.listContainer}>
        <View>
            <Button title='Add Goal' onPress={props.switchAddGoal} />
        </View>
        <Text style={styles.listHeading}>List of Goals</Text>
        <FlatList
          style={{width:'100%'}}
          data={props.goals}
          renderItem={(itemData)=>{
            return(
            <GoalItem itemData={itemData} deleteItem={props.deleteItem}/>
            );
          }}
          alwaysBounceVertical={false}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    listContainer:{
    flex:6,
    width:'100%',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    paddingHorizontal:30,
    gap:12,
  },
  listHeading:{
    fontSize: 20,
    color:'teal',
    fontWeight:'800'
  },
  listItems:{
    color:'white',
    paddingVertical:4,
    paddingHorizontal:12,
  },
  listItemContainer:{
    borderRadius:20,
    backgroundColor:'teal',
    // alignSelf:'flex-start',
  },
  pressedItem:{
    opacity: 0.5,
  }
})

export default GoalList;
