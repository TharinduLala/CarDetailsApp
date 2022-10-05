import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const VehicleItem = ({onPress,id}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Text style={styles.title}>{id}</Text>
      <Text style={styles.body}>Body</Text>
      <Text style={styles.userId}>Id</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  item: {
    // backgroundColor: '#8e44ad',
    padding: 10,
    // marginVertical: 10,
    marginTop:20,
    marginHorizontal: 20,
    borderRadius:15,
    borderColor:"#8e44ad",
    borderWidth:1,
    borderRightWidth:4,
    borderBottomWidth:4
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
