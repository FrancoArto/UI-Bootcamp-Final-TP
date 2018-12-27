import React from 'react';

import renderer from 'react-test-renderer';
import {SearchScreen} from './SearchScreen';
import { trendsArray } from '../../store/trends/trendsMock';


it('loads without crashing', () => {
  const rendered = renderer.create(<SearchScreen
    trends={{
      data: [],
      loading: true,
      error: null
    }}
    fetchTrendsBegin={() => {}}/>).toJSON();
  expect(rendered).toMatchSnapshot();
});

it('renders trends without crashing', () => {
  const rendered = renderer.create(<SearchScreen 
    trends={{
      data: trendsArray[0].trends,
      loading: false,
      error: null
    }}
    fetchTrendsBegin={() => {}} />).toJSON();
  expect(rendered).toMatchSnapshot();
});
