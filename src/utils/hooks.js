import { useEffect, useState } from "react"
import {atom, useRecoilState} from 'recoil'

const fakeReq = (data) => {
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            console.log('sendReq, param is-->', data)
            resolve({name: 'Jack'})
        }, 2000)
    })
}

const useUserInfo = (data) => {
    const [info, setInfo] = useState()
    useEffect(()=> {
        if(data && !info) {
            fakeReq(data).then(res => setInfo(res))
        }
    }, [info, data])
    return info
}
const useUserInfo2 = (() => {
    let isLoading = false
    let random = Math.floor(Math.random() * 100)
    const userAtom = atom({
        key: 'userInfo',
        default: null,
    })
    return (data)=> {
        const [info, setInfo] = useRecoilState(userAtom)
        console.log('闭包返回的函数执行--->', data, isLoading, random, info)
        
        useEffect(()=> {
            if(data && !info && !isLoading) {
                isLoading = true
                fakeReq(data).then(res => {
                    isLoading = false
                    setInfo(res)
                })
            }
        }, [info, data])
        return info
    }
    
})()


export {useUserInfo, useUserInfo2}