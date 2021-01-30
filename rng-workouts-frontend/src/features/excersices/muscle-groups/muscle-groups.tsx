import React from 'react';
import {MuscleGroupsProps} from '../props';
import styled from 'styled-components';

const Groups = styled.p`
    font-size: 0.75rem;
    color: ${props => props.theme.colors.text.defaultMedium};
`

const MuscleGroups = ({muscleGroups}: MuscleGroupsProps) => {
    return <Groups>
        {
            muscleGroups.join(', ')
        }
    </Groups>
}

export default MuscleGroups;
