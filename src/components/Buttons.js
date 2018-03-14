import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Title,
  row,
  TouchableOpacity,
  date
} from 'react-native';

import { Calendar } from 'react-native-calendars';

export default class Buttons extends Component {

  constructor() {
    super()
    this.state = {
      isHidden: true,
      date: null
    }
  }
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {!this.state.isHidden && <Calendar
          current={'2018-03-09'}
          minDate={'2012-05-10'}
          maxDate={'2030-03-09'}
          onDayPress={(date) => this.onSelect( date ) }

          monthFormat={'dd.MM.yyyy'}
          hideArrows={true}
          renderArrow={(direction) => (<Arrow />)}
          firstDay={1}
        />}
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.onPress}
          >
            <Text> Edellinen </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this.onPress}
          >
            <Text> Seuraava </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button2}
            onPress={this.toggleHidden.bind(this)}
          >
            <Text> Kalenteri </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    width: '50%',
    height: 60,
    borderWidth: 1,
    borderColor: 'black',
  },
  button2: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    height: 60,
    width: '100%',
    borderWidth: 1,
    borderColor: 'black'
  }
})

const { buttonContainer, button } = styles;