import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  View
} from 'react-native';

import SideBarInfo from './SideBarInfo';

import Color from 'shareio/lib/Color';

export default class SideBar extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={ require('shareio/assets/house_blurred.jpg') }
          style={styles.backgroundImage}
          resizeMode={'cover'}
        />

        <SideBarInfo 
          profile_img_uri={this.props.url}
          name={this.props.name}
          location={"Washington, D.C."}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Color.BLACK
  },
  backgroundImage: {
    flex: 1
  }
});
