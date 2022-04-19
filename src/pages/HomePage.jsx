import React, {useEffect} from 'react'
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div style={{margin: '100px 0px 0px 45%', fontSize: '20px'}}>
            这是homepage页面
            <Link to="/">Home</Link> |{" "}
            <Link to="/effect">Effect</Link>
        </div>
    )
}

export default HomePage