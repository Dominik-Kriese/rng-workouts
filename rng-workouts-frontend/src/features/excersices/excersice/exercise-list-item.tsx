import React from "react";
import styled from "styled-components";
import {Exercise} from "../types"
import {ExerciseProps} from "../props";

const ExerciseWrapper = styled.div`
    padding: 4px 8px;
    margin-top: 4px;
    background-color: #fff;
`

const Name = styled.p`
`

const MuscleGroups = styled.p`
    font-size: 0.75rem;
    opacity: 0.6;
`

/*
    TODO: Export MuscleGroups Component
    TODO: Export ExerciseName Component
 */
const ExerciseListItem = ({exercise}: ExerciseProps) => {
    return <ExerciseWrapper>
        <Name>{exercise.name}</Name>
        <MuscleGroups>{exercise.muscleGroups.join(', ')}</MuscleGroups>
    </ExerciseWrapper>
}

export default ExerciseListItem;
