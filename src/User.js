import React, {useEffect,useRef} from 'react'
function User(props)
{
    const lastVal=useRef();
    useEffect(()=>{
        lastVal.current=props.count
    })
    const previosValue=lastVal.current
    return(
        <div>
            <h1>Current Value {props.count}</h1>
            <h2>Last Value {previosValue}</h2>
            <h3>Diff Value {props.count-previosValue}</h3>
        </div>
    )
}
export default User;