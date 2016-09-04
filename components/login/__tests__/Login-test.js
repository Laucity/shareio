import React from 'react';

import TestUtils from 'react-addons-test-utils';
import * as ShallowTestUtils from 'react-shallow-testutils';

import { Actions, DefaultRenderer } from 'react-native-router-flux';

import Login, { TOS } from '../Login';

jest.mock('react-native-router-flux', () => {
  return {
    Actions: jest.fn(),
    DefaultRenderer: jest.fn()
  }
});

jest.mock('../FBLogin', () => jest.fn());

describe('Login', () => {
  let output;

  beforeEach(() => {
    let renderer = TestUtils.createRenderer();
    renderer.render(<Login />);
    output = renderer.getRenderOutput();
  });

  it('contains the correct Terms of Service text', () => {
    let tosText = ShallowTestUtils.findWithRef(output, 'tos').props.children;
    expect(tosText).toEqual(TOS);
  });

  it('contains the correct welcome text', () => {
    let welcomeText = ShallowTestUtils.findWithRef(output, 'welcome').props.children;
    expect(welcomeText).toEqual('KwikShare');
  });

});