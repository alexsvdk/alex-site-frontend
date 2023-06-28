import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=PT+Mono&display=swap');

  *, html, body, *:after, *:before, h1, h2, h3, h4, h5, h6 {
    box-sizing: border-box;
  } 
  
  html, body, h1, h2, h3, h4, h5, h6 {
    font-family: 'PT Mono', monospace;
  }
`;
