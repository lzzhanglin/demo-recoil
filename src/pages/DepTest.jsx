import { useEffect, useMemo, useState } from "react";
import { useUserInfo, useUserInfo2 } from "../utils/hooks";

const DepTest = () => {

    // const r1 = useUserInfo(1)
    // const r2 = useUserInfo(2)
    // const r3 = useUserInfo(3)
    // const r4 = useUserInfo(4)
    // const r5 = useUserInfo(5)

    const r6 = useUserInfo2(6)
    const r7 = useUserInfo2(7)
    const r8 = useUserInfo2(8)
    const r9 = useUserInfo2(9)
    const r10 = useUserInfo2(10)


    
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
                <li>r7:{r8?.name}</li>
                <li>r7:{r9?.name}</li>
                <li>r7:{r10?.name}</li>
            </ul>
        </div>
    )
}

export default DepTest