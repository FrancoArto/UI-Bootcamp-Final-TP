import React from 'react';

import ShallowRenderer from 'react-test-renderer/shallow';
import { trendsArray } from '../../store/trends/trendsMock';
import Trend from './Trend';


it('renders without crashing', () => {
  const trend = trendsArray[0].trends[0]
  const rendered = new ShallowRenderer()
  rendered.render(<Trend item={trend}/>)
  expect(rendered).toMatchSnapshot();
});