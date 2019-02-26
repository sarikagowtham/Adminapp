import React, { Component } from 'react';
import { ScrollView,View,StyleSheet,Picker, RefreshControl,FlatList } from 'react-native';
import { Card,Button } from 'react-native-elements'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {displayUser} from '../../project11/redux/actions/userDisplayActions';
import {List,ListItem,Body,Text} from 'native-base';
 
class Ordered extends Component {
  constructor(props){
    super(props);
  this.state={
    mobilenumber:'',
    name:'',
    id:'',
    totalamount:''
    
  };

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
  this.setState({name:''})
  this.setState({id:''})
  this.setState({totalamount:''})
}
    state = { 
    isFetching: false,
 }
  handleaddress=()=>{
    this.setState({isFocused:true});
 
  }
  componentWillMount(){
    this.props.displayUser();
  }
 

 
    render() {
     
       return(
         <View>
           
       <ScrollView>
      
        <List>
        {this.props.displayuser.user.map(p => (
            <Card>
        <ListItem key={p._id}>
       
        <Body>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
        <Text>{p.mobilenumber}</Text>
        <Text>-</Text>
        <Text>{p.name}</Text>
        <Text note>{p.id}[26.02.2019]</Text>
        <Text note>{p.totalamount}[Cash]</Text>
        </View>
        <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
             <Button style={styles.Button}
              title="Edit"
              type="clear"/>
             <Button style={styles.Button}
              title="Show Details"
              type="clear"/>
             </View>
             <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
             <View style={{paddingTop:15}}>
             <Text>Change Status</Text>
             </View>
             <View style={{paddingLeft:15}}>
             <Picker
              style={{height: 50, width: 150}}
              selectedValue={(this.state && this.state.pickerValue) || 'a'}
              onValueChange={(value) => {
              this.setState({pickerValue: value});}}>
            
           <Picker.Item label="DRAFT" value={'a'}/>
           <Picker.Item label="ORDERED" value={'b'}/>
           <Picker.Item label="PROCESSING" value={'c'}/>
           <Picker.Item label="INTRANSIT" value={'d'}/>
           <Picker.Item label="DELIVERED" value={'e'}/>
         
      
      </Picker>
      </View>
      </View>
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
  
    export default connect(mapStateToProps,{ displayUser })(Ordered);
  