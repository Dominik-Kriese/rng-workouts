import React from 'react';
import {ExerciseNameProps} from '../props';
import styled from 'styled-components';

const Name = styled.p`
`

const ExerciseName = ({name}: ExerciseNameProps) => {
    return <Name>
        {name}
    </Name>
}

export default ExerciseName;
