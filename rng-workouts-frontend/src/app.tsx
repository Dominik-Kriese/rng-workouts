import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import GlobalStyle from './theme/globalstyles';
import Workouts from './templates/workouts';
import exercises from './data/exercises.json';
import {Exercise} from './features/excersices/types';
import './app.css'
import {theme} from './theme/theme';

const AppContainer = styled.div`
    min-height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.colors.backgrounds.defaultDark};
    color: ${props => props.theme.colors.text.defaultBright};
    padding: 8px;
`;

function App() {

    const exercisesData: Exercise[] = exercises as any as Exercise[];

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <AppContainer>
                <Workouts exercises={exercisesData}/>
            </AppContainer>
        </ThemeProvider>
    );
}

export default App;
