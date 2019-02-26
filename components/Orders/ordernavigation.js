import React,{Component} from 'react';
import {createMaterialTopTabNavigator,createAppContainer} from 'react-navigation';
import Ordered from './Ordered';
import Processing from '../Orders/Processing';
import Delivered from './Delivered';
import Search from './Search';
import Create from './Create';
import Searchproducts from './Searchproducts';
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
  
  Create: {
    screen: Create,
    navigationOptions: {
      tabBarLabel: 'Create',
    
    }
  },
  Searchproducts: {
    screen: Searchproducts,
    navigationOptions: {
      tabBarLabel: 'Searchproducts',
    
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      tabBarLabel: 'Search',
    
    }
  },
},
  {//router config
    initialRouteName: 'Ordered',
    order: ['Ordered','Processing','Delivered','Create','Searchproducts','Search'],
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
    
const Appcontainer=createAppContainer(settingsTabs);
export default class ordernavigation extends Component {
  render(){
return (
    <Appcontainer />
)
}
}