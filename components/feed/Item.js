import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import ItemNavBar from 'shareio/components/navbar/ItemNavBar';

import Color from 'shareio/lib/Color';

export default class Item extends Component {

  render() {
    return (
      <View style={styles.container}>
        <ItemNavBar title={this.props.title} />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
