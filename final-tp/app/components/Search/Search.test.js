import React from 'react';
import {mount} from 'enzyme'

import ShallowRenderer from 'react-test-renderer/shallow';
import Search from './Search';


it('renders without crashing', () => {
  const rendered = new ShallowRenderer()
  rendered.render(<Search />)
  expect(rendered).toMatchSnapshot();
})

it('updates search text', () => {
  var searchText = ''
  function onChangeText (value) {
    searchText = value
    return value
  } 
  const wrapper = mount(<Search 
    onChangeText={onChangeText}
    searchText={searchText}/>)

  searchText = 'Hola'
  const textInput = wrapper.find('Input').first();
  textInput.props().onChangeText(searchText);
  wrapper.setProps({
    searchText: searchText
  })
  wrapper.update()
  expect(wrapper.props().searchText).toEqual(searchText)
});

it('clears search text', () => {
  let searchText = 'Hola'
  function onClearPress () {
    searchText = ''
  } 
  const wrapper = mount(<Search 
    searchText={searchText}
    onClearPress={onClearPress}/>)
 
  const clearIcon = wrapper.find('Icon').last();
  clearIcon.props().onPress()
  wrapper.setProps({
    searchText: searchText
  })
  wrapper.update()
  expect(wrapper.props().searchText).toEqual(searchText)
});

it('dispatch search', () => {
  let searchText = 'Hola'
  var flag = false
  
  const wrapper = mount(<Search 
    searchText={searchText}
    onSearch={() => {flag = true}}/>)
 
  const searchButton = wrapper.find('Button').first();
  searchButton.props().onPress()
  expect(flag).toBeTruthy()
});