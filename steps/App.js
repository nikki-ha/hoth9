import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, React, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>progress bar will go here</Text>
      <View style={styles.startplacement}>
        <TouchableOpacity onPress={() =>
          console.log("Pause/Play")
        } style={styles.startbutton}>
          <Text style={styles.start}>start button</Text>  
        </TouchableOpacity>
      </View>
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
  container: { //overarching container
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 45,
  },
  startbutton: {
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    height: 275,
  },
  startplacement: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttoncontainer: { //makes buttons go in row not column
    display: 'flex',
    flexDirection: 'row',
  },
  buttonplacement: { //gap so buttons are at bottom
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    height: 350,
    padding: 20,
  },
  imagebutton: { //spaces buttons
    paddingLeft: 20,
    paddingRight: 20,
  },
  image: { //sizes the icons
    aspectRatio: 1.5,
    height: 70,
    resizeMode: 'contain',
  },
});
