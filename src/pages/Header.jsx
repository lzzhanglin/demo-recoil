import React, {useEffect} from 'react'
import { Link } from "react-router-dom"
import styles from './Header.less'

const Header = () => {
    return (
        <div className={styles.header}>
           
            <Link to="/">Home</Link> |{" "}
            <Link to="/useEffect">useEffect</Link> |{" "}
            <Link to="/useCallback">useCallback</Link> |{" "}
            <Link to="/useMemo">useMemo</Link> |{" "}
            <Link to="/depTest">Dep</Link> |{" "}
        </div>
    )
}

export default Header