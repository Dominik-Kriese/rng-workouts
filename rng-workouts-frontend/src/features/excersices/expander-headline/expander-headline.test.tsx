import React from 'react';
import {mount, shallow} from 'enzyme';
import 'jest-styled-components';
import ExpanderHeadline from './expander-headline';

describe('Expander Headline', () => {
   it('renders the headline in collapsed mode', () => {
      const callback = jest.fn();
       const headline = shallow(<ExpanderHeadline title={'title'} expanded={false} callback={callback}/>)
           .dive()
           .find('h2');
       expect(headline).toMatchSnapshot();
   });

   it('renders the headline in expanded mode', () => {
       const callback = jest.fn();
       const headline = shallow(<ExpanderHeadline title={'title'} expanded={true} callback={callback}/>)
           .dive()
           .find('h2');
       expect(headline).toMatchSnapshot();
   });

   test('calls the callback function on click', () => {
       const callback = jest.fn();
       const headline = shallow(<ExpanderHeadline title={'title'} expanded={true} callback={callback}/>)
           .dive()
           .find('h2');
       headline.simulate('click');
       expect(callback).toHaveBeenCalled();
   });
});
