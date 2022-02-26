import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, React, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>progress bar will go here</Text>
      <View style={styles.buttonplacement}>
        <View style={styles.buttoncontainer}>
          <TouchableOpacity onPress={() =>
            console.log("Button 1")
          }>
            <Text style={styles.buttons}>Button 1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>
            console.log("Button 2")
          }>
            <Text style={styles.buttons}>Button 2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>
            console.log("Button 3")
          }>
            <Text style={styles.buttons}>Button 3</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 45,
  },
  buttoncontainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  buttonplacement: {
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    height: 625,
    padding: 20,
  },
  buttons: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 20,
    paddingLeft: 37,
    paddingRight: 37,
  },
  foodPic: {
    justifyContent: 'center',
    
  }
});
