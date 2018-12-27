import React from 'react';

import ShallowRenderer from 'react-test-renderer/shallow';
import store from '../../store/store';
import {UserProfileScreen} from './UserProfileScreen';
import userMock from '../../store/users/userMock';



it('renders without crashing', () => {
  const rendered = new ShallowRenderer()
  rendered.render(<UserProfileScreen userData={userMock} store={store} />)
  expect(rendered).toMatchSnapshot();
});