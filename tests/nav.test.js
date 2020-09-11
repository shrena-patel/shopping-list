import React from 'react'
import { mount, shallow } from 'enzyme'

import Nav from '../client/components/Nav'

test('<Nav />', () => {
  expect(Nav).toBeDefined();
})

test('<Nav />', () => {
  const expected = 'Hello Lex'
  const wrapper = shallow(<Nav />)
  expect(wrapper.text()).toMatch(expected)
})

// test('<Nav />', () => {
//     const expected = {}
//     const wrapper = mount(<Nav/>)
//     expect(wrapper).toBe(<Nav/>)
//   })
