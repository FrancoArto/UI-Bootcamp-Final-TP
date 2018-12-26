import React from 'react';

import renderer from 'react-test-renderer';
import store from '../../store/store';
import {SingleTweetScreen} from './SingleTweetScreen';



it('renders without crashing', () => {
  const rendered = renderer.create(<SingleTweetScreen store={store} />).toJSON();
  expect(rendered).toMatchSnapshot();
});