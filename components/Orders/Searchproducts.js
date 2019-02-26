import React from 'react';
import {View,Text,StyleSheet,Button} from "react-native";
import { SearchBar,Card,ListItem,List,ScrollView } from 'react-native-elements';
import {displayUser} from '../../project11/redux/actions/userDisplayActions';
import {connect} from 'react-redux';

class Searchproducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          clicks: 0,
          show: true
        };
      }
    
      IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
      }
      DecreaseItem = () => {
        this.setState({ clicks: this.state.clicks - 1 });
      }
    
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };
    render() {
      const { search } = this.state;
     

      return (
    //       <View>
    //    <View>
    //        <SearchBar 
    //     placeholder="Search..."
    //     onChangeText={this.updateSearch}
    //     value={search}
    //     platform="android"/>
    //   </View>
       
            
    //           {/* <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
    //           <Button onClick={this.DecreaseItem}title='-'></Button>
    //           <View>
    //           <Text> { this.state.show ?  this.state.clicks : '' }</Text>
    //           </View>
    //           <Button onClick={this.IncrementItem}title='+'></Button>
             
      
    //           </View> */}
             
    //           </View>
    
   <View>
        <View>
            <SearchBar 
         placeholder="Search..."
         onChangeText={this.updateSearch}
         value={search}
         platform="android"/>
       </View>
   
 
    <View>
  <ScrollView>
 
   <List>
   {this.props.displayuser.user.map(p => (
       <Card>
   <ListItem key={p._id}>
  
   <Body>
   <View style={{flexDirection:'row',justifyContent:'center'}}>
   <Text>{p.name}</Text>
 
   </View>
  
          <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
           <Button onClick={this.DecreaseItem}title='-'></Button>
               <View>
               <Text> { this.state.show ?  this.state.clicks : '' }</Text>
               </View>
               <Button onClick={this.IncrementItem}title='+'></Button>
              </View>
       
       
   </Body>
   </ListItem>
   </Card>
   ))}
   </List>
   </ScrollView>
   </View>
   </View>
      );
    }
  }
  const mapStateToProps = (state) =>({
    displayuser : state.displayuser
  });
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });
  export default connect(mapStateToProps,{ displayUser })(Searchproducts);