import React from 'react';
import {mount} from 'enzyme';
import 'jest-styled-components';
import {Exercise} from '../types';
import ExerciseList from './list';
import ExerciseListItem from '../excersice/exercise-list-item';

describe('Exercise List', () => {
    const exercises: Exercise[] = [
        {
            name: 'Ex1',
            muscleGroups: ['Abs']
        },
        {
            name: 'Ex2',
            muscleGroups: ['Chest', 'Biceps']
        }
    ]

    it('displays nothing if not expanded', () => {
        const list = mount(<ExerciseList exercises={exercises}/>).find('ExerciseListItem')
        expect(list).toHaveLength(0);
    });

    it('displays the correct number of items', () => {
        const list = mount(<ExerciseList exercises={exercises}/>);
        list.find('ExpanderHeadline').simulate('click');
        expect(list.find('ExerciseListItem')).toHaveLength(2);
    });

    it('has the exercises wrapped to the list items', () => {
        const list = mount(<ExerciseList exercises={exercises}/>);
        list.find('ExpanderHeadline').simulate('click');
        let boundExercises = list
            .find('ExerciseListItem')
            .map(listItem => listItem.prop('exercise'));
        expect(boundExercises).toEqual(exercises);
    })
})
