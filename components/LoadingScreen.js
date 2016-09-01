import React, { Component } from 'react';
import {
  View
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import InitialLoading from './InitialLoading';
import LoginLoading from './LoginLoading';
import Color from 'shareio/lib/Color';

export default class LoadingScreen extends Component {

  renderLoadingView() {
    if (this.props.status === 'initial') {
      return (
        <InitialLoading />
      );
    } else if (this.props.status === 'loggedIn') {
      return (
        <LoginLoading {...this.props} />
      );
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.renderLoadingView()}
      </View>
    );
  }
}