import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Exponent from 'exponent';
import { Input, Button } from './Common';

class SignUp extends Component {
  constructor() {
    super()

    this.state = {
      image: null
    }
  }

  static route = {
    navigationBar: {
      visible: false
    }
  }

  _pickImage = async () => {

    let result = await Exponent.ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4,3]
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri })
    }
  }

  render() {
    let { image } = this.state;

    const { textColor, title, emailIcon, icon, container, bottomContainer } = styles;
    const imageButton = "Pick an Image";

    return (
        <Image source={require('../images/bg.png')} style={container}>
        <Text style={title}>Sign Up</Text>

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={this._pickImage}>
              <Text style={textColor}>Pick an Image</Text>
            </TouchableOpacity>
            { image &&
                      <Image source={{uri: image}} style={{width: 100, height: 100, borderRadius: 50}} /> }

          </View>

          <View style={{ marginVertical: 40 }}>
            <Input
              label="NAME"
              placeholder="Randy Torres"
              onChangeText={() => console.log('test')}
              value={''}>
              <Image source={require('../images/IconProfile.png')} style={emailIcon} />
            </Input>
            <Input
              label="USER NAME"
              placeholder="rtorres"
              onChangeText={() => console.log('test')}
              value={''}>
              <Image source={require('../images/IconPassword.png')} style={icon} />
            </Input>
            <Input
              label="EMAIL"
              placeholder="test@test.com"
              onChangeText={() => console.log('test')}
              value={''}>
              <Image source={require('../images/Icon-Email.png')} style={icon} />
            </Input>
            <Input
              label="PASSWORD"
              placeholder="password"
              onChangeText={() => console.log('test')}
              value={''}>
              <Image source={require('../images/IconPhone.png')} style={icon} />
            </Input>
          </View>

          <Button>
            Sign Up
          </Button>

          <View style={bottomContainer}>
            <Text  style={[textColor, {fontWeight: '300'}]}>Already have an account?</Text>
            <TouchableOpacity>
              <Text style={textColor}> LOG IN </Text>
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
    fontSize: 20,
    fontWeight: '800',
    color: '#fff',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginTop: 20
  },
  emailIcon: {
    height: 30,
    width: 30,
    marginLeft: 30
  },
  icon: {
    height: 30,
    width: 30,
    marginLeft: 30,
    resizeMode: 'contain'
  },
  textColor: {
    backgroundColor: 'transparent',
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
    marginVertical: 30
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40
  }
}

export default SignUp;
