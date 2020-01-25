import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
class Blink extends Component {

  componentDidMount(){
    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  //state object
  state = { isShowingText: true };

  render() {
    if (!this.state.isShowingText) {
      return (
        <Text style={styles.textgreatings}>{this.props.text1}</Text>
      );
    }

    return (
      <Text style={styles.textgreatings}>{this.props.text}</Text>
    );
  }
}
class Greeting extends Component {
  render() {
    return (
        <Text style={styles.textgreatings}>Xin chào {this.props.name}!</Text>
    );
  }
}
class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{ width: 193, height: 110 }} />
    );
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <Bananas pic='123' />
      <Text style={styles.text}>Xin chào React Native</Text>
      <Blink text='Đây là ba Hùng' text1='Ba chào các con!'/>
      <Greeting name='Mộc Mộc' />
      <Greeting name='Viên Viên' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 17,
  },
  textgreatings: {
    color: '#3af',
    fontSize: 25,
  },
});