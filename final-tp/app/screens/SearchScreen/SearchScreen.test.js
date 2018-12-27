import React from 'react';

import ShallowRenderer from 'react-test-renderer/shallow';
import {SearchScreen} from './SearchScreen';
import { trendsArray } from '../../store/trends/trendsMock';


it('loads without crashing', () => {
  const rendered = new ShallowRenderer()
  rendered.render(<SearchScreen
    trends={{
      data: [],
      loading: true,
      error: null
    }}
    fetchTrendsBegin={() => {}}/>)
  expect(rendered).toMatchSnapshot();
});

it('renders trends without crashing', () => {
  const rendered = new ShallowRenderer()
  rendered.render(<SearchScreen 
    trends={{
      data: trendsArray[0].trends,
      loading: false,
      error: null
    }}
    fetchTrendsBegin={() => {}} />);
  expect(rendered).toMatchSnapshot();
});
