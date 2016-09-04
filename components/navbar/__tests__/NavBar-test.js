import React from 'react';

import TestUtils from 'react-addons-test-utils';
import * as ShallowTestUtils from 'react-shallow-testutils';

import { Actions } from 'react-native-router-flux';

import NavBar from '../NavBar';

jest.mock('react-native-router-flux', () => {
  return {
    Actions: jest.fn()
  }
});

describe('Login', () => {
  let output;

  beforeEach(() => {
    let renderer = TestUtils.createRenderer();
    renderer.render(<NavBar id={'feed'}/>);
    output = renderer.getRenderOutput();
  });

  it('opens the drawer when icon is pressed', () => {
    Actions.refresh = jest.fn();

    ShallowTestUtils.findWithRef(output, 'menu').props.onPress();
    expect(Actions.refresh).toBeCalled();
    expect(Actions.refresh.mock.calls[0][0].key).toBe('feed');
  });

});