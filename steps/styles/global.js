import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: { //overarching container
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: 45,
    },
    startbutton: { //places start button roughly in middle of page
      backgroundColor: '#fff',
      justifyContent: 'flex-end',
      alignItems: 'center',
      height: 450,
    },
    buttoncontainer: { //makes buttons go in a row not column
      display: 'flex',
      flexDirection: 'row',
    },
    buttonplacement: { //gap so buttons are at bottom
      backgroundColor: '#fff',
      justifyContent: 'flex-end',
      height: 150,
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