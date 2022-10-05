import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {
  Alert,
  BackHandler,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {FAB} from 'react-native-paper';
import VehicleItem from '../components/VehicleItem';

const DATA = [
  {
    vehicleNo: 'Uk4111',
    model: 'Aqua',
    brand: 'Toyota',
    price: 5000000,
    location: 'Horana',
    sellerName: 'Saman',
    sellerContact: '07155555',
    date: '2022/10/05',
  },
  {
    vehicleNo: 'Uk4222',
    model: 'Canter',
    brand: 'Mitsubishi',
    price: 4500000,
    location: 'Colombo',
    sellerName: 'Kamal',
    sellerContact: '07155555',
    date: '2022/10/05',
  },
  {
    vehicleNo: 'Uk4333',
    model: 'Caravan',
    brand: 'Toyota',
    price: 6525421,
    location: 'Bandaragama',
    sellerName: 'Nimal',
    sellerContact: '07155555',
    date: '2022/10/05',
  },
  {
    vehicleNo: 'Uk4444',
    model: 'CT100',
    brand: 'Bajaj',
    price: 50000,
    location: 'Panadura',
    sellerName: 'Kamal',
    sellerContact: '07155555',
    date: '2022/10/05',
  },
  {
    vehicleNo: 'Uk4555',
    model: 'CT100',
    brand: 'Bajaj',
    price: 50000,
    location: 'Panadura',
    sellerName: 'Kamal',
    sellerContact: '07155555',
    date: '2022/10/05',
  }
];

const HomeScreen = ({navigation}) => {
  const backAction = () => {
    Alert.alert('Confirm Exit!', 'Do you want to exit?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };
  useFocusEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => {
      backHandler.remove();
    };
  });
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <VehicleItem
            id={item.vehicleNo}
            onPress={() => navigation.navigate('ViewVehicle',{object:item})}
          />
        )}
        keyExtractor={item => item.vehicleNo}
      />

      <FAB
        icon="plus-thick"
        style={styles.fab}
        onPress={() => {
          navigation.navigate('AddNew');
        }}
        color="white"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#3B71F3',
  },
});

export default HomeScreen;
