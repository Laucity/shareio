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
            color={Color.WHITE}
            size={25}
            style={{height: 25, width: 25}}
          />
          <Text style={styles.logo}>{this.props.text}</Text>
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
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 10,
    paddingRight: 20
  },
  logo: {
    color: Color.WHITE,
    fontSize: 20,
    paddingLeft: 20,
    textAlign: 'left'
  }
});
