import React from 'react';

import TestUtils from 'react-addons-test-utils';
import * as ShallowTestUtils from 'react-shallow-testutils';

import { Actions } from 'react-native-router-flux';

import Login, { TOS } from '../Login';

jest.mock('react-native-router-flux', () => {
  return {
    Actions: jest.fn()
  }
});

describe('Login', () => {
  let output;

  beforeEach(() => {
    let renderer = TestUtils.createRenderer();
    renderer.render(<Login />);
    output = renderer.getRenderOutput();
  });

  it('calls an alert when the login button is pressed', () => {
    Actions.drawer = jest.fn();

    ShallowTestUtils.findWithRef(output, 'login').props.onPress();
    expect(Actions.drawer).toBeCalled();
  });

  it('contains the correct Terms of Service text', () => {
    let tosText = ShallowTestUtils.findWithRef(output, 'tos').props.children;
    expect(tosText).toEqual(TOS);
  });

  it('contains the correct welcome text', () => {
    let welcomeText = ShallowTestUtils.findWithRef(output, 'welcome').props.children;
    expect(welcomeText).toEqual('Welcome to share.io');
  });

});