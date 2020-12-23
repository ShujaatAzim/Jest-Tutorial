import React from 'react'
import { shallow, mount } from 'enzyme'
import App from './App'
import Counter from './Counter'
import './setupTests'

it("should render welcome message and the count component", () => {
  const wrapper = shallow(<App />)
  const welcome = wrapper.find('h1')
  expect(welcome.exists()).toBe(true)
})

it("should render the counter component", () => {
  const wrapper = mount(<App />)
  const counter = wrapper.find(<Counter />)
  expect(counter.exists()).toEqual(true)
})

it("contains the proper welcome message", () => {
  const wrapper = shallow(<App />)
  const welcome = wrapper.find('h1')
  expect(welcome.text()).toEqual("Welcome to my test!")
})

it("")