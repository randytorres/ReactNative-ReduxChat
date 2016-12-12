import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = ({ onPress, children, style }) => {
  const { textStyle, buttonStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={[ buttonStyle, style ]}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>

  )
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 15,
    paddingBottom: 15
  },
  buttonStyle: {
    alignSelf: 'auto',
    backgroundColor: 'transparent',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff',
    marginHorizontal: 30
  }
}

export { Button };
