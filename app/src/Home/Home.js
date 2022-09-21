import { View, Text, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'


const Home = () => {
  const [fontsLoaded] = useFonts({
    Robo: require("../../assets/fonts/RobotoSlab-VariableFont_wght.ttf"),
    Vare: require("../../assets/fonts/VarelaRound-Regular.ttf"),
  })
  if(!fontsLoaded) return null;

  return (
    <SafeAreaView style={{ flex: 1}} >
      <ScrollView style={{padding:20}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:20}}>
          <Text style={{fontSize:20,fontFamily:'Vare',}}>Hello ADMIN</Text>
          <ImageBackground source={require('../../assets/icon/admin.png')} style={{ width: 35, height: 35 }} imageStyle={{ borderRadius: 25 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home