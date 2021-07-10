import todoReducer from "../../../components/useReducer/todoReducer"
import state from "./dataTodos"

describe('Testing reducer todoReducer', () => {

    test('should return a array state', () => {
        const stateTodo = todoReducer(state,{})
        expect(stateTodo).toEqual(state)
    })

    
    test('should add a new todo', () => {
        const payload = {
            type:'add',
            payload: {id: 91254684698000,task: 'Aprender Java',state: false}
        }

        const stateTodo = todoReducer(state,payload)

        expect(stateTodo.length).toBe(3)
        expect(stateTodo).toEqual([...state, payload.payload])
    })
    
})
