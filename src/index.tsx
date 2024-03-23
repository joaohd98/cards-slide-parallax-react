import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import {ThemeProvider} from "styled-components";
import {theme} from "./styles/theme";
import GlobalStyles from "./styles/globals-styles";
import HomeTemplate from "./templates/home";
import GSAPInitialize from "./components/GSAPInitialize";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GSAPInitialize />
      <GlobalStyles />
      <HomeTemplate />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
