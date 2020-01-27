import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, FlatList } from 'react-native';
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
export class FetchExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount() {
    return fetch('myapi')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }



  render() {

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) =>
          <View style={styles.flatview}>
            <Text>{item.des}</Text>
            <Image style={{width: 363, height: 403, borderWidth: 1, borderColor: 'red'}} source={{uri: `data:image/jpeg;base64,${item.img}`}} />
          </View>
        }
        />
      </View>
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
      <FetchExample></FetchExample>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(5, 165, 209, 0.25)',
    justifyContent: 'center',
    alignItems:'stretch',
  },
  text: {
    color: 'white',
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
  flatview: {
    justifyContent: 'center',
    paddingTop: 30,
    borderRadius: 2,
    alignItems:'stretch',
  },
});