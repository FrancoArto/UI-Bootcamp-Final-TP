import React from 'react';

import ShallowRenderer from 'react-test-renderer/shallow';
import Search from './Search';


it('renders without crashing', () => {
  const rendered = new ShallowRenderer()
  rendered.render(<Search />)
  expect(rendered).toMatchSnapshot();
});