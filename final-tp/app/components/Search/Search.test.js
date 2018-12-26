import React from 'react';

import renderer from 'react-test-renderer';
import Search from './Search';


it('renders without crashing', () => {
  const rendered = renderer.create(<Search />).toJSON();
  expect(rendered).toMatchSnapshot();
});