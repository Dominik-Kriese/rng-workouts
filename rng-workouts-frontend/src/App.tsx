import React from 'react';
import styled, {ThemeProvider} from "styled-components";
import theme from "./theme/theme";
import GlobalStyle from "./theme/globalstyles";

const AppContainer = styled.div`
  background-color: black;
`;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <AppContainer>
                test
            </AppContainer>
        </ThemeProvider>
    );
}

export default App;
