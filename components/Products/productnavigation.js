import React,{Component} from 'react';
import {createMaterialTopTabNavigator,createAppContainer} from 'react-navigation';
import Products from './Products';
import CreateProduct from './CreateProduct';
import Offers from './Offers';
const settingsTabs = createMaterialTopTabNavigator ({
  Products: {
    screen: Products,
    navigationOptions: {
      tabBarLabel: 'Products',
  
    }
  },
  CreateProduct: {
    screen: CreateProduct,
    navigationOptions: {
      tabBarLabel: 'Create_Product',
    
    }
  },
  Offers: {
    screen: Offers,
    navigationOptions: {
      tabBarLabel: 'Offers',
    
    }
  },
 
},
  {//router config
    initialRouteName: 'Products',
    order: ['Products','CreateProduct','Offers'],
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