import {createGlobalStyle} from 'styled-components';
import {AppTheme} from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
   }
   
   body {
    font-family: 'Nunito', sans-serif;
   }
`

export default GlobalStyle;
