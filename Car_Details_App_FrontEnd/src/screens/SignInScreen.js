import React, {useState} from 'react';
import {Image, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import Logo from '../../assets/images/1.png';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

const SignInScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  const onSignInPress = () => {
    navigation.navigate('Home');
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />
      <Text style={styles.heading}>Sign In to your account</Text>
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomButton text="Sign In" onPress={onSignInPress} />
      <CustomButton
        type="TRANSPARENT"
        text="Don't have an account? Create one"
        onPress={onSignUpPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  logo: {
    width: '50%',
    maxWidth: 250,
    maxHeight: 150,
    marginBottom: '10%',
  },
});

export default SignInScreen;
