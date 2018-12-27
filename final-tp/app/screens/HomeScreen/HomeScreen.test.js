import React from 'react';

import ShallowRenderer from 'react-test-renderer/shallow';
import {HomeScreen} from './HomeScreen';
import { tweetsArray } from '../../store/tweets/tweetsMock';



it('loads without crashing', () => {
  const rendered = new ShallowRenderer()
  rendered.render(<HomeScreen
    data={[]}
    loading={true}
    error={null}
    fetchTweetsTimeline={() => {}}  />)
  expect(rendered).toMatchSnapshot();
});

it('renders timeline without crashing', () => {
  const rendered = new ShallowRenderer()
  rendered.render(<HomeScreen
    data={tweetsArray}
    loading={false}
    error={null}
    fetchTweetsTimeline={() => {}}  />)
  expect(rendered).toMatchSnapshot();
});

it('renders an error message without crashing', () => {
  const rendered = new ShallowRenderer()
  rendered.render(<HomeScreen
    data={[]}
    loading={false}
    error={'ERROR'}
    fetchTweetsTimeline={() => {}}  />)
  expect(rendered).toMatchSnapshot();
});