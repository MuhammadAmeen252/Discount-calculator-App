import React, { useState } from 'react';
import {StyleSheet,View,Text,Button, TextInput } from 'react-native';


const App=()=>{
  return(
    <View style={styles.container}>
      <View style={styles.title}><Text style={styles.titleText} >Discount Calculator</Text></View>
      <View style={styles.inpContainer}>
      <TextInput style={styles.textInpBox}
       placeholder='Enter Original Price'
       ></TextInput>
       <TextInput style={styles.textInpBox}
       placeholder='Enter Dicount Percentage'
       ></TextInput>
      {/* <Button title="ADD TO DO"></Button> */}
      </View>   
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    margin:10,
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea"
  },
  inpContainer:{
    margin:10,
  },
  textInpBox:{
    borderColor:'blue',
    borderBottomWidth:3,
    width:'80%',
    marginRight:10,
    padding:5,  
    fontSize:18,
    color:'blue'
  },
  title:{
    width:'100%',
    backgroundColor:'yellow',
    alignItems:'center'
  }
  ,titleText:{
    fontSize:30,
    fontWeight:'bold',
    color:'blue'
  }
})
export default App
