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


    test('should delete one todo', () => {
        const payload = {
            type:'delete',
            payload: 56884684698465
        }

        const stateTodo = todoReducer(state,payload)

        expect(stateTodo.length).toBe(1)
        expect(stateTodo.indexOf(payload.payload)).toBe(-1)
    })

    test('should change the state of one todo', () => {
        const payload = {
            type:'toogle',
            payload: 91254684698465
        }

        const stateTodo = todoReducer(state,payload)
        const existElement = stateTodo.find(element => element.id === payload.payload)
        
        const {state:stateElement} = existElement
        expect(stateElement).toBe(true)
    })
    
    
    
})
