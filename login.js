import React from 'react';
import { View,StyleSheet } from "react-native";
import { Input,Button,Card } from 'react-native-elements';
import {loginUser} from './project11/redux/actions/authActions';
import {connect} from 'react-redux';
 class Login extends React.Component {
   constructor(){
     super();
     this.state = {
       mobilenumber : "",
       password : ""
     };
   }

   handlepress = () => {
     const userLogin = {
       mobilenumber : this.state.mobilenumber,
       password : this.state.password
     }
     this.props.loginUser(userLogin);
   }
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View>
            <Card>
             <View style={{flexDirection: 'row',justifyContent:'center'}}>
             <Button style={styles.Button}
              title="Bharati Stores"
              type="outline"/>
             </View>
             <Input
              placeholder='Mobile Number'/>

             <Input secureTextEntry={true}
              placeholder='Password'/>
             <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
             <Button  onPress={()=> this.handlepress()} style={styles.Button}
              title="Login"
              type="solid"/>
             <Button style={styles.Button}
              title="ForgetPassword.?"
              type="clear"/>
             </View>
             </Card>
             </View>
        
      
        
      );
    }
}
  const styles = StyleSheet.create({
  
       Button: {
       height:10,
        width:20,
      padding:5,
  marginRight:20
 }
});
  const mapStateToProps = (state) => ({
    auth : state.auth,
  });
  export default connect(mapStateToProps, {loginUser})(Login);