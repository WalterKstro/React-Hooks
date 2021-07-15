import { shallow } from "enzyme"
import TodosItems from "../../../components/Todos/TodosItems"
import state from "../useReducer/dataTodos"

describe('Testing component <TodosItems/> in dir Todos', () => {

    let todo
    let handleToogle
    let handleDelete
    let component
    beforeEach(()=> {
        todo = state[0]
        handleToogle = jest.fn()
        handleDelete = jest.fn()
        component = shallow(<TodosItems todo={todo} handleDelete={handleDelete} handleToogle={handleToogle}/>)
    })

    test('should create a snapshots of component <TodosItems/>', () => {
        expect(component).toMatchSnapshot()
    })


    test('should call the function handleDelete', () => {
        component.find('button').simulate('click')
        expect(handleDelete).toHaveBeenCalledWith(todo.id)
    })

    test('should call the function handleToogle', () => {
        component.find('li').simulate('click')
        expect(handleToogle).toHaveBeenCalledWith(todo.id)
    })
    
    test('should show the content of tag <li>', () => {
        const contentTag = component.find('li').text()
        expect(contentTag).toBe(todo.task+'🗑️')
    })
    
    test('should has the clase text-decoration-line-through if the todo.state == true', () => {
        const todo = {id: 56884684698465,task: 'Aprender React',state: true}
        const component = shallow(<TodosItems todo={todo} handleDelete={handleDelete} handleToogle={handleToogle}/>)

        const {className} = component.find('li').props()
        expect(className.includes('text-decoration-line-through')).toBe(true)

    })
    
    
})
