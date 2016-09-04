import React, { Component } from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet
} from 'react-native';

import { Scene, Router } from 'react-native-router-flux';

import Login from './login/Login';
import Feed from './feed/Feed';
import Item from './feed/Item';
import LoadingScreen from './login/LoadingScreen';

import Color from 'shareio/lib/Color';

export default class App extends Component {

  componentWillMount() {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(Color.DARK_GREEN);
    } else if (Platform.OS === 'ios') {
      StatusBar.setBarStyle('light-content', true);
    }
  }
  
  render() {
    return (
      <Router hideNavBar={true}>
        <Scene style={styles.mainApp} key="root">
          <Scene key="loadingScreen" status={'initial'} component={LoadingScreen} initial={true} panHandlers={null}/>
          <Scene key="login" component={Login} panHandlers={null} type={'replace'} />
          <Scene key="feed" component={Feed} type={'reset'} />
          <Scene key="item" component={Item} />
        </Scene>
      </Router>
    );
  }

}

const styles = StyleSheet.create({
  mainApp: {
    backgroundColor: Color.DARK_GREEN,
    paddingTop: Platform.OS === 'ios' ? 20 : 0
  }
});
