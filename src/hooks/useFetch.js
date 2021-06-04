import { useState, useEffect } from "react"
import fetchAPI from "../helpers/fetchAPI"

const useFetch = (url) => {
    const [state, setState] = useState({data: null,loading: true})

    useEffect(() => {
        setState({data: null,loading: true})
        
        fetchAPI(url).then(data => {
            setState({
                data,
                loading: false
            })
        })

    },[url])


    return state
}

export default useFetch
