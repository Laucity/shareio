import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { FBLoginManager } from 'react-native-facebook-login';
import * as Animatable from 'react-native-animatable';

import Color from 'shareio/lib/Color';
import { getPhoto, getInfo } from 'shareio/lib/getFBInfo';

export default class InitialLoading extends React.Component {

  componentWillMount() {
    setTimeout( async () => {
      FBLoginManager.getCredentials( (arg1, arg2) => {
        // for some reason, method signature for this callback is different
        // between iOS and Android
        if (Platform.OS === 'android') { // arg2 doesn't exist for android
          if (arg1.credentials && arg1.type === 'success') { // creds successfully found
            this.getPhotoAndInfo(arg1.credentials);
          } else {
            Actions.login();
          }
        } else {
          if (!arg1) { // Login found for iOS
            this.getPhotoAndInfo(arg2.credentials);
          } else {
            Actions.login();
          }
        }
      });
    }, 1000);
  }

  async getPhotoAndInfo(data) {
    let userId = data.userId;
    let token = data.token;

    // get picture
    let photo = await getPhoto(userId, token);
    let info = await getInfo(userId, token);
    if (!photo || !info) {
      Actions.login();
    } else {
      Actions.drawer({
        data,
        photo,
        info,
      });
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Animatable.Text
          animation={'fadeInUp'}
          style={styles.text}
        >
          K
        </Animatable.Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.MEDIUM_GREEN,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
    color: Color.WHITE
  }
});

