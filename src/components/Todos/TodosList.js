import TodosItems from '../Todos/TodosItems'
import PropTypes from 'prop-types';

const TodosList = ({todos, handleToogle, handleDelete}) => {
    return (
        <ol className="list-group list-group-numbered">
            {
                todos.map((todo) =>(
                    <TodosItems
                        todo={todo}
                        handleToogle={handleToogle}
                        handleDelete={handleDelete}
                    />
                ))
            }
        </ol>
    )
}

TodosList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToogle: PropTypes.func.isRequired
}

export default TodosList
