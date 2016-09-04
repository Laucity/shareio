import React, { Component } from 'react';

import Drawer from 'react-native-drawer';

import SideBar from 'shareio/components/sidebar/SideBar';
import Feed from './FeedContent';

import Color from 'shareio/lib/Color';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ open: nextProps.open });
  }

  render() {
    return (
      <Drawer
        ref="navigation"
        open={this.state.open}
        type="displace"
        content={<SideBar {...this.props.photo} {...this.props.info} id={this.props.sceneKey} />}
        tapToClose={true}
        openDrawerOffset={0.25}
        panCloseMask={0.25}
        panOpenMask={0.1}
        negotiatePan={true}
      >
        <Feed {...this.props} open={this.state.open} />
      </Drawer>
    );
  }
}
