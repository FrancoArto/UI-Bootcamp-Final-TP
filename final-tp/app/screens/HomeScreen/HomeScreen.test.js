import React from 'react';

import renderer from 'react-test-renderer';
import HomeScreen from './HomeScreen';
import store from '../../store/store';



it('renders without crashing', () => {
  const rendered = renderer.create(<HomeScreen store={store} />).toJSON();
  expect(rendered).toMatchSnapshot();
});