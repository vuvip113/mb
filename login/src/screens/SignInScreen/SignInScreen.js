import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Logo from '../../../assets/images/user.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onSighInPressed = () => {
    console.warn("Sigh In");
  }
  const onForgotPasswordPressed = () => {
    console.warn("Forgot Password");
  }
  const onSighInFace = () => {
    console.warn("onSighInFace");
  }
  const onSighInGoogle = () => {
    console.warn('onSighInGoogle');
  }
  const onSighInApple = () => {
    console.warn('onSighInApple');
  }

  const onSignUpPress = () => {
    console.warn("onSignUpPress");
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image source={Logo} style={styles.logo} resizeMode='contain' />
        <CustomInput placeholder="Username" value={username} setValue={setUsername} />
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
        <CustomButton text='Sigh In' onPress={onSighInPressed} />
        <CustomButton type='Ter' text='Forgot password' onPress={onForgotPasswordPressed} />
        <CustomButton
          text='Sigh In With Facebook'
          onPress={onSighInFace}
          bgCl="#e7eaf4"
          fgCl="#4765a9"
        />
        <CustomButton text='Sigh In With Google' onPress={onSighInGoogle} bgCl="#fae9ea"
          fgCl="#dd4d44" />
        <CustomButton text='Sigh In With Apple' onPress={onSighInApple} bgCl="#e3e3e3"
          fgCl="#363636" />
        <CustomButton type='Ter' text='Dont Have an account? Create one' onPress={onSignUpPress} />

      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 25,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
})

export default SignInScreen