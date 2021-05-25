import { useState } from "react"

const Conter = () => {
    const [state, setState] = useState({
        counterStart : 1,
        counterEnd : 10
    })

    const {counterStart} = state

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <h1>Conter App</h1>
                    <p><strong>{counterStart}</strong></p>
                    <button className="btn btn-primary" onClick={
                        () => setState({ 
                            ...state, 
                            counterStart : counterStart + 1 
                        })
                    }>+</button>
                </div>
            </div> 
        </div>
    )
}

export default Conter