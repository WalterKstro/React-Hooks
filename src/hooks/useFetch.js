import { useState, useEffect, useRef } from "react"
import fetchAPI from "../helpers/fetchAPI"

const useFetch = (url) => {
    const [state, setState] = useState({data: null,loading: true})
    const isMounted = useRef(true)

    useEffect(() => {
        return ()=> {
            isMounted.current = false
        }
    },[])
    
    useEffect(() => {
    
        fetchAPI(url).then(data => {
            if(isMounted.current) {
                setState({
                    data,
                    loading: false
                })            
            }
        })

    },[url])


    return state
}

export default useFetch
