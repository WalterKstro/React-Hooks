const todoReducer = (state = [], {type, payload}) => {
    
    if(type === 'add'){
        return [...state, payload]
    }
    return state
}



export default todoReducer