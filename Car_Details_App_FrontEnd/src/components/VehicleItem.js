import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const VehicleItem = ({onPress,vehicle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Text icon style={styles.title}><Icon name="car" size={20}/>{"\t"}{`${vehicle.brand}\t${vehicle.model}`}</Text>
      <Text style={styles.body}><Icon name="map-marker" size={20}/>{"\t"}{vehicle.location}</Text>
      <Text style={styles.body}><Icon name="currency-usd" size={20}/>{"\t"}{`${vehicle.price}\t(LKR)`}</Text>
      <Text style={styles.date}><Icon name="calendar-range" size={15}/>{vehicle.date}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#9b59b6',
    padding: 8,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius:15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    padding:4
  },
  body: {
    fontSize: 14,
    textAlign: 'justify',
    color: 'white',
    padding:4
  },
  date: {
    fontStyle: 'italic',
    fontSize: 12,
    textAlign: 'right',
    color: 'white',
  },
});

export default VehicleItem;
