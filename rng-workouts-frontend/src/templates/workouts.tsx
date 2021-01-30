import React from 'react';
import ExerciseList from '../features/excersices/list/list';
import {ExercisesProps} from '../features/excersices/props';

const Workouts = ({exercises}: ExercisesProps) => {
    return <>
        <ExerciseList exercises={exercises}/>
    </>
}

export default Workouts;
