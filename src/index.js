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
import NotFoundPage from './pages/NotFoundPage'
import DepTest from './pages/DepTest'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      {/* <Suspense fallback={<div>Loading... </div>}>
        
      </Suspense> */}
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="useEffect" element={<EffectTest />} />
          <Route path="useCallback" element={<CallbackTest />} />
          <Route path="depTest" element={<DepTest />} />
          <Route path="useMemo" element={<MemoTest initValue={5} initValue2={6} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
      
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
