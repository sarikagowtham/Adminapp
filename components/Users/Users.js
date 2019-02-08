import React, { Component } from 'react';
import { ScrollView,View,StyleSheet, RefreshControl } from 'react-native';
import { Card,Button } from 'react-native-elements'
//import CreateUsers from './CreateUser';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {displayUser} from '../../project11/redux/actions/userDisplayActions';
import {Spinner,Icon,List,ListItem,Body,Text} from 'native-base';
 
class Users extends Component {
  state={isFocused:false,  refreshing: false}
  handleaddress=()=>{
    this.setState({isFocused:true});
 
  }
  componentWillMount(){
    this.props.displayUser();
  }
  _onRefresh = () => {
    this.setState({refreshing: true});
    fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }
    render() {
     
       return(
         <View>
        
       <ScrollView
        refreshControl = {
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
       >
      
        <List>
        {this.props.displayuser.user.map(p => (
            <Card>
        <ListItem key={p._id}>
       
        <Body>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
        <Text>{p.name}</Text>
        <Text>{p.mobilenumber}</Text>
        </View>
        <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
             <Button style={styles.Button}
              title="Edit User"
              type="clear"/>
             <Button style={styles.Button}
              title="Delete User"
              type="clear"/>
             </View>
             <View style={{flexDirection:'row',justifyContent:'center'}}>
        <Text>{p.landmark}</Text>
        <Text>{p.date}</Text>
        </View>
        <View style={{flexDirection: 'row',justifyContent:'center'}}>
             <Button style={styles.Button} onPress= {this.handleaddress}
              title="Show Address"
              type="clear"/>
              </View>
              {this.state.isFocused && <View>
                <Text>bharathi colony</Text>
              </View>
              }
        </Body>
        </ListItem>
        </Card>
        ))}
        </List>
        </ScrollView>
        
        {/* <List>
        {this.props.displayuser.map(p => (
        <ListItem key={p.id}>
        
        <Body>
      
        <Text>{p.name}</Text>
       
      
        </Body>
        </ListItem>
        ))}
        </List> */}
       
        </View>
)
       }
    }
    

     const mapStateToProps = (state) =>({
       displayuser : state.displayuser
     });

  //    function mapStateActionsToProps(dispatch) {
  //     return bindActionCreators(displayUser, dispatch);
  // }
  const styles = StyleSheet.create({
  
    Button: {
    height:10,
     width:20,
   padding:5,
marginRight:20
}
});
  
    export default connect(mapStateToProps,{ displayUser })(Users);
    