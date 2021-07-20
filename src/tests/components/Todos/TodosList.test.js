import { shallow } from "enzyme"
import TodosList from "../../../components/Todos/TodosList"
import state from "../useReducer/dataTodos"

describe('Testing the component <TodosList/>', () => {

    let component
    let handleToogle
    let handleDelete
    beforeEach(() => {     
        handleToogle = jest.fn()
        handleDelete = jest.fn()   
        component = shallow(<TodosList todos={state} handleDelete={handleDelete} handleToogle={handleToogle} />)
    })


    test('should show correctly the component <TodosList/>', () => {
        expect(component).toMatchSnapshot()
    })

    test('should have same number of componentes of <TodosItems/>, to the length of the todos', () => {
        const todoItem = component.find('TodosItems').length
        expect(todoItem).toBe(state.length)
    })

    test('should has the props correctly the component <TodosItems/>', () => {
        const {todo, handleDelete, handleToogle} = component.find('TodosItems').at(0).props()
        
        expect(typeof todo).toBe(typeof state[0])
        expect(typeof handleDelete).toBe(typeof handleDelete)
        expect(typeof handleToogle).toBe(typeof handleToogle)
    })
    
    
    
})
