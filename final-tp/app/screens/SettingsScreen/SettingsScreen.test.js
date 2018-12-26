import React from 'react';

import renderer from 'react-test-renderer';
import store from '../../store/store';
import SettingsScreen from './SettingsScreen';



it('renders without crashing', () => {
  const rendered = renderer.create(<SettingsScreen store={store} />).toJSON();
  expect(rendered).toMatchSnapshot();
});