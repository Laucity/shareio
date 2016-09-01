import React from 'react';
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import * as Animatable from 'react-native-animatable';
import Spinner from 'react-native-spinkit';
import Icon from 'react-native-vector-icons/FontAwesome';

import Color from 'shareio/lib/Color';
import { getPhoto, getInfo } from 'shareio/lib/getFBInfo';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export default class LoginLoading extends React.Component {

  constructor(props) {
    super(props);
    this.types = ['Wave', 'WanderingCubes', 'ThreeBounce', 'Circle', 'FadingCircle', 'Arc']
    this.state = {
      photo: null,
      info: null
    };
  }

  componentWillMount() {
    setTimeout( async () => {
      let userId = this.props.data.userId;
      let token = this.props.data.token;

      // get picture
      let photo = await getPhoto(userId, token);
      let info = await getInfo(userId, token);
      if (!photo || !info) {
        Alert.alert('Error Logging In', 'Please try again.');
        Actions.login();
      } else {
        Actions.drawer({
          data: this.props.data,
          photo,
          info,
        });
      }


    }, 1000);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'center', marginBottom: 30}}>
              
          { Platform.OS === 'ios' && <Spinner
              isVisible={true}
              size={40}
              color={Color.WHITE}
              type={this.types[getRandomInt(0, this.types.length)]}
            />
          }

          { Platform.OS === 'android' && 
            <Animatable.Text
              style={{color: Color.WHITE, fontSize: 24}}
              animation={'pulse'}
            >
              Loading...
            </Animatable.Text>
          }

          <Animatable.View
            animation="fadeInUp"
            style={{alignItems: 'center', marginTop: 50}}
          >
            <Icon name={'random'} color={Color.WHITE} size={30} />
            <Text style={styles.text}>KwikShare</Text>
          </Animatable.View>

        </View>
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
    fontSize: 36,
    textAlign: 'center',
    color: Color.WHITE,
    paddingTop: 25
  }
});

