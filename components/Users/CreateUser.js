import React, { Component } from 'react';
import { View, TextInput,StyleSheet,Picker,ScrollView,Dimensions} from 'react-native';
import { Button,Header } from 'react-native-elements';
import {Icon} from "react-native-vector-icons";
import {connect} from 'react-redux';
import {registerUser} from '../../project11/redux/actions/authActions';
const Blue = "#428AF8";
const Light_gray="#D3D3D3";

 class CreateUser extends Component {
  constructor(props){
    super(props);
  this.state={
    name:'',
    mobilenumber:'',
password:'',

  };
  state={isFocused:false}




  handleFocus=event=>{
    this.setState({isFocused:true});

    if(this.props.onFocus)
      this.props.onFocus(event)
  }
}
  render() {
    //const { navigate } = this.props.navigation;
     
    const{isFocused}=this.state;
    const {onFocus}=this.props;
    const {minHeight} = this.state;
// Manually memorise changing style or use something like reselect...
if (this.lastMinHeight != minHeight) {
    this.lastMinHeight = minHeight;
    this.contentContainerStyle = {minHeight: minHeight}}
     return (
      
    
      <View>
     <ScrollView
    contentContainerStyle={{flexGrow : 1, justifyContent : 'center',height : Dimensions.get('window').height}}>

     
       <View>
       <View style={{flexDirection: 'row',justifyContent:'flex-end'}}>
        <Button style={styles.Button}
         title="Reset"
        
         type="solid"
         
         />
         </View>
         <Picker
         style={{height: 50, width: 150}}
         selectedValue={(this.state && this.state.pickerValue) || 'a'}
         onValueChange={(value) => {
           this.setState({pickerValue: value});}}>
         <Picker.Item label="Admin" value={'a'}/>
         <Picker.Item label="Customer" value={'b'}/>
           <Picker.Item label="Logistics" value={'c'}/>
           <Picker.Item label="Staff" value={'d'}/>
         
      </Picker>
 
        <TextInput 
      placeholder="Name"
      selectionColor={Blue}
      underlineColorAndroid={isFocused ? Blue : Light_gray}
      onFocus={this.handleFocus}
      style={styles.textinput}
      
        onChangeText={(name)=>this.setState({name})}   
        value={this.state.name} />

       <TextInput  
       placeholder='Mobile Number' 
       selectionColor={Blue}
      underlineColorAndroid={isFocused ? Blue : Light_gray}
      onFocus={this.handleFocus}
      style={styles.textinput}
      
       onChangeText= {(mobilenumber)=>this.setState({mobilenumber})}
       value={this.state.mobilenumber}/>

       
       <TextInput   
       placeholder='Email' 
       selectionColor={Blue}
      underlineColorAndroid={isFocused ? Blue : Light_gray}
      onFocus={this.handleFocus}
      style={styles.textinput}/>   
       
       <TextInput 
       placeholder='Password' 
       secureTextEntry={true} 
       selectionColor={Blue}
       underlineColorAndroid={isFocused ? Blue : Light_gray}
       onFocus={this.handleFocus}
       style={styles.textinput}
       onChangeText= {(password)=>this.setState({password})}
       value={this.state.password}
       />


       <TextInput   
       placeholder='Landmark' 
       selectionColor={Blue}
       underlineColorAndroid={isFocused ? Blue : Light_gray}
       onFocus={this.handleFocus}
       style={styles.textinput}/>

       
       <TextInput  
       placeholder='Pincode' 
       selectionColor={Blue}
       underlineColorAndroid={isFocused ? Blue : Light_gray}
       onFocus={this.handleFocus}
       style={styles.textinput}/>

       
       <TextInput  
       placeholder='State' 
       selectionColor={Blue}
      underlineColorAndroid={isFocused ? Blue : Light_gray}
      onFocus={this.handleFocus}
      style={styles.textinput}/>

       
       <TextInput  
       placeholder='Delivery Address' 
       selectionColor={Blue}
       underlineColorAndroid={isFocused ? Blue : Light_gray}
       onFocus={this.handleFocus}
       style={styles.textinput}/> 
       
        <Button style={styles.Button}
         title="Register"
         type="solid"
         onPress={() =>
         this.props.registerUser({
           
            name: this.state.name,
            mobilenumber:this.state.mobilenumber,
           password:this.state.password

         })
        }/>
        </View>
         </ScrollView>  
       </View>   

       
    );
  }
}
  const styles = StyleSheet.create({
   
    textinput:{
      height:50,
      paddingLeft:6
  },
    Button:{
      height:10,
      width:10,
      padding:5,
    marginRight:20



    },
   
})
const mapStateToProps = (state) =>({
  auth: state.auth
});
export default connect(mapStateToProps,{registerUser})(CreateUser);