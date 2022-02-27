import { StyleSheet, Text, View, React, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/global';


export default function HomeScreen({navigation}){
    return (
        <View style={styles.container}>
      <Text>progress bar will go here</Text>
      <View>
        <TouchableOpacity onPress={() =>
          console.log("Pause/Play")
        } style={styles.startbutton}>
          <Text style={styles.start}>start button</Text>  
        </TouchableOpacity>
        <Text>Tap to begin workout!</Text>
      </View>
      <View style={styles.buttonplacement}>
        <View style={styles.buttoncontainer}>
          <TouchableOpacity onPress={() =>
            navigation.navigate('Recipes')
          } style={styles.imagebutton}>
            <Image style={styles.image} source={require('../assets/chef.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>
            navigation.navigate('Home')
          } style={styles.imagebutton}>
            <Image style={styles.image} source={require('../assets/home.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>
            navigation.navigate('Activity')
          } style={styles.imagebutton}>
            <Image style={styles.image} source={require('../assets/menu.png')}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    );
}