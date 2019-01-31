import React from 'react';
import {
    View,
    Text,
    StyleSheet
  } from "react-native";
  
 class ChangePassword extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>Settings</Text>
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
  export default ChangePassword;