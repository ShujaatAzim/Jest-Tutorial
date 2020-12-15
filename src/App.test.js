import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import Counter from './Counter'
import './setupTests'

it("should render welcome message and the count component", () => {
  const wrapper = shallow(<App />)
  const welcome = wrapper.find('h1')
  expect(welcome.exists()).toBe(true)
})

it("should render the counter component", () => {
  const wrapper = shallow(<App />)
  const counter = wrapper.find(<Counter />)
  expect(counter.exists()).toBe(true)
})

it("contains the proper welcome message", () => {
  const wrapper = shallow(<App />)
  const welcome = <h1>Welcome to my test!</h1>
  expect(wrapper.contains(welcome)).toEqual(true)
})