import React,{Component} from 'react';
import {createMaterialTopTabNavigator,createAppContainer} from 'react-navigation';
import Category from './Category';
import SubCategory from './SubCategory';
const settingsTabs = createMaterialTopTabNavigator ({
  Category: {
    screen: Category,
    navigationOptions: {
      tabBarLabel: 'Category',
  
    }
  },
  SubCategory: {
    screen: SubCategory,
    navigationOptions: {
      tabBarLabel: 'SubCategory',
    
    }
  },
 
},
  {//router config
    initialRouteName: 'Category',
    order: ['Category','SubCategory'],
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