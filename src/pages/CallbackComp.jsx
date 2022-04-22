import React from 'react'

const CallbackComp = ({foo}) => {
    console.log('callback子组件渲染一次')
    return (
        <div>
            我是子组件
        </div>
    )
}

export default CallbackComp