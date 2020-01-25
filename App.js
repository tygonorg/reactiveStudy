import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
class Blink extends Component {

  componentDidMount() {
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
        <Text style={styles.textShow}>{this.props.text1}</Text>
      );
    }
    return (
      <Text style={styles.textShow}>{this.props.text}</Text>
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
      uri: 'https://znews-photo.zadn.vn/w660/Uploaded/ofh_btgazspf/2019_06_14/DSC_5505_1.jpg'
    };
    return (
      <Image source={pic} style={{ width: 193, height: 110 }} />
    );
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <Bananas pic='Xin chào' />
      <Text style={styles.text}>Xin chào React Native</Text>
      <Blink text='Đây là ba Hùng' text1='Ba chào các con!' />
      <Greeting name='Mộc Mộc' />
      <Greeting name='Viên Viên' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(5, 165, 209, 0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#3498db',
    fontSize: 17,
  },
  textgreatings: {
    color: '#3af',
    fontSize: 25,
  },
  textShow: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
  },
});