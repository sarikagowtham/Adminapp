import React from 'react';
import {View,StyleSheet,ActivityIndicator,ScrollView } from "react-native";
import { Container, Content, List, ListItem, Left, Body, Thumbnail, Text} from 'native-base';
import {Card,Image,Button} from 'react-native-elements'
 class Products extends React.Component {
    render() {
      return (
        <View style={styles.container}>
         <ScrollView>
        <Body>
         <Card>
              
                <Text>Raw Rice Ponni-1kg</Text>
                <Text>Rice&Flour</Text>
                <Text note>Display Order-1</Text>
                <Text note>Banner link key-1</Text>
                <Text note>Original Price-70</Text>
                <Text note>Selling Price-65</Text>
                <Text note>Purchase Price-60</Text>
                <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                <Button style={styles.Button}
                 title="Edit"
                 type="clear"/>
                <Button style={styles.Button}
                 title="Delete"
                 type="clear"/>
                <Button style={styles.Button}
                 title="Upload Image"
                 type="clear"/>
                </View>
                <Image
                 source={{ uri: 'http://nammamaligai.com/wp-content/uploads/2016/10/ponni-rice-1207412-435x430.jpg'}}
                 style={{ width: 350, height: 350 }}
                 PlaceholderContent={<ActivityIndicator />}/>
             
         </Card>
         </Body>

         <Body>
         <Card>
              
                <Text>Maggie Noodles-140gm</Text>
                <Text>Noodles&Pasta</Text>
                <Text note>Display Order-2</Text>
                <Text note>Banner link key-582</Text>
                <Text note>Original Price-24</Text>
                <Text note>Selling Price-23</Text>
                <Text note>Purchase Price-20</Text>
                <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                <Button style={styles.Button}
                 title="Edit"
                 type="clear"/>
                <Button style={styles.Button}
                 title="Delete"
                 type="clear"/>
                <Button style={styles.Button}
                 title="Upload Image"
                 type="clear"/>
                </View>
                <Image
                 source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXPo4We-xRkOVX6-Bo4N2ZqmVOTCod0ZX-4ddbQLmuX5fAuYHxFg'}}
                 style={{ width: 350, height: 350 }}
                 PlaceholderContent={<ActivityIndicator />}/>
             
         </Card>
         </Body>
         <Body>
         <Card>
              
                <Text>Fortunite Oil-1ltrs</Text>
                <Text>Oil and Ghee</Text>
                <Text note>Display Order-3</Text>
                <Text note>Banner link key-356</Text>
                <Text note>Original Price-140</Text>
                <Text note>Selling Price-120</Text>
                <Text note>Purchase Price-110</Text>
                <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                <Button style={styles.Button}
                 title="Edit"
                 type="clear"/>
                <Button style={styles.Button}
                 title="Delete"
                 type="clear"/>
                <Button style={styles.Button}
                 title="Upload Image"
                 type="clear"/>
                </View>
                <Image
                 source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu9Te9OMS_3bpWjfRMOEEoEk-Po1cdubsunj6jzu_I5e82Sgl7'}}
                 style={{ width: 350, height: 350 }}
                 PlaceholderContent={<ActivityIndicator />}/>
             
         </Card>
         </Body>
         </ScrollView>
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
  export default Products;