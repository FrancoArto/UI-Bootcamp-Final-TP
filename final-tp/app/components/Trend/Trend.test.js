import React from 'react';

import renderer from 'react-test-renderer';
import { trendsArray } from '../../store/trends/trendsMock';
import Trend from './Trend';


it('renders without crashing', () => {
  const trend = trendsArray[0].trends[0]
  const rendered = renderer.create(<Trend item={trend}/>).toJSON();
  expect(rendered).toMatchSnapshot();
});