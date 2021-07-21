import { shallow } from "enzyme"
import TodoAdd from "../../../components/Todos/TodoAdd"

describe('Testing in componente <TodoAdd/>', () => {

    let component
    let handleAdd
    beforeEach(() => {
        handleAdd = jest.fn()
        component = shallow(<TodoAdd handleAdd={handleAdd}/>)
    })

    test('should show correctly the component', () => {
        expect(component).toMatchSnapshot()
    })
    
    test('Not should call the function handleAdd', () => {
        /** Una opción similar a simulate() */
        const handleSubmit = component.find('form').prop('onSubmit')
        handleSubmit({ preventDefault(){} })

        expect(handleAdd).toBeCalledTimes(0)
    })


    test('should call the function handleAdd', () => {
        const value = 'Learning Javascript'
        
        component.find('input').simulate('change', {
            target: {
                name: 'task',
                value
            }
        })

        const handleSubmit = component.find('form').prop('onSubmit')
        handleSubmit({ preventDefault(){} })

        expect(handleAdd).toBeCalledTimes(1)
        expect(handleAdd).toHaveBeenCalledWith({
            task: value,
            state: false,
            id: expect.any(Number)
        })

        expect(component.find('input').prop('value')).toBe('')

        
    })
    
    
    
})


