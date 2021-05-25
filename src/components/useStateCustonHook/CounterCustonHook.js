import useCounter from "../../hooks/useCounter"
import PropTypes from 'prop-types';

const CounterCustonHook = ({initialState}) => {

    const {state, increment, decrement, reset} = useCounter(initialState)

    return (
        <>
           <h1>Counter With CustonHook: <span>{state}</span></h1>
           <div className="options">
               <button className="btn btn-primary mx-2" onClick={() => increment(2)}>+1</button>
               <button className="btn btn-primary mx-2" onClick={reset}>Reset</button>
               <button className="btn btn-primary mx-2" onClick={() => decrement(2)}>-1</button>
           </div>
        </>
    )
}


CounterCustonHook.propTypes = {
    initialState: PropTypes.number.isRequired
}

export default CounterCustonHook