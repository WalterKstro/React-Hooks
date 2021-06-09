import React from "react"

const Button = React.memo(({aument}) => {
    console.log('Llamado otra vez')
    return (
        <button className="btn btn-primary" onClick={aument} >Aumentar</button>
    )
})

export default Button
