import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import './setupTests'

it("contains the proper welcome message", () => {
  const wrapper = shallow(<App />)
  const welcome = <h1>Welcome to my test!</h1>
  expect(wrapper.contains(welcome)).toEqual(true)
})