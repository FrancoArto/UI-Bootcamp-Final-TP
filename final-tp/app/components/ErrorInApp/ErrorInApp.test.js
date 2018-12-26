import React from 'react';

import renderer from 'react-test-renderer';
import ErrorInApp from './ErrorInApp';


const error = 'ERROR MESSAGE'
it('renders without crashing', () => {
  const rendered = renderer.create(<ErrorInApp errorMessage={error} />).toJSON();
  expect(rendered).toMatchSnapshot();
});