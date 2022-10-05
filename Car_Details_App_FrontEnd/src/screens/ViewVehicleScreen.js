import React, { useEffect, useState } from 'react';
import {Text, View} from 'react-native';

const ViewVehicleScreen = ({route}) => {
  const[vehicle,setVehicle]=useState({});

  useEffect(()=>{
    setVehicle(route.params.object);
  })
  return (
    <View>
      <Text>{vehicle.vehicleNo}</Text>
      <Text>{vehicle.model}</Text>
      <Text>{vehicle.brand}</Text>
      <Text>{vehicle.price}</Text>
      <Text>{vehicle.location}</Text>
      <Text>{vehicle.sellerName}</Text>
      <Text>{vehicle.sellerContact}</Text>
      <Text>{vehicle.date}</Text>
    </View>
  );
};

export default ViewVehicleScreen;
