import React, {useState} from 'react';
import ExerciseListItem from '../excersice/exercise-list-item';
import {ExercisesProps} from '../props';
import styled from 'styled-components';
import ExpanderHeadline from '../expander-headline/expander-headline';

const ListWrapper = styled.div`
    background-color: ${props => props.theme.colors.backgrounds.defaultLight};
    padding: 12px;
    
    &:hover {
        cursor: pointer;
    }
    
    ${props => props.theme.dropShadows}
`

const ExerciseList = ({exercises}: ExercisesProps) => {
    const [expanded, setExpanded] = useState(false);

    return <ListWrapper>
        <ExpanderHeadline title={'Übungsauswahl'} expanded={expanded} callback={() => setExpanded(!expanded)}/>
        {
            expanded
                ? exercises.map((exercise, index) =>
                    <ExerciseListItem exercise={exercise} key={'ex' + index} data-testid={'exercise'}/>)
                : <></>
        }
    </ListWrapper>
}

export default ExerciseList;
