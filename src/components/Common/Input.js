import React from 'react';
import {
  TextInput,
  View,
  Text
} from 'react-native';

 const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, children }) => {
   const { inputStyle, labelStyle, containerStyle, labelContainerStyle } = styles;
    return (
      <View style={containerStyle}>
        {children}
        <View style={labelContainerStyle}>
          <Text style={labelStyle}>{label}</Text>
          <TextInput
            multiline={true}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            autoCorrect={false}
            style={inputStyle}
            value={value}
            onChangeText={onChangeText}
            />
        </View>
      </View>
    )
  }

const styles = {
  inputStyle: {
    color: '#fff',
    height: 40,
    fontSize: 18,
    lineHeight: 20,
    borderBottomWidth: .5,
    borderColor: '#fff',
    paddingLeft: 10
  },
  labelStyle: {
    fontSize: 14,
    backgroundColor: 'transparent',
    color: '#fff'
  },
  containerStyle: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center'
  },
  labelContainerStyle: {
    flexDirection: 'column',
    flex: 1,
    marginHorizontal: 30
  }
}


export { Input }
