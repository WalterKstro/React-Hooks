import { useState } from "react";
import useCounter from "../../hooks/useCounter"
import Counter from "./Counter";

const Memo = () => {

    const {counter, increment} = useCounter(1);
    const [toogle, setToogle] = useState(true)
    return (
        <>
           <Counter value={counter}/>
            <button className='btn btn-primary' onClick={increment}>Increment</button>
            <button className="btn btn-outline-primary mx-3" onClick={() => setToogle(!toogle)}>{toogle ? 'Hide' : 'Show'}</button>
        </>
    )
}

export default Memo
