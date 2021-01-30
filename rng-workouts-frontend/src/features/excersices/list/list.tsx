import React, {useState} from 'react';
import ExerciseListItem from '../excersice/exercise-list-item';
import {ExercisesProps} from '../props';
import styled from 'styled-components';
import ExpanderHeadline from '../expander-headline/expander-headline';

const ListWrapper = styled.div`
    background-color: #f4f4f4;
    padding: 12px;
    
    &:hover {
        cursor: pointer;
    }
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
