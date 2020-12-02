import React, { useState } from 'react';
import { StyleSheet,View,Text, TextInput, TouchableOpacity, FlatList, Modal,Image } from 'react-native';


const App=()=>{

  const [price,setPrice]=useState('')
  const [percentage,setPercentage]=useState('')
  const [list,setList]=useState([])
  const [key,setKey]=useState(0)
  const [modalVisibility,setModalVisibility]=useState(false)
  const savedPrice=()=>{
    if(price!=='' && percentage!==''){
      if((price >0 && percentage>0 && percentage<=100)){
        return <Text style={{fontWeight:'bold',fontSize:30,color:'white'}}>Rs.{(price*(percentage/100)).toFixed(2) }</Text>
      }
      else{
      return <Text style={{fontSize:15,color:'white'}}>Price must be greater than 0
       and percentage must be between 0 and 100 and both must be numbers.</Text>
      }
    }
  }
  
  const finalPrice=()=>{
    if(price!=='' && percentage!==''){
      if((price > 0 && percentage > 0 && percentage<=100))
      return <Text style={{fontWeight:'bold',fontSize:30,color:'white'}}>Rs. 
      {(price-(Math.floor(price*(percentage/100)))).toFixed(2)}</Text>

      else{
      return <Text style={{fontSize:15,color:'white'}}>Price must be greater than 0
      and percentage must be between 0 and 100 and both must be numbers.</Text>
      } 
    }
      
  }
  
  const handleSave=()=>{
    setKey(key+2)
    const item= {key:key,price:'Actual Price: Rs.'+price,
    percentage:'Discount Percentage: '+percentage,
    priceAfterDisc:'Price after Discount: Rs.'+ (price-(Math.floor(price*(percentage/100)))).toFixed(2)}
    setList([...list,item])
  }
  const showModal=()=>{
    setModalVisibility(true)
  }
  const hideModal=()=>{
    setModalVisibility(false)
  }
  return(
    <View style={styles.container}>
      
      <Modal visible={modalVisibility} animationType='slide'>
        <View>
          <View style={styles.row}>
            <TouchableOpacity activeOpacity = { .5 } onPress={ hideModal }>
            <Image
            source={require('./assets/back-arrow.png')}
            style={{ width: 40, height: 40 }}
            />
            </TouchableOpacity>
            
            <Text style={styles.modaltitleText}>History</Text>
          </View>
        
          <FlatList
          keyExtractor={(item) => item.key.toString()}
          data={list}
          renderItem = {({item})=>(
            <View style={styles.modalTextContainer}>
              <Text style={styles.displayResultText}>{item.price}{"\n"}{item.percentage}%{"\n"}
              {item.priceAfterDisc}</Text>
            </View>
          
          )}>
        </FlatList>
        </View>
      </Modal>

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
       
        <View style={styles.ResultTextContainer}>
        <Text style={styles.displayResultText}>You saved:{"\n"} {savedPrice()}</Text>
        <Text style={styles.displayResultText}>Final Price:{"\n"} {finalPrice()}</Text>
        </View>
      </View> 
      <TouchableOpacity onPress={handleSave}>
           <View style={styles.button}>
             <Text style={styles.buttonText}>Save</Text>
           </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={showModal}>
           <View style={styles.button}>
             <Text style={styles.buttonText}>View history</Text>
           </View>
      </TouchableOpacity>
      
      
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    margin:10,
    flex: 1,
    padding: 24,
  },
  row:{
    flexDirection:'row'
  }
  ,
  listFlat:{
    backgroundColor:'grey'
  },
  inpContainer:{
    margin:10,
  },
  modaltitleText:{
    fontSize:30,
    fontWeight:'bold',
    color:'#f01d71',
    marginLeft:'24%'
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
  ScrollView:{
    backgroundColor:'grey'
  },
  title:{
    width:'100%',
    
    alignItems:'center'
  }
  ,titleText:{
    fontSize:30,
    fontWeight:'bold',
    color:'#f01d71'
  },
  ResultTextContainer:{
    margin:20,
    backgroundColor:'#2a9df4',
    borderRadius:10,
    borderColor:'grey',
    padding:15
  },
  modalTextContainer:{
    margin:10,
    backgroundColor:'#2a9df4',
    borderRadius:10,
    borderColor:'grey',
    padding:10
  },
  displayResultText:{
    fontSize:20,
    margin:5,
    color:'white'
  },
  button:{
    borderRadius:8,
    paddingVertical:10,
    paddingHorizontal:5,
    backgroundColor:'#f01d71',
    margin:15,
    marginLeft:30,
    marginRight:28
  },
  buttonText:{
    color:'white',
    fontWeight:'bold',
    textTransform:'uppercase',
    fontSize:16,
    textAlign:'center'
  }
})
export default App
