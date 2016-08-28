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
          source={ require('shareio/assets/city2.jpg') }
          style={styles.backgroundImage}
          resizeMode={'contain'}
        />

        <SideBarInfo 
          profile_img_uri={"https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAM7AAAAJGNiMjZkMjkzLTEzMjktNDNkZS04OGI2LTdkNTFhMjQ0Y2YyOA.jpg"}
          name={"Barack Obama"}
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
