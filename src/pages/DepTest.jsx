import { useEffect, useMemo, useState } from "react";
import { useUserInfo, useUserInfo2, userAtom } from "../utils/hooks";
import {atom, selector, useRecoilState} from 'recoil'

const DepTest = () => {

    // const r1 = useUserInfo(1)
    // const r2 = useUserInfo(2)
    // const r3 = useUserInfo(3)
    // const r4 = useUserInfo(4)
    // const r5 = useUserInfo(5)

    const {userAtom, info: r6} = useUserInfo2(6)
    const {info: r7} = useUserInfo2(7)
    // const r8 = useUserInfo2(8)
    // const r9 = useUserInfo2(9)
    // const r10 = useUserInfo2(10)


    const [info, setInfo] = useRecoilState(userAtom)

    console.log('从其他组件获取的atom--->', info)
    let count = 0
    const query = async ()=> {
        const d = new Date().valueOf()
        fetch(`http://dl.scs.gov.cn/api/result/checkWritten/8a81f6d080ff71970182cddc44f10338?_=${d}`, {
            "headers": {
                "accept": "*/*",
                "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                "mobile-client": "0",
                "proxy-connection": "keep-alive",
                "x-hmac-hash": "4cc122f75f753997fdb7c9f48b3ff2354e53950f397241c3eb955b0528f6f7c2",
                "x-micro-time": "1678455895254",
                "x-requested-with": "",
                "x-user": "gk"
            },
            "referrer": "http://bm.scs.gov.cn/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "omit"
        }).then(async response => {
            const result = await response.json();
            return result;
        }).then(res=> {
            if(res?.scoreTime === '0'){
                const str = `成绩未出 - ${count} - ${new Date().toLocaleString()}`
                console.log(str)
                if(count % 120 === 0){
                    fetch(`http://push.ijingniu.cn/send?key=2bc9a18a90634e7ea507e492bde00d4e&head=成绩提醒&body=${str}-${JSON.stringify(res)}`)
                }
            }else{
                const str = '成绩已出，请前往查询'
                fetch(`http://push.ijingniu.cn/send?key=2bc9a18a90634e7ea507e492bde00d4e&head=出成绩啦&body=${str}-${JSON.stringify(res)}`)
                console.log('成绩已出--------------------------->')
            }
            count++
        })
    }

    setInterval(()=> query(), 1000 * 5)
    return (
        <div>
            <ul>
                {/* <li>r1:{r1?.name}</li>
                <li>r2:{r2?.name}</li>
                <li>r3:{r3?.name}</li>
                <li>r4:{r4?.name}</li>
                <li>r5:{r5?.name}</li> */}
                <br />
                <li>r6:{r6?.name}</li>
                <li>r7:{r7?.name}</li>
                {/* <li>r7:{r8?.name}</li>
                <li>r7:{r9?.name}</li>
                <li>r7:{r10?.name}</li> */}
            </ul>
        </div>
    )
}

export default DepTest