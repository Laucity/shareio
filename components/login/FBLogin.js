import React, { Component } from 'react';

import {
  Alert,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import { FBLoginManager } from 'react-native-facebook-login';
import { Actions, ActionConst } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import Color from 'shareio/lib/Color';

export default class FBLogin extends Component {

  handleLogin() {
    FBLoginManager.loginWithPermissions(["email","user_friends"], (error, data) => {
      if (!error) {
        Actions.loadingScreen({
          type: ActionConst.RESET,
          data: data.credentials,
          status: 'loggedIn'
        });
      } else {
        console.log(error);
        setTimeout(() => Alert.alert('Error Logging In', 'Please try again.'), 20);
      }
    });
  }

  render() {
    return (
      <TouchableHighlight
        underlayColor={Color.LIGHTER_GREEN}
        ref={'login'}
        onPress={this.handleLogin.bind(this)}
        style={styles.loginButton}
      >
        <View style={styles.loginContents}>
          <Icon name='facebook-official' color='white' size={24} />
          <Text style={[styles.loginText, styles.text]}>Login with Facebook</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  loginButton: {
    alignSelf: 'center',
    backgroundColor: Color.LIGHT_GREEN,
    borderRadius: 5,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  loginContents: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  loginText: {
    fontSize: 16,
    marginLeft: 10
  },
  text: {
    color: Color.WHITE,
    textAlign: 'center'
  }
});
