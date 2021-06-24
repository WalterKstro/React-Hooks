import { useContext } from "react"
import UserContext from "./UserContext"

const HomePage = () => {
    const {state} = useContext(UserContext)

    return (
        <div>
            <h1>Bienvenido : { state.username }</h1>
        </div>
    )
}

export default HomePage
