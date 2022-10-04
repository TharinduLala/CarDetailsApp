import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const VehicleItem = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Text style={styles.title}>Title</Text>
      <Text style={styles.body}>Body</Text>
      <Text style={styles.userId}>Id</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#2c3e50',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: '3%',
    color: 'white',
  },
  body: {
    fontSize: 12,
    textAlign: 'justify',
    paddingTop: '3%',
    color: 'white',
  },
  userId: {
    fontStyle: 'italic',
    fontSize: 14,
    textAlign: 'right',
    color: '#ecf0f1',
  },
});

export default VehicleItem;
