import { mount } from "enzyme"
import { act } from "react-dom/test-utils"
import Todo from "../../../components/useReducer/Todo"
import state from "./dataTodos"

describe('Testing component <Todo/>', () => {
    let component
    beforeEach(() => {
        component = mount(<Todo/>)
    })

    Storage.prototype.setItem = jest.fn()

    test('should show correctly the component <Todo/>', () => {
        expect(component).toMatchSnapshot()
    })

    test('should add new TODO', () => {
        const handleAdd = component.find('TodoAdd').prop('handleAdd')
        act(() => {
            handleAdd(state[0])
            handleAdd(state[1])
        })

        const todos = component.find('h2').text()
        
        expect(todos).toBe(`Todos App (${state.length})`)
        expect(localStorage.setItem).toBeCalledTimes(state.length)

    })

    test('should delete one TODO', () => {
        const handleAdd = component.find('TodoAdd').prop('handleAdd')
        const handleDelete = component.find('TodosList').prop('handleDelete')
        act(() => {
            handleAdd(state[0])
            handleAdd(state[1])
            handleDelete(state[0].id)
        })

        const todos = component.find('h2').text()
        
        expect(todos).toBe(`Todos App (1)`)
    })
    
    
    
})
