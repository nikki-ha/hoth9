import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, React, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>progress bar will go here</Text>
      <View style={styles.buttonplacement}>
        <View style={styles.buttoncontainer}>
          <TouchableOpacity onPress={() =>
            console.log("Chef Button")
          } style={styles.imagebutton}>
            <Image style={styles.image} source={require('./assets/chef.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>
            console.log("Home Button")
          } style={styles.imagebutton}>
            <Image style={styles.image} source={require('./assets/home.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>
            console.log("Menu Button")
          } style={styles.imagebutton}>
            <Image style={styles.image} source={require('./assets/menu.png')}/>
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
  imagebutton: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  image: {
    aspectRatio: 1.5,
    height: 70,
    width: 100,
    resizeMode: 'contain',
  },
  foodPic: {
    justifyContent: 'center',
  },
});
