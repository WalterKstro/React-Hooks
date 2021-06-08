import { useLayoutEffect, useRef, useState } from "react";

const Quote = ({quote, author}) => {
    
    const paragraph = useRef()

    const [state, setState] = useState({})
    useLayoutEffect(() => {
        setState(paragraph.current.getBoundingClientRect())
        
    },[quote])

    return (
        <figure className="text-end">
        <blockquote className="blockquote">
            <span ref={paragraph}>{quote}</span>
        </blockquote>
        <figcaption className="blockquote-footer">
            {author}
        </figcaption>
        <pre>{JSON.stringify(state,null,3)}</pre>
        </figure>
    )
}

export default Quote
