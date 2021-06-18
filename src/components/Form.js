import React from "react";
import { ActivityIndicator, Button, Text, TextInput, View } from "react-native";

class Form extends React.Component {
  state = {
    isLoading: false
  };
  componentDidMount(){
    console.log('mounting')
  }
  componentDidUpdate(){
    console.log('updating')
  }
  render() {
    return (
      <View>
        <TextInput placeholder="Enter your username" />
        <Button
          title="Done"
          onPress={() => {
            this.setState({ isLoading: true });
            setTimeout(() => {
              this.setState({isLoading: false});
            }, 2000);
          }}
        ></Button>
        {this.state.isLoading ? <ActivityIndicator style={{backgroundColor: 'black'}} /> : null }
      </View>
    );
  }
}
export default Form;
