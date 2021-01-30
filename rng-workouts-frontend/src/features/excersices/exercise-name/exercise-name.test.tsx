import React from 'react';
import {shallow} from 'enzyme';
import 'jest-styled-components';
import ExerciseName from './exercise-name';

describe('Exercise Name', () => {
   it('renders the headline in collapsed mode', () => {
      const name = shallow(<ExerciseName name={'Name'}/>).dive().find('p');
      expect(name).toMatchSnapshot();
   });
});
