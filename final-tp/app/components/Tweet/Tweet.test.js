import React from 'react';

import ShallowRenderer from 'react-test-renderer/shallow';
import { singleTweetData } from '../../store/tweets/tweetsMock';
import Tweet from './Tweet';


it('renders without crashing', () => {
  const item = singleTweetData
  const rendered = new ShallowRenderer()
  rendered.render(
  <Tweet
    id_str={item.id_str}
    user={item.user}
    mainContent={item.text}
    uri={item.user.profile_image_url_https}
    favorite_count={item.favorite_count}
    retweet_count={item.retweet_count}
    media={item.entities.media}
    created_at={item.created_at}
    media={item.entities.media}
    />)
  expect(rendered).toMatchSnapshot();
});