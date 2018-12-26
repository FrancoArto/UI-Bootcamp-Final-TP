import React from 'react';

import renderer from 'react-test-renderer';
import { trendsArray } from '../../store/trends/trendsMock';
import TrendList from './TrendList';


it('renders without crashing', () => {
  const trends = trendsArray
  const rendered = renderer.create(<TrendList data={trends}/>).toJSON();
  expect(rendered).toMatchSnapshot();
});