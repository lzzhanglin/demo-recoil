import React, {useEffect, useMemo, useState} from 'react'
import {Button} from 'antd'

const MemoTest = ({initValue, initValue2}) => {

    console.log('useMemo页面渲染一次')

    const [count, setCount] = useState(0)

    const calcValue = (v) => {
        console.log('计算一次', v)
        return v * v
    }

    const memoValue = useMemo(()=>{
        return calcValue(initValue)
    }, [initValue])
    return (
        <div style={{margin: '12px'}}>
            useMemo 页面
            <br />
            <span>对于将父组件的值进行运算之后再进行显示的情况，使用useMemo对该值包裹之后，即使函数组件进行更新，但是计算只会执行一次</span>
      
            <div style={{margin: '24px, 12px'}}>
                <span>当前值为 {count} | 通过这个值的变化来对组件进行刷新</span>
                <Button type="primary" style={{marginLeft: '24px'}} onClick={()=> setCount(count + 1)}>+1</Button>
            </div>
            <div style={{margin: '24px, 12px'}}>
                {/* <span>父组件传进来的值为 {calcValue(initValue)}</span> */}
                <span>useMemo包裹的值 {memoValue}</span>
                <br />
                <span>未使用useMemo包裹的值 {calcValue(initValue2)}</span>
            </div>

        </div>
    )
}

export default MemoTest