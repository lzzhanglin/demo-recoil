import { useRecoilState, useRecoilValue } from 'recoil';
import {Input, Button,} from 'antd'
import './App.css';
import {countState, squareState, getData} from './state/appState.js'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [count, setCount] = useRecoilState(countState)
  const square = useRecoilValue(squareState)

  const res = useRecoilValue(getData)
  
  return (
    <div className="App">
      <div className="value-box">
        <div className="value">当前的值为{count}</div>
        <div className="value">selector---&gt;派生的值为{square}</div>
        <div className="value">异步拉取的数据为---&gt;&nbsp;{res.title}</div>
      </div>
      <div className="value"></div>
     
      <Input value={count} onChange={(e)=> setCount(e.target.value)}/>
     
    </div>
  );
}

export default App;
