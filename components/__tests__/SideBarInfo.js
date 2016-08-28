import React from 'react';

import TestUtils from 'react-addons-test-utils';
import * as ShallowTestUtils from 'react-shallow-testutils';

import { Actions } from 'react-native-router-flux';

import SideBarInfo, { TOS } from '../SideBarInfo';

jest.mock('react-native-router-flux', () => {
  return {
    Actions: jest.fn()
  }
});

const info = {
  profile_img_uri: 'yo',
  name: 'ah',
  location: 'wee'
};

describe('SideBarInfo', () => {
  let output;

  beforeEach(() => {
    let renderer = TestUtils.createRenderer();
    renderer.render(<SideBarInfo {...info} />);
    output = renderer.getRenderOutput();
  });

  it('should show the right profile image', () => {
    let uri = ShallowTestUtils.findWithRef(output, 'profile_img').props.source.uri;
    expect(uri).toEqual('yo');
  });

  it('should show the right name', () => {
    let name = ShallowTestUtils.findWithRef(output, 'name').props.children;
    expect(name).toEqual('ah');
  });

  it('should show the right location', () => {
    let location = ShallowTestUtils.findWithRef(output, 'location').props.children;
    expect(location).toEqual('wee');
  });

});