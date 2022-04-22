import React, {useEffect} from 'react'
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div style={{margin: '12px'}}>
            <span style={{marginRight: '18px'}}>页面不存在</span>
            <Link to='/'>返回首页</Link>
        </div>
    )
}

export default NotFoundPage