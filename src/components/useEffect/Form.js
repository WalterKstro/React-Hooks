import { useEffect, useState } from "react"
import Message from "./Message"

const Form = () => {

    const [state, setState] = useState({
        name: '',
        email : ''
    })


    const {name, email} = state

    const handleChangeInput = ({target}) => {        
        setState({
            ...state,
            [target.name]: target.value
        })

    }
    
    useEffect(() => {console.log('Oh')},[])
    useEffect(() => {console.log('change the email of the state')}, [email])
    useEffect(() => {console.log('change the name of the state')}, [name])

    return (
        <>
         <h1>Hook useEffect</h1>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">First Name</label>
            <input 
                type="text" 
                className="form-control" 
                id="name" 
                name="name"
                placeholder="Your first name"
                autoComplete="off"
                value={name} 
                onChange={handleChangeInput}
            />
        </div>
         <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input 
                type="email" 
                className="form-control" 
                id="email" 
                placeholder="name@example.com"
                autoComplete="off"
                value={email}
                name="email"
                onChange={handleChangeInput}
            />
        </div>
            {!email.includes('@') && <Message/>}
        </>
    )
}

export default Form
