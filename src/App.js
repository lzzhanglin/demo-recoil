import { useRecoilState, useRecoilValue } from 'recoil';
import {Input, Button,} from 'antd'
import styles from './App.less';
import {countState, squareState, getData} from './state/appState.js'

function App() {
  console.log('引入的less--->', styles)
  const [count, setCount] = useRecoilState(countState)
  const square = useRecoilValue(squareState)

  const res = useRecoilValue(getData)
  
  return (
    <div >
    {/* <div className={styles.appWrapper}> */}
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
