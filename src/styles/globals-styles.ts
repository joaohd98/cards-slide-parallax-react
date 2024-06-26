import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

   html {
     font-size: calc(100vw / 2560 * 10);
     -moz-text-size-adjust: none;
     -ms-text-size-adjust: none;
     -webkit-text-size-adjust: none;

     @media (max-width: 1920px) {
       font-size: calc(100vw / 1920 * 10);
     }

     @media (max-width: 1280px) {
       font-size: calc(100vw / 1280 * 10);
     }

     @media (max-width: 599px) {
       font-size: calc(100vw / 599 * 10);
     }
   }
`;

export default GlobalStyles;
