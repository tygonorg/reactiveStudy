import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList,SectionList } from 'react-native';
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
export  class SectionListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}
export class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { key: 'Devin' },
            { key: 'Dan' },
            { key: 'Dominic' },
            { key: 'Jackson' },
            { key: 'James' },
            { key: 'Joel' },
            { key: 'John' },
            { key: 'Jillian' },
            { key: 'Jimmy' },
            { key: 'Julie' },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
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
      <FlatListBasics></FlatListBasics>
      <SectionListBasics></SectionListBasics>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(5, 165, 209, 0.25)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 22,
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
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});