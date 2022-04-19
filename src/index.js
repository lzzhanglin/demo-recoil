import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import Header from './pages/Header'
import reportWebVitals from './reportWebVitals';
import EffectTest from './pages/EffectTest'
import HomePage from './pages/HomePage'
import CallbackTest from './pages/CallbackTest'
import MemoTest from './pages/MemoTest'

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
      {/* <Suspense fallback={<div>Loading... </div>}>
        
      </Suspense> */}
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="useEffect" element={<EffectTest />} />
          <Route path="useCallback" element={<CallbackTest />} />
          <Route path="useMemo" element={<MemoTest />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
