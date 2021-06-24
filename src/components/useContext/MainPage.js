import { useState } from 'react'
import AppRouter from './AppRouter'
import UserContext from './UserContext'


const MainPage = () => {

    const [state, setState] = useState({})

    
    return (
        <UserContext.Provider value={{
            state, 
            setState
        }}>
            <AppRouter/>
        </UserContext.Provider>
    )
}

export default MainPage
