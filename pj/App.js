import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import loginscreen from './scr/screens/loginscreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.anh1}>anh1</Text>
      <Text style={styles.anh2}>anh2</Text>
      <Text style={styles.anh3}>anh3</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  anh1:{
    backgroundColor: '#00BFFF',
    width: 100,
    height: 100,
    textAlign: 'center',
    paddingTop: 40
  },
  anh3:{
    backgroundColor: 'black',
    width: 100,
    height: 100,
    textAlign: 'center',
    paddingTop: 40
  },
  anh2:{
    backgroundColor: '#00BFFF',
    width: 100,
    height: 100,
    textAlign: 'center',
    paddingTop: 40
  }
});
