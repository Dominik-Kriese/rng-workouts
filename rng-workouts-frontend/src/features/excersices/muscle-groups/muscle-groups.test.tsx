import React from 'react';
import {shallow} from 'enzyme';
import 'jest-styled-components';
import {MuscleGroup} from '../types';
import MuscleGroups from './muscle-groups';

describe('Muscle Groups', () => {
   const muscleGroups: MuscleGroup[] = [
       'Abs', 'Biceps'
   ];

   it('displays the muscle groups', () => {
      const groups = shallow(<MuscleGroups muscleGroups={muscleGroups} />)
          .dive()
          .find('p');
      expect(groups).toMatchSnapshot();
   });
});
