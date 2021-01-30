import React from 'react';
import styled from 'styled-components';
import {ExerciseProps} from '../props';
import MuscleGroups from '../muscle-groups/muscle-groups';
import ExerciseName from '../exercise-name/exercise-name';

const ExerciseWrapper = styled.div`
    padding: 4px 8px;
    margin-top: 4px;
    background-color: #fff;
`
const ExerciseListItem = ({exercise}: ExerciseProps) => {
    return <ExerciseWrapper>
        <ExerciseName name={exercise.name}/>
        <MuscleGroups muscleGroups={exercise.muscleGroups}/>
    </ExerciseWrapper>
}

export default ExerciseListItem;
