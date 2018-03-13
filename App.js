import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Header, Buttons, Picks } from './src/components';


export default class App extends Component {
  render() {
    return (

      <View style={styles.container}>
        <Header />
        <Picks />
        <Buttons />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
})

const { container } = styles;

