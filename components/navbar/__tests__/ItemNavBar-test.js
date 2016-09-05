import React from 'react';

import TestUtils from 'react-addons-test-utils';
import * as ShallowTestUtils from 'react-shallow-testutils';

import { Actions } from 'react-native-router-flux';

import ItemNavBar from '../ItemNavBar';

jest.mock('react-native-router-flux', () => {
  return {
    Actions: jest.fn()
  }
});

describe('Login', () => {
  let output;

  beforeEach(() => {
    let renderer = TestUtils.createRenderer();
    renderer.render(<ItemNavBar title={'Basketball'}/>);
    output = renderer.getRenderOutput();
  });

  it('goes back when the back icon is pressed', () => {
    Actions.pop = jest.fn();

    ShallowTestUtils.findWithRef(output, 'back').props.onPress();
    expect(Actions.pop).toBeCalled();
  });

  it('should display the correct title in the navbar', () => {
    let title = ShallowTestUtils.findWithRef(output, 'title').props.children;
    expect(title).toEqual('Basketball');
  });

});