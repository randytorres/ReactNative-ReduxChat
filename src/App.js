import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import Exponent from 'exponent';
import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';


import Login from './components/Login';
import SignUp from './components/SignUp';

export const Router = createRouter(() => ({
  home: () => Login,
  signup: () => SignUp,
}))

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
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('home')} />
      </NavigationProvider>
    )
  }
}

export default App;
