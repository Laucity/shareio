import React, { Component } from 'react';

import Drawer from 'react-native-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions, DefaultRenderer } from 'react-native-router-flux';

import SideBar from './SideBar';

import Color from 'shareio/lib/Color';

export default class extends Component {

  render() {
    const state = this.props.navigationState;
    const children = state.children;
    return (
      <Drawer
        ref="navigation"
        open={state.open}
        onOpen={()=> Actions.refresh({ key:state.key, open: true}) }
        onClose={()=> Actions.refresh({ key:state.key, open: false }) }
        type="displace"
        content={<SideBar {...this.props.photo} {...this.props.info} />}
        tapToClose={true}
        openDrawerOffset={0.3}
        panCloseMask={0.3}
        panOpenMask={0.1}
        negotiatePan={true}
      >
        <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </Drawer>
    );
  }
}
