import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

import { createGlobalStyle, StyleSheetManager, ThemeProvider } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid';


const GlobalStyle = createGlobalStyle<{ $whiteColor?: boolean; }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  html {
    //font-size: 62.5%;
    //font-family: 'Roboto', sans-serif;
  };

  li {
    list-style: none;
  };

  a {
    text-decoration: none;
  };

  body {
    color: ${props => (props.$whiteColor ? 'white' : 'black')};
    font-family: ${props => props.theme.fontFamily};
    background: linear-gradient(to left, #555 50%, #e0e0e0 50%);
  };
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <ThemeProvider theme={{ fontFamily: 'Helvetica Neue' }}>
        <React.Fragment>
          <GlobalStyle $whiteColor={false} />
          <BrowserRouter basename="/homepage">
            <App />
          </BrowserRouter>  
        </React.Fragment>
      </ThemeProvider>
    </StyleSheetManager>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();