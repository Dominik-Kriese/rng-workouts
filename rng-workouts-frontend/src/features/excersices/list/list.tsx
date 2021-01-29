import React, {useState} from "react";
import ExerciseListItem from "../excersice/exercise-list-item";
import {ExercisesProps} from "../props";
import styled from "styled-components";

const ListWrapper = styled.div`
    background-color: #f4f4f4;
    padding: 12px;
    
    &:hover {
        cursor: pointer;
    }
`

const Headline = styled.h2`
    font-weight: bold;
    font-size: 1.25rem;
`

const Expander = styled.span`
    font-weight: bold;
    float: right;
`

// TODO: extract expansion header
const ExerciseList = ({exercises}: ExercisesProps) => {
    const [expanded, setExpanded] = useState(false);

    return <ListWrapper onClick={() => setExpanded(!expanded)}>
        <Headline>
            Übungsauswahl
            <Expander>
                {
                    expanded ? '+' : <span dangerouslySetInnerHTML={{__html: '&ndash;'}} />
                }
            </Expander>
        </Headline>
        {
            expanded
                ? exercises.map(exercise => <ExerciseListItem exercise={exercise}/>)
                : <></>
        }
    </ListWrapper>
}

export default ExerciseList;
