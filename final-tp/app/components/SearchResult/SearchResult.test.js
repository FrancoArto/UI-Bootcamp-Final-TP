import React from 'react';

import ShallowRenderer from 'react-test-renderer/shallow';

import SearchResult from './SearchResult';
import { tweetsArray } from '../../store/tweets/tweetsMock';


it('renders without crashing', () => {
  const searchText = 'Hola'
  const rendered = new ShallowRenderer()
  rendered.render(<SearchResult data={tweetsArray} searchText={searchText} />)
  expect(rendered).toMatchSnapshot();
});