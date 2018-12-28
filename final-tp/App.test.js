import React from 'react';
import App from './App';
import ShallowRenderer from 'react-test-renderer/shallow';


it('renders without crashing', () => {
  const rendered = new ShallowRenderer()
  rendered.mount(<App />);
  expect(rendered).toMatchSnapshot();
});

