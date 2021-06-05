import { useRef } from "react"

const Referentation = () => {
    const refInput = useRef()

    return (
        <>
            <h1>Hook useRef</h1>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" 
                       placeholder="name@example.com"
                       ref={refInput}/>
            </div>
            <button className="btn btn-outline-primary"
                    onClick={()=> refInput.current.select()}>Enviar</button>
        </>
    )
}
export default Referentation
