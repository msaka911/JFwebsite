import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { types, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AlertProvider type={types.SUCCESS}  position={positions.MIDDLE}  template={AlertTemplate}>
      <ParallaxProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
      </ParallaxProvider>
</AlertProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
