import { StyleSheet, Text, View, React, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/global';

export default function RecipeScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.start}>Recipe Screen</Text>
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