import { renderHook, act } from '@testing-library/react-hooks'
import useForm from '../../hooks/useForm'

describe('Testing of custom hook useForm',() => {

    let renderedHook = undefined
    const initialState = {
        name : 'Walter Francisco',
        email : 'walterkstro@gmail.com'
    }

    beforeEach(() => {
        renderedHook = renderHook(() => useForm(initialState))
    })
    

    test('should return the initial state', () => {
        const {state,handleChangeInput,handleReset} = renderedHook.result.current
        expect(state).toEqual(initialState)
        expect(typeof handleChangeInput).toBe('function')
        expect(typeof handleReset).toBe('function')
    })

    test('should change the value name of the initial state', () => {
        const dataEvent = {
            target: {
                name: 'name',
                value: 'Juan Perez'
            }
        }
        const {handleChangeInput} = renderedHook.result.current

        act(() => {
            handleChangeInput(dataEvent)
        })

        const {state} = renderedHook.result.current
        expect(state).not.toEqual(initialState)

    })

    test('should reset the initial state', () => {

        const dataEvent = {
            target: {
                name: 'name',
                value: 'Juan Perez'
            }
        }
        const {handleChangeInput,handleReset} = renderedHook.result.current

        act(() => {
            handleChangeInput(dataEvent)
        })

        
        act(() => {
            handleReset()
        })
        
        const {state} = renderedHook.result.current
        
        expect(state).toEqual(initialState)
    })
    
    
    
})