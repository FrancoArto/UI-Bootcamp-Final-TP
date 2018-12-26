import React from 'react';

import renderer from 'react-test-renderer';
import SearchResult from './SearchResult';
import { tweetsArray } from '../../store/tweets/tweetsMock';


it('renders without crashing', () => {
  const searchText = 'Hola'
  const rendered = renderer.create(<SearchResult data={tweetsArray} searchText={searchText} />).toJSON();
  expect(rendered).toMatchSnapshot();
});