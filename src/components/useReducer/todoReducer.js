
const todoReducer = (state=[],{type,payload}) => {
    switch (type) {
        case 'add': {
            return [...state, payload]
        }
        case 'delete': {
            const index = state.findIndex(todo => todo.id === payload)
            const copyState = [...state]
            copyState.splice(index,1)
            return copyState
        }
        case 'toogle': {
            return state.map( todo =>  todo.id === payload ? {...todo, state: !todo.state} : todo )
        }
        default:
            return state
    }
}

export default todoReducer