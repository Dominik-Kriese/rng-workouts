import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Anton');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
   }
   
   body {
    font-family: 'Anton', sans-serif;
   }
`

export default GlobalStyle;
