import React, { Component } from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { FBLoginManager } from 'react-native-facebook-login';
import { Actions, ActionConst } from 'react-native-router-flux';

import Option from './Option';

import Color from 'shareio/lib/Color';

export default class SideBarInfo extends Component {

  goHome() {

  }

  goPost() {

  }

  goProfile() {

  }

  goMessages() {

  }

  triggerLogout() {
    Alert.alert('Log Out', 'Are you sure you want to log out?', [
      {text: 'Cancel'},
      {text: 'OK', onPress: () => this._logout() }
    ]);
  }

  _logout() {
    FBLoginManager.logout(function(error, data) {
      if (!error) {
        Actions.login({ type: ActionConst.RESET });
      } else {
        console.log(error);
        setTimeout(() => Alert.alert('Error Logging Out', 'Please try again.'), 20);
      }
    });
  }

  render() {
    return (
      <View style={styles.info}>
        <View style={styles.infoContainer}>
          <View style={styles.options}>
            <Text style={styles.title}>KwikShare</Text>
            <Option icon={'home'} text={'Feed'} onPress={this.goHome.bind(this)} />
            <Option icon={'pencil-square-o'} text={'Post'} onPress={this.goPost.bind(this)} />
            <Option icon={'user'} text={'Profile'} onPress={this.goProfile.bind(this)} />
            <Option icon={'comment'} text={'Messages'} onPress={this.goMessages.bind(this)} />
            <Option icon={'sign-out'} text={'Log Out'} onPress={this.triggerLogout.bind(this)} />
          </View>
          <View style={styles.personalInfoContainer}>
            <View style={{flexDirection: 'row'}}>
              <Image
                ref={'profile_img'}
                style={styles.personImage}
                source={{ uri: this.props.profile_img_uri }}
              />
              <View>
                <Text ref={'name'} style={styles.name}>{this.props.name}</Text>
                <Text ref={'location'} style={styles.location}>{this.props.location}</Text>
              </View>
            </View>
            <Icon style={{paddingRight: 8}} name={'cog'} size={25} color={Color.WHITE} />
          </View>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  info: {
    backgroundColor: Color.BARELY_BLACK,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },
  options: {
    margin: 12
  },
  title: {
    fontSize: 26,
    color: Color.WHITE,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  personalInfoContainer: {
    borderTopWidth: 2,
    borderTopColor: Color.BORDER_GRAY,
    alignItems: 'center',
    margin: 12,
    paddingTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  personImage: {
    borderRadius: 20,
    marginRight: 12,
    height: 40,
    width: 40
  },
  name: {
    fontSize: 14,
    color: Color.WHITE,
    fontWeight: 'bold'
  },
  location: {
    fontSize: 14,
    color: Color.WHITE
  }
});