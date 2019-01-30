import React,{Component} from 'react';
import {createMaterialTopTabNavigator,createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
 import Ordered from './Ordered';
 import Processing from '../Orders/Processing';
 import Delivered from './Delivered';
 import Search from './Search';
 import Create from './Create';
const settingsTabs = createMaterialTopTabNavigator ({
  Ordered: {
    screen: Ordered,
    navigationOptions: {
      tabBarLabel: 'Ordered',
  
    }
  },
  Processing: {
    screen: Processing,
    navigationOptions: {
      tabBarLabel: 'Processing',
    
    }
  },
  Delivered: {
    screen: Delivered,
    navigationOptions: {
      tabBarLabel: 'Delivered',
    
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      tabBarLabel: 'Search',
    
    }
  },
  Create: {
    screen: Create,
    navigationOptions: {
      tabBarLabel: 'Create',
    
    }
  },
},
  {//router config
    initialRouteName: 'Ordered',
    order: ['Ordered','Processing','Delivered','Search','Create'],
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
export default class ordernavigation extends Component {
  render(){
return (
    <Appcon />
)
}
}