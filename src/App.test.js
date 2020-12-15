import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import Counter from './Counter'
import './setupTests'

it("contains the proper welcome message", () => {
  const wrapper = shallow(<App />)
  const welcome = <h1>Welcome to my test!</h1>
  expect(wrapper.contains(welcome)).toEqual(true)
})

it("increases the count by 1 after clicking Add", () => {
  const wrapper = shallow(<Counter />)
  wrapper.find("#add").simulate('click')
  expect(wrapper.state().count).toEqual(1)
})