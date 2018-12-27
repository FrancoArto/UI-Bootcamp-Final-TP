import React from 'react';

import ShallowRenderer from 'react-test-renderer/shallow';
import store from '../../store/store';
import SettingsScreen from './SettingsScreen';



it('renders without crashing', () => {
  const rendered = new ShallowRenderer()
  rendered.render(<SettingsScreen store={store} />)
  expect(rendered).toMatchSnapshot();
});