import React from 'react';
import {shallow} from 'enzyme';
import 'jest-styled-components';
import ExerciseListItem from './exercise-list-item';
import {Exercise} from '../types';

describe('Exercise Name', () => {
    it('renders the headline in collapsed mode', () => {
        const exercise: Exercise = {
            name: 'Exercise',
            muscleGroups: ['Abs']
        };
        const name = shallow(<ExerciseListItem exercise={exercise}/>).dive().find('div');
        expect(name).toMatchSnapshot();
    });
});
