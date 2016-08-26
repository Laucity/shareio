import React, { Component } from 'react';
import {
  Platform,
  StyleSheet
} from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

import Login from './Login';
import Feed from './Feed';

export default class App extends Component {
  render() {
    return (
      <Router hideNavBar={true}>
        <Scene style={{marginTop: Platform.OS === 'ios' ? 20 : 0}} key="root">
          <Scene key="login" component={Login} initial={true} panHandlers={null}/>
          <Scene key="feed" component={Feed} panHandlers={null}/>
        </Scene>
      </Router>
    );
  }
}
