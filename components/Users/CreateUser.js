import React, { Component } from 'react';
import { View, TextInput,StyleSheet,Picker,ScrollView} from 'react-native';
import { Button,Header } from 'react-native-elements';
import {Icon} from "react-native-vector-icons";
export default class CreateUser extends Component {
  constructor(props){
    super(props);
  this.state={
    name:'',
    mobilenumber:'',

  };
  }
  render() {
    const { navigate } = this.props.navigation;
     return (
      
    
        <View style= {styles.container}>
       <ScrollView contentContainerStyle={{flexGrow: 1}}>
     
       
        <Button style={styles.Button}
         title="Reset"
         type="outline"
         />
         <Picker
         style={{height: 50, width: 150}}>
         <Picker.Item label="Admin"/>
         <Picker.Item label="Staff"/>
         <Picker.Item label="Logistics"/>
         <Picker.Item label="Customer"/>
         </Picker>
 
        <TextInput style = {styles.input} 
        placeholder='Name' 
        placeholderTextColor='#808080'
      
        onChangeText={(name)=>this.setState({name})}   
        value={this.state.name} />

       <TextInput style = {styles.input}   
       placeholder='Mobile Number' 
       placeholderTextColor='#808080'
      
       onChangeText= {(mobilenumber)=>this.setState({mobilenumber})}
       value={this.state.mobilenumber}/>

       
       <TextInput style = {styles.input}   
       placeholder='Email' 
       placeholderTextColor='#808080'/>   
       
       <TextInput style = {styles.input}   
       placeholder='Password' 
       placeholderTextColor='#808080'/>

       
       <TextInput style = {styles.input}   
       placeholder='Landmark' 
       placeholderTextColor='#808080'/>

       
       <TextInput style = {styles.input}   
       placeholder='Pincode' 
       placeholderTextColor='#808080'/>

       
       <TextInput style = {styles.input}   
       placeholder='State' 
       placeholderTextColor='#808080'/>

       
       <TextInput style = {styles.input}    
       placeholder='Delivery Address' 
       placeholderTextColor='#808080'/> 
        </ScrollView> 
        <Button style={styles.Button}
         title="Register"
         type="solid"
         onPress={() =>
          navigate('Users', {
            name: this.state.name,
            mobilenumber:this.state.mobilenumber
          })
        }/>
         
       </View>   

       
    );
  }
}
  const styles = StyleSheet.create({
    container: {
        flex:0.5,
        flexDirection: 'column',
        padding: 10
    },
    input:{
       
        height: 40,
        backgroundColor: '#D3D3D3',
        marginBottom: 30,
        padding: 10,
        color: '#000000'
    
    },
    Button:{
      height:50,
      width:20,
      padding:5,
      marginTop:10,
      marginBottom:10


    },
   
})
