import React from 'react';

import renderer from 'react-test-renderer';
import Settings from './Settings';


it('renders without crashing', () => {
  const inputSettings = {
    verified: false,
    following: true,
    defaultInfo: false,
    withLink: true,
    withTruncatedText: false
  }
  const rendered = renderer.create(<Settings settings={inputSettings}/>).toJSON();
  expect(rendered).toMatchSnapshot();
});