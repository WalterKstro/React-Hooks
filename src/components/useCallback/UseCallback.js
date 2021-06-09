import React, { useCallback, useState } from 'react'
import Button from './Button'

const UseCallback = () => {

    const [counter, setCounter] = useState(0)
    
    const aument = useCallback(
        () => {setCounter(count => count + 5)},
        [setCounter]
    )

    return (
        <>
            <h1>Use Callback</h1>
            <p>{counter}</p>
            <Button aument={aument} />
        </>
    )
}

export default UseCallback
