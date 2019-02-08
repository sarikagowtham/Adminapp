import React,{Component} from 'react';
import {createMaterialTopTabNavigator,createAppContainer} from 'react-navigation';
import Users from './Users';
import CreateUser from './CreateUser';
import SMS from './SMS';
const settingsTabs = createMaterialTopTabNavigator ({
  Users: {
    screen: Users,
    navigationOptions: {
      tabBarLabel: 'Users',
  
    }
  },
  CreateUser: {
    screen: CreateUser,
    navigationOptions: {
      tabBarLabel: 'CreateUser',
    
    }
  },
  SMS: {
    screen: SMS,
    navigationOptions: {
      tabBarLabel: 'SMS',
    
    }
  },
 
},
  {//router config
    initialRouteName: 'Users',
    order: ['Users','CreateUser','SMS'],
    //navigation for complete tab navigator
    navigationOptions: {
      tabBarVisible: true
    },
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      labelStyle: {
        fontSize: 9,
      },
      style:{
        backgroundColor:'white'
      }
   
    }
  
  });
    
const Appcon=createAppContainer(settingsTabs);
export default class ordernavigation extends Component {
  render(){
return (
    <Appcon />
)
}
}