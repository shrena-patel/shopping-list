import React from 'react'
import { mount, shallow } from 'enzyme'

import App from '../client/components/App'
test('<App />', () => {
  const wrapper = shallow(<App />)
  //console.log(wrapper.debug())
  
  const expected = 12
  expect(wrapper.find('div')).toHaveLength(expected);
})


