import React from 'react';

import TestUtils from 'react-addons-test-utils';
import * as ShallowTestUtils from 'react-shallow-testutils';

import FeedItem from '../FeedItem';

const info = {
  "profile_img_uri": "yo",
  "title": "wee",
  "city": "nah",
  "state": "CA",
  "rating": "5",
  "price": "400",
  "duration": "hr",
  "item_img_uri": "Sup"
}

describe('FeedItem', () => {
  let output;

  beforeEach(() => {
    let renderer = TestUtils.createRenderer();
    renderer.render(<FeedItem {...info} />);
    output = renderer.getRenderOutput();
  });

  it('contains the correct title text', () => {
    let titleText = ShallowTestUtils.findWithRef(output, 'title').props.children;
    expect(titleText).toEqual("wee");
  });

  it('contains the correct price text', () => {
    let priceText = ShallowTestUtils.findWithRef(output, 'price').props.children;
    expect(priceText).toEqual("$400/hr");
  });

  it('contains the correct location text', () => {
    let locationText = ShallowTestUtils.findWithRef(output, 'location').props.children;
    expect(locationText).toEqual('nah, CA');
  });

  it('contains the correct ratings text', () => {
    let ratingText = ShallowTestUtils.findWithRef(output, 'rating').props.children;
    expect(ratingText).toEqual('Rating: 5');
  });

});
