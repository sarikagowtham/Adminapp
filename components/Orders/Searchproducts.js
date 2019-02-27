import React from 'react';
import { ScrollView,View,StyleSheet,Picker, RefreshControl,FlatList } from 'react-native';
import { Card,Button,SearchBar } from 'react-native-elements'
import {List,ListItem,Body,Text} from 'native-base';
class Searchproducts extends React.Component {
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
        <View>
        <ScrollView>
             <List>
               <ListItem>
             <Card>
               <Body>
            <Text>Sunflower refine oil-1ltr</Text>
            </Body>
            </Card>
            </ListItem>
            </List>
            </ScrollView>
        </View>
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
  export default Searchproducts;