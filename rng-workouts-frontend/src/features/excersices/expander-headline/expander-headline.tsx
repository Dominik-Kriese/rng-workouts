import React from 'react';
import styled from 'styled-components';
import {ExpandedHeadlineProps} from '../props';

const Headline = styled.h2`
    font-weight: bold;
    font-size: 1.125rem;
`

const Expander = styled.span`
    font-weight: bold;
    float: right;
`

const ExpanderHeadline = ({title, expanded, callback}: ExpandedHeadlineProps) => {
    return <Headline onClick={() => callback()}>
        {title}
        <Expander>
            {
                expanded ? '+' : <span dangerouslySetInnerHTML={{__html: '&ndash;'}}/>
            }
        </Expander>
    </Headline>
}

export default ExpanderHeadline;
