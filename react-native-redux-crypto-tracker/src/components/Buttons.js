import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Title,
  row
} from 'react-native';

const Buttons = () => {
    return (
      <View style={buttonContainer}>
        <View Button style={styles.button}
            title="tekstiä">
        </Button>
        <Button
            title="Tekstiä2">
        </Button>
      <Button
          title="Tekstiä3">
      </Button>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    buttonContainer: {
      flex: 1,
      flexDirection: row,
      alignItems: "center",
      justifyContent: 'space-between'
    },
    button: {
      fontWeight: "bold",
      fontSize: 20,
    }
  })
  
  const {buttonContainer, button} = styles;
  
  
  export default Buttons;