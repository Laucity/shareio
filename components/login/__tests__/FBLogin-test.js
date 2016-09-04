import React from 'react';

import TestUtils from 'react-addons-test-utils';
import * as ShallowTestUtils from 'react-shallow-testutils';
import { Alert } from 'react-native';

import { Actions, ActionConst } from 'react-native-router-flux';
import { FBLoginManager } from 'react-native-facebook-login';

import FBLogin from '../FBLogin';

jest.mock('react-native-router-flux', () => {
  return {
    Actions: jest.fn(),
    ActionConst: jest.fn()
  }
});

mockSuccessfulLogin = () => {
  FBLoginManager.loginWithPermissions = jest.fn( (permissions, cb) => {
    cb(false, {
      credentials: 'yo'
    });
  });
}

mockFailedLogin = () => {
  FBLoginManager.loginWithPermissions = jest.fn( (permissions, cb) => {
    cb('error', '');
  });
}

describe('FBLogin', () => {
  let output;

  beforeEach(() => {
    let renderer = TestUtils.createRenderer();
    renderer.render(<FBLogin />);
    output = renderer.getRenderOutput();
  });

  it('logs in to facebook and goes to the next page if button pressed', () => {
    Actions.loadingScreen = jest.fn();
    ActionConst.RESET = 'yo';
    mockSuccessfulLogin();

    ShallowTestUtils.findWithRef(output, 'login').props.onPress();
    expect(Actions.loadingScreen).toBeCalled();
    expect(Actions.loadingScreen.mock.calls[0][0]).toEqual({
      type: "yo",
      data: "yo",
      status: "loggedIn"
    });
  });

  it('displays an error message if failed login', () => {
    Alert.alert = jest.fn();
    setTimeout = jest.fn( (func, time) => func() );
    mockFailedLogin();

    ShallowTestUtils.findWithRef(output, 'login').props.onPress();

    expect(setTimeout).toBeCalled();
    expect(Alert.alert).toBeCalled();
    expect(Alert.alert.mock.calls[0][1]).toEqual("Please try again.");
  });

});