import React from 'react';
import { Platform } from 'react-native';

import TestUtils from 'react-addons-test-utils';
import * as ShallowTestUtils from 'react-shallow-testutils';

import { Actions } from 'react-native-router-flux';
import { FBLoginManager } from 'react-native-facebook-login';

import InitialLoading from '../InitialLoading';
import { getPhoto, getInfo } from 'shareio/lib/getFBInfo';

jest.mock('react-native-router-flux', () => {
  return {
    Actions: jest.fn()
  }
});

let mockFailedCredsIOS = () => {
  FBLoginManager.getCredentials = jest.fn( (cb) => {
    cb(true);
  });
}

let mockFailedCredsAndroid = () => {
  FBLoginManager.getCredentials = jest.fn( (cb) => {
    cb({});
  });
}

describe('InitialLoading', () => {

  beforeEach(() => {
    setTimeout = jest.fn( (func, time) => func() );
    Actions.login = jest.fn();
    Actions.drawer = jest.fn();
  });

  it('ios: failed credentials, goes to login page', () => {
    Platform.OS = 'ios';
    mockFailedCredsIOS();

    let renderer = TestUtils.createRenderer();
    renderer.render(<InitialLoading />);
    output = renderer.getRenderOutput();
    

    expect(setTimeout).toBeCalled();
    expect(Actions.login).toBeCalled();
  });

  it('android: failed credentials, goes to login page', () => {
    Platform.OS = 'android';
    mockFailedCredsAndroid();

    let renderer = TestUtils.createRenderer();
    renderer.render(<InitialLoading />);
    output = renderer.getRenderOutput();
    

    expect(setTimeout).toBeCalled();
    expect(Actions.login).toBeCalled();
  });

});