import React from 'react';

import renderer from 'react-test-renderer';
import store from '../../store/store';
import {UserProfileScreen} from './UserProfileScreen';
import userMock from '../../store/users/userMock';



it('renders without crashing', () => {
  const rendered = renderer.create(<UserProfileScreen userData={userMock} store={store} />).toJSON();
  expect(rendered).toMatchSnapshot();
});