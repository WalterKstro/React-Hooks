import {useMemo, useState} from 'react'
import process from '../../helpers/Bucle';
import useCounter from '../../hooks/useCounter'

const MemoHook = () => {
    const {counter, increment} = useCounter(2000);
    const [toogle, setToogle] = useState(true)


    const backupCounter = useMemo(() => process(counter), [counter])

    return (
        <>
            <h1>Counter : <small>{backupCounter}</small></h1>
            <p>{backupCounter} process passed</p>
            <button className='btn btn-primary' onClick={increment}>Increment</button>
            <button className="btn btn-outline-primary mx-3" onClick={() => setToogle(!toogle)}>{toogle ? 'Hide' : 'Show'}</button>
        </>
    )
}

export default MemoHook
