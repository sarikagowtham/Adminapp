import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Card } from 'react-native-elements'
//import CreateUsers from './CreateUser';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as displayUser from '../../project11/redux/actions/userDisplayActions';
 class Users extends Component {
  componentWillMount(){
    this.props.displayUser();
  }

    render() {
     var userArray = Object.keys(this.props.displayuser);
     
       return(
           <View>
       <Card>
  
{userArray.map(i=>(
  <Text key={i}>
{userArray[i]}
</Text>

))  
}
 
 
 
</Card>

</View>
)
       }
    }

     const mapStateToProps = (state) =>({
       displayuser : state.displayuser
     });

     function mapStateActionsToProps(dispatch) {
      return bindActionCreators(displayUser, dispatch);
  }
    export default connect(mapStateToProps,mapStateActionsToProps)(Users);