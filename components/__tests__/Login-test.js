import React from 'react';
import { Alert } from 'react-native';

import TestUtils from 'react-addons-test-utils';
import * as ShallowTestUtils from 'react-shallow-testutils';

import Login, { TOS } from '../Login';

jest.mock('react-native-material-kit', () => {
  return {
    MKButton: jest.fn()
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
    Alert.alert = jest.fn();

    ShallowTestUtils.findWithRef(output, 'login').props.onPress();
    expect(Alert.alert).toBeCalled();
    expect(Alert.alert.mock.calls[0][0]).toEqual('Login Error');
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