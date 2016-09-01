import React, { Component } from 'react';
import {
  Platform
} from 'react-native';

import { Scene, Router } from 'react-native-router-flux';

import Login from './Login';
import Feed from './Feed';
import Drawer from './Drawer';
import LoadingScreen from './LoadingScreen';

export default class App extends Component {
  
  render() {
    return (
      <Router hideNavBar={true}>
        <Scene style={{marginTop: Platform.OS === 'ios' ? 20 : 0}} key="root">
          <Scene key="loadingScreen" status={'initial'} component={LoadingScreen} initial={true} panHandlers={null}/>
          <Scene key="login" component={Login} panHandlers={null} type={'replace'} />
          <Scene key="drawer" component={Drawer} open={false} type={'replace'}>
            <Scene key="feed" component={Feed} type={'replace'} />
          </Scene>
        </Scene>
      </Router>
    );
  }

}
