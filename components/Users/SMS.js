import React from 'react';
import {
  Button,
    View,
    Text,
    StyleSheet
  } from "react-native";
  
 class SMS extends React.Component {
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
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <View>
        <Button onClick={this.IncrementItem}
        title='+'></Button>
        <Button onClick={this.DecreaseItem}
        title='-'></Button>
        <Button onClick={this.ToggleClick}
        title=''>
          { this.state.show ? 'Hide number' : 'Show number' }
        </Button>
        <Text>
        { this.state.show ?  this.state.clicks : '' }
        </Text>
        </View>
    );
  }
}
  export default SMS;