import React from 'react';

import ShallowRenderer from 'react-test-renderer/shallow';
import { trendsArray } from '../../store/trends/trendsMock';
import TrendList from './TrendList';


it('renders without crashing', () => {
  const trends = trendsArray
  const rendered = new ShallowRenderer()
  rendered.render(<TrendList data={trends[0].trends}/>)
  expect(rendered).toMatchSnapshot();
});