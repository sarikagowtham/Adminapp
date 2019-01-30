import React from 'react';
import {
    View,
    Text,
    StyleSheet
  } from "react-native";
  
export class Ordered extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>Open Up App.js to start working with your app</Text>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });
  export default Ordered;