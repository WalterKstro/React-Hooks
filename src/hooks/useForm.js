import { useState } from "react"

const useForm = (initialState = {}) => {

    const [state, setState] = useState(initialState)



    const handleChangeInput = ({target}) => {        
        setState({
            ...state,
            [target.name]: target.value
        })
    }

    return {
        state,
        handleChangeInput
    }
}

export default useForm