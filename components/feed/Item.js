import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

import Color from 'shareio/lib/Color';

export default class NavBar extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>yo</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1
  }
});
