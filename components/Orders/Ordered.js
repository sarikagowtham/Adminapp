import React, { Component } from 'react';
import { ScrollView,View,StyleSheet,Picker, RefreshControl,FlatList } from 'react-native';
import { Card,Button } from 'react-native-elements'
import {List,ListItem,Body,Text} from 'native-base';
 
class Ordered extends Component {
 
    render() {
     
       return(
         <View>
           <ScrollView>
             <List>
               <ListItem>
             <Card>
               <Body>
                  <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <Text>7200987708</Text>
                    <Text>-</Text>
                    <Text>Manoj Kumar</Text>
                  </View>
                  <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
             <Button style={styles.Button}
              title="Edit"
              type="clear"/>
             <Button style={styles.Button}
              title="Show Details"
              type="clear"/>
             </View>
             <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
             <View style={{paddingTop:15}}>
             <Text>Change Status</Text>
             </View>
             <View style={{paddingLeft:15}}>
             <Picker
              style={{height: 50, width: 150}}
              selectedValue={(this.state && this.state.pickerValue) || 'a'}
              onValueChange={(value) => {
              this.setState({pickerValue: value});}}>
            
           <Picker.Item label="DRAFT" value={'a'}/>
           <Picker.Item label="ORDERED" value={'b'}/>
           <Picker.Item label="PROCESSING" value={'c'}/>
           <Picker.Item label="INTRANSIT" value={'d'}/>
           <Picker.Item label="DELIVERED" value={'e'}/>
         
      
      </Picker>
      </View>
      </View>
                  </Body>
             </Card>
              </ListItem> 
             </List>
           </ScrollView>
      </View>
       )
    }
  }
  const styles = StyleSheet.create({
  
    Button: {
    height:10,
     width:20,
   padding:5,
marginRight:20
}
});
  
    export default Ordered;
  