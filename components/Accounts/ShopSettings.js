import { View, Button, Picker,StyleSheet,TouchableOpacity,Text,TextInput
} from 'react-native';
import React,{Component} from 'react'; 

import {Card} from 'react-native-elements';
const Blue = "#428AF8";
const Light_gray="#D3D3D3";

export default class ShopSettings extends Component 
{
 state={isFocused:false}
  handleFocus=event=>{
    this.setState({isFocused:true});

    if(this.props.onFocus)
      this.props.onFocus(event)
  }
  render() {

   
    const{isFocused}=this.state;
    const {onFocus}=this.props;
    return (
     <View style={{ justifyContent: 'center', margin: 8,  }}>
   
   <View style={{justifyContent:'space-evenly',flexDirection:"column"}} >
    <Text>Cash on Delivery</Text>
   
      <Picker
         style={{height: 40, width: 100}}
         selectedValue={(this.state && this.state.pickerValue) || 'a'}
         onValueChange={(value) => {
           this.setState({pickerValue: value});}}>
         <Picker.Item label="ON" value={'a'}/>
         <Picker.Item label="OFF" value={'b'}/>
      </Picker>
   
    <Text>Card on Delivery</Text>
   
      <Picker
         style={{height: 40, width: 100}}
         selectedValue={(this.state && this.state.pickerValue) || 'a'}
         onValueChange={(value) => {
           this.setState({pickerValue: value});}}>
         <Picker.Item label="ON" value={'a'}/>
         <Picker.Item label="OFF" value={'b'}/>
      </Picker>
    
    <Text>Online Payment</Text>
   
      <Picker
         style={{height: 40, width: 100}}
         selectedValue={(this.state && this.state.pickerValue) || 'a'}
         onValueChange={(value) => {
           this.setState({pickerValue: value});}}>
         <Picker.Item label="ON" value={'a'}/>
         <Picker.Item label="OFF" value={'b'}/>
      </Picker>
      
    <Text>GST Billing</Text>
         <Picker
         style={{height: 40, width: 100}}
         selectedValue={(this.state && this.state.pickerValue) || 'a'}
         onValueChange={(value) => {
           this.setState({pickerValue: value});}}>
         <Picker.Item label="ON" value={'a'}/>
         <Picker.Item label="OFF" value={'b'}/>
      </Picker>
    </View>
    <View >
            <TextInput 
            placeholder="Minimum Order Amount"
           
            underlineColorAndroid={isFocused ? Blue : Light_gray}
            onFocus={this.handleFocus}
            style={styles.textinput}/>

          <TextInput 
            placeholder="Free Delivery Amount"
            
            underlineColorAndroid={isFocused ? Blue : Light_gray}
            onFocus={this.handleFocus}
            style={styles.textinput}/>

          <TextInput 
            placeholder="Delivery Charge"
            underlineColorAndroid={isFocused ? Blue : Light_gray}
            onFocus={this.handleFocus}
            style={styles.textinput}/>  

      
        <TextInput 
            placeholder="Delivery Information"
            underlineColorAndroid={isFocused ? Blue : Light_gray}
            onFocus={this.handleFocus}
            style={styles.textinput}
            editable = {true}
        maxLength = {40}
        numberOfLines = {4}/> 
        
      
          </View>
         <View > 
          <TouchableOpacity>
            <Text style={styles.button}>Submit</Text>
          </TouchableOpacity>

    </View>     

 
     </View>
    );
  }
}

const styles = StyleSheet.create({
  
  button:{
    borderRadius:20,
    backgroundColor:'purple',
    color: 'white',
    fontSize:20,
    textAlign:'center',
    height:30,
  
    
  },
  textinput:{
      height:50,
      paddingLeft:6
  }
});