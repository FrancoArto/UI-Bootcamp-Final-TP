import React from 'react';

import renderer from 'react-test-renderer';
import { UserInfo } from './UserInfo';
import userMock from '../../store/users/userMock';


it('renders without crashing', () => {
  const user = userMock
  const rendered = renderer.create(
  <UserInfo user={user} />).toJSON();
  expect(rendered).toMatchSnapshot();
});