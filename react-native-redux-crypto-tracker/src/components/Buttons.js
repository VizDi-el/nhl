import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Title
} from 'react-native';

const Buttons = () => {
    return (
      <View style={buttonContainer}>
        <Button>
            title="tekstiä"
        </Button>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    buttonContainer: {
      display: "flex",
      marginTop: 55,
      alignItems: "center",
    },
    button: {
      fontWeight: "bold",
      fontSize: 20,
    }
  })
  
  const {buttonContainer, button} = styles;
  
  
  export default Buttons;