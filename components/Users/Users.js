import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card } from 'react-native-elements'
//import CreateUsers from './CreateUser';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {displayUser} from '../../project11/redux/actions/userDisplayActions';
import {
  Spinner,
  Icon,
  List,
  ListItem,
  Thumbnail,
  Body,
  Text,
  } from 'native-base';
 class Users extends Component {
  componentWillMount(){
    this.props.displayUser();
  }

    render() {
     
       return(
        <ScrollView>
       
        <List>
        {this.props.displayuser.map(p => (
        <ListItem key={p.id}>
        
        <Body>
      
        <Text>{p.name}</Text>
       
      
        </Body>
        </ListItem>
        ))}
        </List>
        </ScrollView>
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