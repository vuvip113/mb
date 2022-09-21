import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const Main = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ marginTop: 25 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#20315f', }}>Game On</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <Image source={require('../../assets/img/ghost.png')} style={{ width: 220, height: 220 }} />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{ marginBottom: 30, backgroundColor: '#ad40af', padding: 20, width: '90%', borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 18, }}>Let's Begin</Text>
        <AntDesign name="right" size={20} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}




export default Main