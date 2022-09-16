import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type = 'Pri'}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container:{
    width : '100%',
    padding: 15,
    marginVertical:5,
    alignItems:'center',
    borderRadius: 5
  },
  container_Pri:{
    backgroundColor: '#00FFFF',
  },
  container_Ter:{

  },
  text:{
    fontWeight:'bold',
    fontSize:20
  }
})

export default CustomButton