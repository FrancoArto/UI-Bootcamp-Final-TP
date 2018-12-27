import React from 'react';

import ShallowRenderer from 'react-test-renderer/shallow';
import store from '../../store/store';
import {SingleTweetScreen} from './SingleTweetScreen';



it('renders without crashing', () => {
  const rendered = new ShallowRenderer()
  rendered.render(<SingleTweetScreen store={store} />)
  expect(rendered).toMatchSnapshot();
});