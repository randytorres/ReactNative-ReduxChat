import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import Login from './components/Login';

class App extends Component {
  componentWillMount() {
      const config = {
      apiKey: "AIzaSyAh5Rpk3uwqxIsmlWzibQMpZCe6DK6eB5U",
      authDomain: "chat-app-3ce09.firebaseapp.com",
      databaseURL: "https://chat-app-3ce09.firebaseio.com",
      storageBucket: "chat-app-3ce09.appspot.com",
      messagingSenderId: "144149829282"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Login />
      </View>
    )
  }
}

export default App;
