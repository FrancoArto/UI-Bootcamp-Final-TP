import React from 'react';

import renderer from 'react-test-renderer';
import {HomeScreen} from './HomeScreen';
import { tweetsArray } from '../../store/tweets/tweetsMock';



it('loads without crashing', () => {
  const rendered = renderer.create(<HomeScreen
    data={[]}
    loading={true}
    error={null}
    fetchTweetsTimeline={() => {}}  />).toJSON();
  expect(rendered).toMatchSnapshot();
});

it('renders timeline without crashing', () => {
  const rendered = renderer.create(<HomeScreen
    data={tweetsArray}
    loading={false}
    error={null}
    fetchTweetsTimeline={() => {}}  />).toJSON();
  expect(rendered).toMatchSnapshot();
});

it('renders an error message without crashing', () => {
  const rendered = renderer.create(<HomeScreen
    data={[]}
    loading={false}
    error={'ERROR'}
    fetchTweetsTimeline={() => {}}  />).toJSON();
  expect(rendered).toMatchSnapshot();
});