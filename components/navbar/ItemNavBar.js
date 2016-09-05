import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

import Color from 'shareio/lib/Color';

export default class ItemNavBar extends Component {

  _back() {
    try {
      Actions.pop();
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon
          ref={'back'}
          onPress={this._back.bind(this)}
          name={'chevron-left'}
          size={25}
          color={Color.WHITE}
        />
        <Text ref={'title'} style={styles.logo}>{this.props.title}</Text>
        <Icon name={'comment'} size={22} color={Color.WHITE} />
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
    fontSize: 20
  }
});
