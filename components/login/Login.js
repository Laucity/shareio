import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import FBLogin from './FBLogin';

import Color from 'shareio/lib/Color';

export const TOS = 'By logging in, you are agreeing to our Terms of Service, Privacy Policy, and Data Use Policies.';

export default class Login extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <View style={styles.welcome}>
            <Text style={[styles.logo, styles.text]}>K</Text>
            <Text ref={'welcome'} style={[styles.fontSize_24, styles.text]}>KwikShare</Text>
          </View>
          <FBLogin />
        </View>
        <View style={styles.termsOfService}>
          <Text ref={'tos'} style={[styles.fontSize_12, styles.text]}>{TOS}</Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.MEDIUM_GREEN,
    flex: 1,
    padding: 5
  },
  loginContainer: {
    flex: 4,
    justifyContent: 'center'
  },
  welcome: {
    alignItems: 'center',
    marginBottom: 80
  },
  logo: {
    fontSize: 50,
    marginBottom: 10
  },
  termsOfService: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 5
  },
  fontSize_24: {
    fontSize: 24
  },
  fontSize_12: {
    fontSize: 12
  },
  text: {
    color: Color.WHITE,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
