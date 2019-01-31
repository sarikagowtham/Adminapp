import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Card } from 'react-native-elements'
//import CreateUsers from './CreateUser';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {displayUser} from '../../project11/redux/actions/userDisplayActions';
 class Users extends Component {
  componentWillMount(){
    this.props.displayUser();
  }

    render() {
     
       return(
           <View>
       <Card>
  
{this.props.displayuser.map(user=>(
  
  <Text key={user._id} user={user} >
{user.name}
</Text>

))  
}
 
 
 
</Card>

</View>
)
       }
    }

     const mapStateToProps = (state) =>({
       displayuser : state.displayuser.user
     });

  //    function mapStateActionsToProps(dispatch) {
  //     return bindActionCreators(displayUser, dispatch);
  // }
    export default connect(mapStateToProps,{ displayUser })(Users);