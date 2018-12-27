import React from 'react';

import ShallowRenderer from 'react-test-renderer/shallow';
import Settings from './Settings';


it('renders without crashing', () => {
  const inputSettings = {
    verified: false,
    following: true,
    defaultInfo: false,
    withLink: true,
    withTruncatedText: false
  }
  const rendered = new ShallowRenderer()
  rendered.render(<Settings settings={inputSettings}/>)
  expect(rendered).toMatchSnapshot();
});