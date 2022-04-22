import React, {useEffect, useState } from 'react'
import axios from 'axios'
import {Button} from 'antd'

const EffectTest = ({initValue}) => {
    console.log('effect页面渲染一次')
    const [name, setName] = useState()
    const [count, setCount] = useState(0)

    useEffect(()=>{
        console.log('组件挂载')
        getData().then(res=>{
            const data = res?.data
            console.log(data)
            setName(data.userId)
        })
        return ()=>{
            console.log('组件卸载')
        }
    }, [])

    const getData = async () => {
        console.log('拉取数据一次')
        return await axios.get(`https://react1.usemock.com/getUserInfo?userId=001`)
    }

 
    return (
        <div style={{margin: '12px'}}>
            effect 页面
            <div style={{margin: '24px, 12px'}}>
                <span>组件加载的时候即拉取数据，拉取的用户id为 {name ?? ''}</span>
            </div>
            <div style={{margin: '24px, 12px'}}>
                <span>当前值为 {count}</span>
                <Button style={{marginLeft: '24px'}} onClick={()=> setCount(count + 1)}>+1</Button>
            </div>
           

        </div>
    )
}

export default EffectTest