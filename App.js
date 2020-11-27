import React, { useState } from 'react';
import {StyleSheet,View,Text, TextInput, TouchableOpacity } from 'react-native';


const App=()=>{

  const [price,setPrice]=useState('')
  const [percentage,setPercentage]=useState('')
  const savedPrice=()=>{
  
    if((price >0 && percentage>0 && percentage<=100)){
      return <Text style={{fontWeight:'bold',fontSize:30,color:'white'}}>Rs.{(price*(percentage/100)).toFixed(2) }</Text>
    }
    else{
    return <Text style={{fontSize:15,color:'white'}}>Price must be greater than 0
     and percentage must be between 0 and 100 and both must be numbers.</Text>
    }
  
  }
  
  const finalPrice=()=>{
      if((price > 0 && percentage > 0 && percentage<=100))
      return <Text style={{fontWeight:'bold',fontSize:30,color:'white'}}>Rs. 
      {(price-(Math.floor(price*(percentage/100)))).toFixed(2)}</Text>

      else{
      return <Text style={{fontSize:15,color:'white'}}>Price must be greater than 0
      and percentage must be between 0 and 100 and both must be numbers.</Text>
      } 
  }
  return(
    <View style={styles.container}>
      <View style={styles.title}><Text style={styles.titleText} >Discount Calculator</Text></View>
      <View style={styles.inpContainer}>
      <TextInput style={styles.textInpBox}
       placeholder='Enter Original Price'
       onChangeText={price => setPrice(price)}
       ></TextInput>
       <TextInput style={styles.textInpBox}
       placeholder='Enter Dicount Percentage'
       onChangeText={percentage => setPercentage(percentage)}
       ></TextInput>
       
         {/* <TouchableOpacity onPress={}>
           <View style={styles.button}>
             <Text style={styles.buttonText}>Calculate</Text>
           </View>
         </TouchableOpacity> */}
        <View style={styles.ResultTextContainer}>
        <Text style={styles.displayResultText}>You saved:{"\n"} {savedPrice()}</Text>
        <Text style={styles.displayResultText}>Final Price:{"\n"} {finalPrice()}</Text>
        </View>
      </View>   
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    margin:10,
    flex: 1,
    padding: 24,
  },
  inpContainer:{
    margin:10,
  },
  textInpBox:{
    borderColor:'#2a9df4',
    borderBottomWidth:3,
    width:'100%',
    marginRight:10,
    padding:5,  
    fontSize:18,
    color:'grey'
  },
  title:{
    width:'100%',
    
    alignItems:'center'
  }
  ,titleText:{
    fontSize:30,
    fontWeight:'bold',
    color:'#1167b1'
  },
  ResultTextContainer:{
    margin:20,
    backgroundColor:'#2a9df4',
    borderRadius:10,
    borderColor:'grey',
    padding:15
  },
  displayResultText:{
    fontSize:20,
    margin:5,
    color:'white'
  }
})
export default App
