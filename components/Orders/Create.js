import React, { Component } from 'react';
import { View, TextInput,StyleSheet,Picker,ScrollView,Dimensions,Alert,Text} from 'react-native';
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
    mobilenumber:'',
    
  };
//   state={isFocused:false}




//   handleFocus=event=>{
//     this.setState({isFocused:true});

//     if(this.props.onFocus)
//       this.props.onFocus(event)
//   }
 }
 alert = (msg) => {
  console.log(msg)
}

onDeleteBTN = () => {
  this.alert(' OnDelete')
}

handlepress(){
  const userData = {
   
    mobilenumber : this.state.mobilenumber,
   
  }
  this.props.registerUser(userData);
  this.setState({mobilenumber:''})

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
    

     
       <View>
       <View style={{flexDirection: 'row',justifyContent:'flex-end'}}>
        <Button style={styles.Button}
         title="Reset"
         type="solid"/>
         </View>
        
          
         
      
     

       <TextInput  
       placeholder='Mobile Number' 
       selectionColor={Blue}
       underlineColorAndroid={isFocused ? Blue : Light_gray}
       onFocus={this.handleFocus}
       style={styles.textinput}
       onChangeText= {(mobilenumber)=>this.setState({mobilenumber})}
       value={this.state.mobilenumber}/>
       <View>
         <Text>Payment Method</Text>
       </View>
        <View style={{flexDirection: 'row',justifyContent:'flex-end'}}>
        <Picker
         style={{height: 50, width: 150}}
         selectedValue={(this.state && this.state.pickerValue) || 'a'}
         onValueChange={(value) => {
            this.setState({pickerValue: value});}}>
            
           <Picker.Item label="Cash" value={'a'}/>
           <Picker.Item label="Card" value={'b'}/>
         
      
      </Picker>
      </View>
      
        <Button onPress={()=>this.handlepress()} style={styles.Button}
         title="Search Products"
         type="solid"/>
         <Button onPress={()=>this.handlepress()} style={styles.Button}
         title="Clear Products"
         type="outline"
         
        />
        </View>
      
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