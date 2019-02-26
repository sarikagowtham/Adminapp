import React from 'react';
import {View,Text,StyleSheet,Container} from "react-native";
import { SearchBar } from 'react-native-elements';
class Search extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };
    render() {
      const { search } = this.state;

      return (
       <View>
           <SearchBar 
        placeholder="Search..."
        onChangeText={this.updateSearch}
        value={search}
        platform="android"/>
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
  export default Search;