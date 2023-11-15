import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

import { createGlobalStyle, ThemeProvider } from 'styled-components'


const GlobalStyle = createGlobalStyle<{ $whiteColor?: boolean; }>`
  body {
    color: ${props => (props.$whiteColor ? 'white' : 'black')};
    font-family: ${props => props.theme.fontFamily};
    background-color: #555;
  }
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={{ fontFamily: 'Helvetica Neue' }}>
      <React.Fragment>
        <GlobalStyle $whiteColor={true} />
        <BrowserRouter basename="/homepage">
          <App />
        </BrowserRouter>  
      </React.Fragment>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();