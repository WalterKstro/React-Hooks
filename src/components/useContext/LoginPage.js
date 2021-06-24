import { useContext } from "react"
import UserContext from "./UserContext"

const LoginPage = () => {
    const {setState} = useContext(UserContext)
    const user = {
        id: '#5684564654894798',
        username: '@kstro',
        email: 'walterkstro@gmail.com'
    }
    return (
        <div>
            <h1>Login Page</h1>
            <button 
                className="btn btn-primary"
                onClick={() => setState(user)}
                >Login</button>
        </div>
    )
}
    
export default LoginPage
