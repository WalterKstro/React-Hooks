import { renderHook, act } from '@testing-library/react-hooks'
import useCounter from '../../hooks/useCounter'

describe('Testing custom hook useCounter', () => {

    let renderedHook = undefined
    beforeEach(() => {
        renderedHook = renderHook(() => useCounter(10))
    })
    
    test('should return a object with a number, and three functions', () => {
        
        const {counter, increment, decrement, reset} = renderedHook.result.current

        expect(typeof counter).toBe('number')
        expect(typeof increment).toBe('function')
        expect(typeof decrement).toBe('function')
        expect(typeof reset).toBe('function')

    })

    test('should increment one unit the state', () => {
        const {increment} = renderedHook.result.current

        act(() =>increment())

        const {counter} = renderedHook.result.current
        expect(counter).toBe(11)
    })

    test('should decrement one unit the state', () => {
        const {decrement} = renderedHook.result.current
        
        act(() => decrement())
        
        const {counter} = renderedHook.result.current
        expect(counter).toBe(9)
        
    })


    test('should reset the state', () => {
        const {decrement,reset} = renderedHook.result.current
        
        act(() => {
            decrement()
            reset()
        })

        const {counter} = renderedHook.result.current
        expect(counter).toBe(10)

    })
    
    
    
    
})