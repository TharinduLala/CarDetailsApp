import React, {useState} from 'react';
import {Image, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import Logo from '../../../assets/images/loginScreenImg.png';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  const onSignInPress = () => {
    console.log('pressed');
  };
  const onForgotPasswordPress = () => {
    console.log('pressed');
  };
  const onSignInGooglePress = () => {
    console.log('pressed');
  };
  const onSignUpPress = () => {
    console.log('pressed');
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
        text="Forgot Password?"
        onPress={onForgotPasswordPress}
      />
      <CustomButton
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
        text="Sign In With Google"
        onPress={onSignInGooglePress}
      />
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
    alignItems: 'center',
    padding: 20,
  },
  heading:{
    fontSize:18,
    fontWeight:"bold"
  },
  logo: {
    width: '50%',
    maxWidth: 300,
    maxHeight: 200,
    marginBottom:"10%"
  },
});

export default SignInScreen;
