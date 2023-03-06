import React, {useEffect, useCallback, useState} from 'react'
import {Button} from 'antd'
import axios from 'axios'
import CallbackComp from './CallbackComp'

const CallbackTest = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState()



    useEffect(()=>{
        console.log('count变化 拉取数据一次', count)
        getData().then(res=>{
        // console.log("🚀 ~ file: CallbackTest.jsx ~ line 16 ~ getData ~ res", res)
        // console.log("🚀 ~ file: CallbackTest.jsx ~ line 16 ~ getData ~ res", res)
            
            setName(res?.data?.userId)
        })
    }, [])

    const getData = useCallback(async () => {
        console.log('useCallback页面拉取数据一次')
        return await axios.get(`https://react1.usemock.com/getUserInfo?userId=${count}`)
    }, [count])

    const foo = useCallback(() =>{
        return 'foo'
    }, [])

    return (
        <div style={{margin: '12px'}}>
            useCallback 页面
            <div style={{margin: '24px, 12px'}}>
                <span>下面数字发生变化即触发拉取数据，拉取的用户id为 {name ?? ''}</span>
            </div>
            <div style={{margin: '24px, 12px'}}>
                <span>当前值为 {count}</span>
                <Button type='primary' style={{marginLeft: '24px'}} onClick={()=> setCount(count + 1)}>+1</Button>
            </div>
            <CallbackComp foo={foo} />
           
        </div>
    )
}

export default CallbackTest