import React from 'react';

import renderer from 'react-test-renderer';
import store from '../../store/store';
import SearchScreen from './SearchScreen';



it('renders without crashing', () => {
  const rendered = renderer.create(<SearchScreen store={store} />).toJSON();
  expect(rendered).toMatchSnapshot();
});