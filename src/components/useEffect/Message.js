import { useState,useEffect } from "react"

const Message = () => {

    const [state, setState] = useState({x:0,y:0})
    const {x,y} = state

    useEffect(() => {
        const eventMouseMove = ({x,y}) => {
            const coords = {x,y}
            setState(coords)
        }

        window.addEventListener('mousemove', eventMouseMove)

        return () => {
            window.removeEventListener('mousemove', eventMouseMove)
        }
    }, [])

    return (
        <>
            <p><strong>Correo no es válido</strong></p>
            <pre>X: {x}</pre>
            <pre>Y: {y}</pre>
        </>
    )
}
 export default Message
