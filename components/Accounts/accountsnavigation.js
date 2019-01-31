import React,{Component} from 'react';
import {createMaterialTopTabNavigator,createAppContainer} from 'react-navigation';
import ShopSettings from './ShopSettings';
import ChangePassword from './ChangePassword';
const settingsTabs = createMaterialTopTabNavigator ({
  ShopSettings: {
    screen: ShopSettings,
    navigationOptions: {
      tabBarLabel: 'ShopSettings',
  
    }
  },
  ChangePassword: {
    screen: ChangePassword,
    navigationOptions: {
      tabBarLabel: 'ChangePassword',
    
    }
  },
 
},
  {//router config
    initialRouteName: 'ShopSettings',
    order: ['ShopSettings','ChangePassword'],
    //navigation for complete tab navigator
    navigationOptions: {
      tabBarVisible: true
    },
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      
      labelStyle: {
        fontSize: 9,
        width:100
      },
      style:{
        backgroundColor:'white'
      }
   
    }
  
  });
    
const Appcon=createAppContainer(settingsTabs);
export default class accountsnavigation extends Component {
  render(){
return (
    <Appcon />
)
}
}