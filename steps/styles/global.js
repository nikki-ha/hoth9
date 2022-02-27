import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: { //overarching container
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: 45,
    },
    startbutton: { //places start button roughly in middle of page
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
      position: 'absolute',
      bottom: 0
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
    background: { // background images
        flex: 1,
        justifyContent: "center"
    },
    title:{
      fontWeight: 'bold',
      fontSize: 40
    }
  });