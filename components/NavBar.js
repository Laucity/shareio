import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Color from 'shareio/lib/Color';

export default class NavBar extends Component {

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Icon name={'bars'} size={25} color={Color.WHITE} />
        <Text style={styles.logo}>S</Text>
        <Icon name={'search'} size={22} color={Color.WHITE} />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Color.MEDIUM_GREEN,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10
  },
  logo: {
    color: Color.WHITE,
    fontSize: 30,
    fontWeight: 'bold'
  }
});
