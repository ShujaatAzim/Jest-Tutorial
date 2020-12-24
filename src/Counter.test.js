import React from 'react'
import { shallow } from 'enzyme'
import Counter from './Counter'
import './setupTests'

it("increases the count by 2 after clicking Add twice", () => {
  const wrapper = shallow(<Counter />)
  let current = wrapper.state().count
  wrapper.find("#add").simulate('click')
  wrapper.find("#add").simulate('click')
  expect(wrapper.state().count).toEqual(current + 2)
})
