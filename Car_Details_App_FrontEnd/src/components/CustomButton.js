import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const CustomButton = ({onPress, text, type = 'SOLID', bgColor, fgColor}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`],
      bgColor?{backgroundColor:bgColor}:{}
      ]}>
      <Text style={[styles.text, styles[`text_${type}`],
      fgColor?{color:fgColor}:{}
      ]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  container_SOLID: {
    backgroundColor: '#3B71F3',
  },
  container_TRANSPARENT: {},
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  text_TRANSPARENT: {
    color: 'gray',
  },
});

export default CustomButton;
