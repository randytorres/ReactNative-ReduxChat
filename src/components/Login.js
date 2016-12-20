import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Input, Button } from './Common';
import Exponent from 'exponent';

import { Router } from '../App';

class Login extends Component {

  static route = {
    // navigationBar: {
    //   title: 'Home',
    // }
  }

  _goToSignUp = () => {
    this.props.navigator.push(Router.getRoute('signup'));
  }

  render() {
    const { textColor, title, emailIcon, passwordIcon, container, bottomContainer } = styles;

    return (
        <Image source={require('../images/bg.png')} style={container}>
          <Text style={title}>ReduxChat</Text>
          <View style={{ height: 200, marginTop: 100 }}>
            <Input
              label="EMAIL"
              placeholder="test@test.com"
              onChangeText={() => console.log('test')}
              value={''}>
              <Image source={require('../images/IconProfile.png')} style={emailIcon} />
            </Input>
            <Input
              label="PASSWORD"
              placeholder="password"
              onChangeText={() => console.log('test')}
              value={''}>
              <Image source={require('../images/IconPassword.png')} style={passwordIcon} />
            </Input>
          </View>

          <Button>
            Sign In
          </Button>

          <View style={bottomContainer}>
            <Text  style={[textColor, {fontWeight: '300'}]}>Don't have an account?</Text>
            <TouchableOpacity onPress={this._goToSignUp}>
              <Text style={textColor}> SIGN UP </Text>
            </TouchableOpacity>
          </View>
        </Image>
    )
  }
}

const styles = {
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    height: null,
    width: null,
    resizeMode: 'cover'
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: '#fff',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginTop: 150
  },
  emailIcon: {
    height: 30,
    width: 30,
    marginLeft: 30
  },
  passwordIcon: {
    height: 30,
    width: 30,
    marginLeft: 30,
    resizeMode: 'contain'
  },
  textColor: {
    backgroundColor: 'transparent',
    color: '#fff',
    fontWeight: '600',
    fontSize: 12
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40
  }
}

export default Login;
