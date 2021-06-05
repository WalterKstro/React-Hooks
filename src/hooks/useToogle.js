import { useState } from "react"

const useToogle = () => {
    const [state, setState] = useState(true)
    const handleToogle = () => {
        setState( !state )
    }

    return {state, handleToogle}
}

export default useToogle
