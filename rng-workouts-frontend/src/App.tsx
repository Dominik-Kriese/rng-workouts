import React from 'react';
import styled, {ThemeProvider} from "styled-components";
import theme from "./theme/theme";
import GlobalStyle from "./theme/globalstyles";
import Workouts from "./templates/workout";
import exercises from "./data/exercises.json";
import {Exercise} from "./features/excersices/types";

const AppContainer = styled.div`
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
