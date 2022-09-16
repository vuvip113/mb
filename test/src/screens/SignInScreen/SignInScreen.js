import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Logo from '../../../assets/images/user.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onSighInPressed = () => {
    console.warn("Sigh In");
  }
  const onForgotPasswordPressed = () =>{
    console.warn("Forgot Password");
  }

  return (
    <View style={styles.root}>
      <Image source={Logo} style={styles.logo} resizeMode='contain' />
      <CustomInput placeholder="Username" value={username} setValue={setUsername} />
      <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
      <CustomButton text='Sigh In' onPress={onSighInPressed} />
      <CustomButton type='Ter' text='Forgot password' onPress={onForgotPasswordPressed} />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 30,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
})

export default SignInScreen