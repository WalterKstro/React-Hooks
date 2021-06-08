import useCounter from "../../hooks/useCounter"
import useFetch from "../../hooks/useFetch"
import Quote from "../quote/Quote"

const LayoutEffect = () => {
    const {counter, increment, decrement} = useCounter(1)
    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    const { data, loading } = state

    const {author, quote} = !loading && data[0]

    return (
        <div className="p-3">
            <h2 className="my-3 text-center">Breaking Bad</h2>
            
            <Quote author={author} quote={quote}/>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="font-weight btn btn-primary me-md-2" type="button" onClick={decrement}>&laquo;</button>
                <button className="font-weight btn btn-primary" type="button" onClick={increment}>&raquo;</button>
            </div>
        </div>
    )
}

export default LayoutEffect
