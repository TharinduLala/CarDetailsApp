import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {Alert, BackHandler, StyleSheet, Text, View} from 'react-native';
import {FAB} from 'react-native-paper';
import VehicleItem from '../components/VehicleItem';

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
    <View style={styles.container}>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>Home Screen</Text>
      <VehicleItem onPress={() => navigation.navigate('ViewVehicle')} />
      <FAB
        icon="plus-thick"
        style={styles.fab}
        onPress={() => {
          navigation.navigate('AddNew');
        }}
        color="white"
      />
    </View>
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
