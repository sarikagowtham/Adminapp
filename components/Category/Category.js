import { View,  Picker,StyleSheet,TouchableOpacity,Text,TextInput
} from 'react-native';
import React,{Component} from 'react'; 

import {Card} from 'react-native-elements';
const Blue = "#428AF8";
const Light_gray="#D3D3D3";

 class Category extends Component 
{

  
  state={isFocused:false,
    isClicked:false }

    handleSubmit=event=>{
      this.setState({isClicked:true});
   
    }


  handleFocus=event=>{
    this.setState({isFocused:true});

    if(this.props.onFocus)
      this.props.onFocus(event)
  }
  render() {

   
    const{isFocused}=this.state;
    const {onFocus}=this.props;
    return (
     <View style={{ justifyContent: 'center', margin: 8,}}>
     <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
     <TouchableOpacity onPress={this.handleSubmit}>
                <Text style={styles.button}>Create </Text>
              </TouchableOpacity>
              </View>
              {this.state.isClicked && 
        <Card
          title='Create Category'>
          <View >
            <TextInput 
            placeholder="Name"
            selectionColor={Blue}
            underlineColorAndroid={isFocused ? Blue : Light_gray}
            onFocus={this.handleFocus}
            style={styles.textinput}/>

          <TextInput 
            placeholder="Display Order"
            selectionColor={Blue}
            underlineColorAndroid={isFocused ? Blue : Light_gray}
            onFocus={this.handleFocus}
            style={styles.textinput}/>

          <TextInput 
            placeholder="Description"
            selectionColor={Blue}
            underlineColorAndroid={isFocused ? Blue : Light_gray}
            onFocus={this.handleFocus}
        style={styles.textinput}/>  
         <View style={{flexDirection:"row", justifyContent:'space-evenly'}}> 
<Text>Hide Category</Text>
      <Picker
         style={{height: 50, width: 150}}
         selectedValue={(this.state && this.state.pickerValue) || 'a'}
         onValueChange={(value) => {
           this.setState({pickerValue: value});}}>
         <Picker.Item label="Yes" value={'a'}/>
         <Picker.Item label="No" value={'b'}/>
         
      </Picker>
      </View>    
      
          </View>
         <View style={{flexDirection:"row", justifyContent:'space-between'}}> 
          <TouchableOpacity>
            <Text style={styles.button}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.button1}>Cancel</Text>
          </TouchableOpacity>
          </View>
</Card>
              } 

              <Card
              title='category'>
              </Card>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5e5e5"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  button:{
    borderRadius:16,
    backgroundColor:'purple',
    color: 'white',
    fontSize:15,
    textAlign:'center',
    width:70,
  },
  button1:{
    borderRadius:16,
    backgroundColor:'purple', 
    color: 'white',
    fontSize:15,
    textAlign:'center',
    width:70,
  },
  textinput:{
      height:50,
      paddingLeft:6
  }
});
export default Category;