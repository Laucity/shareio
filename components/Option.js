import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

import Color from 'shareio/lib/Color';

export default class Option extends Component {


  render() {
    return (
      <TouchableHighlight
        underlayColor={Color.BARELY_BLACK}
        style={styles.container}
        onPress={this.props.onPress}
      >
        <View style={styles.contentContainer}>
          <Icon
            name={this.props.icon}
            size={25}
            color={Color.WHITE}
          />
          <Text style={styles.logo}>{this.props.text}</Text>
          <View></View>
        </View>
      </TouchableHighlight>
    );
  }

}

const styles = StyleSheet.create({
  container: {
  },
  contentContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Color.BORDER_GRAY,
    flexDirection: 'row',
    flex: 1,
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    color: Color.WHITE,
    fontSize: 20,
    textAlign: 'center'
  }
});
