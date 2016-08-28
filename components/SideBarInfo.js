import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Color from 'shareio/lib/Color';

export default class SideBarInfo extends Component {

  render() {
    return (
      <View style={styles.info}>
        <View style={styles.infoContainer}>
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
          <Icon name={'cog'} size={25} color={Color.WHITE} />
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
    top: 0,
    justifyContent: 'flex-end'
  },
  infoContainer: {
    borderTopWidth: 2,
    borderTopColor: Color.BORDER_GRAY,
    alignItems: 'center',
    margin: 12,
    paddingTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between'
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