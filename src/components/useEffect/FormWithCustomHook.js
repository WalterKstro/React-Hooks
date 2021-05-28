// import { useEffect } from "react"
import useForm from "../../hooks/useForm"

const FormWithCustomHook = () => {

    const {state, handleChangeInput} = useForm({
        name: '',
        email : '',
        password: ''
    })

    const {name, email, password} = state

    const handleSubmit = evt => {
        evt.preventDefault()
        console.log(state)
    }
    return (
        <form onSubmit={handleSubmit}>
         <h1>Hook useEffect With Custom Hook</h1>
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
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
                type="password" 
                className="form-control" 
                id="password" 
                placeholder="********"
                autoComplete="off"
                value={password}
                name="password"
                onChange={handleChangeInput}
            />
        </div>
        <button type="submit" className="btn btn-primary">Sending</button>
        </form>
    )
}

export default FormWithCustomHook
