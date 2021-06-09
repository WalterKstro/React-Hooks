import React from 'react'

const Counter = React.memo(({value}) => {
    console.log('Show me and hidden me')
    return (
        <h1>Counter: <small>{value}</small></h1>
    )
})

export default Counter
