import React, { Component } from "react";
import {View,Text,StyleSheet} from "react-native";

import { createBottomTabNavigator,createAppContainer,createDrawerNavigator,createStackNavigator } from 'react-navigation'
import {Provider} from 'react-redux';
import productnavigation from './components/Products/productnavigation'
import categorynavigation from './components/Category/categorynavigation';
import usernavigation from './components/Users/usernavigation';
import accountsnavigation from './components/Accounts/accountsnavigation';
import ordernavigation from './components/Orders/ordernavigation'
import store from './project11/redux/store'
import Login from './login'
import Home from './home'
import {Icon,Header, Left, Body, Right, Title,Button } from 'native-base';

  


//  const BottomNavigator= createBottomTabNavigator({
//   ordernavigation: {
//     screen: ordernavigation,
//     navigationOptions: {
//       tabBarLabel: 'Orders',
//       tabBarIcon: ({ tintColor }) => (
//        <Icon name="paper" color={tintColor} size={24} />
//       )
//     }
//   },
//   productnavigation: {
//     screen: productnavigation,
//     navigationOptions: {
//       tabBarLabel: 'Products',
//      tabBarIcon: ({ tintColor }) => (
//         <Icon name="grid" color={tintColor} size={24} />
//       )
//     }
//   },
//   categorynavigation: {
//     screen: categorynavigation,
//     navigationOptions: {
//       tabBarLabel: 'Category',
//       tabBarIcon: ({ tintColor }) => (
//         <Icon name="book" color={tintColor} size={24} />
//       )
//     }
//   },
//   usernavigation: {
//     screen: usernavigation,
//     navigationOptions: {
//       tabBarLabel: 'Users',
//       tabBarIcon: ({ tintColor }) => (
//         <Icon name="person" color={tintColor} size={24} />
//       )
//     }
//   },
//   accountsnavigation: {
//     screen: accountsnavigation,
//     navigationOptions: {
//       tabBarLabel: 'Account',
//      tabBarIcon: ({ tintColor }) => (
//         <Icon name="ios-settings" color={tintColor} size={24} />
//       )
//     }
//   },
 
  

// }, {//router config
//     initialRouteName: 'ordernavigation',
//     order: ['ordernavigation', 'productnavigation','categorynavigation','usernavigation','accountsnavigation'],
//     //navigation for complete tab navigator
//     navigationOptions: {
//       tabBarVisible: true
//     },
//     tabBarOptions: {
//       activeTintColor: 'red',
//       inactiveTintColor: 'grey'
//     }
//   });
  
  const login = createStackNavigator({
  Login: { screen: Login,
},
  Home: {screen: Home}
  },{
    initialRouteName: 'Login'
  })
 const AppContainer=createAppContainer(login);
//const AppContainer1=createAppContainer(Tabs);
 export default class App extends Component{
 
 render(){
return(

 <Provider store={store}>
  
  
 <AppContainer/>
 </Provider>
 ) }
}

