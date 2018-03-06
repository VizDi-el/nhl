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
      <View style ={styles.buttonRow}>
        <Button title="teksti"/>
        <Button title="teksti"/>
      </View>

      <View style={styles.button2}>
        <Button
          title="Tekstiä3">
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'column'
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button1:{
    width:'49%'
  },
  button2:{
    width:'100%'
  }
})

const { buttonContainer, button } = styles;


export default Buttons;