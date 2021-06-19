import PropTypes from 'prop-types';
import useForm from "../../hooks/useForm"

const TodoAdd = ({handleAdd}) => {

    const {state, handleChangeInput, handleReset} = useForm({task: ''})
    const {task} =  state

    const handleSubmit = e => {
        e.preventDefault()
        if(task !== '') {
            const todo = {id: new Date().getTime(), task, state : false}
            handleAdd(todo)
            handleReset()
        }
    } 

    return (
        <form onSubmit={handleSubmit}>
             <input 
                type="text" 
                className="form-control mb-3" 
                placeholder="Quiero aprender ..." 
                name="task"
                value={task}
                onChange={handleChangeInput}/>
         </form>
    )
}

TodoAdd.propTypes = {
    handleAdd: PropTypes.func.isRequired
}

export default TodoAdd
