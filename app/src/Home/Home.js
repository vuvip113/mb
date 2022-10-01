import { View, Text, ScrollView, ImageBackground, TextInput, Touchable, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'
import CustomInput from '../../conponents/CustomInput/CustomInput'
import { AntDesign } from '@expo/vector-icons';
import sliderData from '../../conponents/data/data'


const Home = () => {
  const [fontsLoaded] = useFonts({
    Robo: require("../../assets/fonts/RobotoSlab-VariableFont_wght.ttf"),
    Vare: require("../../assets/fonts/VarelaRound-Regular.ttf"),
  })
  if (!fontsLoaded) return null;

  const [categories, setCategories] = useState(sliderData);

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <ScrollView style={{ padding: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
          <Text style={{ fontSize: 20, fontFamily: 'Vare', }}>Hello Vu Tran</Text>
          <ImageBackground source={require('../../assets/icon/icon2.png')} style={{ width: 40, height: 40 }} imageStyle={{ borderRadius: 25 }} />
        </View>
        <View style={{ flexDirection: 'row', borderColor: '#c6c6c6', borderWidth: 1, borderRadius: 5 }}>
          <AntDesign name="search1" size={17} color="#c6c6c6" style={{ margin: 5 }} />
          <TextInput placeholder='Search' />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, marginVertical: 15 }}>
          <Text style={{ fontSize: 20, fontFamily: 'Vare', }}>Upcoming Games</Text>
          <TouchableOpacity onPress={() => { }}>
            <Text style={{ color: '#0aada8' }}>See all</Text>
          </TouchableOpacity>
        </View>


      </ScrollView>
    </SafeAreaView>
  )
}

export default Home