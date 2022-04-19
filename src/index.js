import React from 'react';
import ReactDOM from 'react-dom';
import {RecoilRoot} from 'recoil';
import DebugObserver from './utils/DebugObserver'


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import EffectTest from './pages/EffectTest'
import HomePage from './pages/HomePage'

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <DebugObserver />
      <App />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="effect" element={<EffectTest />}>
            
            </Route>
          </Route>
        </Routes>
      </BrowserRouter> */}
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
